import * as Styled from "./ProductDetail.styled";
import { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { DiamondDataType, diamondData } from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";


// const { Option } = Select;

const DiamondDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeDiamond = diamondData.find((diamond) => diamond.diamondID === id);

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
  const [editedProduct, setEditedProduct] = useState<DiamondDataType[]>(diamondData); // Trạng thái lưu các thông tin chỉnh sửa

  const startEditing = () => {
    setIsEditing(true);
    // setEditedProduct({ ...activeDiamond }); // Khởi tạo dữ liệu chỉnh sửa từ dữ liệu hiện tại
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
                            onClick={showModal}
                            style={{ cursor: "pointer" }}
                          />
                        </Styled.ProductImg>
                        <Styled.ProductContent>
                          <Form.Item
                            label="Diamond ID"
                            className="InforLine_Title"
                          >
                            <p>{activeDiamond.diamondID}</p>
                          </Form.Item>
                          <Form.Item
                            label="Diamond Name"
                            className="InforLine_Title"
                          >
                            <Input
                              value={activeDiamond.diamondName}
                              onChange={(e) =>
                                handleFieldChange("diamondName", e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Price" className="InforLine_Title">
                            <Input
                              value={activeDiamond.price}
                              onChange={(e) =>
                                handleFieldChange("price", e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item label="Shape" className="InforLine_Title">
                            <Select
                              // className="formItem"
                              placeholder={activeDiamond.shape}
                              options={[
                                { value: "Round", label: "Round" },
                                { value: "Princess", label: "Princess" },
                                { value: "Oval", label: "Oval" },
                                { value: "Marquise", label: "Marquise" },
                                { value: "Pear", label: "Pear" },
                                { value: "Cushion", label: "Cushion" },
                                { value: "Emerald", label: "Emerald" },
                                { value: "Asscher", label: "Asscher" },
                              ]}
                              value={activeDiamond.shape}
                              onChange={(value) => handleFieldChange("shape", value)}
                            />
                          </Form.Item>
                          <Form.Item label="Color" className="InforLine_Title">
                            <Select
                              // className="formItem"
                              placeholder={activeDiamond.color}
                              options={[
                                { value: "D", label: "D" },
                                { value: "E", label: "E" },
                                { value: "F", label: "F" },
                                { value: "G", label: "G" },
                                { value: "H", label: "H" },
                                { value: "I", label: "I" },
                                { value: "J", label: "J" },
                                { value: "K", label: "K" },
                              ]}
                              value={activeDiamond.color}
                              onChange={(value) => handleFieldChange("color", value)}
                            />
                          </Form.Item>
                          <Form.Item label="Polish" className="InforLine_Title">
                            <Select
                              placeholder={activeDiamond.polish}
                              options={[
                                { value: "Excellent", label: "Excellent" },
                                { value: "Very Good", label: "Very Good" },
                                { value: "Good", label: "Good" },
                                { value: "Fair", label: "Fair" },
                                { value: "Poor", label: "Poor" },
                              ]}
                              value={activeDiamond.polish}
                              onChange={(value) => handleFieldChange("polish", value)}
                            />
                          </Form.Item>
                          <Form.Item label="Cut" className="InforLine_Title">
                          <Select
                              placeholder={activeDiamond.cut}
                              options={[
                                { value: "Excellent", label: "Excellent" },
                                { value: "Very Good", label: "Very Good" },
                                { value: "Good", label: "Good" },
                                { value: "Fair", label: "Fair" },
                                { value: "Poor", label: "Poor" },
                              ]}
                              value={activeDiamond.cut}
                              onChange={(value) => handleFieldChange("cut", value)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Length/Width Ratio"
                            className="InforLine_Title"
                          >
                            <p>{activeDiamond.lwRatio}</p>
                          </Form.Item>
                          <Form.Item
                            label="Clarity"
                            className="InforLine_Title"
                          >
                            <Select
                              // className="formItem"
                              placeholder={activeDiamond.clarity}
                              options={[
                                { value: "I3", label: "I3" },
                                { value: "I1-I2", label: "I1-I2" },
                                { value: "SI1-S12", label: "SI1-S12" },
                                { value: "VS1-VS2", label: "VS1-VS2" },
                                { value: "VVS1-VVS2", label: "VVS1-VVS2" },
                                { value: "FL-IF", label: "FL-IF" },
                              ]}
                              value={activeDiamond.clarity}
                              onChange={(value) => handleFieldChange("clarity", value)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Symmetry"
                            className="InforLine_Title"
                          >
                            <Select
                              placeholder={activeDiamond.symmetry}
                              options={[
                                { value: "Excellent", label: "Excellent" },
                                { value: "Very Good", label: "Very Good" },
                                { value: "Good", label: "Good" },
                                { value: "Fair", label: "Fair" },
                                { value: "Poor", label: "Poor" },
                              ]}
                              value={activeDiamond.symmetry}
                              onChange={(value) => handleFieldChange("symmetry", value)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Carat Weight"
                            className="InforLine_Title"
                          >
                            <p>{activeDiamond.caratWeight}</p>
                          </Form.Item>
                          <Form.Item
                            label="Table %"
                            className="InforLine_Title"
                          >
                            <p>{activeDiamond.tablePercentage}</p>
                          </Form.Item>
                          <Form.Item
                            label="Depth %"
                            className="InforLine_Title"
                          >
                            <p>{activeDiamond.depthPercentage}</p>
                          </Form.Item>
                          <Form.Item
                            label="Fluorescence"
                            className="InforLine_Title"
                          >
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
                          <Form.Item
                            label="Description"
                            className="InforLine_Title"
                          >
                            <Input
                              value={activeDiamond.description}
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

                    <Styled.ActionBtn>
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
                            <p className="InforLine_Title">Diamond ID</p>
                            <p>{activeDiamond.diamondID}</p>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Diamond Name</p>
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
                            <p>{activeDiamond.cut}</p>
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
                            <p className="InforLine_Title">Carat Weight</p>
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
                            <p className="InforLine_Title">Fluorescence</p>
                            <p>{activeDiamond.fluorescence}</p>
                          </Styled.InforLine>
                          <Styled.InforLine_Descrip>
                            <p className="InforLine_Title">Description</p>
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
                    <Styled.ActionBtn>
                      <Button className="MainBtn" onClick={startEditing}>
                        Edit
                      </Button>

                      <Link to="/admin/product/jewelry">
                        <Button style={{ marginLeft: "10px" }}>Back</Button>
                      </Link>
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
