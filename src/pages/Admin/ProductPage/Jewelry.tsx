import * as Styled from "../ProductPage/Jewelry.styled";
import { useState } from "react";
import { Space, Table, Select } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

interface DataType {
  key: React.Key;
  jewelryID: string;
  jewelryImg: string;
  jewelryName: string;
  price: number;
  type: string;
  quantity: number;
  exchangeRate: number;
  currencyType: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Jewelry ID",
    dataIndex: "jewelryID",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.jewelryID - b.jewelryID,
  },
  {
    title: "Image",
    key: "jewelryImg",
    className: "TextAlign",
    render: (_, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        <img
          src={record.jewelryImg}
          alt={record.jewelryName}
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    ),
  },
  {
    title: "Jewelry Name",
    dataIndex: "jewelryName",
    showSorterTooltip: { target: "full-header" },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.jewelryName.indexOf(value as string) === 0,
    sorter: (a, b) => a.jewelryName.length - b.jewelryName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price (VND)",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Exchange Rate",
    dataIndex: "exchangeRate",
    key: "exchangeRate",
    render: (_, record) => `${record.exchangeRate} VND/${record.currencyType}`,
  },
  {
    title: "Price in USD/Won",
    key: "convertedPrice",
    render: (_, record) => {
      const convertedPrice =
        record.currencyType === "USD"
          ? (record.price / record.exchangeRate).toFixed(2)
          : (record.price / record.exchangeRate).toFixed(0);
      return `${convertedPrice} ${record.currencyType}`;
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [
      { text: "Ring", value: "Ring" },
      { text: "Necklace", value: "Necklace" },
      { text: "Earring", value: "Earring" },
      { text: "Bracelet", value: "Bracelet" },
      { text: "Anklet", value: "Anklet" },
      { text: "Bangle", value: "Bangle" },
      { text: "Choker", value: "Choker" },
      { text: "Pendant", value: "Pendant" },
    ],
    onFilter: (value, record) => record.type.indexOf(value as string) === 0,
    sortDirections: ["descend"],
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.quantity - b.quantity,
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
    jewelryID: "12345121",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 2500000,
    type: "Necklace",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "2",
    jewelryID: "12345122",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 5.08,
    type: "Earring",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "3",
    jewelryID: "12345123",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 7.08,
    type: "Necklace",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "4",
    jewelryID: "12345124",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 6.08,
    type: "Bracelet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "5",
    jewelryID: "12345125",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 3.08,
    type: "Bracelet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "6",
    jewelryID: "12345126",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 9.08,
    type: "Anklet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "7",
    jewelryID: "12345127",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 2.04,
    type: "Bangle",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "8",
    jewelryID: "12345128",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 7.03,
    type: "Choker",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "9",
    jewelryID: "12345129",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 5.07,
    type: "Bangle",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "10",
    jewelryID: "12345130",
    jewelryImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 4.2,
    type: "Choker",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
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

const Jewelry = () => {
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const shelltype = (
    <Space wrap>
      <Select
        defaultValue="ring"
        className="custom-select"
        style={{ width: 120, background: "#FFF7E8", color: "#102C57" }}
        onChange={handleChange}
        options={[
          { value: "ring", label: "Ring" },
          { value: "necklace", label: "Necklace" },
          { value: "earring", label: "Earring" },
          { value: "bracelet", label: "Bracelet" },
          { value: "anklet", label: "Anklet" },
          { value: "bangle", label: "Bangle" },
          { value: "choker", label: "Choker" },
          { value: "pendant", label: "Pendant" },
        ]}
      />
    </Space>
  );

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
                  Add New Product
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

export default Jewelry;
