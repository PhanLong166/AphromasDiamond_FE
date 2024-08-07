import * as Styled from "./Customer.styled";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Form, Input, InputNumber, notification, Popconfirm, Table } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import { customerData, CustomerDataType } from "./CustomerData";
import { showAllAccounts, updateAccount } from "@/services/authAPI";


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

const Customer = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [customers, setCustomers] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();

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
      const filteredCustomers = data.filter((customer: any) => customer.Role === "ROLE_CUSTOMER");

      const formattedCustomers = filteredCustomers.map((customer: any) => ({
        key: customer.AccountID,
        accountID: customer.AccountID,
        customerName: customer.Name,
        phoneNumber: customer.PhoneNumber,
        email: customer.Email,
        role: customer.Role,
        customerID: customer.CustomerID
      }));
      setCustomers(formattedCustomers);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleBan = async (email: string) => {
    try {
      const response = await updateAccount(email, {
        Role: "ROLE_BAN",
      });
      console.log("Ban Response:", response.data);
      if (response.status === 200) {
        openNotification("success", "Ban", "Staff has been banned successfully.");
        fetchData();
      } else {
        openNotification("error", "Ban", "Failed to ban staff.");
      }
    } catch (error: any) {
      console.error("Failed to ban staff:", error);
      openNotification("error", "Ban", error.message);
    }
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Customer ID",
      dataIndex: "customerID",
      // editable: true,
      sorter: (a, b) =>
        parseInt(a.customerID) - parseInt(b.customerID),
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      defaultSortOrder: "descend",
      // editable: true,
      sorter: (a, b) =>
        a.customerName.length - b.customerName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      // editable: true,
      sorter: (a, b) => a.email.length - b.email.length,
    },
    // {
    //   title: "Detail",
    //   key: "detail",
    //   className: "TextAlign",
    //   render: (_, { customerID }) => (
    //     <Space size="middle">
    //       <Link to={`/admin/customer/detail/${customerID}`}>
    //         <EyeOutlined />
    //       </Link>
    //     </Space>
    //   ),
    // },
    {
      title: "Ban",
      dataIndex: "ban",
      className: "TextAlign",
      render: (_: unknown, record: any) =>
        customers.length >= 1 ? (
          <Popconfirm
            title="Sure to ban?"
            onConfirm={() => handleBan(record.email)}
          >
            <a>Ban</a>
          </Popconfirm>
        ) : null,
    },
  ];


  // SEARCH 
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
      {contextHolder}
      <Styled.GlobalStyle />
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Customer Management</h1>
            <p>View and manage Customer</p>
          </Styled.TitlePage>

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={customers}
                  columns={columns}
                  rowClassName="editable-row"
                  pagination={{
                    pageSize: 6,
                  }}
                />
              </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.AdminArea>
    </>
  );
};
export default Customer;
