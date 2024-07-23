import { useEffect, useState } from "react";
import * as Styled from "./Jewelry.styled";
// import { useState } from "react";
import {
  // Form,
  notification,
} from "antd";
// import { Link } from "react-router-dom";

import type { UploadProps, GetProp, UploadFile } from "antd";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { getImage } from "@/services/imageAPI";
import ProductSteps from "./components/AddReguComponent/steps/ReguJewSteps";
import { showAllProduct } from "@/services/jewelryAPI";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const AddProduct = () => {
  // const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [products, setProducts] = useState<any>([]); 


  const fetchData = async () => {
    try {
      const responseJewelrys = await showAllProduct();
      const jewelrysData = responseJewelrys.data;

      const formattedJewelrys = await Promise.all(jewelrysData?.map(async (jewelry: any) => ({
        jewelryID: jewelry.ProductID,
        jewelryName: jewelry.Name,
        inscription: jewelry.Inscription,
        inscriptionFont: jewelry.InscriptionFont,
        brand: jewelry.Brand,
        jewelrySettingID_Jewelry: jewelry.JewelrySettingID,
        accountID: jewelry.AccountID,
        totalDiamondPrice: jewelry.TotalDiamondPrice,
        collectionID: jewelry.CollectionID,
        discountID: jewelry.DiscountID,
        totalQuantitySettingVariants: jewelry.TotalQuantityJewelrySettingVariants,
        images: await Promise.all(jewelry.UsingImage.map(async (image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: await getImage(image.UsingImageID),
        }))),
      })));

      console.log("Formatted Jewelry:", formattedJewelrys);
      setProducts(formattedJewelrys);
      console.log(products);
    } catch (error) {
      console.error("Failed to fetch Jewelrys:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
// UPLOAD IMAGES
const [fileList, setFileList] = useState<UploadFile[]>([]);

const onChangeImg: UploadProps["onChange"] = ({ fileList: newFileList }) => {
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

          <Styled.AdPageArea>
          <ProductSteps
              api={api}
              fileList={fileList}
              setFileList={setFileList}
              onChangeImg={onChangeImg}
              onPreview={onPreview}
              fetchData={fetchData}
              
            />
          </Styled.AdPageArea>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default AddProduct;
