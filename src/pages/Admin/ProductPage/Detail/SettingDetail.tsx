import * as Styled from "./SettingDetail.styled";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Table,
  Popover,
  notification,
} from "antd";
import {
  SaveOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
// import {
//   ringMaterialData,
//   RingMaterialDataType,
//   MaterialDataType,
//   ringData,
//   materialData,
//   RingDataType,
//   productData,
//   ProductDataType,
//   ringSizeData,
// } from "../ProductData";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { JewelryType } from "../Jewelry/Jewelry.type";
import { deleteSetting, getSettingDetails } from "@/services/jewelrySettingAPI";


const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelrySettingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeJewelrySetting, setActiveJewelrySetting] = useState<any | null>(null);
  const [settingMainImage, setSettingMainImage] = useState("");
  const [settingSelectedThumb, setSettingSelectedThumb] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const [setSelectedMaterial] = useState<any>();
  const [setSelectedSize] = useState<any>("");
  const [setSelectedJewelryType] = useState<any>("");
  const [dataMaterial, setDataMaterial] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSetting, setEditedSetting] = useState<any | null>(null);
  // const [editedProduct, setEditedProduct] = useState(activeProduct);

  // const activeProduct = activeRingSetting
  //   ? productData.find(
  //       (jewelry) =>
  //         jewelry.jewelrySettingID === activeRingSetting.jewelrySettingID
  //     )
  //   : null;

  
  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} jewelry setting successfully` : error,
    });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSettingDetails(Number(id));
        console.log("API Response:", response.data.data);
        const jewelrySettingData = response.data.data;
        setActiveJewelrySetting(jewelrySettingData);
        setEditedSetting(jewelrySettingData);
        if (jewelrySettingData.UsingImage && jewelrySettingData.UsingImage.length > 0) {
          const mainImageURL = `http://localhost:3000/usingImage/${jewelrySettingData.UsingImage[0].UsingImageID}`;
          setSettingMainImage(mainImageURL);
        } else {
          setSettingMainImage("");
        }
        setSettingSelectedThumb(0);
      } catch (error) {
        console.error("Error fetching diamond details:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("Active Jewelry Setting:", activeJewelrySetting); 
  }, [activeJewelrySetting]);


  // EDIT
  const handleFieldChange = (fieldName: keyof any, value: any) => {
    setEditedSetting({
      ...editedSetting!,
      [fieldName]: value,
    });
  };

  const handleSave = (row: any) => {
    const newData = activeJewelrySetting.map((item: any) =>
      row.JewelrySettingID === item.JewelrySettingID ? { ...item, ...row } : item
    );
    setActiveJewelrySetting(newData);
  };

  const handleDelete = async (jewelrySettingID: number) => {
    try {
      await deleteSetting(jewelrySettingID);
      openNotification("success", "Delete", "");
    } catch (error: any) {
      console.error("Failed to delete material:", error);
      openNotification("error", "Delete", error.message);
    }
  };

  const handleAdd = () => {
    const newMaterialID = editedSetting[0]?.materialID || "";
    const newWeight = editedSetting[0]?.weight || 1;
    const newPricePerGram = editedSetting[0]?.price || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: any = {
      key: String(activeJewelrySetting.length + 1),
      jewelrySettingID: activeJewelrySetting?.jewelrySettingID || "",
      jewelrySettingVariantID: "", 
      materialID: newMaterialID,
      weight: newWeight,
      sizeID: "defaultSize", 
      amount: 1,
      price: newJewelrySettingPrice,
    };

    setActiveJewelrySetting([...activeJewelrySetting, newData]);
  };


  const EditableCell: React.FC<{
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
    isEditing: boolean;
  }> = ({ editable, value: initialValue, onChange, isEditing }) => {
    const [value, setValue] = useState(initialValue);

    const handleBlur = () => {
      onChange(value);
    };

    return (
      <td>
        {editable && isEditing ? (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
          />
        ) : (
          value
        )}
      </td>
    );
  };

  const columns = [
    {
          title: "Material",
          dataIndex: "materialID",
          key: "materialID",
          // editable: true,
          render: () => (
            <Select
              placeholder="Select Material"
              onChange={(value) => setSelectedMaterial(value)}
            >
              {activeJewelrySetting.JewelrySettingVariant.map((material: any) => (
                <Select.Option key={material.materialID} value={material.materialID}>
                  {material.materialName}
                </Select.Option>
              ))}
            </Select>
          ),
        },
        {
          title: "Size Value",
          dataIndex: "sizeID",
          render: () => (
            <Select
              placeholder="Select Size"
              onChange={(value) => setSelectedSize(value)}
            >
              {activeJewelrySetting.JewelrySettingVariant.map((size: any) => (
                <Select.Option key={size.sizeID} value={size.sizeID}>
                  {size.sizeValue}
                </Select.Option>
              ))}
            </Select>
          ),
        },
    {
      title: "Weight",
      dataIndex: "weight",
      // editable: true,
      render: (_: unknown, record: any) => (
        <EditableCell
          editable={true}
          value={record.weight}
          onChange={(value) => handleSave({ ...record, weight: value })}
          isEditing={isEditing}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // editable: true,
      render: (_: unknown, record: any) => (
        <EditableCell
          editable={true}
          value={record.amount}
          onChange={(value) => handleSave({ ...record, amount: value })}
          isEditing={isEditing}
        />
      ),
    },
    {
          title: (
                <>
                  Jewelry Setting Price
                  <Popover
                    content={PriceCalculation}
                    title="Price Calculation"
                    trigger="click"
                  >
                    <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
                  </Popover>
                </>
              ),
          dataIndex: "price",
          render: (_, record: any) => (
            <EditableCell
              editable={true}
              value={record.price}
              onChange={(value) => handleFieldChange("amount", value, record.key)}
            />
          ),
        },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: any) =>
        dataMaterial.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        ) : null,
    },
  ];

  // DELETE JEWELRY SETTING
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

  // IMAGE STATES
  useEffect(() => {
    if (activeJewelrySetting) {
      setSettingMainImage(activeJewelrySetting.jewelrySettingImg[0]);
      setSettingSelectedThumb(0);
    }
  }, [activeJewelrySetting]);

  if (!activeJewelrySetting) {
    return <div>Jewelry not found</div>;
  }

  const changeSettingImage = (src: string, index: number) => {
    setSettingMainImage(src);
    setSettingSelectedThumb(index);
  };

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />

          <Styled.PageContent>
            {activeJewelrySetting ? (
              <>
                {/* {activeProduct ? (
                  <> */}
                    {isEditing ? (
                      <>
                        <Styled.PageContent_Bot>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Setting Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                  {activeJewelrySetting.jewelrySettingImg.map(
                                    (image: any, index: any) => (
                                      <Styled.Item
                                        key={index}
                                        className={
                                          index === settingSelectedThumb
                                            ? "selected"
                                            : ""
                                        }
                                        onClick={() =>
                                          changeSettingImage(image, index)
                                        }
                                      >
                                        <img
                                          key={index}
                                          src={image}
                                          alt={`Setting Thumbnail ${index}`}
                                        />
                                      </Styled.Item>
                                    )
                                  )}
                                </Styled.ThumbnailImage>
                              </Styled.OuterThumb>
                              <Styled.OuterMain>
                                <Styled.MainImage>
                                  <img
                                    id="mainImage"
                                    src={settingMainImage}
                                    alt="Main"
                                  />
                                </Styled.MainImage>
                              </Styled.OuterMain>
                            </Styled.ImageContainer>

                            <Styled.ProductContent>
                              {/* <Form.Item
                                label="Jewelry ID"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedProduct?.jewelryID}
                                  onChange={(e) =>
                                    handleActiveProductFieldChange(
                                      "jewelryID",
                                      e.target.value
                                    )
                                  }
                                  disabled
                                />
                              </Form.Item> */}
                              <Form.Item
                                label="Jewelry Setting ID"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedSetting?.jewelrySettingID}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "jewelrySettingID",
                                      e.target.value
                                    )
                                  }
                                  disabled
                                />
                              </Form.Item>
                              <Form.Item
                                label="Jewelry Setting Name"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedSetting?.jewelrySettingName}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "jewelrySettingName",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Jewelry Setting Type"
                                className="InforLine_Title"
                              >
                                <Select
                                  //   defaultValue="Select Clarity"
                                  className="formItem"
                                  placeholder={editedSetting?.type}
                                  options={JewelryType}
                                  value={editedSetting?.type}
                                  onChange={(value) =>
                                    handleFieldChange("type", value)
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Auxiliary Cost"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedSetting?.auxiliaryCost}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "auxiliaryCost",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                              <Form.Item
                                label="Charge Rate (%)"
                                className="InforLine_Title"
                              >
                                <Input
                                  value={editedSetting?.chargeRate}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      "chargeRate",
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Item>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Button
                              onClick={handleAdd}
                              type="primary"
                              style={{ marginBottom: 16 }}
                            >
                              Add a row
                            </Button>
                            <Table
                              dataSource={dataMaterial}
                              columns={columns}
                              rowClassName={() => "editable-row"}
                              bordered
                              pagination={false}
                            />
                          </Styled.MaterialTable>
                        </Styled.PageContent_Bot>

                        <Styled.ActionBtn>
                          <Button
                            className="MainBtn"
                            onClick={() => setIsEditing(false)}
                          >
                            <SaveOutlined />
                            Save Change
                          </Button>

                          <Link to="/admin/product/jewelry">
                            <Button style={{ marginLeft: "10px" }}>Back</Button>
                          </Link>
                        </Styled.ActionBtn>
                      </>
                    ) : (
                      <>
                        <Styled.PageContent_Bot>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            <Styled.ImageContainer>
                              <Styled.OuterThumb>
                                <Styled.ThumbnailImage>
                                  {activeJewelrySetting.jewelrySettingImg.map(
                                    (image: any, index: any) => (
                                      <Styled.Item
                                        key={index}
                                        className={
                                          index === settingSelectedThumb
                                            ? "selected"
                                            : ""
                                        }
                                        onClick={() =>
                                          changeSettingImage(image, index)
                                        }
                                      >
                                        <img
                                          key={index}
                                          src={image}
                                          alt={`Setting Thumbnail ${index}`}
                                        />
                                      </Styled.Item>
                                    )
                                  )}
                                </Styled.ThumbnailImage>
                              </Styled.OuterThumb>
                              <Styled.OuterMain>
                                <Styled.MainImage>
                                  <img
                                    id="mainImage"
                                    src={settingMainImage}
                                    alt="Main"
                                  />
                                </Styled.MainImage>
                              </Styled.OuterMain>
                            </Styled.ImageContainer>

                            <Styled.ProductContent>
                              {/* <Styled.InforLine>
                                <p className="InforLine_Title">Jewelry ID</p>
                                <p>{editedProduct?.jewelryID}</p>
                              </Styled.InforLine> */}
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting ID
                                </p>
                                <p>{editedSetting?.jewelrySettingID}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting Name
                                </p>
                                <p>{editedSetting?.jewelrySettingName}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Jewelry Setting Type
                                </p>
                                <p>{editedSetting?.type}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Update Time</p>
                                <p>{editedSetting?.updateTime}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Auxiliary Cost
                                </p>
                                <p>{editedSetting?.auxiliaryCost}</p>
                              </Styled.InforLine>
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Charge Rate (%)
                                </p>
                                <p>{editedSetting?.chargeRate}%</p>
                              </Styled.InforLine>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Table
                              dataSource={dataMaterial}
                              columns={columns}
                              rowClassName={() => "editable-row"}
                              bordered
                              pagination={false}
                            />
                          </Styled.MaterialTable>
                        </Styled.PageContent_Bot>
                        <Styled.ActionBtn>
                          <Styled.ActionBtn_Left>
                            <Button
                              onClick={() => setIsEditing(true)}
                              type="primary"
                              style={{ marginBottom: 16 }}
                            >
                              Edit
                            </Button>
                            <Link to="/admin/product/jewelry-setting">
                              <Button style={{ marginLeft: "10px" }}>
                                Back
                              </Button>
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
                  {/* </>
                ) : (
                  <p>No Jewelry found.</p>
                )} */}
              </>
            ) : (
              <p>No Jewelry Setting found.</p>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default JewelrySettingDetail;
