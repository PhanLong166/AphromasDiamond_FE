import * as Styled from "./ProductDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, notification } from "antd";
import { Link, useParams } from "react-router-dom";
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
import {
  getDiamondDetails,
  updateDiamond,
  deleteDiamond,
} from "@/services/diamondAPI";
// import { getImage } from "@/services/imageAPI";

const DiamondDetail = () => {
  // const getParamsID = id ? parseInt(id) : 0;
  // const { role } = useAuth();
  const { id } = useParams<{ id: string }>();
  const [activeDiamond, setActiveDiamond] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDiamond, setEditedDiamond] = useState<any | null>(null);
  const [isModalVisibleGIA, setIsModalVisibleGIA] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [diamondMainImage, setDiamondMainImage] = useState("");
  const [diamondSelectedThumb, setDiamondSelectedThumb] = useState(0);
  const [api, contextHolder] = notification.useNotification();

  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} manager successfully` : error,
    });
  };

  useEffect(() => {
    const fetchDiamond = async () => {
      try {
        const response = await getDiamondDetails(Number(id));
        console.log("API Response:", response.data.data);
        const diamondData = response.data.data;
        setActiveDiamond(diamondData);
        setEditedDiamond(diamondData);
        if (diamondData.usingImage && diamondData.usingImage.length > 0) {
          const mainImageURL = `http://localhost:3000/usingImage/${diamondData.usingImage[0].UsingImageID}`;
          setDiamondMainImage(mainImageURL);
        } else {
          setDiamondMainImage("");
        }
        setDiamondSelectedThumb(0);
      } catch (error) {
        console.error("Error fetching diamond details:", error);
      }
    };
    fetchDiamond();
  }, [id]);

  useEffect(() => {
    console.log("Active Diamond:", activeDiamond); // Thêm dòng này để kiểm tra state
  }, [activeDiamond]);

  // GIA
  const showModalGIA = () => {
    setIsModalVisibleGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalVisibleGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalVisibleGIA(false);
  };

   // EDIT

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const handleFieldChange = (fieldName: keyof any, value: any) => {
    if (editedDiamond) {
      setEditedDiamond({
        ...editedDiamond,
        [fieldName]: value,
      });
    }
  };

  const saveChanges = async () => {
    try {
      await updateDiamond(activeDiamond.DiamondID, editedDiamond);
      setIsEditing(false);
      const response = await getDiamondDetails(Number(id));
      setActiveDiamond(response.data.data);
      openNotification("success", "Update", "");
    } catch (error: any) {
      console.error("Error updating diamond:", error);
      openNotification("error", "Update", error.message);
    }
  };

  // DELETE
  const handleDelete = async () => {
    try {
      await deleteDiamond(activeDiamond.DiamondID);
      openNotification("success", "Delete", "");
      setIsModalVisible(false);
      // history.push("/admin/product");
    } catch (error: any) {
      console.error("Failed to delete diamond:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = async () => {
  //   try {
  //     await deleteDiamond(Number(id));
  //     setIsModalVisible(false);
  //   } catch (error) {
  //     console.error("Error deleting diamond:", error);
  //   }
  //   setIsModalVisible(false);
  // };

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
      {contextHolder}

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
                              {activeDiamond.usingImage?.map(
                                (image: any, index: any) => {
                                  const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                  return (
                                    <Styled.Item
                                      key={index}
                                      className={
                                        index === diamondSelectedThumb
                                          ? "selected"
                                          : ""
                                      }
                                      onClick={() =>
                                        changeDiamondImage(imageUrl, index)
                                      }
                                    >
                                      <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Diamond Thumbnail ${index}`}
                                      />
                                    </Styled.Item>
                                  );
                                }
                              )}
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
                              shape: editedDiamond?.Shape,
                              color: editedDiamond?.Color,
                              polish: editedDiamond?.Polish,
                              cut: editedDiamond?.Cut,
                              symmetry: editedDiamond?.Symmetry,
                              clarity: editedDiamond?.Clarity,
                              fluorescence: editedDiamond?.Fluorescence,
                            }}
                            onFinish={saveChanges}
                          >
                            <Form.Item
                              label="Diamond ID"
                              className="InforLine_Title"
                            >
                              <Input
                                value={editedDiamond?.DiamondID}
                                onChange={(e) =>
                                  handleFieldChange("DiamondID", e.target.value)
                                }
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
                                onChange={(e) =>
                                  handleFieldChange("Name", e.target.value)
                                }
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
                                onChange={(e) =>
                                  handleFieldChange("Price", e.target.value)
                                }
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
                                onChange={(e) =>
                                  handleFieldChange(
                                    "ChargeRate",
                                    e.target.value
                                  )
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Shape", value)
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Color", value)
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Polish", value)
                                }
                              />
                            </Form.Item>
                            <Form.Item label="Cut" className="InforLine_Title">
                              <Select
                                placeholder={editedDiamond?.Cut}
                                options={RateType_Option}
                                value={editedDiamond?.Cut}
                                onChange={(value) =>
                                  handleFieldChange("Cut", value)
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Symmetry", value)
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Clarity", value)
                                }
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
                                onChange={(value) =>
                                  handleFieldChange("Fluorescence", value)
                                }
                              />
                            </Form.Item>
                            <Form.Item
                              label="Description"
                              className="InforLine_Title"
                              name="description"
                            >
                              <Input.TextArea
                                value={editedDiamond?.Description}
                                onChange={(e) =>
                                  handleFieldChange(
                                    "Description",
                                    e.target.value
                                  )
                                }
                              />
                            </Form.Item>
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                icon={<SaveOutlined />}
                              >
                                Save Changes
                              </Button>
                              <Button
                                type="default"
                                onClick={cancelEditing}
                                style={{ marginLeft: "8px" }}
                              >
                                Cancel
                              </Button>
                            </Form.Item>
                          </Form>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                    </Styled.PageContent_Mid>
                    {/* <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button
                          type="primary"
                          htmlType="submit"
                          icon={<SaveOutlined />}
                          onClick={saveChanges}
                        >
                          Save
                        </Button>
                        <Button
                          onClick={cancelEditing}
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Styled.ActionBtn_Left>
                    </Styled.ActionBtn> */}
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
                              {activeDiamond.usingImage?.map(
                                (image: any, index: any) => {
                                  const imageUrl = `http://localhost:3000/usingImage/${image.UsingImageID}`;
                                  return (
                                    <Styled.Item
                                      key={index}
                                      className={
                                        index === diamondSelectedThumb
                                          ? "selected"
                                          : ""
                                      }
                                      onClick={() =>
                                        changeDiamondImage(imageUrl, index)
                                      }
                                    >
                                      <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Diamond Thumbnail ${index}`}
                                      />
                                    </Styled.Item>
                                  );
                                }
                              )}
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
                            <p>Diamond ID</p>
                            <span>{activeDiamond.DiamondID}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Diamond Name</p>
                            <span>{editedDiamond.Name}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Price</p>
                            <span>{activeDiamond.Price}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Charge Rate (%)</p>
                            <span>{activeDiamond.ChargeRate}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Shape</p>
                            <span>{activeDiamond.Shape}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Color</p>
                            <span>{activeDiamond.Color}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Polish</p>
                            <span>{activeDiamond.Polish}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Cut</p>
                            <span>{activeDiamond.Cut}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Length/Width Ratio</p>
                            <span>{activeDiamond.LengthOnWidthRatio}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Clarity</p>
                            <span>{activeDiamond.Clarity}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Symmetry</p>
                            <span>{activeDiamond.Symmetry}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p>Fluorescence</p>
                            <span>{activeDiamond.Fluorescence}</span>
                          </Styled.InforLine>
                          <Styled.FormDescript>
                            <p>Description</p>
                            <span>{activeDiamond.Description}</span>
                          </Styled.FormDescript>

                          <Modal
                            title="Confirm Deletion"
                            visible={isModalVisible}
                            onOk={() => handleDelete(activeDiamond.DiamondID)}
                            onCancel={handleCancel}
                          >
                            <p>Are you sure you want to delete this diamond?</p>
                          </Modal>
                        </Styled.ProductContent>
                      </Styled.PageDetail_Infor>
                    </Styled.PageContent_Mid>
                    <Styled.ActionBtn>
                      <Styled.ActionBtn_Left>
                        <Button
                          type="primary"
                          onClick={() => setIsEditing(true)}
                        >
                          Edit
                        </Button>
                        <Link to="/admin/product">
                          <Button style={{ marginLeft: "10px" }}>Back</Button>
                        </Link>
                      </Styled.ActionBtn_Left>
                      <Styled.ActionBtn_Right>
                        <Button type="primary" danger onClick={showModal}>
                          Delete
                        </Button>
                      </Styled.ActionBtn_Right>
                    </Styled.ActionBtn>
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
