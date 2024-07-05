import * as Styled from "./Jewelry.styled";
import { useState } from "react";
import { Space, Table, Input, Button } from "antd";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
// import { Link } from "react-router-dom";
import { Modal } from "antd"; // Add this line
import { Link, useNavigate } from "react-router-dom"; 
import { productData, ProductDataType } from "../ProductData"; // Import data here
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { JewelryType_Filter } from "./Jewelry.type";





// interface ProductDataType {
//   key: React.Key;
//   productID: string;
//   productImg: string;
//   productName: string;
//   price: number;
//   markupPercentage: number;
//   type: string;
//   quantity: number;
//   exchangeRate: number;
//   currencyType: string;
// }

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
  // const [currency, setCurrency] = useState<"VND" | "USD">("VND");
  const [isModalVisible, setIsModalVisible] = useState(false); // Add this line
  const navigate = useNavigate(); // Update this line


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

  // const handleCurrencyChange = (value: "VND" | "USD") => {
  //   setCurrency(value);
  // };

  // const convertPrice = (
  //   price: number,
  //   exchangeRate: number,
  //   currency: "VND" | "USD"
  // ) => {
  //   if (currency === "USD") {
  //     return price * exchangeRate;
  //   }
  //   return price;
  // };

  // const sellingPrice = (price: number, markupPercentage: number) => {
  //   return price * (1 + markupPercentage / 100);
  // };

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
    // {
    //   title: `Cost Price (${currency})`,
    //   key: "price",
    //   sorter: (a, b) =>
    //     convertPrice(a.price, a.exchangeRate, currency) -
    //     convertPrice(b.price, b.exchangeRate, currency),
    //   render: (_, record) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     return `${convertedPrice.toFixed(2)} ${currency}`;
    //   },
    // },
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
          <Link to={`/admin/product/jewelry/detail/${jewelryID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // Add New
  const handleAddNew = () => {
    setIsModalVisible(true);
  };
  
  const handleModalOkCancel = () => {
    setIsModalVisible(false);
  };
  
  const handleAddJewelry = () => {
    setIsModalVisible(false);
    navigate("/admin/product/jewelry/add/regular-jewelry"); // Update this line
  };
  
  const handleAddCustomRing = () => {
    setIsModalVisible(false);
    navigate("/admin/product/jewelry/add/diamond-jewelry"); // Update this line
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

                {/* <Select
                  defaultValue="VND"
                  style={{ width: 120, height: "45px" }}
                  onChange={handleCurrencyChange}
                  options={[
                    { value: "USD", label: "USD" },
                    { value: "VND", label: "VND" },
                  ]}
                /> */}
              </Styled.AdPageContent_HeadLeft>

              <Styled.AddButton>
                <button onClick={handleAddNew}>
                  <PlusCircleOutlined />
                  Add New Product
                </button>
              </Styled.AddButton>
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

        <Modal
          title="Select an Option"
          visible={isModalVisible}
          onOk={handleModalOkCancel}
          onCancel={handleModalOkCancel}
          style={{ width: "100%" }}
          footer={[
            <Button key="cancel" onClick={handleModalOkCancel}>
              Cancel
            </Button>,
          ]}
        >
          <Button
            type="primary"
            onClick={handleAddJewelry}
            style={{ marginRight: "10px", backgroundColor: "#151542" }}
          >
            Add Regular Jewelry
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#151542" }}
            onClick={handleAddCustomRing}
          >
            Add Diamond Jewelry
          </Button>
        </Modal>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Jewelry;
