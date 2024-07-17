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
  Switch,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { showAllSetting, createSetting } from "@/services/jewelrySettingAPI";
import { getImage } from "@/services/imageAPI";
import { showAllMaterial } from "@/services/materialAPI";
import { showAllJewelryType } from "@/services/jewelryTypeAPI";
import { showAllSize } from "@/services/sizeAPI";
import { showAllProduct } from "@/services/jewelryAPI";
import { createSettingVariant } from "@/services/settingVariantAPI";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];


// MATERIAL TABLE
const calculateJewelrySettingPrice = (
  weight: number,
  pricePerGram: number,
  auxiliaryCost: number,
  productionCost: number
) => {
  return weight * pricePerGram + auxiliaryCost + productionCost;
};


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
  const [sizes, setSizes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedJewelryType, setSelectedJewelryType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  
  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description: type === "success" ? `${method} jewelry setting successfully` : error,
    });
  };


  const fetchData = async () => {
    try {
      const responseSetting = await showAllSetting();
      const responseMaterial = await showAllMaterial();
      const responseJewelryType = await showAllJewelryType();
      const responseSize = await showAllSize();
      const responseProduct = await showAllProduct();

      const { data: settingsData } = responseSetting.data;
      const { data: materialsData } = responseMaterial.data;
      const { data: jewelryTypesData } = responseJewelryType.data;
      const { data: sizeData } = responseSize.data;
      const { data: productData } = responseProduct.data;

      const formattedSettings = settingsData.map((setting: any) => ({
        jewelrySettingID: setting.JewelrySettingID,
        jewelrySettingName: setting.Name,
        productID: setting.ProductID,
        jewelryTypeID: setting.JewelryTypeID,
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

      const formattedTypes = jewelryTypesData.map((type: any) => ({
        typeID: type.JewelryTypeID,
        typeName: type.Name,
      }));

      const formattedSizes = sizeData.map((size: any) => ({
        sizeID: size.SizeID,
        sizeValue: size.SizeValue,
      }));

      const formattedProducts = productData.map((product: any) => ({
        productID: product.ProductID,
        productName: product.Name,
      }));

      console.log("Formatted Diamonds:", formattedSettings); // Log formatted diamonds
      setSettings(formattedSettings);
      setMaterials(formattedMaterials);
      setJewelryTypes(formattedTypes);
      setSizes(formattedSizes);
      setProducts(formattedProducts);
    } catch (error) {
      console.error("Failed to fetch diamonds:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  //  CHANGE

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

  // const handleSave = async (record: any) => {
  //   try {
  //     const row = await form.validateFields();
  //     const newData = [...dataMaterial];
  //     const index = newData.findIndex((item) => record.key === item.key);
  //     if (index > -1) {
  //       const item = newData[index];
  //       newData.splice(index, 1, { ...item, ...row });
  //       setDataMaterial(newData);
  //     } else {
  //       newData.push(row);
  //       setDataMaterial(newData);
  //     }
  //   } catch (errInfo) {
  //     console.log("Validate Failed:", errInfo);
  //   }
  // };

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

  // const EditableMaterialCell: React.FC<{
  //   title: React.ReactNode;
  //   editable: boolean;
  //   value: any;
  //   // onChange: (value: any) => typeof setSelectedMaterial(value);
  //   options?: { value: any; label: any }[];
  // }> = ({ editable, value, options }) => {
  //   return (
  //     <td>
  //       {editable ? (
  //         options ? (
  //           <Select
  //             placeholder="Select Material"
  //             onChange={(value) => setSelectedMaterial(value)}
  //           >
  //             {options.map((option) => (
  //               <Select.Option
  //                 key={option.value}
  //                 value={option.value}
  //                 // name="material"
  //               >
  //                 {option.label}
  //               </Select.Option>
  //             ))}
  //           </Select>
  //         ) : (
  //           <InputNumber defaultValue={value} />
  //         )
  //       ) : (
  //         value
  //       )}
  //     </td>
  //   );
  // };

  // const EditableSizeCell: React.FC<{
  //   title: React.ReactNode;
  //   editable: boolean;
  //   value: any;
  //   // onChange: (value);
  //   options?: { value: any; label: any }[];
  // }> = ({ editable, value, options }) => {
  //   return (
  //     <td>
  //       {editable ? (
  //         options ? (
  //           <Select
  //             placeholder="Select Size"
  //             onChange={(value) => setSelectedSize(value)}
  //           >
  //             {options.map((option) => (
  //               <Select.Option key={option.value} value={option.value}>
  //                 {option.label}
  //               </Select.Option>
  //             ))}
  //           </Select>
  //         ) : (
  //           <Input value={value} onChange={(e) => onChange(e.target.value)} />
  //         )
  //       ) : (
  //         value
  //       )}
  //     </td>
  //   );
  // };

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
      title: "Material",
      dataIndex: "materialID",
      key: "materialID",
      // editable: true,
      render: () => (
        <Select
          placeholder="Select Material"
          onChange={(value) => setSelectedMaterial(value)}
        >
          {materials.map((material) => (
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
          {sizes.map((size) => (
            <Select.Option key={size.sizeID} value={size.sizeID}>
              {size.sizeValue}
            </Select.Option>
          ))}
        </Select>
      ),
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


  
// SUBMIT FORM
interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  // const [submittable, setSubmittable] = React.useState<boolean>(false);
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));

  }, [values]);

  const settingValues: object = {
    ...values,
    UpdateTime: new Date(),
    DiamondShape: null,
  }
  console.log(settingValues);

  const addSetting = async (settingValues: object) => {
    try {
      const { data } = await createSetting(settingValues);
      if (data.statusCode !== 200) throw new Error(data.message);
      fetchData(); // Refresh the table after adding a diamond
      setIsAdding(false); // Close the add form after successful addition
      openNotification("success", "Add", "");
    } catch (error: any) {
      openNotification("error", "", error.message);
    }
  };

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={() => addSetting(settingValues)}
    >
      {children}
    </Button>
  );
};
  

  return (
    <>
          {contextHolder}

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
                          placeholder="Select Jewelry"
                          onChange={(value) => setSelectedProduct(value)}
                        >
                          {products.map((product) => (
                            <Select.Option
                              key={product.productID}
                              value={product.productID}
                            >
                              {product.productName}
                            </Select.Option>
                          ))}
                        </Select>
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
                        label="Jewelry Setting Type"
                        name="Jewelry Setting Type"
                        rules={[{ required: true }]}
                      >
                        <Select
                          placeholder="Select Type"
                          onChange={(value) => setSelectedJewelryType(value)}
                        >
                          {jewelryTypes.map((material) => (
                            <Select.Option
                              key={material.typeID}
                              value={material.typeID}
                            >
                              {material.typeName}
                            </Select.Option>
                          ))}
                        </Select>
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
                    <Styled.FormItem>
                      <Form.Item label="Active" name="IsActive">
                        <Switch />
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
                  </Form>
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
