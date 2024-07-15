import * as Styled from "../Jewelry Setting/RingSetting.styled";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  // InboxOutlined,
  SaveOutlined,
  EyeOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import type {
  FormInstance,
  TableColumnsType,
  TableProps,
  UploadProps,
  GetProp,
  UploadFile,
  // GetRef,
  // InputRef,
} from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Button,
  Select,
  Upload,
  // message,
  Space,
  Popconfirm,
  Popover,
  notification,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { showAllSetting } from "@/services/jewelrySettingAPI";
import { getImage } from "@/services/imageAPI";
import { showAllMaterial } from "@/services/materialAPI";
import { showAllJewelryType } from "@/services/jewelryTypeAPI";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

// SUBMIT FORM
interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

// MATERIAL TABLE
const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
) => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};

// const getMaterialDetails = (
//   materialID: string,
//   materialData: showAllMaterial(),
// ) => {
//   return materialData.find((material) => material.materialID === materialID);
// };

const PriceCalculation = (
  <div>
    (Weight * Price per Gram + Auxiliary Cost + Production Cost)* Charge Rate
  </div>
);

const JewelrySetting = () => {
  const [form] = Form.useForm();
  // const [data] = useState<RingDataType[]>(ringData);
  const [isAdding, setIsAdding] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [settings, setSettings] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [jewelryTypes, setJewelryTypes] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedJewelryType, setSelectedJewelryType] = useState("");
  const [settingName, setSettingName] = useState("");

  const fetchData = async () => {
    try {
      const responseSetting = await showAllSetting();
      const responseMaterial = await showAllMaterial();
      const responseJewelryType = await showAllJewelryType();

      const { data: settingsData } = responseSetting.data;
      const { data: materialsData } = responseMaterial.data;
      const { data: jewelryTypesData } = responseJewelryType.data;

      const formattedSettings = settingsData.map((setting: any) => ({
        jewelrySettingID: setting.JewelrySettingID,
        jewelrySettingName: setting.Name,
        productID: setting.ProductID,
        productionCost: setting.ProductionCost,
        isActive: setting.IsActive === true,
        jewelrySettingVariant: setting.JewelrySettingVariant.map(
          (variant: any) => ({
            variantID: variant.JewelrySettingVariantID,
            amount: variant.Amount,
            totalPriceVariant: variant.TotalPriceVariant,
            size: {
              sizeID: variant.Size.SizeID,
              sizeValue: variant.Size.SizeValue,
              unitOfMeasure: variant.Size.UnitOfMeasure,
            },
          })
        ),
        // images: setting.usingImage.map((image: any) => ({
        //   id: image.UsingImageID,
        //   name: image.Name,
        //   url: getImage(image.UsingImageID),
        // })),
      }));

      const formattedMaterials = materialsData.map((material: any) => ({
        materialID: material.MaterialJewelryID,
        materialName: material.Name,
        sellPrice: material.SellPrice,
      }));

      const formattedType = jewelryTypesData.map((type: any) => ({
        typeID: type.JewelryTypeID,
        typeName: type.Name,
      }));

      console.log("Formatted Diamonds:", formattedSettings); // Log formatted diamonds
      setSettings(formattedSettings);
      setMaterials(formattedMaterials);
      setJewelryTypes(formattedType);
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //  CHANGE
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Jewelry Setting ID",
      dataIndex: "jewelrySettingID",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        parseInt(a.jewelrySettingID) - parseInt(b.jewelrySettingID),
    },
    {
      title: "Image",
      key: "jewelrySettingImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={
              record.images && record.images[0]
                ? record.images[0].url
                : "default-image-url"
            }
            alt={record.jewelrySettingName}
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      ),
    },
    {
      title: "Jewelry Setting Name",
      dataIndex: "jewelrySettingName",
      sorter: (a, b) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelrySettingID }) => (
        <Space size="middle">
          <Link
            to={`/admin/product/jewelry-setting/detail/${jewelrySettingID}`}
          >
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // SEARCH
  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const onChangeTable: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // UPLOAD IMAGES
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const onChangeImg: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // MATERIAL TABLE
  const [dataMaterial, setDataMaterial] = useState<any[]>([]); //RingMaterialDataType

  const handleFieldChange = (fieldName: keyof any, value: any, id: any) => {
    //RingMaterialDataType
    const newData = [...dataMaterial];
    const index = newData.findIndex((item) => id === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, [fieldName]: value });
      setDataMaterial(newData);
    }
  };

  const handleDelete = (id: React.Key) => {
    const newData = dataMaterial.filter((item) => item.id !== id);
    setDataMaterial(newData);
  };

  // EDIT
  const [editingKey, setEditingKey] = useState<string>("");
  const isEditing = (record: any) => record.key === editingKey;

  const handleEdit = (record: any) => {
    setEditingKey(record.key);
  };

  const handleSave = async (record: any) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataMaterial];
      const index = newData.findIndex((item) => record.key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataMaterial(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setDataMaterial(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleAdd = () => {
    const newKey =
      dataMaterial.length > 0
        ? String(Number(dataMaterial[dataMaterial.length - 1].key) + 1)
        : "1";
    const newData: any = {
      key: newKey,
      jewelrySettingID: "",
      jewelrySettingVariantID: "",
      materialID: "",
      weight: 0,
      sizeID: "",
      amount: 0,
      price: 0,
    };
    setDataMaterial([...dataMaterial, newData]);
  };

  const EditableMaterialCell: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (id: any) => void;
    options?: { value: string; label: string }[];
  }> = ({ editable, value, onChange }) => {
    return (
      <td>
        {editable ? (
          materials ? (
            <Select placeholder="Select Material" onChange={onChange}>
              {materials.map((option) => (
                <Select.Option
                  key={option.materialID}
                  value={option.materialName}
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
    onChange: (id: any) => void;
    options?: { id: string; name: number }[];
  }> = ({ editable, value, onChange, options }) => {
    return (
      <td>
        {editable ? (
          options ? (
            <Select placeholder="Select Size" onChange={onChange}>
              {options.map((option) => (
                <Select.Option key={option.id} value={option.name}>
                  {option.name}
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

  const EditableCell_Material: React.FC<{
    title: React.ReactNode;
    editable: boolean;
    value: any;
    onChange: (value: any) => void;
  }> = ({ editable, value, onChange }) => {
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

  const columnsMaterial: TableColumnsType<any> = [
    {
      title: "Material Name",
      dataIndex: "material",
      key: "material",
      // editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <EditableMaterialCell
            title="material"
            editable={editable}
            value={record.material}
            onChange={(value) =>
              handleFieldChange("material", value, record.key)
            }
          />
        );
      },
    },
    {
      title: "Size Value",
      dataIndex: "sizeID",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <EditableSizeCell
            title="Size Value"
            editable={editable}
            value={record.sizeID}
            onChange={(value) => handleFieldChange("sizeID", value, record.key)}
            options={materials.map((material) => ({
              id: material.SizeID,
              name: material.SizeValue,
            }))}
          />
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_, record) => (
        <EditableCell_Material
          title="Amount"
          editable={true}
          value={record.amount}
          onChange={(value) => handleFieldChange("amount", value, record.key)}
        />
      ),
    },
    // {
    //   title: (
    //     <>
    //       Jewelry Setting Price
    //       <Popover
    //         content={PriceCalculation}
    //         title="Price Calculation"
    //         trigger="click"
    //       >
    //         <InfoCircleOutlined style={{ marginLeft: 8, fontSize: "12px" }} />
    //       </Popover>
    //     </>
    //   ),
    //   dataIndex: "price",
    //   render: (_: unknown, record: RingMaterialDataType) => {
    //     const materialDetail = getMaterialDetails(
    //       record.materialID,
    //       materialData
    //     );
    //     if (materialDetail) {
    //       const pricePerGram = materialDetail.sellingPrice;
    //       const jewelrySettingPrice = calculateJewelrySettingPrice(
    //         record.amount,
    //         pricePerGram,
    //         0,
    //         0
    //       );
    //       return jewelrySettingPrice;
    //     }
    //     return 0;
    //   },
    // },
    {
      title: "Price",
      dataIndex: "price",
      render: (_, record) => (
        <EditableCell_Material
          title="Price"
          editable={true}
          value={record.price}
          onChange={(value) => handleFieldChange("amount", value, record.key)}
        />
      ),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) =>
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

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {(!isAdding && (
                <>
                  <Styled.AdPageContent_HeadLeft>
                    <Styled.SearchArea>
                      <Input
                        className="searchInput"
                        type="text"
                        // size="large"
                        placeholder="Search here..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        prefix={<SearchOutlined className="searchIcon" />}
                      />
                    </Styled.SearchArea>

                    {/* <Select
                      defaultValue="USD"
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    /> */}
                  </Styled.AdPageContent_HeadLeft>

                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Ring Setting
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Ring Setting</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                  <Form layout="vertical" className="AdPageContent_Content">
                    {/* <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Name"
                        name="Jewelry Name"
                      >
                        <Select
                          className="formItem"
                          placeholder="Select Jewelry"
                          onChange={handleChange}
                          options={settingsData.map((product) => ({
                            value: product.jewelryID,
                            label: product.jewelryName,
                          }))}
                        />
                      </Form.Item>
                    </Styled.FormItem> */}
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Setting ID"
                        name="Jewelry Setting ID"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Jewelry Setting Name"
                        name="Jewelry Setting Name"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="Filled" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Product Cost"
                        name="Product Cost"
                        rules={[{ required: true }]}
                      >
                        <InputNumber
                          className="formItem"
                          placeholder="5000000"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Auxiliary Cost"
                        name="Auxiliary Cost"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Charge Rate (%)"
                        name="Charge Rate"
                        rules={[{ required: true }]}
                      >
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <TextArea
                          placeholder="Description"
                          allowClear
                          onChange={onChange}
                        />
                      </Form.Item>
                    </Styled.FormDescript>
                    <Styled.UploadFile>
                      <Form.Item label="Upload Images">
                        <ImgCrop rotationSlider>
                          <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeImg}
                            onPreview={onPreview}
                          >
                            {fileList.length < 5 && "+ Upload"}
                          </Upload>
                        </ImgCrop>
                      </Form.Item>
                    </Styled.UploadFile>
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
                        columns={columnsMaterial}
                        rowClassName={() => "editable-row"}
                        bordered
                        pagination={false}
                      />
                    </Styled.MaterialTable>
                  </Form>
                  <Styled.ActionBtn>
                    <SubmitButton form={form}>
                      <SaveOutlined />
                      Save
                    </SubmitButton>
                    <Button
                      onClick={handleCancel}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Styled.ActionBtn>
                </>
              ) : (
                <Form form={form} component={false}>
                  <Table
                    bordered
                    dataSource={settings}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }}
                    onChange={onChangeTable}
                  />
                </Form>
              )}
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default JewelrySetting;
