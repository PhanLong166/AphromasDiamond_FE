import * as Styled from "./Material.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { FormInstance } from "antd";
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
import {
  createMaterial,
  deleteMaterial,
  showAllMaterial,
  updateMaterial,
} from "@/services/materialAPI";
import { TableProps } from "antd/lib";

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
        type === "success" ? `${method} material successfully` : error,
    });
  };

  const fetchData = async () => {
    try {
      const response = await showAllMaterial();
      const { data } = response.data;
      const formattedTypes = data.map((material: any) => ({
        key: material.MaterialJewelryID,
        materialJewelryID: material.MaterialJewelryID,
        materialName: material.Name,
        sellPrice: material.SellPrice,
        updateTime: material.UpdateTime,
      }));
      setMaterials(formattedTypes);
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
      materialName: "",
      sellPrice: 0,
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

      if (index > -1) {
        const item = newData[index];
        const updatedItem = {
          Name: row.materialName,
          SellPrice: row.sellPrice,
          UpdateTime: new Date().toISOString(),
        };
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setMaterials(newData);
        await updateMaterial(item.materialJewelryID, updatedItem);
        openNotification("success", "Update", "");
      } else {
        newData.push(row);
        setMaterials(newData);
        openNotification("error", "Update", "Failed to update type");
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = async (materialJewelryID: number) => {
    try {
      await deleteMaterial(materialJewelryID);
      openNotification("success", "Delete", "");
      fetchData();
    } catch (error: any) {
      console.error("Failed to delete material:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const columns = [
    {
      title: "Material ID",
      dataIndex: "materialJewelryID",
      sorter: (a: any, b: any) => parseInt(a.materialJewelryID) - parseInt(b.materialJewelryID),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      editable: true,
      sorter: (a: any, b: any) => a.materialName.length - b.materialName.length,
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
      render: (_: any, { updateTime }: any) => {
        return <>{updateTime.replace("T", " ").replace(".000Z", " ")}</>
      },
      sorter: (a: any, b: any) => new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime(),
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
        materials.length >= 1 ? (
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
        inputType: col.dataIndex === "sellPrice" ? "number" : "text",
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

    const addMaterial = async () => {
      try {
        const materialValues = await form.validateFields();
        const newMaterial = {
          ...materialValues,
          UpdateTime: new Date(),
          BuyPrice: 0,
        };

        const { data } = await createMaterial(newMaterial);
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
        onClick={addMaterial}
      >
        {children}
      </Button>
    );
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
                  // onFinish={() => console.log("Form submitted")}
                  >
                    <Styled.FormItem>
                      <Form.Item
                        label="Material Name"
                        name="Name"
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
                        <Input
                          className="formItem"
                          placeholder="Enter Material Name"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Selling Price per Gram"
                        name="SellPrice"
                        rules={[
                          { required: true },
                          {
                            type: "number",
                            message: "Only number is allowed.",
                          },
                        ]}
                      >
                        <InputNumber className="formItem" placeholder="4,080" />
                      </Form.Item>
                    </Styled.FormItem>


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
                    dataSource={materials}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                      pageSize: 6,
                    }}
                    onChange={onChangeTable}
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
