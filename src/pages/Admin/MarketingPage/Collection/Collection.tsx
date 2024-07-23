import * as Styled from "./Collection.styled";
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
  notification,
  Typography,
  Popconfirm,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import MarketingMenu from "@/components/Admin/MarketingMenu/MarketingMenu";
import { createCollection, deleteCollection, showAllCollection, updateCollection } from "@/services/collectionAPI";
import { showAllProduct } from "@/services/productAPI";

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

const Collection = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [collections, setCollections] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: any) => record.key === editingKey;
  const [products, setProducts] = useState<any[]>([]);

  
  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} collection successfully` : error,
    });
  };

  const fetchData = async () => {
    try {
      const response = await showAllCollection();
      const responseProduct = await showAllProduct();

      const { data } = response.data;
      const { data: productData } = responseProduct.data;

      const formattedCollections = data.map((collection: any) => ({
        key: collection.CollectionID,
        collectionID: collection.CollectionID,
          collectionName: collection.CollectionName,
          description: collection.Description,
          debutTime: collection.DebutTime,
      }));

      const formattedProducts = productData
      .filter((product: any) => (product.CollectionID !== null))
      .map((product: any) => ({
        productName: product.Name,
      }));

      setCollections(formattedCollections);
      setProducts(formattedProducts);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // EDIT
  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({
      collectionName: "",
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
      const newData = [...collections];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        const updatedItem = {
          CollectionName: row.collectionName,
          Description: row.description,
          DebutTime: row.debutTime,
          // UpdateTime: new Date().toISOString(),
        };
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setCollections(newData);
        await updateCollection(item.collectionID, updatedItem);
        openNotification("success", "Update", "");
      } else {
        newData.push(row);
        setCollections(newData);
        openNotification("error", "Update", "Failed to update type");
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = async (collectionID: number) => {
    try {
      await deleteCollection(collectionID);
      openNotification("success", "Delete", "");
      fetchData();
    } catch (error: any) {
      console.error("Failed to delete collection:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const columns = [
    {
      title: "Collection ID",
      dataIndex: "collectionID",
      sorter: (a: any, b: any) =>
        parseInt(a.collectionID) - parseInt(b.collectionID),
    },
    {
      title: "Collection Name",
      dataIndex: "collectionName",
      editable: true,
      sorter: (a: any, b: any) =>
        a.collectionName.length - b.collectionName.length,
    },
    {
      title: "Debut Date",
      dataIndex: "debutDate",
      editable: true,
      onChange:{onChangeDate},
      sorter: (a: any, b: any) =>
        a.debutDate.length - b.debutDate.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "collectionID",
      render: (_: any, record: any) => {
        let count = 0;
        products.forEach((collection) => {
          if (collection.collectionID === record.collectionID) {
            count++;
          }
        });
        return count;
      },
      sorter: (a: any, b: any) => a.count.length - b.count.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
    },
    // {
    //   title: "Detail",
    //   key: "detail",
    //   className: "TextAlign",
    //   render: (_: unknown, { collectionID }) => (
    //     <Space size="middle">
    //       <Link to={`/admin/marketing/collection/detail/${collectionID}`}>
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
      dataIndex: "collectionID",
      className: "TextAlign",
      render: (record: any) =>
        collections.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.collectionID)}
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
        inputType: col.dataIndex === "text",
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

    const addCollection = async () => {
      try {
        const collectionValues = await form.validateFields();
        const newCollection = {
          ...collectionValues,
        };

        const { data } = await createCollection(newCollection);
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
        onClick={addCollection}
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
                      Add New Collection
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
                  >
                    <Styled.FormItem>
                      <Form.Item
                        label="Collection Name"
                        name="CollectionName"
                        rules={[
                          {
                            required: true,
                            message: "Collection Name is required.",
                          },
                          {
                            type: "string",
                            message: "Only alphabet is allowed.",
                          },
                          {
                            max: 100,
                            message:
                              "Collection Name must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input className="formItem" placeholder="15" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Debut Date"
                        name="DebutTime"
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
                        rules={[
                          {
                            required: true,
                            message: "Description is required.",
                          },
                          {
                            type: "string",
                            message: "Only alphabet is allowed.",
                          },
                          {
                            max: 500,
                            message:
                              "Description must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input.TextArea
                          placeholder="Description"
                          className="formItem"
                          allowClear
                        />
                      </Form.Item>
                    </Styled.FormDescript>
                    {/* <Styled.FormItem>
                      <Form.Item
                        label="Product in Collection"
                        name="Product in Collection"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          mode="multiple"
                          allowClear
                          placeholder="Select Product"
                          options={productData.map((product) => ({
                            value: product.jewelryID,
                            label:
                              product.jewelryID + ": " + product.jewelryName,
                          }))}
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Styled.FormItem> */}
                  

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
                    dataSource={mergedColumns}
                    columns={columns}
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

export default Collection;
