import * as Styled from "./FeedbackSale.styled";
import { useState } from "react";
import { Table, Tag } from "antd";
import { StarFilled } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ClientCaringMenu from "@/components/Staff/SalesStaff/ClientCaringMenu/ClientCaringMenu";

interface DataType {
  key: React.Key;
  no: number;
  date: Date;
  cusName: string;
  productName: string;
  rate: number;
  to: string[];
  statuses: string[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: "No",
    dataIndex: "no",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.no - b.no,
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.date.getTime() - b.date.getTime(),
    render: (date: Date) => date.toLocaleDateString(),
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
    onFilter: (value, record) => record.cusName.indexOf(value as string) === 0,
    sorter: (a, b) => a.cusName.length - b.cusName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
      { text: "Esther", value: "Esther" },
      { text: "Ajmal", value: "Ajmal" },
    ],
    onFilter: (value, record) => record.cusName.indexOf(value as string) === 0,
  },
  {
    title: "Rate",
    dataIndex: "rate",
    sorter: (a, b) => a.rate - b.rate,
    render: (rate: number) => (
      <span>
        {Array.from({ length: rate }, (_, index) => (
          <StarFilled key={index} />
        ))}
      </span>
    ),
  },
  {
    title: "Status",
    dataIndex: "statuses",
    render: (statuses: string[]) => (
      <span>
        {statuses.map((status, index) => {
          let color = "green";
          if (status === "Confirm") {
            color = "orange";
          } else if (status === "Completed") {
            color = "green";
          }
          return (
            <Tag color={color} key={index}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "To",
    dataIndex: "to",
    render: (to: string[]) => (
      <span className="to-column">
        {to.map((link, index) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="view-link"
          >
            View
          </a>
        ))}
      </span>
    ),
  },
];

const data = [
  {
    key: 1,
    no: 1,
    date: new Date("2023-06-01"),
    cusName: "John Doe",
    productName: "Product A",
    rate: 4.5,
    to: ["https://example.com/"],
    statuses: ["Confirm"],
  },
  {
    key: 2,
    no: 2,
    date: new Date("2023-06-02"),
    cusName: "Jane Smith",
    productName: "Product B",
    rate: 3.8,
    to: ["https://example.com"],
    statuses: ["Confirm"],
  },
  {
    key: 3,
    no: 3,
    date: new Date("2023-06-03"),
    cusName: "Michael Johnson",
    productName: "Product C",
    rate: 5.0,
    to: ["https://example.com"],
    statuses: ["Confirm"],
  },
  {
    key: 4,
    no: 4,
    date: new Date("2023-06-04"),
    cusName: "Emily Davis",
    productName: "Product D",
    rate: 2.5,
    to: ["https://example.com"],
    statuses: ["Confirm"],
  },
  {
    key: 5,
    no: 5,
    date: new Date("2023-06-05"),
    cusName: "David Wilson",
    productName: "Product E",
    rate: 4.0,
    to: ["https://example.com"],
    statuses: ["Confirm"],
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

const FeedbackSale = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = (value: any) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.FeedbackArea>
        <Sidebar />

        <Styled.SaleStaffPage>
          <ClientCaringMenu />

          <Styled.FeedbackContent>
            <Styled.FeedbackContent_Head>
              <Styled.SearchArea>
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  size={12}
                  placeholder="Search here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
            </Styled.FeedbackContent_Head>

            <Styled.Confirm_Table>
              <Table
                className="table"
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 6 }}
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.Confirm_Table>
          </Styled.FeedbackContent>
        </Styled.SaleStaffPage>
      </Styled.FeedbackArea>
    </>
  );
};

export default FeedbackSale;
