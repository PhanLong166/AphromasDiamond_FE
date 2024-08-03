import * as Styled from "./Diamond.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Table,
  Input,
  Space,
  notification,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type {
  TableColumnsType,
  TableProps,
} from "antd";
import { Link } from "react-router-dom";
import { showAllDiamond } from "@/services/diamondAPI";
import { ColorType, ShapeType } from "./Diamond.type";
import { getImage } from "@/services/imageAPI";
import { useDocumentTitle } from "@/hooks";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";


const onChange: TableProps<any>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Diamond = () => {
  useDocumentTitle('Diamond | Aphromas Diamond');

  const [searchText, setSearchText] = useState("");
  const [currency] = useState<"VND" | "USD">("USD");
  const [contextHolder] = notification.useNotification();
  const [diamonds, setDiamonds] = useState([]);

  const fetchData = async () => {
    try {
      const response = await showAllDiamond();
      console.log('API response:', response);
      const { data } = response.data;
      const formattedDiamonds = data
      .filter((diamond: any) => (diamond.IsActive && diamond.ProductID === null))
      .map((diamond: any) => ({
        diamondID: diamond.DiamondID,
        diamondName: diamond.Name,
        price: diamond.Price,
        color: diamond.Color,
        shape: diamond.Shape,
        polish: diamond.Polish,
        cut: diamond.Cut,
        lengthOnWidthRatio: diamond.LengthOnWidthRatio,
        clarity: diamond.Clarity,
        symmetry: diamond.Symmetry,
        weightCarat: diamond.WeightCarat,
        percentTable: diamond.PercentTable,
        percentDepth: diamond.PercentDepth,
        fluorescence: diamond.Fluorescence,
        description: diamond.Description,
        exchangeRate: 1,
        chargeRate: diamond.ChargeRate,
        images: diamond.usingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));
      console.log('Formatted Diamonds:', formattedDiamonds); // Log formatted diamonds
      setDiamonds(formattedDiamonds);
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // SEARCH 
  const handleSearch = (value: any) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchText);
    }
  };


  // Change Currency
  // const handleCurrencyChange = (value: "VND" | "USD") => {
  //   setCurrency(value);
  // };

  const convertPrice = (
    price: number,
    exchangeRate: number,
    currency: "USD" | "VND"
  ) => {
    if (currency === "VND") {
      return price * exchangeRate;
    }
    return price;
  };

  const sellingPrice = (price: number, markupPercentage: number) => {
    return price * (1 + markupPercentage / 100);
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Diamond ID",
      dataIndex: "diamondID",
      // defaultSortOrder: "descend",
      sorter: (a, b) => parseInt(a.diamondID) - parseInt(b.diamondID),
    },
    {
      title: "Image",
      key: "diamondImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={record.images && record.images[0] ? record.images[0].url : "default-image-url"} 
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
      sorter: (a, b) => a.diamondName.length - b.diamondName.length,
      // sortDirections: ["descend"],
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
        return `${convertedPrice} ${currency}`;
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
        const price = sellingPrice(convertPrice(record.price, record.exchangeRate, currency), record.chargeRate);
        return `${price.toFixed(2)} ${currency}`;
      },
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      filters: ColorType,
      onFilter: (value, record) => record.color.indexOf(value as string) === 0,
      // sortDirections: ["descend"],
      sorter: (a, b) => a.color.length - b.color.length,
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
      filters: ShapeType,
      onFilter: (value, record) => record.shape.indexOf(value as string) === 0,
      sorter: (a, b) => a.shape.length - b.shape.length,
      // sortDirections: ["descend"],
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
      {contextHolder}

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
                  </Styled.AdPageContent_HeadLeft>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
                <Table
                  className="table"
                  columns={columns}
                  dataSource={diamonds}
                  onChange={onChange}
                  pagination={{ pageSize: 6 }}
                />
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Diamond;
