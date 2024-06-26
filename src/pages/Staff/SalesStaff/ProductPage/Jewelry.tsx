import * as Styled from "./Jewelry.styled";
import { useState } from "react";
import { Space, Table, Select, Input } from "antd";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { productData, ProductDataType } from "./ProductData"; // Import data here
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";



const onChange: TableProps<ProductDataType>["onChange"] = (
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
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

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

  const columns: TableColumnsType<ProductDataType> = [
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
        <a href="#" target="_blank" rel="noopener noreferrer">
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
      render: (_, { jewelryID }) => (
        <Space size="middle">
          <Link to={`/sales-staff/product/jewelry/detail/${jewelryID}`}>
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
                dataSource={productData}
                pagination={{ pageSize: 6 }}
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
