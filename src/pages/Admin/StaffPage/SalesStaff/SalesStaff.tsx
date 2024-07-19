import React, { useEffect, useState } from "react";
import * as Styled from "./SalesStaff.styled";
import {
  SearchOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { TableProps, FormInstance } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
  Space,
  Radio,
  notification,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";
import { SortOrder } from "antd/es/table/interface";
import {
  deleteAccount,
  register,
  showAllAccounts,
  updateAccount,
} from "@/services/authAPI";

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

const SalesStaff = () => {
  const [form] = Form.useForm();
  const [staffs, setStaffs] = useState<any[]>([]);
  const [editingName, setEditingName] = useState<string>("");
  const [isAdding, setIsAdding] = useState(false);
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
      const filteredManagers = data.filter(
        (customer: any) => customer.Role === "ROLE_SALE_STAFF"
      );

      const formattedStaffs = filteredManagers.map((manager: any) => ({
        key: manager.AccountID,
        staffID: manager.AccountID,
        staffName: manager.Name,
        phoneNumber: manager.PhoneNumber,
        email: manager.Email,
        password: manager.Password,
        role: manager.Role,
      }));
      setStaffs(formattedStaffs);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // EDIT
  const isEditing = (record: any) => record.staffName === editingName;

  const edit = (record: Partial<any> & { staffName: string }) => {
    form.setFieldsValue({
      staffName: "",
      email: "",
      ...record,
    });
    setEditingName(record.staffName);
  };

  const cancel = () => {
    setEditingName("");
  };

  const save = async (staffName: string) => {
    try {
      const row = (await form.validateFields()) as any;
      const newData = [...staffs];
      const index = newData.findIndex(
        (item) => staffName === item.staffName
      );

      if (index > -1) {
        const item = newData[index];
        const updatedItem = {
          Name: row.staffName,
          Email: row.email,
          PhoneNumber: item.phoneNumber,
          CustomerID: item.CustomerID,
          Role: item.role,
        };
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setStaffs(newData);
        await updateAccount(item.staffName, updatedItem);
        openNotification("success", "Update", "");
      } else {
        newData.push(row);
        setStaffs(newData);
        openNotification("error", "Update", "Failed to update manager");
      }
      setEditingName("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = async (staffID: number) => {
    try {
      await deleteAccount(staffID);
      openNotification("success", "Delete", "");
      fetchData();
    } catch (error) {
      console.error("Failed to delete material:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const columns = [
    {
      title: "Staff ID",
      dataIndex: "staffID",
      editable: true,
      sorter: (a: any, b: any) => parseInt(a.staffID) - parseInt(b.staffID),
    },
    {
      title: "Staff Name",
      dataIndex: "staffName",
      defaultSortOrder: "descend" as SortOrder,
      editable: true,
      sorter: (a: any, b: any) => a.staffName.length - b.staffName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,
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
            disabled={editingName !== ""}
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
        staffs.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
    {
      title: "Ban",
      dataIndex: "ban",
      className: "TextAlign",
      render: (_: unknown, record: any) =>
        staffs.length >= 1 ? (
          <Popconfirm
            title="Sure to ban?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Ban</a>
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
    }, [form, values]);

    const addManager = async () => {
      try {
        const managerValues = await form.validateFields();
        const newManager = {
          ...managerValues,
          PhoneNumber: "",
          CustomerID: null,
          Role: "ROLE_SALE_STAFF",
        };

        const { data } = await register(newManager);
        if (data.statusCode !== 200) throw new Error(data.message);
        fetchData();
        setIsAdding(false);
        openNotification("success", "Add", "");
      } catch (error) {
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
      <Styled.GlobalStyle />
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <StaffMenu />

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
                      Add New Staff
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Staff</p>
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
                    {/* <Styled.FormItem>
                      <Form.Item name="radio-group" label="Staff Type">
                        <Radio.Group>
                          <Radio value="sales">Sales Staff</Radio>
                          <Radio value="delivery">Delivery Staff</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Styled.FormItem> */}
                    <Styled.FormItem>
                      <Form.Item
                        name="Name"
                        label="Staff Name"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="trang.staff" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        name="Email"
                        label="E-mail"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Password"
                        name="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
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
                    dataSource={staffs}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                      // onChange: cancel,
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

export default SalesStaff;
