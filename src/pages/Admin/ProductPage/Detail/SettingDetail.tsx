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
import * as Yup from "yup";
import { Formik } from "formik";

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

const validationSchema = Yup.object().shape({
  jewelrySettingName: Yup.string()
    .required("Jewelry Setting Name is required.")
    .matches(
      /^[a-zA-Z0-9\s()-.]*$/,
      "Only alphabet, numbers, (), - and . are allowed."
    )
    .max(300, "Jewelry Setting Name must be at most 300 characters long."),
  auxiliaryCost: Yup.number()
    .required("Auxiliary Cost is required.")
    .positive("Auxiliary Cost must be a positive number.")
    .max(
      1000000,
      "Auxiliary Cost must be less than or equal to $1,000,000 USD."
    ),
  chargeRate: Yup.number()
    .required("Charge Rate is required.")
    .positive("Charge Rate must be a positive number.")
    .max(300, "Charge Rate must be less than or equal to 300%."),
  weight: Yup.number()
    .required("Weight is required.")
    .positive("Weight must be a positive number.")
    .max(500, "Weight must be less than or equal to 500 grams."),
  amount: Yup.number()
    .required("Amount is required.")
    .positive("Amount must be a positive number.")
    .max(300, "Amount must be less than or equal to 300 units."),
});

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
    const newWeight = ringMaterialData[0]?.weight || 1;
    const newPricePerGram = ringMaterialData[0]?.price || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: RingMaterialDataType = {
      key: String(data.length + 1),
      jewelrySettingID: activeRingSetting?.jewelrySettingID || "",
      jewelrySettingVariantID: "", // Thêm giá trị mặc định hoặc logic để lấy giá trị phù hợp
      materialID: newMaterialID,
      weight: newWeight,
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
      title: "Weight",
      dataIndex: "weight",
      // editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
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
      render: (_: unknown, record: RingMaterialDataType) => (
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
      render: (_: unknown, record: RingMaterialDataType) => {
        const materialDetail = getMaterialDetails(
          record.materialID,
          materialData
        );
        if (materialDetail) {
          const pricePerGram = materialDetail.sellingPrice;
          const jewelrySettingPrice = calculateJewelrySettingPrice(
            record.weight,
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

  // IMAGE STATES
  const [settingMainImage, setSettingMainImage] = useState("");
  const [settingSelectedThumb, setSettingSelectedThumb] = useState(0);

  useEffect(() => {
    if (activeRingSetting) {
      setSettingMainImage(activeRingSetting.jewelrySettingImg[0]);
      setSettingSelectedThumb(0);
    }
  }, [activeRingSetting]);

  if (!activeRingSetting) {
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

          <Formik
            initialValues={{
              jewelrySettingName: editedSetting?.jewelrySettingName || "",
              auxiliaryCost: editedSetting?.auxiliaryCost || 0,
              chargeRate: editedSetting?.chargeRate || 1,
              // other initial values
            }}
            validationSchema={validationSchema}
            onSubmit={(values: any, { setSubmitting }) => {
              // Update activeRingSetting và activeProduct với các giá trị mới
              if (editedSetting && editedProduct) {
                setEditedSetting({
                  ...editedSetting,
                  jewelrySettingName: values.jewelrySettingName,
                  auxiliaryCost: values.auxiliaryCost,
                  chargeRate: values.chargeRate,
                  // cập nhật các trường khác tương tự
                });

                // Cập nhật activeRingSetting và activeProduct nếu cần
                // Ví dụ:
                // setActiveRingSetting(updatedSetting);
                // setActiveProduct(updatedProduct);

                // Cập nhật data nếu có
                // Ví dụ:
                // setData(updatedData);

                setIsEditing(false); // Đóng chế độ chỉnh sửa sau khi lưu thành công

                console.log("Form submitted with values:", values);
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <Styled.PageContent>
                  {activeRingSetting ? (
                    <>
                      {activeProduct ? (
                        <>
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
                                    {/* <Form.Item
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
                              </Form.Item> */}
                                    <Form.Item
                                      label="Jewelry Setting Name"
                                      className="InforLine_Title"
                                    >
                                      <Input
                                        name="jewelrySettingName"
                                        value={values?.jewelrySettingName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      {touched.jewelrySettingName &&
                                        errors.jewelrySettingName && (
                                          <div className="error">
                                            {/* {errors.jewelrySettingName} */}
                                          </div>
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                      label="Jewelry Setting Type"
                                      className="InforLine_Title"
                                    >
                                      <Select
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
                                        name="auxiliaryCost"
                                        value={values?.auxiliaryCost}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      {touched.auxiliaryCost &&
                                        errors.auxiliaryCost && (
                                          <div className="error">
                                            {/* {errors.auxiliaryCost} */}
                                          </div>
                                        )}
                                    </Form.Item>
                                    <Form.Item
                                      label="Charge Rate (%)"
                                      className="InforLine_Title"
                                    >
                                      <Input
                                        name="chargeRate"
                                        value={values?.chargeRate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      {touched.chargeRate &&
                                        errors.chargeRate && (
                                          <div className="error">
                                            {/* {errors.chargeRate} */}
                                          </div>
                                        )}
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
                                {/* <Button
                            className="MainBtn"
                            onClick={() => setIsEditing(false)}
                          >
                            <SaveOutlined />
                            Save Change
                          </Button> */}
                                <Button
                                  type="primary"
                                  disabled={isSubmitting}
                                  onClick={() => {
                                    handleSubmit();
                                    setIsEditing(false);
                                  }}
                                  className="MainBtn"
                                >
                                  <SaveOutlined />
                                  Save Change
                                </Button>
                                <Link to="/admin/product/jewelry">
                                  <Button style={{ marginLeft: "10px" }}>
                                    Back
                                  </Button>
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
                                        Jewelry ID
                                      </p>
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
                                      <p>{values?.jewelrySettingName}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Jewelry Setting Type
                                      </p>
                                      <p>{editedSetting?.type}</p>
                                    </Styled.InforLine>
                                    <Styled.InforLine>
                                      <p className="InforLine_Title">
                                        Update Time
                                      </p>
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
                        <p>No Jewelry found.</p>
                      )}
                    </>
                  ) : (
                    <p>No Jewelry Setting found.</p>
                  )}
                </Styled.PageContent>
              </>
            )}
          </Formik>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default JewelrySettingDetail;
