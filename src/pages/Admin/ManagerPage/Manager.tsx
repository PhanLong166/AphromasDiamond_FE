import * as Styled from "./Manager.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined, SaveOutlined } from "@ant-design/icons";
import type { FormInstance } from "antd";
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Space, notification } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { SortOrder } from "antd/es/table/interface";
import { deleteAccount, register, showAllAccounts, updateAccount } from "@/services/authAPI";
import { ItemType } from "antd/es/menu/interface";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof any;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
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


const Manager = () => {
  const [form] = Form.useForm();
  const [managers, setManagers] = useState<any[]>([]);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const [isAdding, setIsAdding] = useState(false);
  const isEditing = (record: any) => record.key === editingKey;
  const [api, contextHolder] = notification.useNotification();
  const [searchText, setSearchText] = useState("");

  
  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} manager successfully` : error,
    });
  };

  const fetchData = async () => {
    try {
      const response = await showAllAccounts();
      const { data } = response.data;
      const filteredManagers = data.filter((customer: any) => customer.Role === "ROLE_MANAGER");

      const formattedManagers = filteredManagers.map((manager: any) => ({
        key: manager.AccountID,
        managerID: manager.AccountID,
        managerName: manager.Name,
        phoneNumber: manager.PhoneNumber,
        email: manager.Email,
        password: manager.Password,
        role: manager.Role,
      }));
      setManagers(formattedManagers);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // EDIT
  const edit = (record: Partial<ItemType> & { key: React.Key }) => {
    form.setFieldsValue({
      managerName: "",
      email: "",
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
      const newData = [...managers];
      const index = newData.findIndex((item) => key === item.key);
      
      if (index > -1) {
        const item = newData[index];
        const updatedItem = {
          Name: row.managerName,
          Email: row.email,
        };
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setManagers(newData);
        await updateAccount(item.managerID, updatedItem);
        openNotification("success", "Update", "");
      } else {
        newData.push(row);
        setManagers(newData);
        openNotification("error", "Update", "Failed to update type");
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = async (managerID: number) => {
    try {
      await deleteAccount(managerID);
      openNotification("success", "Delete", "");
      fetchData();
    } catch (error: any) {
      console.error("Failed to delete material:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const columns = [
    {
      title: "Manager ID",
      dataIndex: "managerID",
      sorter: (a: any, b: any) =>
        parseInt(a.managerID) - parseInt(b.managerID),
    },
    {
      title: "Manager Name",
      dataIndex: "managerName",
      defaultSortOrder: "descend" as SortOrder,
      editable: true,
      sorter: (a: any, b: any) => a.managerName.length - b.managerName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,
      // sorter: (a: any, b: any) => a.email.length - b.email.length,
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
        managers.length >= 1 ? (
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
        inputType: col.dataIndex === "phoneNumber" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });


// SEARCH
  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };


  // MOVE ADD NEW

  const handleAddNew = () => {
    setIsAdding(true);
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
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [values]);

  const addManager = async () => {
    try {
      const managerValues = await form.validateFields();
      const newManager = {
        ...managerValues,
        PhoneNumber: "",
        CustomerID: null
      };

      const { data } = await register(newManager);
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
      onClick={addManager}
    >
      {children}
    </Button>
  );
};

  return (
    <>
          {contextHolder}

    <Styled.GlobalStyle/>
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Manager Management</h1>
            <p>View and manage Manager</p>
          </Styled.TitlePage>

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
                    Add New Manager
                  </button>
              </Styled.AddButton>
              </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Manager</p>
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
                      <Form.Item name="Name" label="Manager Name" rules={[{ required: true }]}>
                        <Input placeholder="trang.staff" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                    <Form.Item
                      name="Email"
                      label="E-mail"
                      rules={[
                        {
                          type: "string",
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                    <Form.Item
                      name="Password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Password!',
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    </Styled.FormItem>
                  

                  <Styled.ActionBtn>
                    <Form.Item>
                      <Space>
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
                  dataSource={managers}
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
export default Manager;
