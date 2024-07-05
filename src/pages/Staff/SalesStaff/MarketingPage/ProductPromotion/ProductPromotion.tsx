import * as Styled from "./ProductPromotion.styled";
import React, { useState } from "react";
import {
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type {
  TableProps,
  TableColumnsType,
} from "antd";
import {
  Form,
  Input,
  Table,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import { promotionData, PromotionDataType } from "../MarketingData";
import { productData } from "../../ProductPage/ProductData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import MarketingMenu from "@/components/Staff/SalesStaff/MarketingMenu/MarketingMenu";



const ProductPromotion = () => {
  const [form] = Form.useForm();
  const [data] = useState<PromotionDataType[]>(promotionData);

  const columns: TableColumnsType<PromotionDataType> = [
    {
      title: "Promotion ID",
      dataIndex: "promotionID",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.promotionID.localeCompare(b.promotionID),
    },
    {
      title: "Promotion Name",
      dataIndex: "promotionName",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.promotionName.length - b.promotionName.length,
    },
    {
      title: "% discount",
      dataIndex: "discountPercent",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.discountPercent - b.discountPercent,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.endDate.length - b.endDate.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "promotionID",
      render: (_, { promotionID }) => {
        let count = 0;
        productData.forEach((promotion) => {
          if (promotion.promotionID === promotionID) {
            count++;
          }
        });
        return count;
      },
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_: unknown, { promotionID }) => (
        <Space size="middle">
          <Link to={`/sales-staff/marketing/discount/detail/${promotionID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const onChangeTable: TableProps<PromotionDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // SEARCH AREA
  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

 
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <MarketingMenu />

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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              
                <Form form={form} component={false}>
                  <Table
                    bordered
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
                    onChange={onChangeTable}
                  />
                </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default ProductPromotion;
