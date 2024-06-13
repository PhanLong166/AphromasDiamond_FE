import * as Styled from "./Completed.styled";
import { useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";

interface DataType {
  key: React.Key;
  orderID: string;
  date: string;
  cusName: string;
  deliveryStaff: string;
  statuses: string[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a, b) => parseInt(a.orderID) - parseInt(b.orderID),
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(), 
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
    sorter: (a, b) => a.cusName.length - b.cusName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Delivery Staff",
    dataIndex: "deliveryStaff",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
      { text: "Esther", value: "Esther" },
      { text: "Ajmal", value: "Ajmal" },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.deliveryStaff.indexOf(value as string) === 0,
    sorter: (a, b) => a.deliveryStaff.length - b.deliveryStaff.length,
    sortDirections: ["descend"],
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
    title: "Invoice",
    key: "invoice",
    className: "TextAlign",
    render: () => (
      <Space size="middle" >
        <EyeOutlined />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    orderID: "12345124",
    date: "6 Jan 2023",
    cusName: "Joe Black",
    deliveryStaff: "Ajmal Abdul Rahiman",
    statuses: ["Completed"],
  },
  {
    key: "2",
    orderID: "12345122",
    date: "2 Jan 2023",
    cusName: "Jim Green",
    deliveryStaff: "Joe Black",
    statuses: ["Completed"],
  },
  {
    key: "3",
    orderID: "12345121",
    date: "3 Jan 2023",
    cusName: "Joe Black",
    deliveryStaff: "Esther Eden",
    statuses: ["Completed"],
  },
  {
    key: "4",
    orderID: "12345123",
    date: "4 Jan 2023",
    cusName: "Jim Red",
    deliveryStaff: "Esther Eden",
    statuses: ["Completed"],
  },
  {
    key: "5",
    orderID: "12345121",
    date: "2 Jan 2023",
    cusName: "Esther Eden",
    deliveryStaff: "Ajmal Abdul Rahiman",
    statuses: ["Completed"],
  },
  {
    key: "6",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliveryStaff: "Jim Red",
    statuses: ["Completed"],
  },
  {
    key: "7",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Jim Red",
    deliveryStaff: "Joe Black",
    statuses: ["Completed"],
  },
  {
    key: "8",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliveryStaff: "Joe Black",
    statuses: ["Completed"],
  },
  {
    key: "9",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Joe Black",
    deliveryStaff: "Jim Red",
    statuses: ["Completed"],
  },
  {
    key: "10",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Jim Green",
    deliveryStaff: "Esther Eden",
    statuses: ["Completed"],
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

const CompletedOrder = () => {
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
                dataSource={data}
                pagination={{ pageSize: 7 }} // Add pagination here
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

export default CompletedOrder;
