import * as Styled from "./ProductDetail.styled";
import React, { useState, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import {
  productData,
  diamondData,
  ringData,
  materialData,
  ringMaterialData,
  RingMaterialDataType,
  MaterialDataType,
  DiamondDataType,
  ringSizeData,
} from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import {
  DeleteOutlined,
  InfoCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  collectionData,
  CollectionDataType,
} from "../../MarketingPage/MarketingData";
import {
  ClarityType_Option,
  ColorType_Option,
  FluorescenceType_Option,
  RateType_Option,
  ShapeType_Option,
} from "../Diamond/Diamond.type";
import { JewelryType } from "../Jewelry/Jewelry.type";

const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
): number => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

const calculateJewelryPrice = (
  diamondPrice: number,
  jewelrySettingPrice: number
): number => {
  return jewelrySettingPrice + diamondPrice;
};

const getMaterialDetails = (
  materialID: string,
  materialData: MaterialDataType[]
) => {
  return materialData.find((material) => material.materialID === materialID);
};

const getDiamondDetails = (
  diamondID: string,
  diamondData: DiamondDataType[]
) => {
  return diamondData.find((diamond) => diamond.diamondID === diamondID);
};

const getCollectionDetails = (
  collectionID: string,
  collectionData: CollectionDataType[]
) => {
  return collectionData.find(
    (collection) => collection.collectionID === collectionID
  );
};

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelryDetail = () => {
  // const [form] = Form.useForm();
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

  const activeRingSettingMaterials = activeRingSetting
    ? ringMaterialData.filter(
        (ringMaterial) =>
          ringMaterial.jewelrySettingID === activeRingSetting.jewelrySettingID
      )
    : [];

  const activeCollection = activeProduct
    ? collectionData.find(
        (collection) => collection.collectionID === activeProduct.collectionID
      )
    : null;

  // GIA CERTIFICATE POPUP
  const [isModalGIA, setIsModalGIA] = useState(false);

  const showModalGIA = () => {
    setIsModalGIA(true);
  };

  const handleOkGIA = () => {
    setIsModalGIA(false);
  };

  const handleCancelGIA = () => {
    setIsModalGIA(false);
  };

  // EDIT INFOR
  const [isEditing, setIsEditing] = useState(false); // Trạng thái để xác định chế độ chỉnh sửa
  const [editedProduct, setEditedProduct] = useState(activeProduct); // Trạng thái lưu các thông tin chỉnh sửa
  const [editedDiamond, setEditedDiamond] = useState(activeDiamond);
  const [editedRingSetting, setEditedRingSetting] = useState(activeRingSetting);
  const [editedRingSettingMaterials, setEditedRingSettingMaterials] = useState(
    activeRingSettingMaterials
  );
  const [editedCollection, setEditedCollection] = useState(activeCollection);

  const saveChanges = () => {
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setEditedProduct({
      ...editedProduct!,
      [fieldName]: value,
    });
    setEditedDiamond({
      ...editedDiamond!,
      [fieldName]: value,
    });
    setEditedRingSetting({
      ...editedRingSetting!,
      [fieldName]: value,
    });
    setEditedRingSettingMaterials({
      ...editedRingSettingMaterials!,
      [fieldName]: value,
    });
    setEditedCollection({
      ...editedCollection!,
      [fieldName]: value,
    });
  };

  // JEWELRY MATERIAL TABLE
  const [data, setData] = useState<RingMaterialDataType[]>(
    activeRingSettingMaterials
  );

  useEffect(() => {
    const activeRingSettingMaterials = activeRingSetting
      ? ringMaterialData.filter(
          (material) =>
            material.jewelrySettingID === activeRingSetting.jewelrySettingID
        )
      : [];
    setData(activeRingSettingMaterials);
  }, [activeRingSetting]);

  const handleSave = (row: any) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setData(newData);
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAdd = () => {
    const newMaterialID = ringMaterialData[0]?.materialID || "";
    const newWeight = ringMaterialData[0]?.weight || 1;
    const newPricePerGram = ringMaterialData[0]?.price || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: RingMaterialDataType = {
      key: String(data.length + 1),
      jewelrySettingID: activeRingSetting?.jewelrySettingID || "",
      jewelrySettingVariantID: "",
      materialID: newMaterialID,
      weight: newWeight,
      sizeID: "defaultSize",
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
    isEditing: boolean;
  }> = ({ editable, value, onChange, isEditing }) => {
    return (
      <td>
        {editable && isEditing ? (
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
    isEditing: boolean;
  }> = ({ editable, value, onChange, isEditing }) => {
    return (
      <td>
        {editable && isEditing ? (
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
    isEditing: boolean;
  }> = ({
    // title,
    editable,
    value,
    onChange,
    isEditing,
  }) => {
    return (
      <td>
        {editable && isEditing ? (
          <Input value={value} onChange={(e) => onChange(e.target.value)} />
        ) : (
          value
        )}
      </td>
    );
  };

  const jewelryColumns = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell
          title="Material Name"
          editable={false}
          value={record.materialID}
          onChange={(value) => handleSave({ ...record, materialID: value })}
          isEditing={false}
        />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: (sizeID: string) => {
        const sizeDetail = ringSizeData.find((size) => size.sizeID === sizeID);
        return sizeDetail ? sizeDetail.sizeValue : 0;
      },
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
            activeRingSetting?.auxiliaryCost || 0,
            activeRingSetting?.productionCost || 0
          );
          return jewelrySettingPrice;
        }
        return 0;
      },
    },
    {
      title: (
        <>
          Jewelry Price
          <Popover
            content={PriceCalculation}
            title="Price Calculation"
            trigger="click"
          >
            <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
          </Popover>
        </>
      ),
      dataIndex: "jewelryPrice",
      render: (_: unknown, record: RingMaterialDataType) => {
        if (!activeProduct) {
          return 0;
        }
        const diamondDetail = getDiamondDetails(
          activeProduct.diamondID,
          diamondData
        );
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (diamondDetail && materialDetail) {
          const diamondPrice = diamondDetail.price;
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.amount,
            pricePerGram,
            editedRingSetting?.auxiliaryCost || 0,
            editedRingSetting?.productionCost || 0
          );
          const jewelryPrice = calculateJewelryPrice(
            diamondPrice,
            jewelrySettingPrice
          );
          return jewelryPrice.toFixed(2); // format to 2 decimal places
        }
        return 0;
      },
    },
  ];

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
          isEditing={isEditing}
        />
      ),
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableSizeCell
          title="Size Value"
          editable={true}
          value={record.sizeID}
          onChange={(value) => handleSave({ ...record, sizeID: value })}
          isEditing={isEditing}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableCell
          title="Amount"
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
            activeRingSetting?.auxiliaryCost || 0,
            activeRingSetting?.productionCost || 0
          );
          return jewelrySettingPrice.toFixed(2);
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

  const mergedColumns_Jewelry = jewelryColumns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RingMaterialDataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const mergedColumns_Setting = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RingMaterialDataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  // DELETE JEWELRY
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

  // IMAGE STATES
  const [jewelryMainImage, setJewelryMainImage] = useState("");
  const [jewelrySelectedThumb, setJewelrySelectedThumb] = useState(0);

  const [diamondMainImage, setDiamondMainImage] = useState("");
  const [diamondSelectedThumb, setDiamondSelectedThumb] = useState(0);

  const [settingMainImage, setSettingMainImage] = useState("");
  const [settingSelectedThumb, setSettingSelectedThumb] = useState(0);

  useEffect(() => {
    if (activeProduct && activeRingSetting && activeDiamond) {
      setJewelryMainImage(activeProduct.jewelryImg[0]);
      setJewelrySelectedThumb(0);

      setDiamondMainImage(activeDiamond.diamondImg[0]);
      setDiamondSelectedThumb(0);

      setSettingMainImage(activeRingSetting.jewelrySettingImg[0]);
      setSettingSelectedThumb(0);
    }
  }, [activeProduct, activeDiamond, activeRingSetting]);

  if (!activeProduct || !activeDiamond || !activeRingSetting) {
    return <div>Jewelry not found</div>;
  }

  const changeJewelryImage = (src: string, index: number) => {
    setJewelryMainImage(src);
    setJewelrySelectedThumb(index);
  };

  const changeDiamondImage = (src: string, index: number) => {
    setDiamondMainImage(src);
    setDiamondSelectedThumb(index);
  };

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
            {activeProduct ? (
              <>
                {activeDiamond ? (
                  <>
                    {activeRingSetting ? (
                      <>
                        {isEditing ? (
                          <>
                            <Styled.PageContent_Top>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeProduct.jewelryImg.map(
                                        (image: string, index: number) => (
                                          <Styled.Item
                                            key={index}
                                            className={
                                              jewelrySelectedThumb === index
                                                ? "selected"
                                                : ""
                                            }
                                            onClick={() =>
                                              changeJewelryImage(image, index)
                                            }
                                          >
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`Thumbnail ${index}`}
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
                                        src={jewelryMainImage}
                                        alt="Main"
                                      />
                                    </Styled.MainImage>
                                  </Styled.OuterMain>
                                </Styled.ImageContainer>
                                <Styled.ProductContent>
                                  <Form
                                    // form={form}
                                    // layout="vertical"
                                    // className="AdPageContent_Content"

                                    layout="vertical"
                                    initialValues={{
                                      jewelryName: editedProduct?.jewelryName,
                                      diamondName: editedDiamond?.diamondName,
                                      price: editedDiamond?.price,
                                      chargeRateDia: editedDiamond?.chargeRate,
                                      description: editedDiamond?.description,
                                      jewelrySettingName:
                                        editedRingSetting?.jewelrySettingName,
                                      auxiliaryCost:
                                        editedRingSetting?.auxiliaryCost,
                                      chargeRateSet:
                                        editedRingSetting?.chargeRate,
                                    }}
                                    onFinish={(values) => {
                                      console.log(values);
                                      setIsEditing(false);
                                      // Update the editedSetting with new values
                                      setEditedProduct({
                                        ...editedProduct!,
                                        jewelryName: values.jewelryName,
                                      });
                                      setEditedDiamond({
                                        ...editedDiamond!,
                                        diamondName: values.diamondName,
                                        price: values.price,
                                        chargeRate: values.chargeRateDia,
                                        description: values.description,
                                      });
                                      setEditedRingSetting({
                                        ...editedRingSetting!,
                                        jewelrySettingName:
                                          values.jewelrySettingName,
                                        auxiliaryCost: values.auxiliaryCost,
                                        chargeRate: values.chargeRateSet,
                                      });
                                    }}
                                  >
                                    <Form.Item
                                      label="Jewelry ID"
                                      className="InforLine_Title"
                                    >
                                      <Input
                                        value={editedProduct?.jewelryID}
                                        className="InforLine_Title"
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "jewelryID",
                                            e.target.value
                                          )
                                        }
                                        disabled
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="Jewelry Name"
                                      className="InforLine_Title"
                                      name="jewelryName"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Jewelry Name is required.",
                                        },
                                        {
                                          pattern: /^[a-zA-Z0-9\s()-.]*$/,
                                          message:
                                            "Only alphabet, numbers, (), - and . are allowed.",
                                        },
                                        {
                                          max: 300,
                                          message:
                                            "Jewelry Name must be at most 300 characters long.",
                                        },
                                      ]}
                                    >
                                      <Input
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "jewelryName",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="Type"
                                      className="InforLine_Title"
                                    >
                                      <Select
                                        className="formItem"
                                        placeholder={editedProduct?.type}
                                        options={JewelryType}
                                        value={editedProduct?.type}
                                        onChange={(value) =>
                                          handleFieldChange("type", value)
                                        }
                                        disabled
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="From Collection"
                                      className="InforLine_Title"
                                    >
                                      <Select
                                        placeholder={
                                          getCollectionDetails(
                                            activeProduct.collectionID,
                                            collectionData
                                          )?.collectionName
                                        }
                                        options={collectionData.map(
                                          (collection) => ({
                                            value: collection.collectionID,
                                            label: collection.collectionName,
                                          })
                                        )}
                                        onChange={(value) =>
                                          handleFieldChange(
                                            "collectionID",
                                            value
                                          )
                                        }
                                        value={editedCollection?.collectionID}
                                      />
                                    </Form.Item>
                                    <Form.Item
                                      label="Discount (%)"
                                      className="InforLine_Title"
                                    >
                                      <Input
                                        value="15"
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "discount",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Item>
                                    {/* </Styled.SignaInfor> */}
                                    <Form.Item
                                      label="Diamond Price"
                                      className="InforLine_Title"
                                    >
                                      <Input
                                        value={editedDiamond?.price}
                                        onChange={(e) =>
                                          handleFieldChange(
                                            "price",
                                            e.target.value
                                          )
                                        }
                                        disabled
                                      />
                                    </Form.Item>
                                  </Form>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                              <Styled.MaterialTable>
                                <Table
                                  dataSource={data}
                                  columns={mergedColumns_Jewelry}
                                  rowClassName={() => "editable-row"}
                                  bordered
                                  pagination={{ pageSize: 4 }}
                                />
                              </Styled.MaterialTable>
                            </Styled.PageContent_Top>

                            <Styled.PageContent_Mid>
                              <Styled.PageDetail_Title>
                                <p>Diamond Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeDiamond.diamondImg.map(
                                        (image, index) => (
                                          <Styled.Item
                                            key={index}
                                            className={
                                              diamondSelectedThumb === index
                                                ? "selected"
                                                : ""
                                            }
                                            onClick={() =>
                                              changeDiamondImage(image, index)
                                            }
                                          >
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`Diamond Thumbnail ${index}`}
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
                                      value={editedDiamond?.diamondID}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "diamondID",
                                          e.target.value
                                        )
                                      }
                                      disabled
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Diamond Name"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={editedDiamond?.diamondName}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "diamondName",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Price"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={editedDiamond?.price}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "price",
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
                                      placeholder={editedDiamond?.shape}
                                      options={ShapeType_Option}
                                      value={editedDiamond?.shape}
                                      onChange={(value) =>
                                        handleFieldChange("shape", value)
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Color"
                                    className="InforLine_Title"
                                  >
                                    <Select
                                      placeholder={editedDiamond?.color}
                                      options={ColorType_Option}
                                      value={editedDiamond?.color}
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Polish"
                                    className="InforLine_Title"
                                  >
                                    <Select
                                      placeholder={editedDiamond?.polish}
                                      options={RateType_Option}
                                      value={editedDiamond?.polish}
                                      onChange={(value) =>
                                        handleFieldChange("polish", value)
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Cut"
                                    className="InforLine_Title"
                                  >
                                    <Select
                                      placeholder={editedDiamond?.cut}
                                      options={RateType_Option}
                                      value={editedDiamond?.cut}
                                      onChange={(value) =>
                                        handleFieldChange("cut", value)
                                      }
                                    />
                                    `
                                  </Form.Item>
                                  <Form.Item
                                    label="Length/Width Ratio"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={editedDiamond?.lwRatio}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "lwRatio",
                                          e.target.value
                                        )
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
                                      placeholder={editedDiamond?.clarity}
                                      options={ClarityType_Option}
                                      value={editedDiamond?.clarity}
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
                                      placeholder={editedDiamond?.symmetry}
                                      options={RateType_Option}
                                      value={editedDiamond?.symmetry}
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
                                      value={editedDiamond?.caratWeight}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "caratWeight",
                                          e.target.value
                                        )
                                      }
                                      disabled
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Table %"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={editedDiamond?.tablePercentage}
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
                                      value={editedDiamond?.depthPercentage}
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
                                      placeholder={editedDiamond?.fluorescence}
                                      options={FluorescenceType_Option}
                                      value={editedDiamond?.fluorescence}
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
                                      value={editedDiamond?.description}
                                      onChange={(e) =>
                                        handleFieldChange(
                                          "description",
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
                                      name="description"
                                      value={editedDiamond?.description}
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
                                visible={isModalGIA}
                                onOk={handleOkGIA}
                                onCancel={handleCancelGIA}
                                footer={null}
                              >
                                <img
                                  src={editedDiamond?.giaCerti}
                                  alt="GIA Certificate"
                                  style={{ width: "100%" }}
                                />
                              </Modal>
                            </Styled.PageContent_Mid>

                            <Styled.PageContent_Bot>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Setting Detail</p>
                              </Styled.PageDetail_Title>

                              <Styled.PageDetail_Infor>
                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeRingSetting.jewelrySettingImg.map(
                                        (image, index) => (
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
                                  <Form.Item
                                    label="Jewelry Setting ID"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={editedProduct?.jewelrySettingID}
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
                                      value={
                                        editedRingSetting?.jewelrySettingName
                                      }
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
                                      className="formItem"
                                      placeholder={editedRingSetting?.type}
                                      options={JewelryType}
                                      value={editedProduct?.type}
                                      onChange={(value) =>
                                        handleFieldChange("type", value)
                                      }
                                      disabled
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Auxiliary Cost"
                                    className="InforLine_Title"
                                  >
                                    <Input
                                      value={activeRingSetting.auxiliaryCost} // chưa chuyển sang dạng editedJewelrySetting
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
                                      value={activeRingSetting.chargeRate} // chưa chuyển sang dạng editedJewelrySetting
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
                                  rowClassName={() => "editable-row"}
                                  bordered
                                  dataSource={data}
                                  columns={mergedColumns_Setting}
                                  pagination={{ pageSize: 4 }}
                                />
                              </Styled.MaterialTable>
                            </Styled.PageContent_Bot>
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

                            <Styled.PageContent_Top>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                {/* <Styled.ProductImg>
                                  <img
                                    src={activeProduct.jewelryImg}
                                    alt={activeProduct.jewelryName}
                                  />
                                </Styled.ProductImg> */}
                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeProduct.jewelryImg.map(
                                        (image: string, index: number) => (
                                          <Styled.Item
                                            key={index}
                                            className={
                                              jewelrySelectedThumb === index
                                                ? "selected"
                                                : ""
                                            }
                                            onClick={() =>
                                              changeJewelryImage(image, index)
                                            }
                                          >
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`Thumbnail ${index}`}
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
                                        src={jewelryMainImage}
                                        alt="Main"
                                      />
                                    </Styled.MainImage>
                                  </Styled.OuterMain>
                                </Styled.ImageContainer>

                                <Styled.ProductContent>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry ID
                                    </p>
                                    <p>{editedProduct?.jewelryID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Name
                                    </p>
                                    <p>{editedProduct?.jewelryName}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Type</p>
                                    <p>{editedProduct?.type}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      From Collection
                                    </p>
                                    <p>{editedCollection?.collectionName}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Discount (%)
                                    </p>
                                    <p>15%</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Price
                                    </p>
                                    <p>{editedDiamond?.price}</p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                              <Styled.MaterialTable>
                                <Table
                                  rowClassName={() => "editable-row"}
                                  bordered
                                  dataSource={data}
                                  columns={mergedColumns_Jewelry}
                                  pagination={{ pageSize: 4 }}
                                />
                              </Styled.MaterialTable>
                            </Styled.PageContent_Top>

                            <Styled.PageContent_Mid>
                              <Styled.PageDetail_Title>
                                <p>Diamond Detail</p>
                              </Styled.PageDetail_Title>
                              <Styled.PageDetail_Infor>
                                {/* <Styled.ProductImg>
                                    <img
                                      src={activeDiamond.diamondImg[0]}
                                      alt={activeDiamond.diamondName}
                                    />
                                    <img
                                      className="GIAExport"
                                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fgia-logo.svg?alt=media&token=223f8b08-36c3-401b-ae25-a35f4c930631"
                                      alt="GIA Certificate"
                                      onClick={showModal}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </Styled.ProductImg> */}

                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeDiamond.diamondImg.map(
                                        (image, index) => (
                                          <Styled.Item
                                            key={index}
                                            className={
                                              diamondSelectedThumb === index
                                                ? "selected"
                                                : ""
                                            }
                                            onClick={() =>
                                              changeDiamondImage(image, index)
                                            }
                                          >
                                            <img
                                              key={index}
                                              src={image}
                                              alt={`Diamond Thumbnail ${index}`}
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
                                    <p className="InforLine_Title">
                                      Diamond ID
                                    </p>
                                    <p>{editedDiamond?.diamondID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Diamond Name
                                    </p>
                                    <p>{editedDiamond?.diamondName}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Price</p>
                                    <p>{editedDiamond?.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Shape</p>
                                    <p>{editedDiamond?.shape}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Color</p>
                                    <p>{editedDiamond?.color}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Polish</p>
                                    <p>{editedDiamond?.polish}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Cut</p>
                                    <p>{editedDiamond?.price}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Length/Width Ratio
                                    </p>
                                    <p>{editedDiamond?.lwRatio}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Clarity</p>
                                    <p>{editedDiamond?.clarity}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Symmetry</p>
                                    <p>{editedDiamond?.symmetry}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Carat Weight
                                    </p>
                                    <p>{editedDiamond?.caratWeight}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Table %</p>
                                    <p>{editedDiamond?.tablePercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">Depth %</p>
                                    <p>{editedDiamond?.depthPercentage}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Fluorescence
                                    </p>
                                    <p>{editedDiamond?.fluorescence}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine_Descrip>
                                    <p className="InforLine_Title">
                                      Description
                                    </p>
                                    <p>{editedDiamond?.description}</p>
                                  </Styled.InforLine_Descrip>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>

                              <Modal
                                title="GIA Certificate"
                                visible={isModalGIA}
                                onOk={handleOkGIA}
                                onCancel={handleCancelGIA}
                                footer={null}
                              >
                                <img
                                  src={editedDiamond?.giaCerti}
                                  alt="GIA Certificate"
                                  style={{ width: "100%" }}
                                />
                              </Modal>
                            </Styled.PageContent_Mid>

                            <Styled.PageContent_Bot>
                              <Styled.PageDetail_Title>
                                <p>Jewelry Setting Detail</p>
                              </Styled.PageDetail_Title>

                              <Styled.PageDetail_Infor>
                                {/* <Styled.ProductImg>
                                    <img
                                      src={activeRingSetting.jewelrySettingImg}
                                      alt={activeProductImgRingSetting.jewelrySettingName}
                                    />
                                  </Styled.ProductImg> */}

                                <Styled.ImageContainer>
                                  <Styled.OuterThumb>
                                    <Styled.ThumbnailImage>
                                      {activeRingSetting.jewelrySettingImg.map(
                                        (image, index) => (
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
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting ID
                                    </p>
                                    <p>{editedRingSetting?.jewelrySettingID}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Name
                                    </p>
                                    <p>
                                      {editedRingSetting?.jewelrySettingName}
                                    </p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Type
                                    </p>
                                    <p>{editedRingSetting?.type}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Update Time
                                    </p>
                                    <p>{editedRingSetting?.updateTime}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Auxiliary Cost
                                    </p>
                                    <p>{editedRingSetting?.auxiliaryCost}</p>
                                  </Styled.InforLine>
                                  <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Charge Rate (%)
                                    </p>
                                    <p>{editedRingSetting?.chargeRate}%</p>
                                  </Styled.InforLine>
                                </Styled.ProductContent>
                              </Styled.PageDetail_Infor>
                              <div>
                                <Table
                                  rowClassName={() => "editable-row"}
                                  bordered
                                  dataSource={data}
                                  columns={mergedColumns_Setting}
                                  pagination={{ pageSize: 4 }}
                                />
                              </div>
                            </Styled.PageContent_Bot>
                            <Styled.ActionBtn>
                              <Styled.ActionBtn_Left>
                                <Button
                                  className="MainBtn"
                                  onClick={() => setIsEditing(true)}
                                >
                                  Edit
                                </Button>
                                <Link to="/admin/product/jewelry">
                                  <Button style={{ marginLeft: "10px" }}>
                                    Back
                                  </Button>
                                </Link>
                              </Styled.ActionBtn_Left>
                              <Styled.ActionBtn_Right>
                                <Button
                                  className="DeleteBtn"
                                  onClick={showModal}
                                >
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
