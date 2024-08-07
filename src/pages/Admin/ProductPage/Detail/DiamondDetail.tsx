import * as Styled from "./ProductDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, notification } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";
import {
  ClarityType_Option,
  ColorType_Option,
  FluorescenceType_Option,
  ShapeType_Option,
} from "../Diamond/Diamond.type";
import {
  getDiamondDetails,
  updateDiamond,
} from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";

const DiamondDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
    console.log("Active Diamond:", activeDiamond);
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
      const updateData = { ...editedDiamond };
      console.log(`Updating diamond with ID: ${activeDiamond.DiamondID}`);
      console.log("Update Data:", updateData);
      const response = await updateDiamond(
        editedDiamond.DiamondID,
        editedDiamond
      );
      console.log("Update Response:", response);

      // Check if the update was successful
      if (response.status === 200) {
        const updatedDiamondResponse = await getDiamondDetails(
          editedDiamond.DiamondID
        );
        setActiveDiamond(updatedDiamondResponse.data.data);
        setEditedDiamond(updatedDiamondResponse.data.data);
        openNotification("success", "Update", "");
        setIsEditing(false);
      } else {
        openNotification("error", "Update", "Failed to update diamond.");
      }
    } catch (error: any) {
      console.error("Error updating diamond:", error);
      openNotification("error", "Update", error.message);
    }
  };

  // DELETE
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    try {
      const response = await updateDiamond(activeDiamond.DiamondID, {
        IsActive: false,
      });
      console.log("Delete Response:", response.data);
      if (response.status === 200) {
        openNotification("success", "Delete", "");
        setIsModalVisible(false);
        navigate("/admin/product");
      } else {
        openNotification("error", "Delete", "Failed to delete diamond.");
      }
    } catch (error: any) {
      console.error("Failed to delete diamond:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // IMAGE STATES
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
                    <Form
                      className="AdPageContent_Content"
                      layout="vertical"
                      initialValues={{
                        diamondName: editedDiamond?.Name,
                        price: editedDiamond?.Price,
                        discountPrice: editedDiamond?.DiscountPrice,
                        chargeRate: editedDiamond?.ChargeRate,
                        description: editedDiamond?.Description,
                        weightCarat: editedDiamond?.WeightCarat,
                        shape: editedDiamond?.Shape,
                        color: editedDiamond?.Color,
                        polish: editedDiamond?.Polish,
                        cut: editedDiamond?.Cut,
                        symmetry: editedDiamond?.Symmetry,
                        clarity: editedDiamond?.Clarity,
                        fluorescence: editedDiamond?.Fluorescence,
                        percentDepth: editedDiamond?.PercentDepth,
                        percentTable: editedDiamond?.PercentTable,
                        lengthOnWidthRatio: editedDiamond?.LengthOnWidthRatio,
                        designer: editedDiamond?.Designer,
                        cutter: editedDiamond?.Cutter,
                      }}
                      onFinish={saveChanges}
                    >
                      <>
                        <Styled.PageContent_Mid>
                          <Styled.PageDetail_Title>
                            <p>Diamond Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                {activeDiamond.usingImage?.map((image: any, index: any) => {
                                if (image.CertificateID == null) {
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
                                }
                                return null;
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
                              <Form.Item
                                label="Diamond ID"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={activeDiamond?.DiamondID}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "DiamondID",
                                      e.target.value
                                    )
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
                                label="DiscountPrice"
                                className="InforLine_Title"
                                name="discountPrice"
                                rules={[
                                  {
                                    required: true,
                                    message: "Discount is required.",
                                  },
                                ]}
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "DiscountPrice",
                                      e.target.value
                                    )
                                  }
                                  disabled
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
                                name="shape"
                                rules={[
                                  {
                                    required: true,
                                    message: "Shape is required.",
                                  },
                                ]}
                              >
                                <Select
                                  onChange={(value) =>
                                    handleFieldChange("Shape", value)
                                  }
                                >
                                  {ShapeType_Option.map((option) => (
                                    <Select.Option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Color"
                                className="InforLine_Title"
                                name="color"
                                rules={[
                                  {
                                    required: true,
                                    message: "Color is required.",
                                  },
                                ]}
                              >
                                <Select
                                  onChange={(value) =>
                                    handleFieldChange("Color", value)
                                  }
                                >
                                  {ColorType_Option.map((option) => (
                                    <Select.Option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Weight (Carat)"
                                className="InforLine_Title"
                                name="weightCarat"
                                rules={[
                                  {
                                    required: true,
                                    message: "Weight (Carat) is required.",
                                  },
                                ]}
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "WeightCarat",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Polish"
                                className="InforLine_Title"
                                name="polish"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange("Polish", e.target.value)
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Cut"
                                className="InforLine_Title"
                                name="cut"
                                rules={[
                                  {
                                    required: true,
                                    message: "Cut is required.",
                                  },
                                ]}
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange("Cut", e.target.value)
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Symmetry"
                                className="InforLine_Title"
                                name="symmetry"
                                rules={[
                                  {
                                    required: true,
                                    message: "Symmetry is required.",
                                  },
                                ]}
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "Symmetry",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Clarity"
                                className="InforLine_Title"
                                name="clarity"
                                rules={[
                                  {
                                    required: true,
                                    message: "Clarity is required.",
                                  },
                                ]}
                              >
                                <Select
                                  onChange={(value) =>
                                    handleFieldChange("Clarity", value)
                                  }
                                >
                                  {ClarityType_Option.map((option) => (
                                    <Select.Option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Fluorescence"
                                className="InforLine_Title"
                                name="fluorescence"
                              >
                                <Select
                                  onChange={(value) =>
                                    handleFieldChange("Fluorescence", value)
                                  }
                                >
                                  {FluorescenceType_Option.map((option) => (
                                    <Select.Option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
                                label="Percent Depth"
                                className="InforLine_Title"
                                name="percentDepth"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "PercentDepth",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Percent Table"
                                className="InforLine_Title"
                                name="percentTable"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "PercentTable",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Length on Width Ratio"
                                className="InforLine_Title"
                                name="lengthOnWidthRatio"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "LengthOnWidthRatio",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Designer"
                                className="InforLine_Title"
                                name="designer"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "Designer",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Cutter"
                                className="InforLine_Title"
                                name="cutter"
                              >
                                <Input
                                  onChange={(e) =>
                                    handleFieldChange("Cutter", e.target.value)
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
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                        </Styled.PageContent_Mid>
                        <Styled.ActionBtn>
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
                        </Styled.ActionBtn>
                      </>
                    </Form>
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
                              {activeDiamond.usingImage?.map((image: any, index: any) => {
                                if (image.CertificateID == null) {
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
                                }
                                return null;
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
                            <p className="InforLine_Title">Diamond ID</p>
                            <span>{activeDiamond.DiamondID}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Diamond Name</p>
                            <span>{activeDiamond.Name}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Price</p>
                            <span>{activeDiamond.Price}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Discount Price</p>
                            <span>{activeDiamond.DiscountPrice}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Charge Rate (%)</p>
                            <span>{activeDiamond.ChargeRate}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Shape</p>
                            <span>
                              {ShapeType_Option.find(
                                (option) => option.value === activeDiamond.Shape
                              )?.label ?? "N/A"}
                            </span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Color</p>
                            <span>
                              {ColorType_Option.find(
                                (option) => option.value === activeDiamond.Color
                              )?.label ?? "N/A"}
                            </span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Weight (Carat)</p>
                            <span>{activeDiamond.WeightCarat}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Polish</p>
                            <span>{activeDiamond.Polish}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Cut</p>
                            <span>{activeDiamond.Cut}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Length/Width Ratio</p>
                            <span>{activeDiamond.LengthOnWidthRatio}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Clarity</p>
                            <span>{activeDiamond.Clarity}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Symmetry</p>
                            <span>{activeDiamond.Symmetry}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Fluorescence</p>
                            <span>{activeDiamond.Fluorescence}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">% Depth</p>
                            <span>{activeDiamond.PercentDepth}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">% Table</p>
                            <span>{activeDiamond.PercentTable}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Designer</p>
                            <span>{activeDiamond.Designer}</span>
                          </Styled.InforLine>
                          <Styled.InforLine>
                            <p className="InforLine_Title">Cutter</p>
                            <span>{activeDiamond.Cutter}</span>
                          </Styled.InforLine>
                          <Styled.InforLine_Descrip>
                            <p className="InforLine_Title">Description</p>
                            <span>{activeDiamond.Description}</span>
                          </Styled.InforLine_Descrip>

                          <Modal
                            title="Confirm Deletion"
                            visible={isModalVisible}
                            onOk={handleDelete}
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
                    src={getImage(
                      activeDiamond?.certificate?.[activeDiamond.certificate.length - 1]?.usingImages[0]
                        ?.UsingImageID
                    )}
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
