import { useEffect, useState } from "react";
import * as Styled from "./Jewelry.styled";
import { notification } from "antd";
import type { UploadProps, GetProp, UploadFile } from "antd";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import ProductSteps from "./components/AddDiaJewComponent/steps/DiaJewSteps";
// import { getImage } from "@/services/imageAPI";
import { showAllProduct } from "@/services/jewelryAPI";
import { getImage } from "@/services/imageAPI";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const AddProduct = () => {
  const [api, contextHolder] = notification.useNotification();
  const [products, setProducts] = useState<any>([]);

  const fetchData = async () => {
    try {
      const responseJewelrys = await showAllProduct();
      const jewelrysData = responseJewelrys.data;

      const formattedJewelrys = jewelrysData?.map((jewelry: any) => ({
        jewelryID: jewelry.ProductID,
        jewelryName: jewelry.Name,
        inscription: jewelry.Inscription,
        description: jewelry.Description,
        brand: jewelry.Brand,
        diamondID_Jewelry: jewelry.Diamond.DiamondID,
        jewelrySettingID_Jewelry: jewelry.JewelrySettingID,
        accountID: jewelry.AccountID,
        totalDiamondPrice: jewelry.TotalDiamondPrice,
        totalQuantitySettingVariants: jewelry.TotalQuantityJewelrySettingVariants,
        images: jewelry.UsingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

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
