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
// import { diamondData, DiamondDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { createDiamond, showDiamonds } from "@/services/diamondAPI";
import ImgCrop from 'antd-img-crop';
import { ClarityType_Option, ColorType, FluorescenceType_Option, RateType_Option, ShapeType } from "./Diamond.type";
import { getImage } from "@/services/imageAPI";
// import { RcFile, UploadChangeParam } from "antd/es/upload";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const onChange: TableProps<any>["onChange"] = (
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
  // const [diamonds, setDiamonds] = useState<any[]>([]);
  const [diamonds, setDiamonds] = useState([]);
  const [totalDiamonds, setTotalDiamonds] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  // const file = useRef<UploadFile>();

  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description: type === "success" ? `${method} diamond successfully` : error,
    });
  };

  const fetchData = async (page: number) => {
    const params = {
      page,
      // pageSize,
      // sortBy: "Price",
      // sortOrder: "asc",
      // color: "D",
      // shape: "Square",
    };
  
    try {
      const response = await showDiamonds(params);
      console.log('API response:', response); 
      const { data, total } = response.data; 
      const formattedDiamonds = data.map((diamond: any) => ({
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
      setTotalDiamonds(total);
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


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
            src={record.images && record.images[0] ? record.images[0].url : "default-image-url"} // Thay đổi để hiển thị ảnh của kim cương
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
    // {
    //   title: `Selling Price (${currency})`,
    //   key: "sellingPrice",
    //   render: (_, record) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     const price = sellingPrice(convertedPrice, record.chargeRate);
    //     return `${price.toFixed(2)} ${currency}`;
    //   },
    // },
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
          <Link to={`/admin/product/diamond/detail/${diamondID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];



  // Add New
  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChangeAdd = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const handleAddDiamond = async (diamondValues: object) => {
    try {
      const { data } = await createDiamond(diamondValues);
      if (data.statusCode !== 200) throw new Error(data.message);
      fetchData(currentPage);
      setIsAdding(false);
      openNotification("success", "Add", "");
    } catch (error: any) {
      openNotification("error", "", error.message);
    }
  };


  // SUBMIT FORM
  interface SubmitButtonProps {
    form: FormInstance;
  }

  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
  }) => {
    // const [submittable, setSubmittable] = React.useState<boolean>(false);
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true),
        // .catch(
          () => setSubmittable(false));

    }, [values]);

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
        fetchData(currentPage); // Refresh the table after adding a diamond
        setIsAdding(false); // Close the add form after successful addition
        openNotification("success", "Add", "");
      } catch (error: any) {
        openNotification("error", "", error.message);
      }
    };

    return (
      <Button
        type="primary"
        htmlType="submit"
        disabled={!submittable}
      >
        {children}
      </Button>
    );
  };

  const handleSave = () => {
    fetchData(currentPage);
    setIsAdding(false);
  };



  // UPLOAD IMAGES
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // const beforeUpload = (f: RcFile) => {
  //   file.current = f;
  //   return false;
  // }

  // const handleUploadProductImage = (info: UploadChangeParam<UploadFile<any>>) => {

  // }

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

  // const onFinish = (values: any) => {
  //   console.log("Finish:", values);
  // };

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
                    <Button type="primary" onClick={() => setIsAdding(!isAdding)}>
                      <PlusCircleOutlined />
                      Add New Diamond
                    </Button>
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
                    onFinish={handleAddDiamond}
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
                        name="diamondName"
                        rules={[
                          {
                            required: true,
                            message: "Diamond Name is required.",
                          },
                          {
                            pattern: /^[a-zA-Z0-9\s()-.]*$/,
                            message:
                              "Only alphabet, numbers, (), - and . are allowed.",
                          },
                          {
                            max: 300,
                            message:
                              "Diamond Name must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input className="formItem" placeholder="Fill Name" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Charge Rate (%)"
                        name="chargeRate"
                        rules={[
                          {
                            required: true,
                            message: "Rate is required.",
                          },
                          {
                            type: "number",
                            min: 1,
                            max: 300,
                            message:
                              "Must be a positive number and less than or equal to 300",
                          },
                          // {
                          //   whitespace: true,
                          //   message: "Not only has whitespace.",
                          // },
                        ]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                          {
                            required: true,
                            message: "Price is required.",
                          },
                          {
                            type: "number",
                            min: 0,
                            max: 1000000,
                            message:
                              "Must be a positive number and less than or equal to $1,000,000 USD.",
                          },
                        ]}
                      >
                        <InputNumber className="formItem" placeholder="4,080" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Shape" name="shape" rules={[{ required: true }]}>
                        <Select
                          className="formItem"
                          placeholder="Select Shape"
                          onChange={handleChange}
                          options={ShapeType}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Color" name="color" rules={[{ required: true }]}>
                        <Select
                          //   defaultValue="Select Color"
                          className="formItem"
                          placeholder="Select Color"
                          onChange={handleChange}
                          options={ColorType}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Polish"
                        name="polish"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Polish"
                          onChange={handleChange}
                          options={RateType_Option}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Cut"
                        name="cut"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Cut"
                          onChange={handleChange}
                          options={RateType_Option}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Length/Width Ratio"
                        name="lengthOnWidthRatio"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="1,01" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Clarity" name="clarity" rules={[{ required: true }]}>
                        <Select
                          //   defaultValue="Select Clarity"
                          className="formItem"
                          placeholder="Select Clarity"
                          onChange={handleChange}
                          options={ClarityType_Option}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Symmetry"
                        name="symmetry"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Symmetry"
                          onChange={handleChange}
                          options={RateType_Option}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Carat Weight"
                        name="weightCarat"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="1,01" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Table %"
                        name="percentTable"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="56.0" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Depth %"
                        name="percentDepth"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="63.8" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Fluorescence"
                        name="fluorescence"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Symmetry"
                          onChange={handleChange}
                          options={FluorescenceType_Option}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Diamond Cutter"
                        name="Cutter"
                        rules={[
                          {
                            required: true,
                            message: "Diamond Name is required.",
                          },
                          {
                            pattern: /^[a-zA-Z0-9\s()-.]*$/,
                            message:
                              "Only alphabet, numbers, (), - and . are allowed.",
                          },
                          {
                            max: 300,
                            message:
                              "Diamond Name must be at most 300 characters long.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
                      >
                        <Input className="formItem" placeholder="Fill Name" />
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
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: "Description is required.",
                          },
                          {
                            pattern: /^[a-zA-Z0-9\s()-.]*$/,
                            message:
                              "Only alphabet, numbers, (), - and . are allowed.",
                          },
                          {
                            whitespace: true,
                            message: "Not only has whitespace.",
                          },
                        ]}
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
                        name="diamondImg"
                      >
                        <ImgCrop quality={1} rotationSlider aspectSlider showGrid showReset>
                          <Upload
                            name="diamondImage"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeImg}
                            onPreview={onPreview}
                          >
                            {fileList.length < 5 && "+ Upload"}
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

                    <Styled.ActionBtn>
                    <SubmitButton
                    form={form}
                    >
                      <SaveOutlined />
                      Save
                    </SubmitButton>
                      <Button
                        onClick={handleCancel}
                        className="CancelBtn"
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </Button>
                    </Styled.ActionBtn>
                  </Form>
                </>
              ) : (
                <Table
                  className="table"
                  columns={columns}
                  dataSource={diamonds}
                  onChange={onChange}
                  pagination={{
                    current: currentPage,
                    // pageSize,
                    total: totalDiamonds,
                    onChange: (page) => {
                      setCurrentPage(page);
                      // setPageSize(pageSize);
                    },
                  }}
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
