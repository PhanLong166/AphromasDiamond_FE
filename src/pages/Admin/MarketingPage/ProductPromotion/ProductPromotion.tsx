import * as Styled from "./ProductPromotion.styled";
import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type {
  TableProps,
  FormInstance,
  DatePickerProps,
} from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Button,
  Space,
  DatePicker,
  Popconfirm,
  Typography,
  notification,
  Select,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import MarketingMenu from "@/components/Admin/MarketingMenu/MarketingMenu";
import { showAllDiscount, createDiscount, updateDiscount, deleteDiscount } from "@/services/discountAPI";
import { showAllProduct } from "@/services/productAPI";
import { showAllDiamond } from "@/services/diamondAPI";
// import { setSelectedDiamond } from "@/layouts/MainLayout/slice/customRingSlice";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof any;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex.toString()}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


// DATE PICK
const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};


// MULTI JEWELRY PICK
// const handleChange = (value: string[]) => {
//   console.log(`selected ${value}`);
// };


const ProductPromotion = () => {
  const [form] = Form.useForm();
  const [isAdding, setIsAdding] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [discounts, setDiscounts] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: any) => record.key === editingKey;
  const [products, setProducts] = useState<any[]>([]);
  const [productUpdate, setProductUpdate] = useState<any[]>([]);
  const [diamondUpdate, setDiamondUpdate] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedDiamonds, setSelectedDiamonds] = useState([]);


  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} promotion successfully` : error,
    });
  };

  const fetchData = async () => {
    try {
      const response = await showAllDiscount();
      const responseProduct = await showAllProduct();
      const responseDiamond = await showAllDiamond();

      const { data } = response.data;
      const { data: productData } = responseProduct.data;
      const { data: diamondData } = responseDiamond.data;

      const formattedDiscounts = data.map((discount: any) => ({
        key: discount.DiscountID,
        discountID: discount.DiscountID,
        discountName: discount.Name,
        percentDiscounts: discount.PercentDiscounts,
        startDate: discount.StartDate,
        endDate: discount.EndDate,
        description: discount.Description,
      }));

      const formattedProducts = productData
        .filter((product: any) => (product.DiscountID !== null))
        .map((product: any) => ({
          productName: product.Name,
          discountID: product.DiscountID,
        }));

      setDiscounts(formattedDiscounts);
      setProducts(formattedProducts);
      setProductUpdate(productData);
      setDiamondUpdate(diamondData);
      console.log("Product data: ", productData)
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeProduct = (value: any) => {
    setSelectedProducts(value);
  }
  const handleChangeDiamond = (value: any) => {
    setSelectedDiamonds(value);
  }
  // useEffect(()=>{
  //   const fetchData = async ()=> {
  //     try{
  //       const dataProduct = 
  //     }
  //     catch(error){
  //       console.log(error)
  //     }
  //   }
  // },[]);

  // EDIT
  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({
      discountName: "",
      percentDiscounts: 0,
      startDate: "",
      endDate: "",
      description: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as any;
      const newData = [...discounts];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        const updatedItem = {
          Name: row.discountName,
          PercentDiscounts: row.percentDiscounts,
          StartDate: row.startDate,
          EndDate: row.endDate,
          Description: row.description,
          // UpdateTime: new Date().toISOString(),
        };
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDiscounts(newData);
        await updateDiscount(item.discountID, updatedItem);
        openNotification("success", "Update", "");
      } else {
        newData.push(row);
        setDiscounts(newData);
        openNotification("error", "Update", "Failed to update type");
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = async (discountID: number) => {
    try {
      await deleteDiscount(discountID);
      openNotification("success", "Delete", "");
      fetchData();
    } catch (error: any) {
      console.error("Failed to delete promotion:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const columns = [
    {
      title: "Promotion ID",
      dataIndex: "discountID",
      sorter: (a: any, b: any) =>
        parseInt(a.discountID) - parseInt(b.discountID),
    },
    {
      title: "Promotion Name",
      dataIndex: "discountName",
      editable: true,
      sorter: (a: any, b: any) =>
        a.discountName.length - b.discountName.length,
    },
    {
      title: "% discount",
      dataIndex: "percentDiscounts",
      editable: true,
      sorter: (a: any, b: any) =>
        a.percentDiscounts - b.percentDiscounts,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      // editable: true,
      onChange: { onChangeDate },
      render: (_: any, { startDate }: any) => {
        return <>{startDate.replace("T", " ").replace(".000Z", " ")}</>
      },
      sorter: (a: any, b: any) =>
        a.startDate.length - b.startDate.length,
      
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      // editable: true,
      onChange: { onChangeDate },
      render: (_: any, { endDate }: any) => {
        return <>{endDate.replace("T", " ").replace(".000Z", " ")}</>
      },
      sorter: (a: any, b: any) =>
        a.endDate.length - b.endDate.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "discountID",
      render: (_: any, record: any) => {
        const count = products.filter(product => product.discountID === record.discountID).length;
        return count;
      },
      sorter: (a: any, b: any) => a.count.length - b.count.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
      width: "15%",
    },
    // {
    //   title: "Detail",
    //   key: "detail",
    //   className: "TextAlign",
    //   render: (_: unknown, { promotionID }) => (
    //     <Space size="middle">
    //       <Link to={`/admin/marketing/discount/detail/${promotionID}`}>
    //         <EyeOutlined />
    //       </Link>
    //     </Space>
    //   ),
    // },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign SmallSize",
      render: (_: unknown, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      className: "TextAlign",
      render: (_: unknown, record: any) =>
        discounts.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.dataIndex === "percentDiscounts" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const onChangeTable: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };


  // SEARCH AREA

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };


  // MOVE ADD NEW
  const handleAddNew = () => {
    setIsAdding(true);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsAdding(false);
  };


  // SUBMIT FORM
  interface SubmitButtonProps {
    form: FormInstance;
  }

  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
  }) => {
    // const [submittable, setSubmittable] = React.useState<boolean>(false);
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [values]);

    const addDiscount = async () => {
      try {
        const discountValues = await form.validateFields();
        const newDiscount = {
          ...discountValues,
        };

        const { data } = await createDiscount(newDiscount);
        if (data.statusCode !== 200) throw new Error(data.message);
        fetchData();
        setIsAdding(false);
        openNotification("success", "Add", "");
      } catch (error: any) {
        openNotification("error", "", error.message);
      }
    };

    return (
      <Button
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        onClick={addDiscount}
      >
        {children}
      </Button>
    );
  };


  return (
    <>
      {contextHolder}

      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <MarketingMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {(!isAdding && (
                <>
                  <Styled.SearchArea>
                    <Input
                      className="searchInput"
                      type="text"
                      // size="large"
                      placeholder="Search here..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      prefix={<SearchOutlined className="searchIcon" />}
                    />
                  </Styled.SearchArea>
                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Product Promotion
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                  <>
                    <Styled.AddContent_Title>
                      <p>Add Collection</p>
                    </Styled.AddContent_Title>
                  </>
                )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                  <Form
                    form={form}
                    layout="vertical"
                    className="AdPageContent_Content"
                  // autoComplete="off"
                  >
                    <Styled.FormItem>
                      <Form.Item
                        label="Promotion Name"
                        name="Name"
                        rules={[
                          {
                            required: true,
                            message: "Promotion Name is required.",
                          },
                          {
                            type: "string",
                            message: "Only alphabet is allowed.",
                          },
                          {
                            max: 100,
                            message:
                              "Promotion Name must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input className="formItem" placeholder="Rose" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="% discount"
                        name="PercentDiscounts"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="15" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Start Date"
                        name="StartDate"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          onChange={onChangeDate}
                          className="formItem"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="End Date"
                        name="EndDate"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          onChange={onChangeDate}
                          className="formItem"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea className="formItem" />
                      </Form.Item>

                      <Styled.FormItem>
                        <Form.Item
                          label="Product in Promotion"
                          name="Products"
                          rules={[{ required: false }]}
                        >
                          <Select
                            className="formItem"
                            mode="multiple"
                            allowClear
                            placeholder="Select Product"
                            options={productUpdate.map((product) => ({
                              value: product.ProductID,
                              label:
                                product.ProductID + ": " + product.Name,
                            }))}
                            // Ensure the value is bound to state
                            onChange={handleChangeProduct}
                            value={selectedProducts}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Diamond in Promotion"
                          name="Diamonds"
                          rules={[{ required: false }]}
                        >
                          <Select
                            className="formItem"
                            mode="multiple"
                            allowClear
                            placeholder="Select Diamond"
                            options={diamondUpdate.map((diamond) => ({
                              value: diamond.DiamondID,
                              label:
                                diamond.DiamondID + ": " + diamond.Name,
                            }))}
                            // Ensure the value is bound to state
                            onChange={handleChangeDiamond}
                            value={selectedDiamonds}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                    </Styled.FormDescript>
                    <Styled.ActionBtn>
                      <Form.Item>
                        <Space>
                          <SubmitButton form={form}>
                            <SaveOutlined />
                            Save
                          </SubmitButton>
                          <Button
                            onClick={handleCancel}
                            className="CancelBtn"
                            style={{ marginLeft: "10px" }}
                          >
                            Cancel
                          </Button>
                        </Space>
                      </Form.Item>
                    </Styled.ActionBtn>
                  </Form>
                </>
              ) : (
                <Form form={form} component={false}>
                  <Table
                    components={{
                      body: {
                        cell: EditableCell,
                      },
                    }}
                    bordered
                    dataSource={discounts}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }}
                    onChange={onChangeTable}
                  />
                </Form>
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default ProductPromotion;
