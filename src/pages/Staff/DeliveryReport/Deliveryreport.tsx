import * as Styled from "./DelveryReport.styled";
import { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import StatusSection from "./Section";

interface DataType {
  key: React.Key;
  orderID: string;
  date: Date;
  cusName: string;
  deliName: string;
  product: string;
  statuses: string[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.orderID - b.orderID,
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.date - b.date,
  },
  {
    title: " Delivery Staff",
    dataIndex: "deliName",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Agoda", value: "Agoda" },
      { text: "Abatoka", value: "Abatoka" },
      { text: "Esulami", value: "Esulami" },
      { text: "Mamono", value: "Mamono" },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.deliName.indexOf(value as string) === 0,
    sorter: (a, b) => a.deliName.length - b.deliName.length,
    sortDirections: ["descend"],
  },
  {
    title: " Recipient",
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
    title: " Product",
    dataIndex: "product",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Diamind Ring", value: "Diamind Ring" },
      { text: "Diamond Necklaces", value: "Diamond Necklaces" },
      { text: "Diamond Round", value: "Diamond Round" },
      { text: "Diamond Earrings", value: "Diamond Earrings" },
      { text: "Diamond Bracelets", value: "Diamond Bracelets" },
      { text: "Diamond Chokers", value: "Diamond Chokers" },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.product.indexOf(value as string) === 0,
    sorter: (a, b) => a.product.length - b.product.length,
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
          if (status === "On Hold") {
            color = "volcano";
          }
          //  else if (status === "Confirmed") {
          //   color = "yellow";
          // }
           else if (status === "Delivering") {
            color = "geekblue";
          } else if (status === "Completed") {
            color = "green";
          } 
          // else if (status === "Cancelled") {
          //   color = "grey";
          // }
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
    render: (_) => (
      <Space size="middle">
        <Button className="confirmBtn">Contact DS</Button>
      </Space>
    ),
  },
  // {
  //   title: "Detail",
  //   key: "detail",
  //   className: "TextAlign",
  //   render: (_) => (
  //     <Space size="middle">
  //       <EyeOutlined />
  //     </Space>
  //   ),
  // },
];

const data = [
  {
    key: "1",
    orderID: "12345124",
    date: "6 Jan 2023",
    cusName: "Joe Black",
    deliName: "Abatoka",
    product: "Diamond Chokers",
    statuses: ["Delivering"],
  },
  {
    key: "2",
    orderID: "12345122",
    date: "2 Jan 2023",
    cusName: "Jim Green",
    deliName: "Abatoka",
    product: "Diamond Chokers",
    statuses: ["Completed"],
  },
  {
    key: "3",
    orderID: "12345121",
    date: "3 Jan 2023",
    cusName: "Joe Black",
    deliName: "Abatoka",
    product: "Diamond Chokers",
    statuses: ["Completed"],
  },
  {
    key: "4",
    orderID: "12345123",
    date: "4 Jan 2023",
    cusName: "Jim Red",
    deliName: "Abatoka",
    product: "Diamond Chokers",
    statuses: ["Pending"],
  },
  {
    key: "5",
    orderID: "12345121",
    date: "2 Jan 2023",
    cusName: "Esther Eden",
    deliName: "Esulami",
    product: "Diamond Chokers",
    statuses: ["On Hold"],
  },
  {
    key: "6",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliName: "Esulami",
    product: "Diamond Chokers",
    statuses: ["On Hold"],
  },
  {
    key: "7",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliName: "Mamono",
    product: "Diamond Necklaces",
    statuses: ["Delivering"],
  },
  {
    key: "8",
    orderID: "12345127",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliName: "Abatoka",
    product: "Diamond Round",
    statuses: ["Completed"],
  },
  {
    key: "9",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliName: "Mamono",
    product: "Diamond Earrings",
    statuses: ["Completed"],
  },
  {
    key: "10",
    orderID: "12345125",
    date: "6 Jan 2023",
    cusName: "Ajmal Abdul Rahiman",
    deliName: "Agoda",
    product: "Diamond Bracelets",
    statuses: ["On Hold"],
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

const DeliveryReport = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = (value) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
      <Styled.OrderAdminArea>
        <Sidebar />
        

        <Styled.AdminPage>
        <Styled.TitlePage>
                                <h1>Delivery Report</h1>
                                <p>View and manage Delivery</p>
                            </Styled.TitlePage>
          {/* <DeliveryMenu/> */}
          
          <StatusSection/>
        
          <Styled.OrderContent>
            <Styled.OrderContent_Head>
              <Styled.SearchArea>
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  size="large"
                  placeholder="Search here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
            </Styled.OrderContent_Head>

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

export default DeliveryReport;
