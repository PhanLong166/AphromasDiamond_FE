import * as Styled from "./Pending.styled";
import { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../../components/Admin/OrderMenu/OrderMenu";
import { Link } from "react-router-dom";
import { showAllOrder } from "@/services/orderAPI";


const Pending = () => {
  const [searchText, setSearchText] = useState("");
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    try {
      const response = await showAllOrder();
      console.log('API response:', response);
      const { data } = response.data;
      const formattedOrders = data
      .filter((order: any) => (order.IsActive && order.OrderStatus === "Pending"))
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
      console.log('Formatted Orders:', formattedOrders); // Log formatted diamonds
      setOrders(formattedOrders);
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
        color = "grey";
      }
      return (
        <Tag color={color} key={orderStatus}>
          {orderStatus.toUpperCase()}
        </Tag>
      );
    },
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, { orderID }) => (
  //     <Space size="middle">
  //       <Link to={`/admin/order/detail/${orderID}`}>
  //       <Button className="confirmBtn">Accept</Button>
  //       </Link>
  //     </Space>
  //   ),
  // },
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
      <Styled.GlobalStyle />
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

export default Pending;
