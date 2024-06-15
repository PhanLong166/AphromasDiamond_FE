import * as Styled from "./Order.styled";
import { useState } from "react";
import { Button, Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
// import { Col, Row } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";

interface DataType {
  key: React.Key;
  orderID: string;
  date: string;
  cusName: string;
  deliveryStaff: string;
  total: number;
  statuses: string[];
}

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
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
      { text: "Esther", value: "Esther" },
      { text: "Ajmal", value: "Ajmal" },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.cusName.indexOf(value as string) === 0,
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
    key: "statuses",
    dataIndex: "statuses",
    render: (_, { statuses }) => (
      <>
        {statuses.map((status) => {
          let color = status.length > 9 ? "geekblue" : "green";
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
        })}
      </>
    ),
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
    render: () => (
      <Space size="middle">
        <EyeOutlined />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    orderID: "12345124",
    date: "2023-01-06",
    cusName: "Joe Black",
    deliveryStaff: "",
    total: 701,
    statuses: ["Pending"],
  },
  {
    key: "2",
    orderID: "12345122",
    date: "2023-01-02",
    cusName: "Jim Green",
    deliveryStaff: "",
    total: 890,
    statuses: ["Pending"],
  },
  {
    key: "3",
    orderID: "12345121",
    date: "2023-01-03",
    cusName: "Joe Black",
    deliveryStaff: "",
    total: 560,
    statuses: ["Pending"],
  },
  {
    key: "4",
    orderID: "12345123",
    date: "2023-01-04",
    cusName: "Jim Red",
    deliveryStaff: "",
    total: 700,
    statuses: ["Confirmed"],
  },
  {
    key: "5",
    orderID: "12345121",
    date: "2023-01-02",
    cusName: "Esther Eden",
    deliveryStaff: "",
    total: 430,
    statuses: ["Confirmed"],
  },
  {
    key: "6",
    orderID: "12345125",
    date: "2023-01-06",
    cusName: "Ajmal Abdul Rahiman",
    deliveryStaff: "Jim Red",
    total: 502,
    statuses: ["Delivering"],
  },
  {
    key: "7",
    orderID: "12345127",
    date: "2023-01-07",
    cusName: "Jim Red",
    deliveryStaff: "Joe Black",
    total: 502,
    statuses: ["Delivering"],
  },
  {
    key: "8",
    orderID: "12345127",
    date: "2023-01-06",
    cusName: "Ajmal Abdul Rahiman",
    deliveryStaff: "Joe Black",
    total: 502,
    statuses: ["Completed"],
  },
  {
    key: "9",
    orderID: "12345125",
    date: "2023-01-06",
    cusName: "Joe Black",
    deliveryStaff: "Jim Red",
    total: 502,
    statuses: ["Completed"],
  },
  {
    key: "10",
    orderID: "12345125",
    date: "2023-01-07",
    cusName: "Ajmal Abdul Rahiman",
    deliveryStaff: "",
    total: 502,
    statuses: ["Cancelled"],
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
    // Thực hiện logic tìm kiếm ở đây
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
