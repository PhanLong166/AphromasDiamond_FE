import * as Styled from "./Cancelled.styled";
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
  total: number;
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
    title: "Total",
    dataIndex: "total",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.total - b.total,
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
    date: "6 Jan 2023",
    cusName: "Joe Black",
    total: 701,
    statuses: ["Cancelled"],
  },
  {
    key: "2",
    orderID: "12345122",
    date: "2 Jan 2023",
    cusName: "Jim Green",
    total: 890,
    statuses: ["Cancelled"],
  },
  {
    key: "3",
    orderID: "12345121",
    date: "3 Jan 2023",
    cusName: "Joe Black",
    total: 560,
    statuses: ["Cancelled"],
  },
  {
    key: "4",
    orderID: "12345123",
    date: "4 Jan 2023",
    cusName: "Jim Red",
    total: 700,
    statuses: ["Cancelled"],
  },
  {
    key: "5",
    orderID: "12345121",
    date: "2 Jan 2023",
    cusName: "Esther Eden",
    total: 430,
    statuses: ["Cancelled"],
  },
  {
    key: "6",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    total: 502,
    statuses: ["Cancelled"],
  },
  {
    key: "7",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    total: 502,
    statuses: ["Cancelled"],
  },
  {
    key: "8",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    total: 502,
    statuses: ["Cancelled"],
  },
  {
    key: "9",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    total: 502,
    statuses: ["Cancelled"],
  },
  {
    key: "10",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
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

const CancelledOrder = () => {
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

            <Styled.Pending_Table>
              <Table
                className="table"
                columns={columns}
                dataSource={data}
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
