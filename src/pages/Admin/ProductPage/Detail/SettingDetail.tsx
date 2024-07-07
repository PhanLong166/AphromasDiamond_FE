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
} from "antd";
import {
  SaveOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  ringMaterialData,
  RingMaterialDataType,
  MaterialDataType,
  ringData,
  // ringSizeData,
  materialData,
  RingDataType,
  productData,
  ProductDataType,
  ringSizeData,
  // RingSizeDataType,
} from "../ProductData";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { JewelryType } from "../Jewelry/Jewelry.type";

const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
) => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

const getMaterialDetails = (
  materialID: string,
  materialData: MaterialDataType[]
) => {
  return materialData.find((material) => material.materialID === materialID);
};

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);




const JewelrySettingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeRingSetting = ringData.find(
    (setting) => setting.jewelrySettingID === id
  );
  const activeProduct = activeRingSetting
    ? productData.find(
        (jewelry) =>
          jewelry.jewelrySettingID === activeRingSetting.jewelrySettingID
      )
    : null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedSetting, setEditedSetting] = useState<RingDataType | undefined>(activeRingSetting);
  const [editedProduct, setEditedProduct] = useState(activeProduct);

  const [data, setData] = useState<RingMaterialDataType[]>([]);

  useEffect(() => {
    const activeRingSettingMaterials = activeRingSetting
      ? ringMaterialData.filter(
          (material) =>
            material.jewelrySettingID === activeRingSetting.jewelrySettingID
        )
      : [];
    setData(activeRingSettingMaterials);
  }, [activeRingSetting]);

  const handleFieldChange = (fieldName: keyof RingDataType, value: any) => {
    setEditedSetting({
      ...editedSetting!,
      [fieldName]: value,
    });
  };

  const handleActiveProductFieldChange = (
    fieldName: keyof ProductDataType,
    value: any
  ) => {
    setEditedProduct({
      ...editedProduct!,
      [fieldName]: value,
    });
  };

  const handleSave = (row: RingMaterialDataType) => {
    const newData = data.map((item) =>
      row.key === item.key ? { ...item, ...row } : item
    );
    setData(newData);
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAdd = () => {
    const newMaterialID = ringMaterialData[0]?.materialID || "";
    const newWeight = 1;
    const newPricePerGram = ringMaterialData[0]?.price || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: RingMaterialDataType = {
      key: String(data.length + 1),
      jewelrySettingID: activeRingSetting?.jewelrySettingID || "",
      jewelrySettingVariantID: "", // Thêm giá trị mặc định hoặc logic để lấy giá trị phù hợp
      materialID: newMaterialID,
      sizeID: "defaultSize", // Thay thế bằng logic để lấy size ID phù hợp
      amount: 1,
      price: newJewelrySettingPrice,
    };

    setData([...data, newData]);
  };

  const EditableMaterialCell: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
    options?: { value: string; label: string }[];
  }> = ({ editable, value, onChange }) => {
    return (
      <td>
        {editable ? (
          materialData ? (
            <Select value={value} onChange={onChange}>
              {materialData.map((option) => (
                <Select.Option
                  key={option.materialID}
                  value={option.materialID}
                >
                  {option.materialName}
                </Select.Option>
              ))}
            </Select>
          ) : (
            <Input value={value} onChange={(e) => onChange(e.target.value)} />
          )
        ) : (
          value
        )}
      </td>
    );
  };

  const EditableSizeCell: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
    options?: { value: string; label: number }[];
  }> = ({
    // title,
    editable,
    value,
    onChange,
  }) => {
    return (
      <td>
        {editable ? (
          ringSizeData ? (
            <Select value={value} onChange={onChange}>
              {ringSizeData.map((option) => (
                <Select.Option key={option.sizeID} value={option.sizeID}>
                  {option.sizeValue}
                </Select.Option>
              ))}
            </Select>
          ) : (
            <Input value={value} onChange={(e) => onChange(e.target.value)} />
          )
        ) : (
          value
        )}
      </td>
    );
  };

  const EditableCell: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
  }> = ({
    // title,
    editable,
    value,
    onChange,
  }) => {
    return (
      <td>
        {editable ? (
          <Input value={value} onChange={(e) => onChange(e.target.value)} />
        ) : (
          value
        )}
      </td>
    );
  };

  const columns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell
          title="Material Name"
          editable={true}
          value={record.materialID}
          onChange={(value) => handleSave({ ...record, materialID: value })}
        />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableSizeCell
          title="Size Value"
          editable={true}
          value={record.sizeID}
          onChange={(value) => handleSave({ ...record, sizeID: value })}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableCell
          title="Amount"
          editable={true}
          value={record.amount}
          onChange={(value) => handleSave({ ...record, amount: value })}
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
      render: (_: unknown, record: RingMaterialDataType) => {
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (materialDetail) {
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            editedSetting?.auxiliaryCost ?? 0,
            editedSetting?.productionCost ?? 0
          );
          return jewelrySettingPrice;
        }
        return 0;
      },
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_: unknown, record: RingMaterialDataType) =>
        data.length >= 1 ? (
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


  // IMAGE CHOICE 
  const [mainImage, setMainImage] = useState("");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [metalType, setMetalType] = useState<keyof RingDataType["jewelrySettingImgList"]>("yellow");
  const [metalAvailability, setMetalAvailability] = useState({
    yellow: false,
    white: false,
    rose: false,
    platinum: false,
  });

  useEffect(() => {
    const setting = ringData.find((setting) => setting.jewelrySettingID === id);
    if (setting) {
      setEditedSetting(setting);
      setMainImage(setting.jewelrySettingImgList.yellow[0]);
      setSelectedThumb(0);
      setMetalType("yellow");
      setMetalAvailability({
        yellow: setting.jewelrySettingImgList.yellow.length > 0,
        white: setting.jewelrySettingImgList.white.length > 0,
        rose: setting.jewelrySettingImgList.rose.length > 0,
        platinum: setting.jewelrySettingImgList.platinum.length > 0,
      });
    } else {
      setEditedSetting(undefined);
    }
  }, [id, ringData]);

  if (!activeRingSetting) {
    return <div>Jewelry not found</div>;
  }

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const handleMetalClick = (type: keyof typeof activeRingSetting.jewelrySettingImgList) => {
    if (metalAvailability[type]) {
      setMetalType(type);
      setMainImage(activeRingSetting.jewelrySettingImgList[type][0]);
      setSelectedThumb(0);
    }
  };


  return (
    <>
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <ProductMenu />
          <Styled.PageContent>
            {activeRingSetting ? (
              <>
                {activeProduct ? (
                  <>
                    {isEditing ? (
                      <>
                        <Styled.PageContent_Bot>
                          <Styled.PageDetail_Title>
                            <p>Jewelry Detail</p>
                          </Styled.PageDetail_Title>
                          <Styled.PageDetail_Infor>
                            {/* <Styled.ProductImg>
                              <Styled.ProductImg_Sub>
                                {activeRingSetting.jewelrySettingImg
                                  .slice(1)
                                  .map((image) => (
                                    <img
                                      src={image}
                                      alt={activeRingSetting.jewelrySettingName}
                                    />
                                  ))}
                              </Styled.ProductImg_Sub>
                              <Styled.ProductImg_Main>
                                <img
                                  src={activeRingSetting.jewelrySettingImg[0]} // Lấy ảnh đầu tiên trong mảng
                                  alt={activeRingSetting.jewelrySettingName}
                                  // style={{ width: "100px", height: "100px" }} // Đặt kích thước lớn hơn cho ảnh trong Main
                                />
                              </Styled.ProductImg_Main>
                            </Styled.ProductImg> */}

                              <Styled.ImageContainer>
                                <Styled.OuterThumb>
                                  <Styled.ThumbnailImage>
                                    {activeRingSetting.jewelrySettingImgList[
                                      metalType
                                    ].map((src: string, index: number) => (
                                      <Styled.Item
                                        key={index}
                                        className={
                                          selectedThumb === index
                                            ? "selected"
                                            : ""
                                        }
                                        onClick={() => changeImage(src, index)}
                                      >
                                        <img
                                          src={src}
                                          alt={`Thumb ${index + 1}`}
                                        />
                                      </Styled.Item>
                                    ))}
                                  </Styled.ThumbnailImage>
                                </Styled.OuterThumb>
                                <Styled.OuterMain>
                                  <Styled.MainImage>
                                    <img
                                      id="mainImage"
                                      src={mainImage}
                                      alt="Main"
                                    />
                                  </Styled.MainImage>
                                </Styled.OuterMain>
                              </Styled.ImageContainer>

                            <Styled.ProductContent>
                              <Form.Item
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
                              </Form.Item>
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
                                label="Metal Type"
                                className="InforLine_Title"
                              >
                                <Styled.ProductMetal>
                                  <div className="wrap">
                                    <button className={`metal-button white ${metalType === "white" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("white")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.white.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button yellow ${metalType === "yellow" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("yellow")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.yellow.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button rose ${metalType === "rose" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("rose")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.rose.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button platinum ${metalType === "platinum"? "selected": ""}`}
                                      onClick={() =>handleMetalClick("platinum")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.platinum.length}>
                                      <span>Pt</span>
                                    </button>
                                  </div>
                                </Styled.ProductMetal>
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
                              dataSource={data}
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
                                    {activeRingSetting.jewelrySettingImgList[
                                      metalType
                                    ].map((src: string, index: number) => (
                                      <Styled.Item
                                        key={index}
                                        className={
                                          selectedThumb === index
                                            ? "selected"
                                            : ""
                                        }
                                        onClick={() => changeImage(src, index)}
                                      >
                                        <img
                                          src={src}
                                          alt={`Thumb ${index + 1}`}
                                        />
                                      </Styled.Item>
                                    ))}
                                  </Styled.ThumbnailImage>
                                </Styled.OuterThumb>
                                <Styled.OuterMain>
                                  <Styled.MainImage>
                                    <img
                                      id="mainImage"
                                      src={mainImage}
                                      alt="Main"
                                    />
                                  </Styled.MainImage>
                                </Styled.OuterMain>
                              </Styled.ImageContainer>

                            <Styled.ProductContent>
                              <Styled.InforLine>
                                <p className="InforLine_Title">Jewelry ID</p>
                                <p>{editedProduct?.jewelryID}</p>
                              </Styled.InforLine>
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
                                <p className="InforLine_Title">Weight (gram)</p>
                                <p>{editedSetting?.weight} gram</p>
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
                              <Styled.InforLine>
                                <p className="InforLine_Title">
                                  Metal Type
                                </p>
                                <Styled.ProductMetal>
                                  <div className="wrap">
                                    <button className={`metal-button white ${metalType === "white" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("white")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.white.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button yellow ${metalType === "yellow" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("yellow")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.yellow.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button rose ${metalType === "rose" ? "selected" : ""}`}
                                      onClick={() => handleMetalClick("rose")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.rose.length}>
                                      <span>14k</span>
                                    </button>
                                    <button
                                      className={`metal-button platinum ${metalType === "platinum"? "selected": ""}`}
                                      onClick={() =>handleMetalClick("platinum")}
                                      disabled={!activeRingSetting.jewelrySettingImgList.platinum.length}>
                                      <span>Pt</span>
                                    </button>
                                  </div>
                                </Styled.ProductMetal>
                              </Styled.InforLine>
                            </Styled.ProductContent>
                          </Styled.PageDetail_Infor>
                          <Styled.MaterialTable>
                            <Table
                              dataSource={data}
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
                  </>
                ) : (
                  <p>No Jewelry found.</p>
                )}
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
