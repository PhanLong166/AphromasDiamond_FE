import * as Styled from "./JewelryType.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
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
// import { jewTypeData, JewTypeDataType } from "../ProductData"; // Import data here
import { deleteJewelryType, showAllJewelryType } from "@/services/jewelryTypeAPI";

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

const JewelryType = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  // const [data, setData] = useState<JewTypeDataType[]>(jewTypeData);
  const [isAdding, setIsAdding] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [types, setTypes] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key>("");

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
      const response = await showAllJewelryType();
      console.log("API response:", response);
      const { data } = response.data;
      const formattedTypes = data.map((type: any) => ({
        jewelryTypeID: type.JewelryTypeID,
        jewelryTypeName: type.Name,
      }));
      console.log("Formatted Types:", formattedTypes); // Log formatted diamonds
      setTypes(formattedTypes);
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

  const isEditing = (record: any) => record.key === editingKey;
  const edit = (record: Partial<any> & { key: React.Key }) => {
    form.setFieldsValue({
      jewelryTypeID: "",
      jewelryTypeName: "",
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
      const newData = [...types];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setTypes(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setTypes(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  // const handleDelete = (key: React.Key) => {
  //   const newData = types.filter((item) => item.key !== key);
  //   setTypes(newData);
  // };

  const columns = [
    {
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      editable: true,
      sorter: (a: any, b: any) =>
        a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      editable: true,
      sorter: (a: any, b: any) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign",
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
        types.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => deleteJewelryType(record.jewelryTypeID)}
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
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  mergedColumns;

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

  // const onChangeAdd = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   console.log(e);
  // };

  return (
    <>
      {contextHolder}

      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
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
                      Add New Jewelry Type
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Jewelry Type</p>
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
                    <Form.Item label="Jewelry Type ID"  name="Jewelry Type ID" rules={[{ required: true }]}>
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
                    dataSource={types}
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
      </Styled.ProductAdminArea>
    </>
  );
};

export default JewelryType;
