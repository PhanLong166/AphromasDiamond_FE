import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import {
  productData,
  diamondData,
  ringData,
  materialData,
} from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";

// const { Option } = Select;

const JewelryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeProduct = productData.find((jewelry) => jewelry.jewelryID === id);
  const activeDiamond = activeProduct
    ? diamondData.find(
        (diamond) => diamond.diamondID === activeProduct.diamondID
      )
    : null;
  const activeRingSetting = activeProduct
    ? ringData.find(
        (jewelrySetting) =>
          jewelrySetting.jewelrySettingID === activeProduct.jewelrySettingID
      )
    : null;

  const activeMaterial = activeRingSetting
    ? materialData.find(
        (material) => material.materialName === activeRingSetting.material
      )
    : null;

  // GIA CERTIFICATE POPUP
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // EDIT INFOR
  const [isEditing, setIsEditing] = useState(false); // Trạng thái để xác định chế độ chỉnh sửa
  const [editedProduct, setEditedProduct] = useState(activeProduct); // Trạng thái lưu các thông tin chỉnh sửa

  const startEditing = () => {
    setIsEditing(true);
    setEditedProduct({ ...activeProduct }); // Khởi tạo dữ liệu chỉnh sửa từ dữ liệu hiện tại
  };

  // Hàm để lưu các thay đổi chỉnh sửa
  const saveChanges = () => {
    // Xử lý logic lưu các thay đổi (ví dụ: gọi API để cập nhật)
    // Sau khi lưu thành công, có thể cập nhật lại trạng thái nếu cần
    setIsEditing(false);
  };

  // Hàm để hủy bỏ chỉnh sửa
  const cancelEditing = () => {
    setIsEditing(false);
    // Nếu cần, có thể khôi phục lại dữ liệu từ trạng thái ban đầu
  };

  // Hàm xử lý thay đổi của từng trường thông tin trong khi chỉnh sửa
  const handleFieldChange = (fieldName: string, value: any) => {
    setEditedProduct({
      ...editedProduct,
      [fieldName]: value,
    });
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />

          <Styled.PageContent>
            {activeProduct ? (
              <>
                {activeDiamond ? (
                  <>
                    {activeRingSetting ? (
                      <>
                        {activeMaterial ? (
                          <>
                          {isEditing ? (
                            <>
                            <Styled.PageContent_Top>
                              <Styled.PageDetail_Title>
                                <p>Product Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeProduct.jewelryImg}
                                    alt={activeProduct.jewelryName}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.SignaInfor>
                                    
                                    <Form.Item label="Jewelry ID" className="InforLine_Title">
                                      <Input
                                        value={activeProduct.jewelryID}
                                        className="InforLine_Title"
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "jewelryID",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Jewelry Name" className="InforLine_Title">
                                      <Input
                                        value={activeProduct.jewelryName}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "jewelryName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Type" className="InforLine_Title">
                                      <Input
                                        value={activeProduct.type}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "type",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Quantity" className="InforLine_Title">
                                      <Input
                                        value={activeProduct.quantity}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "quantity",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  </Styled.SignaInfor>

                                  <Form.Item label="Diamond Price" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.price}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "quantity",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Jewelry Setting Price" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.price}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "quantity",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Processing Fee" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.processingFee}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "processingFee",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Markup Percentage" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.price}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "quantity",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item label="Selling Price" className="InforLine_Title">
                                      <Input
                                        value={(activeProduct.price +
                                          activeRingSetting.price +
                                          activeRingSetting.processingFee) *
                                          (1 +
                                            activeProduct.markupPercentage / 100)}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "sellingPrice",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                            </Styled.PageContent_Top>

                            <Styled.PageContent_Mid>
                              <Styled.PageDetail_Title>
                                <p>Diamond Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeDiamond.diamondImg}
                                    alt={activeDiamond.diamondName}
                                  />
                                  <img
                                    className="GIAExport"
                                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                    alt="GIA Certificate"
                                    onClick={showModal}
                                    style={{ cursor: "pointer" }}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                    <Form.Item label="Diamond ID" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.diamondID}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "diamondID",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Diamond Name" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.diamondName}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "diamondName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Price" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.price}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "price",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Shape" className="InforLine_Title">
                                    <Select
                                    // className="formItem"
                                    placeholder={activeDiamond.shape}
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
                                    value={activeDiamond.shape}
                                  />
                                    </Form.Item>
                                  <Form.Item label="Color" className="InforLine_Title">
                                    <Select
                                    // className="formItem"
                                    placeholder={activeDiamond.color}
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
                                    value={activeDiamond.color}
                                  />
                                    </Form.Item>
                                  <Form.Item label="Polish" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.polish}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "polish",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Cut" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.cut}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "cut",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Length/Width Ratio" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.lwRatio}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "lwRatio",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Clarity" className="InforLine_Title">
                                    <Select
                                    // className="formItem"
                                    placeholder={activeDiamond.clarity}
                                    options={[
                                      { value: "I3", label: "I3" },
                                      { value: "J", label: "I1-I2" },
                                      { value: "SI1S12", label: "SI1-S12" },
                                      { value: "VS1VS2", label: "VS1-VS2" },
                                      { value: "VVS1VVS2", label: "VVS1-VVS2" },
                                      { value: "Flawless", label: "FL-IF" },
                                            ]}
                                    value={activeDiamond.clarity}
                                  />
                                    </Form.Item>
                                  <Form.Item label="Symmetry" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.symmetry}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "symmetry",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Carat Weight" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.caratWeight}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "caratWeight",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Table %" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.tablePercentage}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "tablePercentage",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Depth %" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.depthPercentage}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "depthPercentage",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Fluorescence" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.fluorescence}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "fluorescence",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Description" className="InforLine_Title">
                                      <Input
                                        value={activeDiamond.description}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "description",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>

                              <Modal
                                title="GIA Certificate"
                                visible={isModalVisible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                              >
                                <img
                                  src={activeDiamond.giaCerti}
                                  alt="GIA Certificate"
                                  style={{ width: "100%" }}
                                />
                              </Modal>
                            </Styled.PageContent_Mid>

                            <Styled.PageContent_Bot>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Detail</p>
                              </Styled.PageDetail_Title>

                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeRingSetting.jewelrySettingImg}
                                    alt={activeRingSetting.jewelrySettingName}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Form.Item label="Jewelry Setting ID" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.jewelrySettingID}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "fluorescence",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Jewelry Setting Name" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.jewelrySettingName}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "jewelrySettingName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Jewelry Setting Type" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.type}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "type",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Jewelry Setting Material" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.material}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "material",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Auxiliary Cost" className="InforLine_Title">
                                      <Input
                                        value={activeRingSetting.auxiliaryCost}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "auxiliaryCost",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                  <Form.Item label="Jewelry Setting Price" className="InforLine_Title">
                                      <Input
                                        value={activeMaterial.sellingPrice *
                                          activeRingSetting.width +
                                          activeRingSetting.auxiliaryCost}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "sellingPrice",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                            </Styled.PageContent_Bot>
                            <Styled.ActionBtn>
                              <Button className="MainBtn" onClick={saveChanges}>
                                <SaveOutlined />
                                Save Change
                              </Button>

                              <Link to="/admin/product/jewelry">
                                <Button style={{ marginLeft: "10px" }} onClick={cancelEditing}>
                                  Back
                                </Button>
                              </Link>
                            </Styled.ActionBtn>
                            </>
                          ) : (
                            <>
                            {/* ------------------------------------------------- */}
                              <Styled.PageContent_Top>
                              <Styled.PageDetail_Title>
                                <p>Product Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeProduct.jewelryImg}
                                    alt={activeProduct.jewelryName}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.SignaInfor>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Jewelry ID
                                      </p>
                                      <p>{activeProduct.jewelryID}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Jewelry Name
                                      </p>
                                      <p>{activeProduct.jewelryName}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">Type</p>
                                      <p>{activeProduct.type}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Quantity
                                      </p>
                                      <p>{activeProduct.quantity}</p>
                                    </Styled.InforLine>
                                    
                                    
                                  </Styled.SignaInfor>

                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Price
                                    </p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Price
                                    </p>
                                    <p>{activeProduct.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Processing Fee
                                    </p>
                                    <p>{activeRingSetting.processingFee}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Markup Percentage
                                    </p>
                                    <p>{activeProduct.markupPercentage}%</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Selling Price
                                    </p>
                                    <p>
                                      {(activeProduct.price +
                                        activeRingSetting.price +
                                        activeRingSetting.processingFee) *
                                        (1 +
                                          activeProduct.markupPercentage / 100)}
                                    </p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                            </Styled.PageContent_Top>

                            <Styled.PageContent_Mid>
                              <Styled.PageDetail_Title>
                                <p>Diamond Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeDiamond.diamondImg}
                                    alt={activeDiamond.diamondName}
                                  />
                                  <img
                                    className="GIAExport"
                                    src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                    alt="GIA Certificate"
                                    onClick={showModal}
                                    style={{ cursor: "pointer" }}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond ID
                                    </p>
                                    <p>{activeDiamond.diamondID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Name
                                    </p>
                                    <p>{activeDiamond.diamondName}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Price</p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Shape</p>
                                    <p>{activeDiamond.shape}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Color</p>
                                    <p>{activeDiamond.color}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Polish</p>
                                    <p>{activeDiamond.polish}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Cut</p>
                                    <p>{activeDiamond.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Length/Width Ratio
                                    </p>
                                    <p>{activeDiamond.lwRatio}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Clarity</p>
                                    <p>{activeDiamond.clarity}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Symmetry</p>
                                    <p>{activeDiamond.symmetry}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Carat Weight
                                    </p>
                                    <p>{activeDiamond.caratWeight}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Table %</p>
                                    <p>{activeDiamond.tablePercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Depth %</p>
                                    <p>{activeDiamond.depthPercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Fluorescence
                                    </p>
                                    <p>{activeDiamond.fluorescence}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine_Descrip>
                                    <p className="InforLine_Title">
                                      Description
                                    </p>
                                    <p>{activeDiamond.description}</p>
                                  </Styled.InforLine_Descrip>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>

                              <Modal
                                title="GIA Certificate"
                                visible={isModalVisible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={null}
                              >
                                <img
                                  src={activeDiamond.giaCerti}
                                  alt="GIA Certificate"
                                  style={{ width: "100%" }}
                                />
                              </Modal>
                            </Styled.PageContent_Mid>

                            <Styled.PageContent_Bot>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Detail</p>
                              </Styled.PageDetail_Title>

                              <Styled.PageDetail_Infor>
                                <Styled.ProductImg>
                                  <img
                                    src={activeRingSetting.jewelrySettingImg}
                                    alt={activeRingSetting.jewelrySettingName}
                                  />
                                </Styled.ProductImg>
                                <Styled.ProductContent>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting ID
                                    </p>
                                    <p>{activeRingSetting.jewelrySettingID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Name
                                    </p>
                                    <p>
                                      {activeRingSetting.jewelrySettingName}
                                    </p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Type
                                    </p>
                                    <p>{activeRingSetting.type}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Material
                                    </p>
                                    <p>{activeRingSetting.width}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Auxiliary Cost
                                    </p>
                                    <p>{activeRingSetting.auxiliaryCost}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Price
                                    </p>
                                    <p>
                                      {activeMaterial.sellingPrice *
                                        activeRingSetting.width +
                                        activeRingSetting.auxiliaryCost}
                                    </p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                            </Styled.PageContent_Bot>
                            <Styled.ActionBtn>
                            <Button className="MainBtn" onClick={startEditing}>
                                    Edit
                                  </Button>

                              <Link to="/admin/product/jewelry">
                                <Button style={{ marginLeft: "10px" }}>
                                  Back
                                </Button>
                              </Link>
                            </Styled.ActionBtn>
                            </>
                          )}
                          </>
                        ) : (
                          <div>Material not found.</div>
                        )}
                      </>
                    ) : (
                      <div>Jewelry setting not found.</div>
                    )}
                  </>
                ) : (
                  <div>Diamond not found.</div>
                )}
              </>
            ) : (
              <div>Jewelry not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default JewelryDetail;
