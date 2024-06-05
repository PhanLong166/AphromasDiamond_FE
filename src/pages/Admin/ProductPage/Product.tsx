import * as Styled from "../ProductPage/Product.styled";
import { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import { Link } from "react-router-dom";

interface DataType {
  key: React.Key;
  diamondID: string;
  diamondImg: string;
  diamondName: string;
  price: number;
  color: string;
  shape: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Diamond ID",
    dataIndex: "diamondID",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.diamondID - b.diamondID,
  },
  {
    title: "Image",
    key: "diamondImg",
    className: "TextAlign",
    render: (_, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        <img
          src={record.diamondImg}
          alt={record.diamondName}
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    ),
  },
  {
    title: "Diamond Name",
    dataIndex: "diamondName",
    showSorterTooltip: { target: "full-header" },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.diamondName.indexOf(value as string) === 0,
    sorter: (a, b) => a.diamondName.length - b.diamondName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    filters: [
      { text: "K", value: "K" },
      { text: "J", value: "J" },
      { text: "I", value: "I" },
      { text: "H", value: "H" },
      { text: "G", value: "G" },
      { text: "F", value: "F" },
      { text: "E", value: "E" },
      { text: "D", value: "D" },
    ],
    onFilter: (value, record) => record.color.indexOf(value as string) === 0,
    sortDirections: ["descend"],
  },
  {
    title: "Shape",
    dataIndex: "shape",
    key: "shape",
    filters: [
      { text: "Round", value: "Round" },
      { text: "Princess", value: "Princess" },
      { text: "Cushion", value: "Cushion" },
      { text: "Oval", value: "Oval" },
      { text: "Emerald", value: "Emerald" },
      { text: "Pear", value: "Pear" },
      { text: "Asscher", value: "Asscher" },
      { text: "Heart", value: "Heart" },
      { text: "Radiant", value: "Radiant" },
      { text: "Marquise", value: "Marquise" },
    ],
    onFilter: (value, record) => record.shape.indexOf(value as string) === 0,
    sorter: (a, b) => a.shape.length - b.shape.length,
    sortDirections: ["descend"],
  },
  {
    title: "Detail",
    key: "detail",
    className: "TextAlign",
    render: (_) => (
      <Space size="middle">
        <EyeOutlined />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    diamondID: "12345121",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.08,
    color: "H",
    shape: "Marquise",
  },
  {
    key: "2",
    diamondID: "12345122",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.08,
    color: "G",
    shape: "Princess",
  },
  {
    key: "3",
    diamondID: "12345123",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.08,
    color: "H",
    shape: "Asscher",
  },
  {
    key: "4",
    diamondID: "12345124",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 6.08,
    color: "J",
    shape: "Radiant",
  },
  {
    key: "5",
    diamondID: "12345125",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 3.08,
    color: "I",
    shape: "Oval",
  },
  {
    key: "6",
    diamondID: "12345126",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 9.08,
    color: "I",
    shape: "Princess",
  },
  {
    key: "7",
    diamondID: "12345127",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 2.04,
    color: "G",
    shape: "Heart",
  },
  {
    key: "8",
    diamondID: "12345128",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.03,
    color: "K",
    shape: "Emerald",
  },
  {
    key: "9",
    diamondID: "12345129",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.07,
    color: "J",
    shape: "Cushion",
  },
  {
    key: "10",
    diamondID: "12345130",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.2,
    color: "I",
    shape: "Marquise",
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

const Product = () => {
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
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
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
              <Link to="">
                <button>
                  <PlusCircleOutlined />
                  Add New Diamond
                </button>
              </Link>
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
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Product;
