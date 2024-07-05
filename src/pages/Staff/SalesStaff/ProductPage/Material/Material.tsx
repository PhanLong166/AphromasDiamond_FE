import * as Styled from "./Material.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { Form, Input, Table } from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { materialData, MaterialDataType } from "../ProductData"; // Import data here

const onChange: TableProps<MaterialDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Material = () => {
  const [form] = Form.useForm();

  const columns: TableColumnsType<MaterialDataType> = [
    {
      title: "Material ID",
      dataIndex: "materialID",
      sorter: (a: MaterialDataType, b: MaterialDataType) =>
        a.materialID.localeCompare(b.materialID),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      sorter: (a: MaterialDataType, b: MaterialDataType) =>
        a.materialName.length - b.materialName.length,
    },
    {
      title: "Selling Price per Gram",
      dataIndex: "sellingPrice",
      sorter: (a: MaterialDataType, b: MaterialDataType) =>
        a.sellingPrice - b.sellingPrice,
    },
  ];

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
      <Styled.AdminArea>
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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              <Form form={form} component={false}>
                <Table
                  bordered
                  dataSource={materialData}
                  columns={columns}
                  pagination={{ pageSize: 6 }} // Add pagination here
                  onChange={onChange}
                />
              </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.AdminArea>
    </>
  );
};

export default Material;
