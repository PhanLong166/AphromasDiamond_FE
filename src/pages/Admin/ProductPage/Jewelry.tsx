import * as Styled from "../ProductPage/Jewelry.styled";
import { useState } from "react";
import { Space, Table, Select, Input } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

interface DataType {
  key: React.Key;
  jewelryID: string;
  jewelryImg: string;
  jewelryName: string;
  price: number;
  markupPercentage: number;
  type: string;
  quantity: number;
  exchangeRate: number;
  currencyType: string;
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

onChange;

const Jewelry = () => {
  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");

  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleCurrencyChange = (value: "VND" | "USD") => {
    setCurrency(value);
  };

  const convertPrice = (
    price: number,
    exchangeRate: number,
    currency: "VND" | "USD"
  ) => {
    if (currency === "VND") {
      return price * exchangeRate;
    }
    return price;
  };

  const sellingPrice = (price: number, markupPercentage: number) => {
    return price * (1 + markupPercentage / 100);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Jewelry ID",
      dataIndex: "jewelryID",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.jewelryID.localeCompare(b.jewelryID),
    },
    {
      title: "Image",
      key: "jewelryImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href='#' target="_blank" rel="noopener noreferrer">
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
      onFilter: (value, record) =>
        record.jewelryName.indexOf(value as string) === 0,
      sorter: (a, b) => a.jewelryName.length - b.jewelryName.length,
      sortDirections: ["descend"],
    },
    {
      title: `Cost Price (${currency})`,
      key: "price",
      sorter: (a, b) =>
        convertPrice(a.price, a.exchangeRate, currency) -
        convertPrice(b.price, b.exchangeRate, currency),
      render: (_, record) => {
        const convertedPrice = convertPrice(
          record.price,
          record.exchangeRate,
          currency
        );
        return `${convertedPrice.toFixed(2)} ${currency}`;
      },
    },
    {
      title: "Markup Percentage",
      dataIndex: "markupPercentage",
      key: "markupPercentage",
      render: (_, record) => `${record.markupPercentage}%`,
    },
    {
      title: `Selling Price (${currency})`,
      key: "sellingPrice",
      render: (_, record) => {
        const convertedPrice = convertPrice(
          record.price,
          record.exchangeRate,
          currency
        );
        const price = sellingPrice(convertedPrice, record.markupPercentage);
        return `${price.toFixed(2)} ${currency}`;
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
      render: () => (
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
      price: 5.08,
      markupPercentage: 100,
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
      markupPercentage: 100,
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
      markupPercentage: 100,
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
      markupPercentage: 150,
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
      markupPercentage: 100,
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
      markupPercentage: 150,
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
      markupPercentage: 100,
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
      markupPercentage: 100,
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
      markupPercentage: 100,
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
      markupPercentage: 150,
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

  shelltype;

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
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

              <Select
                defaultValue="USD"
                style={{ width: 120 }}
                onChange={handleCurrencyChange}
                options={[
                  { value: "USD", label: "USD" },
                  { value: "VND", label: "VND" },
                ]}
              />

              <Styled.AddButton>
                <Link to="">
                  <button>
                    <PlusCircleOutlined />
                    Add New Diamond
                  </button>
                </Link>
              </Styled.AddButton>
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
