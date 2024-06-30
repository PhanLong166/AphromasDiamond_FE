import * as Styled from "./ProductDetail.styled";
import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Table,
  InputRef,
  GetRef,
} from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import {
  ringData,
  materialData,
  ringMaterialData,
  RingMaterialDataType,
  // MaterialDataType,
} from "../ProductData";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import { SaveOutlined } from "@ant-design/icons";
// import { SortOrder } from "antd/es/table/interface";

const EditableContext = React.createContext<FormInstance<any> | null>(null);

type FormInstance<T> = GetRef<typeof Form<T>>;

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  dataIndex: keyof RingMaterialDataType;
  record: RingMaterialDataType;
  handleSave: (record: RingMaterialDataType) => void;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  const materialOptions = [
    { value: "14K White Gold", label: "14KWhiteGold" },
    { value: "14K Yellow Gold", label: "14KYellowGold" },
    { value: "14K Rose Gold", label: "14KRoseGold" },
    { value: "18K White Gold", label: "18KWhiteGold" },
    { value: "18K Yellow Gold", label: "18KYellowGold" },
    { value: "18K Rose Gold", label: "18KRoseGold" },
    { value: "Platinum", label: "Platinum" },
  ];

  const handleMaterialChange = (value: string) => {
    const materialDetail = getMaterialDetails(value);
    if (materialDetail) {
      const pricePerGram = materialDetail.sellingPrice;
      const price = record.weight * pricePerGram;

      form.setFieldsValue({
        materialID: value,
        pricePerGram,
        price,
      });
    }
    save();
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      // dataIndex === 'materialID' ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {dataIndex === "materialName" ? (
          <Select
            onChange={(value) => handleMaterialChange(value)}
            value={record.materialName}
          >
            {materialOptions.map((option) => (
              <Select.Option key={option.label} value={option.label}>
                {option.value}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        )}
      </Form.Item>
    ) : (
      // ) : (
      //   <Form.Item
      //     style={{ margin: 0 }}
      //     name={dataIndex}
      //     rules={[
      //       {
      //         required: true,
      //         message: `${title} is required.`,
      //       },
      //     ]}
      //   >
      //     <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      //   </Form.Item>
      // )
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const getMaterialDetails = (materialID: string) => {
  return materialData.find((material) => material.materialID === materialID);
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

// const { Option } = Select;

const JewelrySettingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeRingSetting = ringData.find((jewelrySetting) => jewelrySetting.jewelrySettingID === id);
  
  const activeRingSettingMaterials = activeRingSetting
    ? ringMaterialData.filter(
        (ringMaterial) =>
          ringMaterial.jewelrySettingID === activeRingSetting.jewelrySettingID
      )
    : [];

  // EDIT INFOR
  const [isEditing, setIsEditing] = useState(false); // Trạng thái để xác định chế độ chỉnh sửa
  const [editedProduct, setEditedProduct] = useState(activeRingSetting); // Trạng thái lưu các thông tin chỉnh sửa

  const startEditing = () => {
    setIsEditing(true);
    setEditedProduct({ ...activeProduct }); // Khởi tạo dữ liệu chỉnh sửa từ dữ liệu hiện tại
  };

  const saveChanges = () => {
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setEditedProduct({
      ...editedProduct,
      [fieldName]: value,
    });
  };

  // JEWELRY MATERIAL TABLE
  const [data, setData] = useState<RingMaterialDataType[]>(
    activeRingSettingMaterials
  );

  const [count, setCount] = useState(2);

  const materialTableData = data
    .map((rm) => {
      const materialDetail = getMaterialDetails(rm.materialID);
      if (materialDetail) {
        const pricePerGram = materialDetail.sellingPrice;
        const price = rm.weight * pricePerGram;
        return {
          key: rm.materialID,
          materialName: materialDetail.materialName,
          weight: rm.weight,
          pricePerGram: pricePerGram,
          price: price,
        };
      }
      return null;
    })
    .filter(Boolean);

  const handleDelete = (key: React.Key) => {
    const newData = data.filter(
      (item: RingMaterialDataType) => item.key !== key
    );
    setData(newData);
  };

  const handleAdd = () => {
    const newMaterialID = materialData[0]?.materialID || "";
    const newWeight = 1;
    const newPricePerGram = materialData[0]?.sellingPrice || 1;
    const newJewelrySettingPrice = newWeight * newPricePerGram;

    const newData: RingMaterialDataType = {
      key: newMaterialID,
      jewelrySettingID: activeRingSetting?.jewelrySettingID || "",
      materialID: newMaterialID,
      weight: newWeight,
      // pricePerGram: newPricePerGram,
      price: newJewelrySettingPrice,
    };

    setData([...data, newData]);
    setCount(count + 1);
  };

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

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: "Material",
      dataIndex: "materialName",
      key: "materialName",
      editable: true,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      editable: true,
    },
    {
      title: "Price per Gram",
      dataIndex: "pricePerGram",
      key: "pricePerGram",
    },
    {
      title: "Jewelry Setting Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const columns = defaultColumns.map((col) => {
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
        handleSave,
      }),
    };
  });


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
                    {activeRingSetting ? (
                      <>
                        {activeRingSettingMaterials ? (
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
                                        src={
                                          activeRingSetting.jewelrySettingImg
                                        }
                                        alt={
                                          activeRingSetting.jewelrySettingName
                                        }
                                      />
                                    </Styled.ProductImg>
                                    <Styled.ProductContent>
                                      <Form.Item
                                        label="Jewelry Setting ID"
                                        className="InforLine_Title"
                                      >
                                        <Input
                                          value={
                                            editedProduct?.jewelrySettingID
                                          }
                                          onChange={(e) =>
                                            handleFieldChange(
                                              "jewelrySettingID",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label="Jewelry Setting Name"
                                        className="InforLine_Title"
                                      >
                                        <Input
                                          value={
                                            activeRingSetting.jewelrySettingName
                                          } // chưa chuyển sang dạng editedJewelrySetting
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
                                        <Input
                                          value={editedProduct?.type}
                                          onChange={(e) =>
                                            handleFieldChange(
                                              "type",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label="Auxiliary Cost"
                                        className="InforLine_Title"
                                      >
                                        <Input
                                          value={
                                            activeRingSetting.auxiliaryCost
                                          } // chưa chuyển sang dạng editedJewelrySetting
                                          onChange={(e) =>
                                            handleFieldChange(
                                              "auxiliaryCost",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Item>
                                      {/* <Form.Item label="Jewelry Setting Price" className="InforLine_Title">
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
                                    </Form.Item> */}
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
                                      components={components}
                                      rowClassName={() => "editable-row"}
                                      bordered
                                      dataSource={materialTableData}
                                      columns={columns as ColumnTypes}
                                    />
                                  </Styled.MaterialTable>
                                </Styled.PageContent_Bot>
                                <Styled.ActionBtn>
                                  <Button
                                    className="MainBtn"
                                    onClick={saveChanges}
                                  >
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
                                <Styled.PageContent_Bot>
                                  <Styled.PageDetail_Title>
                                    <p>Jewelry Detail</p>
                                  </Styled.PageDetail_Title>

                                  <Styled.PageDetail_Infor>
                                    <Styled.ProductImg>
                                      <img
                                        src={
                                          activeRingSetting.jewelrySettingImg
                                        }
                                        alt={
                                          activeRingSetting.jewelrySettingName
                                        }
                                      />
                                    </Styled.ProductImg>
                                    <Styled.ProductContent>
                                      <Styled.InforLine>
                                        <p className="InforLine_Title">
                                          Jewelry Setting ID
                                        </p>
                                        <p>
                                          {activeRingSetting.jewelrySettingID}
                                        </p>
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
                                          Auxiliary Cost
                                        </p>
                                        <p>{activeRingSetting.auxiliaryCost}</p>
                                      </Styled.InforLine>
                                      {/* <Styled.InforLine>
                                    <p className="InforLine_Title">
                                      Jewelry Setting Price
                                    </p>
                                    <p>
                                      {activeMaterial.sellingPrice *
                                        activeRingSetting.width +
                                        activeRingSetting.auxiliaryCost}
                                    </p>
                                  </Styled.InforLine> */}
                                    </Styled.ProductContent>
                                  </Styled.PageDetail_Infor>
                                  <div>
                                    <Button
                                      onClick={handleAdd}
                                      type="primary"
                                      style={{ marginBottom: 16 }}
                                    >
                                      Add a row
                                    </Button>
                                    <Table
                                      components={components}
                                      rowClassName={() => "editable-row"}
                                      bordered
                                      dataSource={materialTableData}
                                      columns={columns as ColumnTypes}
                                    />
                                  </div>
                                </Styled.PageContent_Bot>
                                <Styled.ActionBtn>
                                  <Styled.ActionBtn_Left>
                                    <Button className="MainBtn" onClick={startEditing}>
                                      Edit
                                    </Button>
                                    <Link to="/admin/product/jewelry">
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
                                      title="Sure to delete?"
                                      visible={isModalVisible}
                                      onOk={handleOk}
                                      onCancel={handleCancel}
                                    >
                                    </Modal>
                                  </Styled.ActionBtn_Right>
                                </Styled.ActionBtn>
                              </>
                            )}
                          </>
                        ) : (
                          <div>Jewelry Setting Material not found.</div>
                        )}
                      </>
                    ) : (
                      <div>Jewelry setting not found.</div>
                    )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default JewelrySettingDetail;
