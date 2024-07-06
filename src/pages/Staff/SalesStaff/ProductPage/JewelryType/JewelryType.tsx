import * as Styled from "./JewelryType.styled";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import {
  Form,
  Input,
  Table,
} from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { jewTypeData, JewTypeDataType } from "../ProductData"; // Import data here


const onChange: TableProps<JewTypeDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const JewelryType = () => {
  const [form] = Form.useForm();
 
  const columns: TableColumnsType<JewTypeDataType> = [
    {
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      sorter: (a: JewTypeDataType, b: JewTypeDataType) =>
        a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      sorter: (a: JewTypeDataType, b: JewTypeDataType) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    }
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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
                <Form form={form} component={false}>
                  <Table
                    bordered
                    dataSource={jewTypeData}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
                    onChange={onChange}
                  />  
                </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default JewelryType;
