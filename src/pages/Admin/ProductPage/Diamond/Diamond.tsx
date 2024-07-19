import * as Styled from "./Diamond.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Table,
  Input,
  Button,
  Select,
  Space,
  notification,
} from "antd";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type {
  TableColumnsType,
  TableProps,
  GetProp,
  UploadFile,
  UploadProps
} from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import { diamondData, DiamondDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { showDiamonds } from "@/services/diamondAPI";
import { ColorType, ShapeType } from "./Diamond.type";
import { getImage } from "@/services/imageAPI";
import { useDocumentTitle } from "@/hooks";
import DiamondSteps from "./components/steps/DiamondSteps";
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

const Diamond = () => {
  useDocumentTitle('Diamond | Aphromas Diamond');

  const [searchText, setSearchText] = useState("");
  const [currency, setCurrency] = useState<"VND" | "USD">("VND");
  const [isAdding, setIsAdding] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  // const [diamonds, setDiamonds] = useState<any[]>([]);
  const [diamonds, setDiamonds] = useState([]);
  const [totalDiamonds, setTotalDiamonds] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setPageSize] = useState(6);
  // const file = useRef<UploadFile>();

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

  // UPLOAD IMAGES
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [docsList, setDocsList] = useState<UploadFile[]>([]);

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
                  <DiamondSteps
                    api={api}
                    fileList={fileList}
                    setFileList={setFileList}
                    onChangeImg={onChangeImg}
                    onPreview={onPreview}
                    setIsAdding={setIsAdding}
                    docsList={docsList}
                    setDocsList={setDocsList}
                  />
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
