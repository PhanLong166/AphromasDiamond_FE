// import * as Styled from "./ProductDetail.styled";
// import { useEffect, useState } from "react";
// import { Button, Modal, Form, Input, Select } from "antd";
// import { Link, useParams } from "react-router-dom";
// import Sidebar from "@/components/Admin/Sidebar/Sidebar";
// import { DiamondDataType, diamondData } from "../ProductData";
// import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
// import { SaveOutlined } from "@ant-design/icons";
// import {
//   ClarityType_Option,
//   ColorType_Option,
//   FluorescenceType_Option,
//   RateType_Option,
//   ShapeType_Option,
// } from "../Diamond/Diamond.type";

// const DiamondDetail = () => {
//   // const [form] = Form.useForm();
//   const { id } = useParams<{ id: string }>();
//   const activeDiamond = diamondData.find((diamond) => diamond.diamondID === id);

//   // GIA CERTIFICATE POPUP
//   const [isModalVisibleGIA, setIsModalVisibleGIA] = useState(false);

//   const showModalGIA = () => {
//     setIsModalVisibleGIA(true);
//   };

//   const handleOkGIA = () => {
//     setIsModalVisibleGIA(false);
//   };

//   const handleCancelGIA = () => {
//     setIsModalVisibleGIA(false);
//   };

//   // EDIT INFOR
//   const [isEditing, setIsEditing] = useState(false); // Trạng thái để xác định chế độ chỉnh sửa
//   const [editedProduct, setEditedProduct] = useState(activeDiamond); // Trạng thái lưu các thông tin chỉnh sửa

//   const saveChanges = () => {
//     console.log(editedProduct);
//     setIsEditing(false);
//   };

//   const cancelEditing = () => {
//     setIsEditing(false);
//   };

//   const handleFieldChange = (fieldName: keyof DiamondDataType, value: any) => {
//     setEditedProduct({
//       ...editedProduct!,
//       [fieldName]: value,
//     });
//   };

//   // DELETE JEWELRY
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   // IMAGE STATES
//   const [diamondMainImage, setDiamondMainImage] = useState("");
//   const [diamondSelectedThumb, setDiamondSelectedThumb] = useState(0);

//   useEffect(() => {
//     if (activeDiamond) {
//       setDiamondMainImage(activeDiamond.diamondImg[0]);
//       setDiamondSelectedThumb(0);
//     }
//   }, [activeDiamond]);

//   if (!activeDiamond) {
//     return <div>Diamond not found</div>;
//   }

//   const changeDiamondImage = (src: string, index: number) => {
//     setDiamondMainImage(src);
//     setDiamondSelectedThumb(index);
//   };

//   return (
//     <>
//       <Styled.GlobalStyle />
//       <Styled.PageAdminArea>
//         <Sidebar />
//         <Styled.AdminPage>
//           <ProductMenu />

//           <Styled.PageContent>
//             {activeDiamond ? (
//               <>
//                 {isEditing ? (
//                   <>
//                     <Styled.PageContent_Mid>
//                       <Styled.PageDetail_Title>
//                         <p>Diamond Detail</p>
//                       </Styled.PageDetail_Title>
//                       <Styled.PageDetail_Infor>
//                         {/* <Styled.ProductImg>
//                           <img
//                             src={activeDiamond.diamondImg}
//                             alt={activeDiamond.diamondName}
//                           />
//                           <img
//                             className="GIAExport"
//                             src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
//                             alt="GIA Certificate"
//                             onClick={showModalGIA}
//                             style={{ cursor: "pointer" }}
//                           />
//                         </Styled.ProductImg> */}

//                         <Styled.ImageContainer>
//                           <Styled.OuterThumb>
//                             <Styled.ThumbnailImage>
//                               {activeDiamond.diamondImg.map((image, index) => (
//                                 <Styled.Item
//                                   key={index}
//                                   className={
//                                     index === diamondSelectedThumb
//                                       ? "selected"
//                                       : ""
//                                   }
//                                   onClick={() =>
//                                     changeDiamondImage(image, index)
//                                   }
//                                 >
//                                   <img
//                                     key={index}
//                                     src={image}
//                                     alt={`Diamond Thumbnail ${index}`}
//                                   />
//                                 </Styled.Item>
//                               ))}
//                             </Styled.ThumbnailImage>
//                           </Styled.OuterThumb>
//                           <Styled.OuterMain>
//                             <Styled.MainImage>
//                               <img
//                                 id="mainImage"
//                                 src={diamondMainImage}
//                                 alt="Main"
//                               />
//                               <img
//                                 className="GIAExport"
//                                 src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
//                                 alt="GIA Certificate"
//                                 onClick={showModalGIA}
//                                 style={{ cursor: "pointer" }}
//                               />
//                             </Styled.MainImage>
//                           </Styled.OuterMain>
//                         </Styled.ImageContainer>

//                         <Styled.ProductContent>
//                           <Form
//                             // form={form}
//                             // layout="vertical"
//                             // className="AdPageContent_Content"

//                             layout="vertical"
//                             initialValues={{
//                               diamondName: editedProduct?.diamondName,
//                               price: editedProduct?.price,
//                               chargeRate: editedProduct?.chargeRate,
//                               description: editedProduct?.description,
//                             }}
//                             onFinish={(values) => {
//                               console.log(values);
//                               setIsEditing(false);
//                               // Update the editedSetting with new values
//                               setEditedProduct({
//                                 ...editedProduct!,
//                                 diamondName: values.diamondName,
//                                 price: values.price,
//                                 description: values.description,
//                                 chargeRate: values.chargeRate,
//                               });
//                             }}
//                           >
//                             <Form.Item
//                               label="Diamond ID"
//                               className="InforLine_Title"
//                             >
//                               <Input
//                                 value={editedProduct?.diamondID}
//                                 onChange={(e) =>
//                                   handleFieldChange("diamondID", e.target.value)
//                                 }
//                                 disabled
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Diamond Name"
//                               className="InforLine_Title"
//                               name="diamondName"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Diamond Name is required.",
//                                 },
//                                 {
//                                   pattern: /^[a-zA-Z0-9\s()-.]*$/,
//                                   message:
//                                     "Only alphabet, numbers, (), - and . are allowed.",
//                                 },
//                                 {
//                                   max: 300,
//                                   message:
//                                     "Diamond Name must be at most 300 characters long.",
//                                 },
//                                 {
//                                   whitespace: true,
//                                   message: "Not only has whitespace.",
//                                 },
//                               ]}
//                             >
//                               <Input
//                                 onChange={(e) =>
//                                   handleFieldChange(
//                                     "diamondName",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Price"
//                               className="InforLine_Title"
//                               name="price"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Price is required.",
//                                 },
//                                 {
//                                   type: "number",
//                                   min: 0,
//                                   max: 1000000,
//                                   message:
//                                     "Must be a positive number and less than or equal to $1,000,000 USD.",
//                                 },
//                                 {
//                                   whitespace: true,
//                                   message: "Not only has whitespace.",
//                                 },
//                               ]}
//                             >
//                               <Input
//                                 onChange={(e) =>
//                                   handleFieldChange("price", e.target.value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Charge Rate (%)"
//                               className="InforLine_Title"
//                               name="chargeRate"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Rate is required.",
//                                 },
//                                 {
//                                   type: "number",
//                                   min: 1,
//                                   max: 100,
//                                   message:
//                                     "Must be a positive number and less than or equal to 100",
//                                 },
//                                 {
//                                   whitespace: true,
//                                   message: "Not only has whitespace.",
//                                 },
//                               ]}
//                             >
//                               <Input
//                                 onChange={(e) =>
//                                   handleFieldChange("price", e.target.value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Shape"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 placeholder={editedProduct?.shape}
//                                 options={ShapeType_Option}
//                                 value={editedProduct?.shape}
//                                 onChange={(value) =>
//                                   handleFieldChange("shape", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Color"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 placeholder={editedProduct?.color}
//                                 options={ColorType_Option}
//                                 value={editedProduct?.color}
//                                 onChange={(value) =>
//                                   handleFieldChange("color", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Polish"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 placeholder={editedProduct?.polish}
//                                 options={RateType_Option}
//                                 value={editedProduct?.polish}
//                                 onChange={(value) =>
//                                   handleFieldChange("polish", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item label="Cut" className="InforLine_Title">
//                               <Select
//                                 placeholder={editedProduct?.cut}
//                                 options={RateType_Option}
//                                 value={editedProduct?.cut}
//                                 onChange={(value) =>
//                                   handleFieldChange("cut", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Length/Width Ratio"
//                               className="InforLine_Title"
//                             >
//                               <Input
//                                 value={editedProduct?.lwRatio}
//                                 onChange={(e) =>
//                                   handleFieldChange("lwRatio", e.target.value)
//                                 }
//                                 disabled
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Clarity"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 // className="formItem"
//                                 placeholder={editedProduct?.clarity}
//                                 options={ClarityType_Option}
//                                 value={editedProduct?.clarity}
//                                 onChange={(value) =>
//                                   handleFieldChange("clarity", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Symmetry"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 placeholder={editedProduct?.symmetry}
//                                 options={RateType_Option}
//                                 value={editedProduct?.symmetry}
//                                 onChange={(value) =>
//                                   handleFieldChange("symmetry", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Carat Weight"
//                               className="InforLine_Title"
//                             >
//                               <Input
//                                 value={editedProduct?.caratWeight}
//                                 onChange={(e) =>
//                                   handleFieldChange(
//                                     "caratWeight",
//                                     e.target.value
//                                   )
//                                 }
//                                 disabled
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Table %"
//                               className="InforLine_Title"
//                             >
//                               <Input
//                                 value={editedProduct?.tablePercentage}
//                                 onChange={(e) =>
//                                   handleFieldChange(
//                                     "tablePercentage",
//                                     e.target.value
//                                   )
//                                 }
//                                 disabled
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Depth %"
//                               className="InforLine_Title"
//                             >
//                               <Input
//                                 value={editedProduct?.depthPercentage}
//                                 onChange={(e) =>
//                                   handleFieldChange(
//                                     "depthPercentage",
//                                     e.target.value
//                                   )
//                                 }
//                                 disabled
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Fluorescence"
//                               className="InforLine_Title"
//                             >
//                               <Select
//                                 placeholder={editedProduct?.fluorescence}
//                                 options={FluorescenceType_Option}
//                                 value={editedProduct?.fluorescence}
//                                 onChange={(value) =>
//                                   handleFieldChange("fluorescence", value)
//                                 }
//                               />
//                             </Form.Item>
//                             <Form.Item
//                               label="Description"
//                               className="InforLine_Title"
//                               name="description"
//                               rules={[
//                                 {
//                                   required: true,
//                                   message: "Description is required.",
//                                 },
//                                 {
//                                   pattern: /^[a-zA-Z0-9\s()-.]*$/,
//                                   message:
//                                     "Only alphabet, numbers, (), - and . are allowed.",
//                                 },
//                                 {
//                                   whitespace: true,
//                                   message: "Not only has whitespace.",
//                                 },
//                               ]}
//                             >
//                               <Input
//                                 onChange={(e) =>
//                                   handleFieldChange(
//                                     "description",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                             </Form.Item>
//                           </Form>
//                         </Styled.ProductContent>
//                       </Styled.PageDetail_Infor>

//                       <Modal
//                         title="GIA Certificate"
//                         visible={isModalVisibleGIA}
//                         onOk={handleOkGIA}
//                         onCancel={handleCancelGIA}
//                         footer={null}
//                       >
//                         <img
//                           src={editedProduct?.giaCerti}
//                           alt="GIA Certificate"
//                           style={{ width: "100%" }}
//                         />
//                       </Modal>
//                     </Styled.PageContent_Mid>

//                     <Styled.ActionBtn>
//                       <Styled.ActionBtn_Left>
//                         <Button
//                           type="primary"
//                           htmlType="submit"
//                           className="MainBtn"
//                           onClick={saveChanges}
//                         >
//                           <SaveOutlined />
//                           Save Change
//                         </Button>

//                         <Link to="/admin/product">
//                           <Button
//                             style={{ marginLeft: "10px" }}
//                             onClick={cancelEditing}
//                           >
//                             Back
//                           </Button>
//                         </Link>
//                       </Styled.ActionBtn_Left>
//                     </Styled.ActionBtn>
//                   </>
//                 ) : (
//                   <>
//                     {/* ------------------------------------------------- */}

//                     <Styled.PageContent_Mid>
//                       <Styled.PageDetail_Title>
//                         <p>Diamond Detail</p>
//                       </Styled.PageDetail_Title>
//                       <Styled.PageDetail_Infor>
//                         <Styled.ImageContainer>
//                           <Styled.OuterThumb>
//                             <Styled.ThumbnailImage>
//                               {activeDiamond.diamondImg.map((image, index) => (
//                                 <Styled.Item
//                                   key={index}
//                                   className={
//                                     index === diamondSelectedThumb
//                                       ? "selected"
//                                       : ""
//                                   }
//                                   onClick={() =>
//                                     changeDiamondImage(image, index)
//                                   }
//                                 >
//                                   <img
//                                     key={index}
//                                     src={image}
//                                     alt={`Diamond Thumbnail ${index}`}
//                                   />
//                                 </Styled.Item>
//                               ))}
//                             </Styled.ThumbnailImage>
//                           </Styled.OuterThumb>
//                           <Styled.OuterMain>
//                             <Styled.MainImage>
//                               <img
//                                 id="mainImage"
//                                 src={diamondMainImage}
//                                 alt="Main"
//                               />
//                               <img
//                                 className="GIAExport"
//                                 src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
//                                 alt="GIA Certificate"
//                                 onClick={showModalGIA}
//                                 style={{ cursor: "pointer" }}
//                               />
//                             </Styled.MainImage>
//                           </Styled.OuterMain>
//                         </Styled.ImageContainer>
//                         <Styled.ProductContent>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Diamond ID</p>
//                             <p>{editedProduct?.diamondID}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Diamond Name</p>
//                             <p>{editedProduct?.diamondName}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Price</p>
//                             <p>{editedProduct?.price}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Charge Rate (%)</p>
//                             <p>{editedProduct?.chargeRate}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Shape</p>
//                             <p>{editedProduct?.shape}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Color</p>
//                             <p>{editedProduct?.color}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Polish</p>
//                             <p>{editedProduct?.polish}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Cut</p>
//                             <p>{editedProduct?.cut}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">
//                               Length/Width Ratio
//                             </p>
//                             <p>{editedProduct?.lwRatio}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Clarity</p>
//                             <p>{editedProduct?.clarity}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Symmetry</p>
//                             <p>{editedProduct?.symmetry}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Carat Weight</p>
//                             <p>{editedProduct?.caratWeight}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Table %</p>
//                             <p>{editedProduct?.tablePercentage}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Depth %</p>
//                             <p>{editedProduct?.depthPercentage}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine>
//                             <p className="InforLine_Title">Fluorescence</p>
//                             <p>{editedProduct?.fluorescence}</p>
//                           </Styled.InforLine>
//                           <Styled.InforLine_Descrip>
//                             <p className="InforLine_Title">Description</p>
//                             <p>{editedProduct?.description}</p>
//                           </Styled.InforLine_Descrip>
//                         </Styled.ProductContent>
//                       </Styled.PageDetail_Infor>

//                       <Modal
//                         title="GIA Certificate"
//                         visible={isModalVisibleGIA}
//                         onOk={handleCancelGIA}
//                         onCancel={handleCancelGIA}
//                         footer={null}
//                       >
//                         <img
//                           src={editedProduct?.giaCerti}
//                           alt="GIA Certificate"
//                           style={{ width: "100%" }}
//                         />
//                       </Modal>
//                     </Styled.PageContent_Mid>
//                     <Styled.ActionBtn>
//                       <Styled.ActionBtn_Left>
//                         <Button
//                           onClick={() => setIsEditing(true)}
//                           className="MainBtn"
//                         >
//                           Edit
//                         </Button>

//                         <Link to="/admin/product">
//                           <Button style={{ marginLeft: "10px" }}>Back</Button>
//                         </Link>
//                       </Styled.ActionBtn_Left>
//                       <Styled.ActionBtn_Right>
//                         <Button className="DeleteBtn" onClick={showModal}>
//                           Delete
//                         </Button>
//                         <Modal
//                           title="Select Delivery Person"
//                           visible={isModalVisible}
//                           onOk={handleOk}
//                           onCancel={handleCancel}
//                         ></Modal>
//                       </Styled.ActionBtn_Right>
//                     </Styled.ActionBtn>
//                   </>
//                 )}
//               </>
//             ) : (
//               <div>Diamond not found.</div>
//             )}
//           </Styled.PageContent>
//         </Styled.AdminPage>
//       </Styled.PageAdminArea>
//     </>
//   );
// };

// export default DiamondDetail;


import * as Styled from "./ProductDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";
import {
  ClarityType_Option,
  ColorType_Option,
  FluorescenceType_Option,
  RateType_Option,
  ShapeType_Option,
} from "../Diamond/Diamond.type";
import { getDiamondDetails, updateDiamond, deleteDiamond } from "@/services/diamondAPI";

type DiamondImage = {
  url: string;
  Name: string;
  UsingImageID: number;
};

type Diamond = {
  DiamondID: string;
  Name: string;
  Price: string;
  ChargeRate: string;
  Shape: string;
  Color: string;
  Polish: string;
  Cut: string;
  LengthOnWidthRatio: string;
  Clarity: string;
  Symmetry: string;
  Fluorescence: string;
  Description: string;
  usingImage: DiamondImage[];
};

const DiamondDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeDiamond, setActiveDiamond] = useState<Diamond | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiamond, setEditedDiamond] = useState<Diamond | null>(null);
  const [isModalVisibleGIA, setIsModalVisibleGIA] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [diamondMainImage, setDiamondMainImage] = useState("");
  const [diamondSelectedThumb, setDiamondSelectedThumb] = useState(0);

  useEffect(() => {
    const fetchDiamond = async () => {
      try {
        const response = await getDiamondDetails(Number(id));
        console.log("API Response:", response.data); // Thêm dòng này để kiểm tra dữ liệu trả về
        const diamondData = response.data;
        setActiveDiamond(diamondData);
        setEditedDiamond(diamondData);
        if (diamondData.usingImage.length > 0) {
          const mainImage = `http://localhost:3000/usingImage/${diamondData.usingImage[0].UsingImageID}`;
          setDiamondMainImage(mainImage);
        }
      } catch (error) {
        console.error("Error fetching diamond details:", error);
      }
    };
    fetchDiamond();
  }, [id]);

  useEffect(() => {
    console.log("Active Diamond:", activeDiamond); // Thêm dòng này để kiểm tra state
  }, [activeDiamond]);
  

  const showModalGIA = () => {
    setIsModalVisibleGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalVisibleGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalVisibleGIA(false);
  };

  const saveChanges = async () => {
    try {
      if (editedDiamond) {
        await updateDiamond(Number(id), editedDiamond);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating diamond:", error);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const handleFieldChange = (fieldName: keyof Diamond, value: any) => {
    if (editedDiamond) {
      setEditedDiamond({
        ...editedDiamond,
        [fieldName]: value,
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      await deleteDiamond(Number(id));
      // Redirect to product list after deletion
    } catch (error) {
      console.error("Error deleting diamond:", error);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeDiamondImage = (src: string, index: number) => {
    setDiamondMainImage(src);
    setDiamondSelectedThumb(index);
  };

  if (!activeDiamond) {
    return <div>Diamond not found</div>;
  }

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />
          <Styled.PageContent>
            {activeDiamond ? (
              <>
                {isEditing ? (
                  <>
                    <Styled.PageContent_Mid>
                      <Styled.PageDetail_Title>
                        <p>Diamond Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.ImageContainer>
                          <Styled.OuterThumb>
                            <Styled.ThumbnailImage>
                              {activeDiamond.usingImage?.map((image, index) => {
                                const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                return (
                                  <Styled.Item
                                    key={index}
                                    className={index === diamondSelectedThumb ? "selected" : ""}
                                    onClick={() => changeDiamondImage(imageUrl, index)}
                                  >
                                    <img
                                      key={index}
                                      src={imageUrl}
                                      alt={`Diamond Thumbnail ${index}`}
                                    />
                                  </Styled.Item>
                                );
                              })}
                            </Styled.ThumbnailImage>
                          </Styled.OuterThumb>
                          <Styled.OuterMain>
                            <Styled.MainImage>
                              <img
                                id="mainImage"
                                src={diamondMainImage}
                                alt="Main"
                              />
                              <img
                                className="GIAExport"
                                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                alt="GIA Certificate"
                                onClick={showModalGIA}
                                style={{ cursor: "pointer" }}
                              />
                            </Styled.MainImage>
                          </Styled.OuterMain>
                        </Styled.ImageContainer>
                        <Styled.ProductContent>
                          <Form
                            className="AdPageContent_Content"
                            layout="vertical"
                            initialValues={{
                              diamondName: editedDiamond?.Name,
                              price: editedDiamond?.Price,
                              chargeRate: editedDiamond?.ChargeRate,
                              description: editedDiamond?.Description,
                            }}
                            // onFinish={(values) => {
                            //   console.log(values);
                            //   setIsEditing(false);
                            //   setEditedDiamond({
                            //     ...editedDiamond!,
                            //     Name: values.diamondName,
                            //     Price: values.price,
                            //     Description: values.description,
                            //     ChargeRate: values.chargeRate,
                            //   });
                            // }}
                            onFinish={saveChanges}
                          >
                            <Form.Item
                              label="Diamond ID"
                              className="InforLine_Title"
                            >
                              <Input
                                value={editedDiamond?.DiamondID}
                                onChange={(e) => handleFieldChange("DiamondID", e.target.value)}
                                disabled
                              />
                            </Form.Item>
                            <Form.Item
                              label="Diamond Name"
                              className="InforLine_Title"
                              name="diamondName"
                              rules={[
                                {
                                  required: true,
                                  message: "Diamond Name is required.",
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => handleFieldChange("Name", e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Price"
                              className="InforLine_Title"
                              name="price"
                              rules={[
                                {
                                  required: true,
                                  message: "Price is required.",
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => handleFieldChange("Price", e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Charge Rate (%)"
                              className="InforLine_Title"
                              name="chargeRate"
                              rules={[
                                {
                                  required: true,
                                  message: "Rate is required.",
                                },
                              ]}
                            >
                              <Input
                                onChange={(e) => handleFieldChange("ChargeRate", e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Shape"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Shape}
                                options={ShapeType_Option}
                                value={editedDiamond?.Shape}
                                onChange={(value) => handleFieldChange("Shape", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Color"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Color}
                                options={ColorType_Option}
                                value={editedDiamond?.Color}
                                onChange={(value) => handleFieldChange("Color", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Polish"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Polish}
                                options={RateType_Option}
                                value={editedDiamond?.Polish}
                                onChange={(value) => handleFieldChange("Polish", value)}
                              />
                            </Form.Item>
                            <Form.Item label="Cut" className="InforLine_Title">
                              <Select
                                placeholder={editedDiamond?.Cut}
                                options={RateType_Option}
                                value={editedDiamond?.Cut}
                                onChange={(value) => handleFieldChange("Cut", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Length/Width Ratio"
                              className="InforLine_Title"
                            >
                              <Input
                                value={editedDiamond?.LengthOnWidthRatio}
                                onChange={(e) => handleFieldChange("LengthOnWidthRatio", e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Clarity"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Clarity}
                                options={ClarityType_Option}
                                value={editedDiamond?.Clarity}
                                onChange={(value) => handleFieldChange("Clarity", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Symmetry"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Symmetry}
                                options={RateType_Option}
                                value={editedDiamond?.Symmetry}
                                onChange={(value) => handleFieldChange("Symmetry", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Fluorescence"
                              className="InforLine_Title"
                            >
                              <Select
                                placeholder={editedDiamond?.Fluorescence}
                                options={FluorescenceType_Option}
                                value={editedDiamond?.Fluorescence}
                                onChange={(value) => handleFieldChange("Fluorescence", value)}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Description"
                              className="InforLine_Title"
                              name="description"
                            >
                              <Input.TextArea
                                onChange={(e) => handleFieldChange("Description", e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                icon={<SaveOutlined />}
                                // onClick={saveChanges}
                              >
                                Save
                              </Button>
                              <Button onClick={cancelEditing}>Cancel</Button>
                            </Form.Item>
                          </Form>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                    </Styled.PageContent_Mid>
                  </>
                ) : (
                  <>
                    <Styled.PageContent_Mid>
                      <Styled.PageDetail_Title>
                        <p>Diamond Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.ImageContainer>
                          <Styled.OuterThumb>
                            <Styled.ThumbnailImage>
                              {activeDiamond.usingImage?.map((image, index) => {
                                 const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                return (
                                  <Styled.Item
                                    key={index}
                                    className={index === diamondSelectedThumb ? "selected" : ""}
                                    onClick={() => changeDiamondImage(imageUrl, index)}
                                  >
                                    <img
                                      key={index}
                                      src={imageUrl}
                                      alt={`Diamond Thumbnail ${index}`}
                                    />
                                  </Styled.Item>
                                );
                              })}
                            </Styled.ThumbnailImage>
                          </Styled.OuterThumb>
                          <Styled.OuterMain>
                            <Styled.MainImage>
                              <img
                                id="mainImage"
                                src={diamondMainImage}
                                alt="Main"
                              />
                              <img
                                className="GIAExport"
                                src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                alt="GIA Certificate"
                                onClick={showModalGIA}
                                style={{ cursor: "pointer" }}
                              />
                            </Styled.MainImage>
                          </Styled.OuterMain>
                        </Styled.ImageContainer>
                        <Styled.ProductContent>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Diamond ID</p>
                              <span>{activeDiamond.DiamondID}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Diamond Name</p>
                              <span>{activeDiamond.Name}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Price</p>
                              <span>{activeDiamond.Price}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Charge Rate (%)</p>
                              <span>{activeDiamond.ChargeRate}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Shape</p>
                              <span>{activeDiamond.Shape}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Color</p>
                              <span>{activeDiamond.Color}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Polish</p>
                              <span>{activeDiamond.Polish}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Cut</p>
                              <span>{activeDiamond.Cut}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Length/Width Ratio</p>
                              <span>{activeDiamond.LengthOnWidthRatio}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Clarity</p>
                              <span>{activeDiamond.Clarity}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Symmetry</p>
                              <span>{activeDiamond.Symmetry}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Fluorescence</p>
                              <span>{activeDiamond.Fluorescence}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <Styled.InforLine>
                              <p>Description</p>
                              <span>{activeDiamond.Description}</span>
                            </Styled.InforLine>
                          </Styled.InforLine>
                          <Styled.ActionBtn>
                            <Button type="primary" onClick={() => setIsEditing(true)}>
                              Edit
                            </Button>
                            <Button type="primary" danger onClick={showModal}>
                              Delete
                            </Button>
                          </Styled.ActionBtn>
                          <Modal
                            title="Confirm Deletion"
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <p>Are you sure you want to delete this diamond?</p>
                          </Modal>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                    </Styled.PageContent_Mid>
                  </>
                )}
                <Modal
                  title="GIA Certificate"
                  visible={isModalVisibleGIA}
                  onOk={handleOkGIA}
                  onCancel={handleCancelGIA}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-sample.png?alt=media&token=9ed7ddf5-9d34-4c8c-a3dd-1358b2d636f0"
                    alt="GIA Certificate"
                    style={{ width: "100%" }}
                  />
                </Modal>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default DiamondDetail;
