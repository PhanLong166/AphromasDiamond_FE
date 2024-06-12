import * as Styled from "./Diamond.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Input, Form, Button, InputNumber, Select } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

interface DataType {
  key: React.Key;
  diamondID: string;
  diamondImg: string;
  diamondName: string;
  price: number;
  markupPercentage: number;
  color: string;
  shape: string;
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

const Diamond = () => {
  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [isAdding, setIsAdding] = useState(false);

  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // -------------------------
  // Change Currency
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
      title: "Diamond ID",
      dataIndex: "diamondID",
      defaultSortOrder: "descend",
      sorter: (a, b) => parseInt(a.diamondID) - parseInt(b.diamondID),
    },
    {
      title: "Image",
      key: "diamondImg",
      className: "TextAlign",
      render: (_, record: DataType) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
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
      onFilter: (value, record) =>
        record.diamondName.indexOf(value as string) === 0,
      sorter: (a, b) => a.diamondName.length - b.diamondName.length,
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
      diamondID: "12345121",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.08,
      markupPercentage: 100,
      color: "H",
      shape: "Marquise",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "2",
      diamondID: "12345122",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.08,
      markupPercentage: 100,
      color: "G",
      shape: "Princess",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "3",
      diamondID: "12345123",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.08,
      markupPercentage: 100,
      color: "H",
      shape: "Asscher",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "4",
      diamondID: "12345124",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 6.08,
      markupPercentage: 100,
      color: "J",
      shape: "Radiant",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "5",
      diamondID: "12345125",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 3.08,
      markupPercentage: 100,
      color: "I",
      shape: "Oval",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "6",
      diamondID: "12345126",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 9.08,
      markupPercentage: 100,
      color: "I",
      shape: "Princess",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "7",
      diamondID: "12345127",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 2.04,
      markupPercentage: 100,
      color: "G",
      shape: "Heart",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "8",
      diamondID: "12345128",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.03,
      markupPercentage: 100,
      color: "K",
      shape: "Emerald",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "9",
      diamondID: "12345129",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.07,
      markupPercentage: 100,
      color: "J",
      shape: "Cushion",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "10",
      diamondID: "12345130",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.2,
      markupPercentage: 100,
      color: "I",
      shape: "Marquise",
      exchangeRate: 23000,
      currencyType: "USD",
    },
  ];
  // --------------------------

  // Add New
  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {!isAdding && (
                <>
                  <Styled.AdPageContent_HeadLeft>
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
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
                  </Styled.AdPageContent_HeadLeft>

                  <Styled.AddButton>
                    <Link to="">
                      <button onClick={handleAddNew}>
                        <PlusCircleOutlined />
                        Add New Diamond
                      </button>
                    </Link>
                  </Styled.AddButton>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <Form layout="vertical">
                  <Form.Item label="Jewelry ID">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Jewelry Name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Price">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Markup Percentage">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Quantity">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Exchange Rate">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Currency Type">
                    <Select
                      defaultValue="USD"
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Type">
                    <Select
                      defaultValue="ring"
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
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" onClick={handleSave}>
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
              ) : (
                <Table
                  className="table"
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 6 }} // Add pagination here
                  onChange={onChange}
                  showSorterTooltip={{ target: "sorter-icon" }}
                />
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Diamond;
