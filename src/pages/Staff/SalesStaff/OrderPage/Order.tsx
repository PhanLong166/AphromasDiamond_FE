import * as Styled from "./Order.styled";
import { useEffect, useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import OrderMenu from "@/components/Staff/SalesStaff/OrderMenu/OrderMenu";
import { DataType } from "./OrderData";
import { Link } from "react-router-dom";
import { OrderStatus } from "@/utils/enum";
import { showAllOrder } from "@/services/orderAPI";
// import { Col, Row } from "antd";




const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => {
      if (typeof a.orderID === 'string' && typeof b.orderID === 'string') {
        return a.orderID.localeCompare(b.orderID);
      } else if (typeof a.orderID === 'number' && typeof b.orderID === 'number') {
        return a.orderID - b.orderID;
      } else {
        return 0;
      }
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.date.localeCompare(b.date),
    render: (_, { date }) => {
      return <>{date.replace("T", " ").replace(".000Z", " ")}</>
    }
  },
  {
    title: "Customer",
    dataIndex: "cusName",
    showSorterTooltip: { target: "full-header" },
    sorter: (a: DataType, b: DataType) => a.cusName.length - b.cusName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Total",
    dataIndex: "total",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.total - b.total,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => {
      let color = "green";
      if (status === OrderStatus.PENDING) {
        color = "volcano";
      } else if (status === OrderStatus.ACCEPTED) {
        color = "yellow";
      } else if (status === OrderStatus.ASSIGNED) {
        color = "orange";
      } else if (status === OrderStatus.DELIVERING) {
        color = "blue";
      } else if (status === OrderStatus.DELIVERED) {
        color = "purple";
      } else if (status === OrderStatus.COMPLETED) {
        color = "green";
      } else if (status === OrderStatus.CANCELLED) {
        color = "grey";
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
    filters: [
      { text: "Pending", value: "Pending" },
      { text: "Accepted", value: "Accepted" },
      { text: "Assigned", value: "Assigned" },
      { text: "Delivering", value: "Delivering" },
      { text: "Delivered", value: "Delivered" },
      { text: "Completed", value: "Completed" },
      { text: "Cancelled", value: "Cancelled" },
    ],
    onFilter: (value, record) => record.status.indexOf(value as string) === 0,
  },
  {
    title: "Detail",
    key: "detail",
    className: "TextAlign",
    render: (_, { orderID }) => (
      <Space size="middle">
        <Link to={`/sales-staff/order/detail/${orderID}`}>
          <EyeOutlined />
        </Link>
      </Space>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Order = () => {
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState<any[]>([]);

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Get order list
      const orderList = await showAllOrder();
      const formatOrderList = orderList.data.data
        .map((order: any) => ({
          orderID: order.OrderID,
          date: order.OrderDate,
          cusName: order.NameReceived,
          total: order.Price,
          status: order.OrderStatus,
        }))
      setOrder(formatOrderList);
    };

    fetchData();
  }, []);

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
                dataSource={order}
                // pagination={{ pageSize: 6 }} // Add pagination here
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

export default Order;
