import * as Styled from "./Product.styled";
// import { useState } from "react";
import {
  Select,
  Input,
  Form,
  Button,
  InputNumber,
  message,
  Upload,
} from "antd";
// import { Link } from "react-router-dom";
import {
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

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

const AddProduct = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(e);
    };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageArea>
            <Styled.AdPageArea_Title>
              <h1>Add Product</h1>
              <p>Add a new product</p>
            </Styled.AdPageArea_Title>
            <Styled.AdPageContent_Product>
              <Styled.AdPageContent_Title>
                <p>Add Diamond</p>
              </Styled.AdPageContent_Title>
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
                      onChange={onChange}
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

                {/* <Styled.FormItem>
                  <Form.Item label="Currency Type">
                    <Select
                      defaultValue="USD"
                      className="formItem"
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem> */}
              </Form>
            </Styled.AdPageContent_Product>

            <Styled.AdPageContent_Product>
              <Styled.AdPageContent_Title>
                <p>Add Product Setting</p>
              </Styled.AdPageContent_Title>
              <Form layout="vertical" className="AdPageContent_Content">
                <Styled.FormItem>
                  <Form.Item label="Product Setting ID">
                    <Input className="formItem" placeholder="D1234" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Product Setting Name">
                    <Input className="formItem" placeholder="Filled" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Markup Percentage (%)">
                    <InputNumber className="formItem" placeholder="150" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Cost Price">
                    <InputNumber className="formItem" placeholder="4,080" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Type">
                    <Select
                      //   defaultValue="Select Color"
                      className="formItem"
                      placeholder="Select Type"
                      onChange={handleChange}
                      options={[
                        { value: "Ring", label: "Ring" },
                        { value: "Necklace", label: "Necklace" },
                        { value: "Earring", label: "Earring" },
                        { value: "Bracelet", label: "Bracelet" },
                        { value: "Anklet", label: "Anklet" },
                        { value: "Bangle", label: "Bangle" },
                        { value: "Choker", label: "Choker" },
                        { value: "Pendant", label: "Pendant" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Width">
                    <InputNumber className="formItem" placeholder="1,01" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Material">
                    <Select
                      //   defaultValue="Select Clarity"
                      className="formItem"
                      placeholder="Select Material"
                      onChange={handleChange}
                      options={[
                        { value: "14K White Gold", label: "14KWhiteGold" },
                        { value: "14K Yellow Gold", label: "14KYellowGold" },
                        { value: "14K Rose Gold", label: "14KRoseGold" },
                        { value: "18K White Gold", label: "18KWhiteGold" },
                        { value: "18K Yellow Gold", label: "18KYellowGold" },
                        { value: "18K Rose Gold", label: "18KRoseGold" },
                        { value: "Platinum", label: "Platinum" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormDescript>
                  <Form.Item label="Description">
                    <TextArea
                      placeholder="Description"
                      allowClear
                      onChange={onChange}
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
              </Form>
            </Styled.AdPageContent_Product>
            <Styled.ActionBtn>
              <Link to="/admin/product">
                <Button type="primary" /*onClick={}*/ className="MainBtn">
                    <SaveOutlined />
                    Save
                </Button>
              </Link>

              <Link to="/admin/product">
                <Button /*onClick={}*/ style={{ marginLeft: "10px" }}>
                  Cancel
                </Button>
              </Link>
            </Styled.ActionBtn>
          </Styled.AdPageArea>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default AddProduct;


// import * as Styled from "./Product.styled";
// import React, { useState } from "react";
// import {
//   Select,
//   Input,
//   Form,
//   Button,
//   InputNumber,
//   message,
//   Upload,
//   Modal,
// } from "antd";
// import { InboxOutlined, SaveOutlined } from "@ant-design/icons";
// import type { UploadProps } from "antd";
// import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
// import { Link } from "react-router-dom";
// import TextArea from "antd/es/input/TextArea";
// import 'react-image-crop/dist/ReactCrop.css';
// import ReactCrop, { Crop } from 'react-image-crop';

// const { Dragger } = Upload;

// const uploadProps: UploadProps = {
//   name: "file",
//   multiple: false,
//   action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };

// const AddProduct = () => {
// //   const [form] = Form.useForm(); // Import and usage of Form from 'antd'
//   const [image, setImage] = useState<string | null>(null);
//   const [crop, setCrop] = useState<Crop>({ unit: 'px', width: 100, height: 100, aspect: 1 });
//   const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null); // Initialize state for croppedImageUrl
//   const [visible, setVisible] = useState(false);

//   const handleChange = (value: string) => {
//     console.log(`selected ${value}`);
//   };

//   const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     console.log(e);
//   };

//   const onUploadChange = (info: any) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => {
//       setImage(reader.result as string);
//       setVisible(true);
//     });
//     reader.readAsDataURL(info.file.originFileObj);
//   };

//   const getCroppedImg = (image: HTMLImageElement, crop: Crop) => {
//     const canvas = document.createElement('canvas');
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width!;
//     canvas.height = crop.height!;
//     const ctx = canvas.getContext('2d');

//     if (ctx) {
//       ctx.drawImage(
//         image,
//         crop.x * scaleX,
//         crop.y * scaleY,
//         crop.width! * scaleX,
//         crop.height! * scaleY,
//         0,
//         0,
//         crop.width!,
//         crop.height!
//       );
//     }

//     return new Promise<string>((resolve) => {
//       canvas.toBlob((blob) => {
//         if (blob) {
//           const url = URL.createObjectURL(blob);
//           resolve(url);
//         }
//       }, 'image/jpeg');
//     });
//   };

//   const onCropComplete = async (crop: Crop) => {
//     if (image && crop.width && crop.height) {
//       const croppedImageUrl = await getCroppedImg(document.querySelector('.ReactCrop__image') as HTMLImageElement, crop);
//       setCroppedImageUrl(croppedImageUrl);
//     }
//   };

//   const handleSave = () => {
//     // Lưu sản phẩm ở đây
//   };

//   return (
//     <>
//       <Styled.GlobalStyle />
//       <Styled.ProductAdminArea>
//         <Sidebar />
//         <Styled.AdminPage>
//           <ProductMenu />
//           <Styled.AdPageArea>
//             <Styled.AdPageArea_Title>
//               <h1>Add Product</h1>
//               <p>Add a new product</p>
//             </Styled.AdPageArea_Title>
//             <Styled.AdPageContent_Dia>
//               <Styled.AdPageContent_Title>
//                 <p>Add Diamond</p>
//               </Styled.AdPageContent_Title>
//               <Form layout="vertical" className="AdPageContent_Content">
//                 <Styled.FormItem>
//                   <Form.Item label="Diamond ID">
//                     <Input className="formItem" placeholder="D1234" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Diamond Name">
//                     <Input className="formItem" placeholder="Filled" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Markup Percentage (%)">
//                     <InputNumber className="formItem" placeholder="150" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Price">
//                     <InputNumber className="formItem" placeholder="4,080" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Shape">
//                     <Select
//                       className="formItem"
//                       placeholder="Select Shape"
//                       onChange={handleChange}
//                       options={[
//                         { value: "Round", label: "Round" },
//                         { value: "Princess", label: "Princess" },
//                         { value: "Cushion", label: "Cushion" },
//                         { value: "Oval", label: "Oval" },
//                         { value: "Emerald", label: "Emerald" },
//                         { value: "Pear", label: "Pear" },
//                         { value: "Asscher", label: "Asscher" },
//                         { value: "Heart", label: "Heart" },
//                         { value: "Radiant", label: "Radiant" },
//                         { value: "Marquise", label: "Marquise" },
//                       ]}
//                     />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Color">
//                     <Select
//                       className="formItem"
//                       placeholder="Select Color"
//                       onChange={handleChange}
//                       options={[
//                         { value: "K", label: "K" },
//                         { value: "J", label: "J" },
//                         { value: "I", label: "I" },
//                         { value: "H", label: "H" },
//                         { value: "G", label: "G" },
//                         { value: "F", label: "F" },
//                         { value: "E", label: "E" },
//                         { value: "D", label: "D" },
//                       ]}
//                     />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Polish">
//                     <Input className="formItem" placeholder="Excellent" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Cut">
//                     <Input className="formItem" placeholder="Excellent" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Length/Width Ratio">
//                     <InputNumber className="formItem" placeholder="1,01" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Clarity">
//                     <Select
//                       className="formItem"
//                       placeholder="Select Clarity"
//                       onChange={handleChange}
//                       options={[
//                         { value: "I3", label: "I3" },
//                         { value: "J", label: "I1-I2" },
//                         { value: "SI1S12", label: "SI1-S12" },
//                         { value: "VS1VS2", label: "VS1-VS2" },
//                         { value: "VVS1VVS2", label: "VVS1-VVS2" },
//                         { value: "Flawless", label: "FL-IF" },
//                       ]}
//                     />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Symmetry">
//                     <Input className="formItem" placeholder="Excellent" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Carat Weight">
//                     <InputNumber className="formItem" placeholder="1,01" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Table %">
//                     <InputNumber className="formItem" placeholder="56.0" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Depth %">
//                     <InputNumber className="formItem" placeholder="63.8" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Fluorescence">
//                     <Input className="formItem" placeholder="Strong" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Meas (mm)">
//                     <InputNumber className="formItem" placeholder="6.43x6.40x4.06" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Lab">
//                     <Input className="formItem" placeholder="GIA" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormDescript>
//                   <Form.Item label="Description">
//                     <TextArea
//                       placeholder="Description"
//                       allowClear
//                       onChange={onChange}
//                     />
//                   </Form.Item>
//                 </Styled.FormDescript>
//                 <Styled.UploadFile>
//                   <Form.Item label="Upload Images">
//                     <Dragger {...uploadProps} beforeUpload={onUploadChange}>
//                       <p className="ant-upload-drag-icon">
//                         <InboxOutlined />
//                       </p>
//                       <p className="ant-upload-text">
//                         Click or drag file to this area to upload
//                       </p>
//                       <p className="ant-upload-hint">
//                         Support for a single or bulk upload. Strictly prohibited
//                         from uploading company data or other banned files.
//                       </p>
//                     </Dragger>
//                   </Form.Item>
//                 </Styled.UploadFile>
//                 <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
//                   <ReactCrop
//                     src={image || ''}
//                     crop={crop}
//                     onChange={(newCrop) => setCrop(newCrop)}
//                     onComplete={onCropComplete}
//                   />
//                 </Modal>
//               </Form>
//             </Styled.AdPageContent_Dia>
//             <Styled.AdPageContent_Jewel>
//               <Styled.AdPageContent_Title>
//                 <p>Add Product Setting</p>
//               </Styled.AdPageContent_Title>
//               <Form layout="vertical" className="AdPageContent_Content">
//                 <Styled.FormItem>
//                   <Form.Item label="Product Setting ID">
//                     <Input className="formItem" placeholder="D1234" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Product Setting Name">
//                     <Input className="formItem" placeholder="Filled" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Markup Percentage (%)">
//                     <InputNumber className="formItem" placeholder="150" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Cost Price">
//                     <InputNumber className="formItem" placeholder="4,080" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Type">
//                     <Select
//                       className="formItem"
//                       placeholder="Select Type"
//                       onChange={handleChange}
//                       options={[
//                         { value: "Ring", label: "Ring" },
//                         { value: "Necklace", label: "Necklace" },
//                         { value: "Earring", label: "Earring" },
//                         { value: "Bracelet", label: "Bracelet" },
//                         { value: "Anklet", label: "Anklet" },
//                         { value: "Bangle", label: "Bangle" },
//                         { value: "Choker", label: "Choker" },
//                         { value: "Pendant", label: "Pendant" },
//                       ]}
//                     />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Width">
//                     <InputNumber className="formItem" placeholder="1,01" />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormItem>
//                   <Form.Item label="Material">
//                     <Select
//                       className="formItem"
//                       placeholder="Select Material"
//                       onChange={handleChange}
//                       options={[
//                         { value: "14K White Gold", label: "14KWhiteGold" },
//                         { value: "14K Yellow Gold", label: "14KYellowGold" },
//                         { value: "14K Rose Gold", label: "14KRoseGold" },
//                         { value: "18K White Gold", label: "18KWhiteGold" },
//                         { value: "18K Yellow Gold", label: "18KYellowGold" },
//                         { value: "18K Rose Gold", label: "18KRoseGold" },
//                         { value: "Platinum", label: "Platinum" },
//                       ]}
//                     />
//                   </Form.Item>
//                 </Styled.FormItem>
//                 <Styled.FormDescript>
//                   <Form.Item label="Description">
//                     <TextArea
//                       placeholder="Description"
//                       allowClear
//                       onChange={onChange}
//                     />
//                   </Form.Item>
//                 </Styled.FormDescript>
//                 <Styled.UploadFile>
//                   <Form.Item label="Upload Images">
//                     <Dragger {...uploadProps} beforeUpload={onUploadChange}>
//                       <p className="ant-upload-drag-icon">
//                         <InboxOutlined />
//                       </p>
//                       <p className="ant-upload-text">
//                         Click or drag file to this area to upload
//                       </p>
//                       <p className="ant-upload-hint">
//                         Support for a single or bulk upload. Strictly prohibited
//                         from uploading company data or other banned files.
//                       </p>
//                     </Dragger>
//                   </Form.Item>
//                 </Styled.UploadFile>
//               </Form>
//             </Styled.AdPageContent_Jewel>
//             <Styled.ActionBtn>
//               <Link to="/admin/product">
//                 <Button type="primary" onClick={handleSave} className="MainBtn">
//                   <SaveOutlined />
//                   Save
//                 </Button>
//               </Link>
//               <Link to="/admin/product">
//                 <Button style={{ marginLeft: "10px" }}>
//                   Cancel
//                 </Button>
//               </Link>
//             </Styled.ActionBtn>
//           </Styled.AdPageArea>
//         </Styled.AdminPage>
//       </Styled.ProductAdminArea>
//     </>
//   );
// };

// export default AddProduct;
