import * as Styled from "./Delivered.styled";
import { useEffect, useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import OrderMenu from "@/components/Admin/OrderMenu/OrderMenu";
import { showAllOrder } from "@/services/orderAPI";
import { showAllAccounts } from "@/services/accountApi";

const DeliveredOrder = () => {
  const [searchText, setSearchText] = useState("");
  const [orders, setOrders] = useState([]);
  const [accounts, setAccounts] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await showAllOrder();
      const responseAccounts = await showAllAccounts();

      console.log('API response:', response);
      const { data: accountData } = responseAccounts.data;

      const { data } = response.data;
      const formattedOrders = data
      .filter((order: any) => (order.IsActive && order.OrderStatus === "Delivered"))
      .map((order: any) => ({
        orderID: order.OrderID,
        orderDate: order.OrderDate,
        customerID: order.CustomerID,
        orderStatus: order.OrderStatus,
        completeDate: order.CompleteDate,
        isPayed: order.IsPayed,
        shippingfee: order.Shippingfee,
        note: order.Note,
        isActive: order.IsActive,
        accountDeliveryID: responseAccounts.data.data.find((account: any) => account.AccountID === order.AccountDeliveryID).Name,
        accountSaleID: order.AccountSaleID,
        voucherID: order.VoucherID,
      }));

      const formattedAccounts = accountData
      .map((account: any) => ({
        accountID: account.AccountID,
        accountName: account.Name,
        customerID_Acc: account.CustomerID
      }));

      console.log('Formatted Orders:', formattedOrders); // Log formatted diamonds
      setOrders(formattedOrders);
      setAccounts(formattedAccounts);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  
const columns: TableColumnsType<any> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a, b) => parseInt(a.orderID) - parseInt(b.orderID),
  },
  {
    title: "Date",
    dataIndex: "orderDate",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.orderDate.localeCompare(b.orderDate),
    render: (_, { orderDate }) => {
      return <>{orderDate.replace("T", " ").replace(".000Z", " ")}</>
    }, 
  },
  {
    title: "Customer",
    dataIndex: "customerID",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.customerID.length - b.customerID.length,
    sortDirections: ["descend"],
    render: (_, record) => {
      const customerAccount = accounts.find((account: any) => account.customerID_Acc === record.customerID);
      return customerAccount ? customerAccount.accountName : null;
    },
  },
  {
    title: "Delivery Staff",
    dataIndex: "accountDeliveryID",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.accountDeliveryID.length - b.accountDeliveryID.length,
    sortDirections: ["descend"],
  },
  // {
  //   title: "Total",
  //   dataIndex: "total",
  //   defaultSortOrder: "descend",
  //   sorter: (a, b) => a.total - b.total,
  // },
  {
    title: "Status",
    key: "orderStatus",
    dataIndex: "orderStatus",
    render: (_, { orderStatus }) => {
      let color = "green";
      if (orderStatus === "Pending") {
        color = "volcano";
      } else if (orderStatus === "Accepted") {
        color = "yellow";
      } else if (orderStatus === "Assigned") {
        color = "orange";
      } else if (orderStatus === "Delivering") {
        color = "blue";
      } else if (orderStatus === "Delivered") {
        color = "purple";
      } else if (orderStatus === "Completed") {
        color = "green";
      } else if (orderStatus === "Cancelled") {
        color = "grey";
      }
      return (
        <Tag color={color} key={orderStatus}>
          {orderStatus.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Detail",
    key: "detail",
    className: "TextAlign",
    render: (_, { orderID }) => (
      <Space size="middle">
        <Link to={`/admin/order/detail/${orderID}`}>
          <EyeOutlined />
        </Link>
      </Space>
    ),
  },
];

const onChange: TableProps<any>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


  return (
    <>
    <Styled.GlobalStyle/>
      <Styled.OrderAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <OrderMenu />

          <Styled.OrderContent>
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
              <Table
                className="table"
                columns={columns}
                dataSource={orders}
                pagination={{ pageSize: 6 }} 
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.AdminTable>
          </Styled.OrderContent>
        </Styled.AdminPage>
      </Styled.OrderAdminArea>
    </>
  );
};

export default DeliveredOrder;
