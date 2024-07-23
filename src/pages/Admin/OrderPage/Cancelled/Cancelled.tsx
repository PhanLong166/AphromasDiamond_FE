import * as Styled from "./Cancelled.styled";
import { useEffect, useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../../components/Admin/OrderMenu/OrderMenu";
import { orderData, OrderDataType } from "../OrderData";
import { Link } from "react-router-dom";
import { showAllOrder } from "@/services/orderAPI";
import { showAllAccounts } from "@/services/accountApi";


const CancelledOrder = () => {
  const [searchText, setSearchText] = useState("");
  const [orders, setOrders] = useState([]);
  const [accounts, setAccounts] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await showAllOrder();
      const responseAccounts = await showAllAccounts();

      const { data } = response.data;
      const { data: accountData } = responseAccounts.data;

      const formattedOrders = data
      .filter((order: any) => (order.IsActive && order.OrderStatus === "Cancelled"))
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
        accountDeliveryID: order.AccountDeliveryID,
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
  },
  {
    title: "Customer",
    dataIndex: "customerID",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.customerID.length - b.customerID.length,
    sortDirections: ["descend"],
    render: (_, record) => {
      const customerAccount = accounts.find(account => account.customerID === record.customerID);
      return customerAccount ? customerAccount.accountName : null;
    },
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
        color = "red";
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
        color = "default";
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

const onChange: TableProps<OrderDataType>["onChange"] = (
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

            <Styled.Pending_Table>
              <Table
                className="table"
                columns={columns}
                dataSource={orders}
                pagination={{ pageSize: 6 }} // Add pagination here
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.Pending_Table>
          </Styled.OrderContent>
        </Styled.AdminPage>
      </Styled.OrderAdminArea>
    </>
  );
};

export default CancelledOrder;
