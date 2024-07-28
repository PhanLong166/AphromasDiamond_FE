import * as Styled from "./Diamond.styled";
import React, { useEffect, useState } from "react";
import { Table, Input, Select, Space } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { diamondData, DiamondDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { showAllDiamond } from "@/services/diamondAPI";
import { ColorType, ShapeType } from "./Diamond.type";

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
  const [currency, setCurrency] = useState<"VND" | "USD">("VND");
  // const [api, contextHolder] = notification.useNotification();

  // type NotificationType = "success" | "info" | "warning" | "error";

  // const openNotification = (
  //   type: NotificationType,
  //   method: string,
  //   error: string
  // ) => {
  //   api[type]({
  //     message: type === "success" ? "Notification" : "Error",
  //     description:
  //       type === "success" ? `${method} diamond successfully` : error,
  //   });
  // };

  const fetchData = async () => {
    const { data } = await showAllDiamond();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

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

  const handleCurrencyChange = (value: "VND" | "USD") => {
    setCurrency(value);
  };

  const convertPrice = (
    price: number,
    exchangeRate: number,
    currency: "VND" | "USD"
  ) => {
    if (currency === "USD") {
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
      title: "Charge Rate",
      dataIndex: "chargeRate",
      key: "chargeRate",
      render: (_, record) => `${record.chargeRate}%`,
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
        const price = sellingPrice(convertedPrice, record.chargeRate);
        return `${price.toFixed(2)} ${currency}`;
      },
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      filters: ColorType,
      onFilter: (value, record) => record.color.indexOf(value as string) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
      filters: ShapeType,
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
      {/* {contextHolder} */}

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
                  defaultValue="VND"
                  style={{ width: 120, height: "45px" }}
                  onChange={handleCurrencyChange}
                  options={[
                    { value: "VND", label: "VND" },
                    { value: "USD", label: "USD" },
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
