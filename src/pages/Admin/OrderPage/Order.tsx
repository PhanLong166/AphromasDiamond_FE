import * as Styled from "./Order.styled";
import { useState } from "react";
import { Button, Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
// import { Col, Row } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { data, DataType } from "./OrderData";

import { Link } from "react-router-dom";



const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.orderID.localeCompare(b.orderID),
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => a.date.localeCompare(b.date),
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
      if (status === "Pending") {
        color = "volcano";
      } else if (status === "Confirmed") {
        color = "yellow";
      } else if (status === "Delivering") {
        color = "geekblue";
      } else if (status === "Completed") {
        color = "green";
      } else if (status === "Cancelled") {
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
      { text: "Confirmed", value: "Confirmed" },
      { text: "Delivering", value: "Delivering" },
      { text: "Completed", value: "Completed" },
      { text: "Cancelled", value: "Cancelled" },
    ],
    onFilter: (value, record) => record.status.indexOf(value as string) === 0,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button className="confirmBtn">Confirm</Button>
      </Space>
    ),
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
                dataSource={data}
                pagination={{ pageSize: 6 }} // Add pagination here
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
