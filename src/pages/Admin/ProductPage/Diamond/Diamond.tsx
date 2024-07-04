import * as Styled from "./Diamond.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Table,
  Input,
  Form,
  Button,
  InputNumber,
  Select,
  Space,
  Upload,
  message,
  Switch,
  notification,
} from "antd";
import {
  SearchOutlined,
  PlusCircleOutlined,
  InboxOutlined,
  EyeOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type {
  FormInstance,
  TableColumnsType,
  TableProps,
  GetProp,
  UploadFile,
  UploadProps
} from "antd";
// import Dragger from "antd/es/upload/Dragger";
import TextArea from "antd/es/input/TextArea";
import { diamondData, DiamondDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { createDiamond, showAllDiamond } from "@/services/diamondAPI";
import ImgCrop from 'antd-img-crop';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const onChange: TableProps<DiamondDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

// DESCRIPTION INPUT

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
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("VND");
  const [isAdding, setIsAdding] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotification = (type: NotificationType, method: string, error: string) => {
    api[type]({
      message: type === 'success' ? 'Notification' : 'Error',
      description:
        type === 'success' ? `${method} diamond successfully` : error
    })
  }

  const fetchData = async () => {
    const { data } = await showAllDiamond();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  // SUBMIT FORM
  interface SubmitButtonProps {
    form: FormInstance;
  }

  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
  }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));

    }, [form, values]);

    const diamondValues: object = {
      ...values,
      UpdateTime: new Date(),
      JewelrySettingID: null,
    }
    console.log(diamondValues);

    const addDiamond = async (diamondValues: object) => {
      try {
        const { data } = await createDiamond(diamondValues);
        if (data.statusCode !== 200) throw new Error(data.message);
        console.log(data);

      } catch (error: any) {
        openNotification('error', '', error);
      }
    }

    return (
      <Button
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        onClick={() => addDiamond(diamondValues)}
      >
        {children}
      </Button>
    );
  };


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
      render: (_, { diamondID }) => (
        <Space size="middle">
          <Link to={`/admin/product/diamond/detail/${diamondID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];



  // Add New
  const handleAddNew = () => {
    setIsAdding(true);
  };

  // const handleSave = () => {
  //   setIsAdding(false);
  // };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChangeAdd = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };


  // UPLOAD IMAGES
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const onChangeImg: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


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
                      defaultValue="VND"
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "VND", label: "VND" },
                        { value: "USD", label: "USD" },
                      ]}
                    />
                  </Styled.AdPageContent_HeadLeft>

                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Diamond
                    </button>
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
                  <Form
                    form={form}
                    layout="vertical"
                    className="AdPageContent_Content"
                  >
                    {/* <Styled.FormItem>
                      <Form.Item
                        label="Diamond ID"
                        name="Diamond ID"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem> */}
                    <Styled.FormItem>
                      <Form.Item
                        label="Diamond Name"
                        name="Name"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="Filled" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Charge Rate (%)"
                        name="ChargeRate"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Price"
                        name="Price"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="4,080" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Shape"
                        name="Shape"
                      >
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
                      <Form.Item 
                        label="Color"
                        name="Color"
                      >
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
                      <Form.Item
                        label="Polish"
                        name="Polish"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Polish"
                          onChange={handleChange}
                          options={[
                            { value: "Excellent", label: "Excellent" },
                            { value: "Very Good", label: "Very Good" },
                            { value: "Good", label: "Good" },
                            { value: "Fair", label: "Fair" },
                            { value: "Poor", label: "Poor" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Cut"
                        name="Cut"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Cut"
                          onChange={handleChange}
                          options={[
                            { value: "Excellent", label: "Excellent" },
                            { value: "Very Good", label: "Very Good" },
                            { value: "Good", label: "Good" },
                            { value: "Fair", label: "Fair" },
                            { value: "Poor", label: "Poor" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Length/Width Ratio"
                        name="LengthOnWidthRatio"
                        rules={[{ required: true }]}
                      >
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
                      <Form.Item
                        label="Symmetry"
                        name="Symmetry"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Symmetry"
                          onChange={handleChange}
                          options={[
                            { value: "Excellent", label: "Excellent" },
                            { value: "Very Good", label: "Very Good" },
                            { value: "Good", label: "Good" },
                            { value: "Fair", label: "Fair" },
                            { value: "Poor", label: "Poor" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Carat Weight"
                        name="WeightCarat"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="1,01" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Table %"
                        name="PercentTable"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="56.0" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Depth %"
                        name="PercentDepth"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="63.8" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Fluorescence"
                        name="Fluorescence"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Symmetry"
                          onChange={handleChange}
                          options={[
                            { value: "Strong", label: "Strong" },
                            { value: "Media", label: "Media" },
                            { value: "Faint", label: "Faint" },
                            { value: "None", label: "None" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Active"
                        name="IsActive"
                      >
                        <Switch />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <TextArea
                          placeholder="Description"
                          allowClear
                          onChange={onChangeAdd}
                        />
                      </Form.Item>
                    </Styled.FormDescript>
                    <Styled.UploadFile>
                      <Form.Item
                        label="Upload Images"
                        rules={[{ required: true }]}
                      >
                        {/* <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                          </p>
                        </Dragger> */}

                        <ImgCrop rotationSlider>
                          <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeImg}
                            onPreview={onPreview}
                          >
                            {fileList.length < 5 && '+ Upload'}
                          </Upload>
                        </ImgCrop>
                      </Form.Item>
                    </Styled.UploadFile>

                    <Styled.UploadFile>
                      <Form.Item
                        label="Upload GIA"
                        rules={[{ required: true }]}
                      >
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                          </p>
                        </Dragger>
                      </Form.Item>
                    </Styled.UploadFile>
                  </Form>
                  <Styled.ActionBtn>
                    {/* <Link to="/admin/product/diamond/detail/D0001">  {`/admin/product/jewelry-setting/detail/${diamondID} `} */}
                      <SubmitButton form={form}>
                        <SaveOutlined />
                        Save
                      </SubmitButton>
                    {/* </Link> */}
                    <Button
                      onClick={handleCancel}
                      className="CancelBtn"
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
                  dataSource={diamondData}
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
