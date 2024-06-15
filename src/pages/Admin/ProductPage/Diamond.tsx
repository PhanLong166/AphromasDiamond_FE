import * as Styled from "./Diamond.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Input, Form, Button, InputNumber, Select, Upload, message, } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  PlusCircleOutlined,
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps, UploadProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import TextArea from "antd/es/input/TextArea";


interface DataType {
  key: React.Key;
  diamondID: string;
  diamondImg: string;
  diamondName: string;
  price: number;
  markupPercentage: number;
  color: string;
  shape: string;
  exchangeRate: number;
  currencyType: string;
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

// UPLOAD IMAGES

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};



const Diamond = () => {
  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [isAdding, setIsAdding] = useState(false);

  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // -------------------------
  // Change Currency
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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

  const columns: TableColumnsType<DataType> = [
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
      render: (_, record: DataType) => (
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
      title: "Color",
      dataIndex: "color",
      key: "color",
      filters: [
        { text: "K", value: "K" },
        { text: "J", value: "J" },
        { text: "I", value: "I" },
        { text: "H", value: "H" },
        { text: "G", value: "G" },
        { text: "F", value: "F" },
        { text: "E", value: "E" },
        { text: "D", value: "D" },
      ],
      onFilter: (value, record) => record.color.indexOf(value as string) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Shape",
      dataIndex: "shape",
      key: "shape",
      filters: [
        { text: "Round", value: "Round" },
        { text: "Princess", value: "Princess" },
        { text: "Cushion", value: "Cushion" },
        { text: "Oval", value: "Oval" },
        { text: "Emerald", value: "Emerald" },
        { text: "Pear", value: "Pear" },
        { text: "Asscher", value: "Asscher" },
        { text: "Heart", value: "Heart" },
        { text: "Radiant", value: "Radiant" },
        { text: "Marquise", value: "Marquise" },
      ],
      onFilter: (value, record) => record.shape.indexOf(value as string) === 0,
      sorter: (a, b) => a.shape.length - b.shape.length,
      sortDirections: ["descend"],
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: () => (
        <Space size="middle">
          <EyeOutlined />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      diamondID: "12345121",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.08,
      markupPercentage: 100,
      color: "H",
      shape: "Marquise",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "2",
      diamondID: "12345122",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.08,
      markupPercentage: 100,
      color: "G",
      shape: "Princess",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "3",
      diamondID: "12345123",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.08,
      markupPercentage: 100,
      color: "H",
      shape: "Asscher",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "4",
      diamondID: "12345124",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 6.08,
      markupPercentage: 100,
      color: "J",
      shape: "Radiant",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "5",
      diamondID: "12345125",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 3.08,
      markupPercentage: 100,
      color: "I",
      shape: "Oval",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "6",
      diamondID: "12345126",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 9.08,
      markupPercentage: 100,
      color: "I",
      shape: "Princess",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "7",
      diamondID: "12345127",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 2.04,
      markupPercentage: 100,
      color: "G",
      shape: "Heart",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "8",
      diamondID: "12345128",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.03,
      markupPercentage: 100,
      color: "K",
      shape: "Emerald",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "9",
      diamondID: "12345129",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.07,
      markupPercentage: 100,
      color: "J",
      shape: "Cushion",

      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "10",
      diamondID: "12345130",
      diamondImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.2,
      markupPercentage: 100,
      color: "I",
      shape: "Marquise",
      exchangeRate: 23000,
      currencyType: "USD",
    },
  ];
  // --------------------------

  // Add New
  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChangeAdd = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
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
              {(!isAdding && (
                <>
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
                    <Link to="">
                      <button onClick={handleAddNew}>
                        <PlusCircleOutlined />
                        Add New Diamond
                      </button>
                    </Link>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Diamond</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                <Form layout="vertical" className="AdPageContent_Content">
                <Styled.FormItem>
                  <Form.Item label="Diamond ID">
                    <Input className="formItem" placeholder="D1234" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Diamond Name">
                    <Input className="formItem" placeholder="Filled" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Markup Percentage (%)">
                    <InputNumber className="formItem" placeholder="150" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Price">
                    <InputNumber className="formItem" placeholder="4,080" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Shape">
                    <Select
                      //   defaultValue="Select Shape"
                      className="formItem"
                      placeholder="Select Shape"
                      onChange={handleChange}
                      options={[
                        { value: "Round", label: "Round" },
                        { value: "Princess", label: "Princess" },
                        { value: "Cushion", label: "Cushion" },
                        { value: "Oval", label: "Oval" },
                        { value: "Emerald", label: "Emerald" },
                        { value: "Pear", label: "Pear" },
                        { value: "Asscher", label: "Asscher" },
                        { value: "Heart", label: "Heart" },
                        { value: "Radiant", label: "Radiant" },
                        { value: "Marquise", label: "Marquise" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Color">
                    <Select
                      //   defaultValue="Select Color"
                      className="formItem"
                      placeholder="Select Color"
                      onChange={handleChange}
                      options={[
                        { value: "K", label: "K" },
                        { value: "J", label: "J" },
                        { value: "I", label: "I" },
                        { value: "H", label: "H" },
                        { value: "G", label: "G" },
                        { value: "F", label: "F" },
                        { value: "E", label: "E" },
                        { value: "D", label: "D" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Polish">
                    <Input className="formItem" placeholder="Excellent" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Cut">
                    <Input className="formItem" placeholder="Excellent" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Length/Width Ratio">
                    <InputNumber className="formItem" placeholder="1,01" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Clarity">
                    <Select
                      //   defaultValue="Select Clarity"
                      className="formItem"
                      placeholder="Select Clarity"
                      onChange={handleChange}
                      options={[
                        { value: "I3", label: "I3" },
                        { value: "J", label: "I1-I2" },
                        { value: "SI1S12", label: "SI1-S12" },
                        { value: "VS1VS2", label: "VS1-VS2" },
                        { value: "VVS1VVS2", label: "VVS1-VVS2" },
                        { value: "Flawless", label: "FL-IF" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Symmetry">
                    <Input className="formItem" placeholder="Excellent" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Carat Weight">
                    <InputNumber className="formItem" placeholder="1,01" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Table %">
                    <InputNumber className="formItem" placeholder="56.0" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Depth %">
                    <InputNumber className="formItem" placeholder="63.8" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Fluorescence">
                    <Input className="formItem" placeholder="Strong" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormDescript>
                  <Form.Item label="Description">
                    <TextArea
                      placeholder="Description"
                      allowClear
                      onChange={onChangeAdd}
                    />
                  </Form.Item>
                </Styled.FormDescript>
                <Styled.UploadFile>
                  <Form.Item label="Upload Images">
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                      </p>
                    </Dragger>
                  </Form.Item>
                </Styled.UploadFile>

                <Styled.UploadFile>
                  <Form.Item label="Upload GIA">
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                      </p>
                    </Dragger>
                  </Form.Item>
                </Styled.UploadFile>
              </Form>
              <Styled.ActionBtn>
                <Button
                  type="primary"
                  onClick={handleSave}
                  className="MainBtn"
                >
                  <SaveOutlined />
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Button>
              </Styled.ActionBtn>
            </>
              ) : (
                <Table
                  className="table"
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 6 }} // Add pagination here
                  onChange={onChange}
                  showSorterTooltip={{ target: "sorter-icon" }}
                />
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Diamond;
