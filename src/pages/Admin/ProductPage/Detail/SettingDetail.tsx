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
  const [editedSetting, setEditedSetting] = useState(activeRingSetting);
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
                            <Styled.ProductImg>
                              <img
                                src={activeRingSetting.jewelrySettingImg}
                                alt={activeRingSetting.jewelrySettingName}
                              />
                            </Styled.ProductImg>
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
                            <Styled.ProductImg>
                              <img
                                src={activeRingSetting.jewelrySettingImg}
                                alt={activeRingSetting.jewelrySettingName}
                              />
                            </Styled.ProductImg>
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
