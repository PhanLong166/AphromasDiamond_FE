import * as Styled from "./Cancelled.styled";
import { useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../../components/Admin/OrderMenu/OrderMenu";
import { data, DataType } from "../OrderData";
import { Link } from "react-router-dom";



const filteredData = data.filter((item) => item.status === "Cancelled");

const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => parseInt(a.orderID) - parseInt(b.orderID),
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a: DataType, b: DataType) => new Date(a.date).getTime() - new Date(b.date).getTime(), 
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
      } else if (status === "Accepted") {
        color = "yellow";
      } else if (status === "Assigned") {
        color = "orange";
      } else if (status === "Delivering") {
        color = "blue";
      } else if (status === "Delivered") {
        color = "purple";
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

const CancelledOrder = () => {
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
                dataSource={filteredData}
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
