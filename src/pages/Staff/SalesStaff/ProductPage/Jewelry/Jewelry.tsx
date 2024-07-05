import * as Styled from "./Jewelry.styled";
import { useState } from "react";
import { Space, Table, Input } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { Link } from "react-router-dom"; 
import { productData, ProductDataType } from "../ProductData"; // Import data here
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { JewelryType_Filter } from "./Jewelry.type";


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

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
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
      onFilter: (value, record) =>
        record.jewelryName.indexOf(value as string) === 0,
      sorter: (a, b) => a.jewelryName.length - b.jewelryName.length,
      sortDirections: ["descend"],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      filters: JewelryType_Filter,
      onFilter: (value, record) => record.type.indexOf(value as string) === 0,
      sortDirections: ["descend"],
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
