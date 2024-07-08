import * as Styled from "./Collection.styled";
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
import { collectionData, CollectionDataType } from "../MarketingData";
import { productData } from "../../ProductPage/ProductData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import MarketingMenu from "@/components/Staff/SalesStaff/MarketingMenu/MarketingMenu";


const Collection = () => {
  const [form] = Form.useForm();
  const [data] = useState<CollectionDataType[]>(collectionData);

  const columns: TableColumnsType<CollectionDataType> = [
    {
      title: "Collection ID",
      dataIndex: "collectionID",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.collectionID.localeCompare(b.collectionID),
    },
    {
      title: "Collection Name",
      dataIndex: "collectionName",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.collectionName.length - b.collectionName.length,
    },
    {
      title: "Debut Date",
      dataIndex: "debutDate",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.debutDate.length - b.debutDate.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "collectionID",
      render: (_, { collectionID }) => {
        let count = 0;
        productData.forEach((collection) => {
          if (collection.collectionID === collectionID) {
            count++;
          }
        });
        return count;
      },
      sorter: (a, b) => a.collectionID.length - b.collectionID.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_: unknown, { collectionID }) => (
        <Space size="middle">
          <Link to={`/sales-staff/marketing/collection/detail/${collectionID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const onChangeTable: TableProps<CollectionDataType>["onChange"] = (
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

export default Collection;
