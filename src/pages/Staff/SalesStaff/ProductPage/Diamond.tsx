import * as Styled from "./Diamond.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Table,
  Input,
  Select,
  Space,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type {
  TableColumnsType,
  TableProps,
} from "antd";
// import Dragger from "antd/es/upload/Dragger";
import { diamondData, DiamondDataType } from "./ProductData"; // Import data here
import { Link } from "react-router-dom";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";


const onChange: TableProps<DiamondDataType>["onChange"] = (
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

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // -------------------------
  // Change Currency
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

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

  const columns: TableColumnsType<DiamondDataType> = [
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
      render: (_, record: DiamondDataType) => (
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
      render: (_, { diamondID }) => (
        <Space size="middle">
          <Link to={`/sales-staff/product/diamond/detail/${diamondID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

 

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
                <Table
                  className="table"
                  columns={columns}
                  dataSource={diamondData}
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

export default Diamond;
