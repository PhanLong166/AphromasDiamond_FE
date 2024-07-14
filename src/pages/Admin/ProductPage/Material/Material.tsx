import * as Styled from "./Material.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined, SaveOutlined } from "@ant-design/icons";
import type { FormInstance, TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
  notification,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
// import { materialData, MaterialDataType } from "../ProductData"; // Import data here
import { deleteMaterial, showAllMaterial } from "@/services/materialAPI";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof any;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
  // children: React.ReactNode;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  // record,
  // index,
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


const Material = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [materials, setMaterials] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: any) => record.key === editingKey;


  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} diamond successfully` : error,
    });
  };


  const fetchData = async () => {
    try {
      const response = await showAllMaterial();
      console.log("API response:", response);
      const { data } = response.data;
      const formattedTypes = data.map((material: any) => ({
        materialJewelryID: material.MaterialJewelryID,
        materialName: material.Name,
        sellPrice: material.SellPrice,
        updateTime: material.UpdateTime,
      }));
      console.log("Formatted Types:", formattedTypes); 
      setMaterials(formattedTypes);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
// SUBMIT FORM
interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  openNotification("success", "Add", "");
  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

  // EDIT
  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({
      materialJewelryID: "",
      materialName: "",
      sellPrice: 0,
      updateTime: "",
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
      const newData = [...materials];
      const index = newData.findIndex((item) => key === item.key);

      // row.sellingPrice = calculateSellingPrice(row.buyingPrice);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setMaterials(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setMaterials(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  // const handleDelete = (key: React.Key) => {
  //   const newData = materials.filter((item) => item.key !== key);
  //   setMaterials(newData);
  // };

  const columns = [
    {
      title: "Material ID",
      dataIndex: "materialJewelryID",
      editable: true,
      sorter: (a: any, b: any) => a.materialJewelryID.localeCompare(b.materialJewelryID),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      editable: true,
      sorter: (a: any, b: any) =>
        a.materialName.length - b.materialName.length,
    },
    {
      title: "Selling Price per Gram",
      dataIndex: "sellPrice",
      editable: true,
      sorter: (a: any, b: any) => a.sellPrice - b.sellPrice,
    },
    {
      title: "Update Time",
      dataIndex: "updateTime",
      editable: true,
      sorter: (a: any, b: any) => a.updateTime - b.updateTime,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign SmallSize",
      render: (_: unknown, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.materialJewelryID)}
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
        materials.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => deleteMaterial(record.materialJewelryID)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.dataIndex === "buyingPrice" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });


  // SEARCH AREA
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // Add New
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  // const handleSave = () => {
  //   setIsAdding(false);
  // };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
      {contextHolder}
      <Styled.GlobalStyle />
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

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
                      Add New Material
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Material</p>
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
                    onFinish={() => console.log("Form submitted")}
                  >
                    {/* <Styled.FormItem>
                    <Form.Item label="Jewelry Type ID" name="Jewelry Type ID"
                        rules={[{ required: true }]}>
                      <Input className="formItem" placeholder="D1234" />
                    </Form.Item>
                  </Styled.FormItem> */}
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Type Name"
                        name="Jewelry Type Name"
                        rules={[
                          {
                            required: true,
                            message: "Diamond Name is required.",
                          },
                          {
                            type: "string",
                            message: "Only alphabet is allowed.",
                          },
                          {
                            max: 100,
                            message:
                              "Diamond Name must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input className="formItem" placeholder="Filled" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Selling Price per Gram"
                        name="1/6 sales"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="4,080" />
                      </Form.Item>
                    </Styled.FormItem>
                  </Form>
                  <Styled.ActionBtn>
                    <SubmitButton form={form}>
                      <SaveOutlined />
                      Save
                    </SubmitButton>
                    <Button
                      onClick={handleCancel}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Styled.ActionBtn>
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
                    dataSource={materials}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                      onChange: cancel,
                      pageSize: 6,
                    }}
                  />
                </Form>
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.AdminArea>
    </>
  );
};

export default Material;
