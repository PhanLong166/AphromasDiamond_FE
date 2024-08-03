import * as Styled from "../Jewelry Setting/RingSetting.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type {
  TableColumnsType,
  TableProps,
} from "antd";
import {
  Form,
  Input,
  Table,
  Space,
  notification,
} from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { Link } from "react-router-dom";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { showAllMaterial } from "@/services/materialAPI";
import { showAllJewelryType } from "@/services/jewelryTypeAPI";
import { showAllSize } from "@/services/sizeAPI";
import { getImage } from "@/services/imageAPI";


const JewelrySetting = () => {
  const [form] = Form.useForm();
  // const [data] = useState<RingDataType[]>(ringData);
  const [isAdding, setIsAdding] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [ contextHolder] = notification.useNotification();
  const [settings, setSettings] = useState([]);
  const [setMaterials] = useState<any>([]);
  const [setJewelryTypes] = useState<any>([]);
  const [setSizes] = useState<any>([]);


  const fetchData = async () => {
    try {
      const responseSetting = await showAllSetting();
      const responseMaterial = await showAllMaterial();
      const responseJewelryType = await showAllJewelryType();
      const responseSize = await showAllSize();

      const { data: settingsData } = responseSetting.data;
      const { data: materialsData } = responseMaterial.data;
      const { data: jewelryTypesData } = responseJewelryType.data;
      const { data: sizeData } = responseSize.data;

      const formattedSettings = settingsData
      .filter((setting: any) => (setting.IsActive))
      .map((setting: any) => ({
        jewelrySettingID: setting.JewelrySettingID,
        jewelrySettingName: setting.Name,
        productID: setting.ProductID,
        jewelryTypeID: setting.JewelryTypeID,
        productionCost: setting.ProductionCost,
        isActive: setting.IsActive === true,
        jewelrySettingVariant: setting.JewelrySettingVariant.map(
          (variant: any) => ({
            variantID: variant.JewelrySettingVariantID,
            amount: variant.Amount,
            totalPriceVariant: variant.TotalPriceVariant,
            // size: {
            //   sizeID: variant.SizeID,
            //   sizeValue: variant.SizeValue,
            //   unitOfMeasure: variant.UnitOfMeasure,
            // },
          })
        ),
        images: setting.UsingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

      const formattedMaterials = materialsData.map((material: any) => ({
        materialID: material.MaterialJewelryID,
        materialName: material.Name,
        sellPrice: material.SellPrice,
      }));

      const formattedTypes = jewelryTypesData.map((type: any) => ({
        typeID: type.JewelryTypeID,
        typeName: type.Name,
      }));

      const formattedSizes = sizeData.map((size: any) => ({
        sizeID: size.SizeID,
        sizeValue: size.SizeValue,
      }));

      console.log("Formatted Diamonds:", formattedSettings); // Log formatted diamonds
      setSettings(formattedSettings);
      setMaterials(formattedMaterials);
      setJewelryTypes(formattedTypes);
      setSizes(formattedSizes);
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  //  CHANGE

  const columns: TableColumnsType<any> = [
    {
      title: "Jewelry Setting ID",
      dataIndex: "jewelrySettingID",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        parseInt(a.jewelrySettingID) - parseInt(b.jewelrySettingID),
    },
    {
      title: "Image",
      key: "jewelrySettingImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={
              record.images && record.images[0]
                ? record.images[0].url
                : "default-image-url"
            }
            alt={record.jewelrySettingName}
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      ),
    },
    {
      title: "Jewelry Setting Name",
      dataIndex: "jewelrySettingName",
      sorter: (a, b) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelrySettingID }) => (
        <Space size="middle">
          <Link
            to={`/admin/product/jewelry-setting/detail/${jewelrySettingID}`}
          >
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // SEARCH
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const onChangeTable: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
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
                  </Styled.AdPageContent_HeadLeft>

                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Ring Setting
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Ring Setting</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
                <Form form={form} component={false}>
                  <Table
                    bordered
                    dataSource={settings}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }}
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

export default JewelrySetting;
