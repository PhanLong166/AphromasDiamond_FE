import * as Styled from "./Product.styled";
import { useState } from "react";
import { Space, Table, Select, Input, Button } from "antd";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
// import { Link } from "react-router-dom";
import { Modal } from "antd"; // Add this line
import { Link, useNavigate } from "react-router-dom"; 
import { productData, ProductDataType } from "./ProductData"; // Import data here

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
const Product = () => {
  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");
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
      dataIndex: "productID",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.productID.localeCompare(b.productID),
    },
    {
      title: "Image",
      key: "productImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={record.productImg}
            alt={record.productName}
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      ),
    },
    {
      title: "Jewelry Name",
      dataIndex: "productName",
      showSorterTooltip: { target: "full-header" },
      onFilter: (value, record) =>
        record.productName.indexOf(value as string) === 0,
      sorter: (a, b) => a.productName.length - b.productName.length,
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
      render: (_, { productID }) => (
        <Space size="middle">
          <Link to={`/admin/product/detail/${productID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     productID: "12345121",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 5.08,
  //     markupPercentage: 100,
  //     type: "Necklace",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "2",
  //     productID: "12345122",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 5.08,
  //     markupPercentage: 100,
  //     type: "Earring",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "3",
  //     productID: "12345123",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 7.08,
  //     markupPercentage: 100,
  //     type: "Necklace",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "4",
  //     productID: "12345124",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 6.08,
  //     markupPercentage: 150,
  //     type: "Bracelet",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "5",
  //     productID: "12345125",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 3.08,
  //     markupPercentage: 100,
  //     type: "Bracelet",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "6",
  //     productID: "12345126",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 9.08,
  //     markupPercentage: 150,
  //     type: "Anklet",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "7",
  //     productID: "12345127",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 2.04,
  //     markupPercentage: 100,
  //     type: "Bangle",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "8",
  //     productID: "12345128",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 7.03,
  //     markupPercentage: 100,
  //     type: "Choker",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "9",
  //     productID: "12345129",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 5.07,
  //     type: "Bangle",
  //     markupPercentage: 100,
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  //   {
  //     key: "10",
  //     productID: "12345130",
  //     productImg:
  //       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  //     productName: "Petite Twist Diamond Engagement Ring",
  //     price: 4.2,
  //     markupPercentage: 150,
  //     type: "Choker",
  //     quantity: 51,
  //     exchangeRate: 23000,
  //     currencyType: "USD",
  //   },
  // ];

  // Add New
  const handleAddNew = () => {
    setIsModalVisible(true);
  };
  
  const handleModalOkCancel = () => {
    setIsModalVisible(false);
  };
  
  const handleAddJewelry = () => {
    setIsModalVisible(false);
    navigate("/admin/product/add/jewelry"); // Update this line
  };
  
  const handleAddCustomRing = () => {
    setIsModalVisible(false);
    navigate("/admin/product/add/product"); // Update this line
  };

  return (
    <>
    <Styled.GlobalStyle/>
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
      </Styled.ProductAdminArea>

      <Modal
        title="Select an Option"
        visible={isModalVisible}
        onOk={handleModalOkCancel}
        onCancel={handleModalOkCancel}
        footer={[
          <Button key="cancel" onClick={handleModalOkCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Button type="primary" onClick={handleAddJewelry} style={{ marginRight: '10px' }}>
          Add Existing Jewelry
        </Button>
        <Button type="primary" onClick={handleAddCustomRing}>
          Add Custom Ring
        </Button>
      </Modal>
    </>
  );
};

export default Product;
