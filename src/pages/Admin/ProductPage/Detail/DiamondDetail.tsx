import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { DiamondDataType, diamondData } from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";
import {
  ClarityType_Option,
  ColorType_Option,
  FluorescenceType_Option,
  RateType_Option,
  ShapeType_Option,
} from "../Diamond/Diamond.type";

const DiamondDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeDiamond = diamondData.find((diamond) => diamond.diamondID === id);

  // GIA CERTIFICATE POPUP
  const [isModalVisibleGIA, setIsModalVisibleGIA] = useState(false);

  const showModalGIA = () => {
    setIsModalVisibleGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalVisibleGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalVisibleGIA(false);
  };

  // EDIT INFOR
  const [isEditing, setIsEditing] = useState(false); // Trạng thái để xác định chế độ chỉnh sửa
  const [editedProduct, setEditedProduct] = useState(activeDiamond); // Trạng thái lưu các thông tin chỉnh sửa

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
  const handleFieldChange = (fieldName: keyof DiamondDataType, value: any) => {
    setEditedProduct({
      ...editedProduct!,
      [fieldName]: value,
    });
  };


    // DELETE JEWELRY
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      // Handle the submission logic here
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


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
                        <Styled.ProductImg>
                          <img
                            src={activeDiamond.diamondImg}
                            alt={activeDiamond.diamondName}
                          />
                          <img
                            className="GIAExport"
                            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                            alt="GIA Certificate"
                            onClick={showModalGIA}
                            style={{ cursor: "pointer" }}
                          />
                        </Styled.ProductImg>
                        <Styled.ProductContent>
                          <Form.Item
                            label="Diamond ID"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.diamondID}
                              onChange={(e) =>
                                handleFieldChange("diamondID", e.target.value)
                              }
                              disabled
                            />
                          </Form.Item>
                          <Form.Item
                            label="Diamond Name"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.diamondName}
                              onChange={(e) =>
                                handleFieldChange("diamondName", e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Price" className="InforLine_Title">
                            <Input
                              value={editedProduct?.price}
                              onChange={(e) =>
                                handleFieldChange("price", e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Shape" className="InforLine_Title">
                            <Select
                              placeholder={editedProduct?.shape}
                              options={ShapeType_Option}
                              value={editedProduct?.shape}
                              onChange={(value) =>
                                handleFieldChange("shape", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Color" className="InforLine_Title">
                            <Select
                              placeholder={editedProduct?.color}
                              options={ColorType_Option}
                              value={editedProduct?.color}
                              onChange={(value) =>
                                handleFieldChange("color", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Polish" className="InforLine_Title">
                            <Select
                              placeholder={editedProduct?.polish}
                              options={RateType_Option}
                              value={editedProduct?.polish}
                              onChange={(value) =>
                                handleFieldChange("polish", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Cut" className="InforLine_Title">
                            <Select
                              placeholder={editedProduct?.cut}
                              options={RateType_Option}
                              value={editedProduct?.cut}
                              onChange={(value) =>
                                handleFieldChange("cut", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label="Length/Width Ratio"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.lwRatio}
                              onChange={(e) =>
                                handleFieldChange("lwRatio", e.target.value)
                              }
                              disabled
                            />
                          </Form.Item>
                          <Form.Item
                            label="Clarity"
                            className="InforLine_Title"
                          >
                            <Select
                              // className="formItem"
                              placeholder={editedProduct?.clarity}
                              options={ClarityType_Option}
                              value={editedProduct?.clarity}
                              onChange={(value) =>
                                handleFieldChange("clarity", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label="Symmetry"
                            className="InforLine_Title"
                          >
                            <Select
                              placeholder={editedProduct?.symmetry}
                              options={RateType_Option}
                              value={editedProduct?.symmetry}
                              onChange={(value) =>
                                handleFieldChange("symmetry", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label="Carat Weight"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.caratWeight}
                              onChange={(e) =>
                                handleFieldChange("caratWeight", e.target.value)
                              }
                              disabled
                            />
                          </Form.Item>
                          <Form.Item
                            label="Table %"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.tablePercentage}
                              onChange={(e) =>
                                handleFieldChange(
                                  "tablePercentage",
                                  e.target.value
                                )
                              }
                              disabled
                            />
                          </Form.Item>
                          <Form.Item
                            label="Depth %"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.depthPercentage}
                              onChange={(e) =>
                                handleFieldChange(
                                  "depthPercentage",
                                  e.target.value
                                )
                              }
                              disabled
                            />
                          </Form.Item>
                          <Form.Item
                            label="Fluorescence"
                            className="InforLine_Title"
                          >
                            <Select
                              placeholder={editedProduct?.fluorescence}
                              options={FluorescenceType_Option}
                              value={editedProduct?.fluorescence}
                              onChange={(value) =>
                                handleFieldChange("fluorescence", value)
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label="Description"
                            className="InforLine_Title"
                          >
                            <Input
                              value={editedProduct?.description}
                              onChange={(e) =>
                                handleFieldChange("description", e.target.value)
                              }
                            />
                          </Form.Item>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>

                      <Modal
                        title="GIA Certificate"
                        visible={isModalVisible}
                        onOk={handleOkGIA}
                        onCancel={handleCancelGIA}
                        footer={null}
                      >
                        <img
                          src={editedProduct?.giaCerti}
                          alt="GIA Certificate"
                          style={{ width: "100%" }}
                        />
                      </Modal>
                    </Styled.PageContent_Mid>

                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button className="MainBtn" onClick={saveChanges}>
                          <SaveOutlined />
                          Save Change
                        </Button>

                        <Link to="/admin/product/jewelry">
                          <Button
                            style={{ marginLeft: "10px" }}
                            onClick={cancelEditing}
                          >
                            Back
                          </Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                    </Styled.ActionBtn>
                  </>
                ) : (
                  <>
                    {/* ------------------------------------------------- */}

                    <Styled.PageContent_Mid>
                      <Styled.PageDetail_Title>
                        <p>Diamond Detail</p>
                      </Styled.PageDetail_Title>
                      <Styled.PageDetail_Infor>
                        <Styled.ProductImg>
                          <img
                            src={editedProduct?.diamondImg}
                            alt={editedProduct?.diamondName}
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
                            <p className="InforLine_Title">Diamond ID</p>
                            <p>{editedProduct?.diamondID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Diamond Name</p>
                            <p>{editedProduct?.diamondName}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Price</p>
                            <p>{editedProduct?.price}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Shape</p>
                            <p>{editedProduct?.shape}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Color</p>
                            <p>{editedProduct?.color}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Polish</p>
                            <p>{editedProduct?.polish}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Cut</p>
                            <p>{editedProduct?.cut}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">
                              Length/Width Ratio
                            </p>
                            <p>{editedProduct?.lwRatio}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Clarity</p>
                            <p>{editedProduct?.clarity}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Symmetry</p>
                            <p>{editedProduct?.symmetry}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Carat Weight</p>
                            <p>{editedProduct?.caratWeight}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Table %</p>
                            <p>{editedProduct?.tablePercentage}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Depth %</p>
                            <p>{editedProduct?.depthPercentage}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Fluorescence</p>
                            <p>{editedProduct?.fluorescence}</p>
                          </Styled.InforLine>
                          <Styled.InforLine_Descrip>
                            <p className="InforLine_Title">Description</p>
                            <p>{editedProduct?.description}</p>
                          </Styled.InforLine_Descrip>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>

                      <Modal
                        title="GIA Certificate"
                        visible={isModalVisibleGIA}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                      >
                        <img
                          src={editedProduct?.giaCerti}
                          alt="GIA Certificate"
                          style={{ width: "100%" }}
                        />
                      </Modal>
                    </Styled.PageContent_Mid>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button
                          onClick={() => setIsEditing(true)}
                          className="MainBtn"
                        >
                          Edit
                        </Button>

                        <Link to="/admin/product">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button className="DeleteBtn" onClick={showModal}>
                          Delete
                        </Button>
                        <Modal
                          title="Select Delivery Person"
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        ></Modal>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
                  </>
                )}
              </>
            ) : (
              <div>Diamond not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default DiamondDetail;
