import React, { useState } from "react";
import * as Styled from "./Jewelry.styled";
// import { useState } from "react";
import {
  Select,
  Input,
  Form,
  Button,
  InputNumber,
  message,
  Upload,
  Popover,
  Popconfirm,
  Table,
} from "antd";
// import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  InboxOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import type { FormInstance, UploadProps, GetProp, UploadFile } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import {
  MaterialDataType,
  RingMaterialDataType,
  materialData,
} from "../ProductData";
import ImgCrop from "antd-img-crop";
// import { ringData, materialData } from "./ProductData";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

// DESCRIPTION INPUT
const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

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

const materialOptions = [
  { value: "M12345121", label: "14K White Gold" },
  { value: "M12345122", label: "14K Yellow Gold" },
  { value: "M12345123", label: "14K Rose Gold" },
  { value: "M12345124", label: "18K White Gold" },
  { value: "M12345125", label: "18K Yellow Gold" },
  { value: "M12345126", label: "18K Rose Gold" },
  { value: "M12345127", label: "Platinum" },
];

const sizeOptions = [
  { value: "SZ01", label: 8 },
  { value: "SZ02", label: 10 },
  { value: "SZ03", label: 12 },
  { value: "SZ04", label: 14 },
  { value: "SZ05", label: 16 },
  { value: "SZ06", label: 18 },
];

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
        materialOptions ? (
          <Select value={value} onChange={onChange}>
            {materialOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
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
}> = ({ editable, value, onChange, options }) => {
  return (
    <td>
      {editable ? (
        options ? (
          <Select value={value} onChange={onChange}>
            {options.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
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

const AddProduct = () => {
  const [form] = Form.useForm();
  const [diamondSections, setDiamondSections] = useState(1);
  const [type, setType] = useState(""); //LINK TO 2 TYPE

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setType(value);
    console.log(`selected ${value}`);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
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
  const [dataMaterial, setDataMaterial] = useState<RingMaterialDataType[]>([]);

  const handleFieldChange = (
    fieldName: keyof RingMaterialDataType,
    value: any,
    key: any
  ) => {
    const newData = dataMaterial.map((item) =>
      item.key === key ? { ...item, [fieldName]: value } : item
    );
    setDataMaterial(newData);
  };

  // const handleSave = (row: RingMaterialDataType) => {
  //   const newData = dataMaterial.map((item) =>
  //     row.key === item.key ? { ...item, ...row } : item
  //   );
  //   setDataMaterial(newData);
  // };

  const handleDelete = (key: React.Key) => {
    const newData = dataMaterial.filter((item) => item.key !== key);
    setDataMaterial(newData);
  };

  const handleAdd = () => {
    const newKey =
      dataMaterial.length > 0
        ? String(Number(dataMaterial[dataMaterial.length - 1].key) + 1)
        : "1";
    const newData: RingMaterialDataType = {
      key: newKey,
      jewelrySettingID: "",
      jewelrySettingVariantID: "",
      materialID: "",
      sizeID: "",
      amount: 0,
      price: 0,
    };
    setDataMaterial([...dataMaterial, newData]);
  };

  const columnsMaterial = [
    {
      title: "Material Name",
      dataIndex: "materialID",
      editable: true,
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableMaterialCell
          title="Material Name"
          editable={true}
          value={record.materialID}
          onChange={(value) =>
            handleFieldChange("materialID", value, record.key)
          }
          options={materialOptions}
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
          onChange={(value) => handleFieldChange("sizeID", value, record.key)}
          options={sizeOptions}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (_: unknown, record: RingMaterialDataType) => (
        <EditableCell_Material
          title="Amount"
          editable={true}
          value={record.amount}
          onChange={(value) => handleFieldChange("amount", value, record.key)}
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
            0,
            0
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

          <Styled.AdPageArea>
            <Styled.AdPageArea_Title>
              <Styled.AdPage_HeadLeft>
                <h1>Add Diamond Jewelry</h1>
                <p>Add a new jewelry</p>
              </Styled.AdPage_HeadLeft>
              <Styled.AddButton>
                <button onClick={() => setDiamondSections(diamondSections + 1)}>
                  <PlusCircleOutlined />
                  Add one Diamond
                </button>
              </Styled.AddButton>
            </Styled.AdPageArea_Title>
            <>
              <Styled.AdPageContent_Product>
                <Styled.AdPageContent_Title>
                  <p>Add Jewelry</p>
                </Styled.AdPageContent_Title>
                <Form
                  form={form}
                  layout="vertical"
                  className="AdPageContent_Content"
                >
                  <Styled.FormItem>
                    <Form.Item
                      label="Jewelry ID"
                      name="Jewelry ID"
                      rules={[{ required: true }]}
                      validateTrigger="onChange"
                    >
                      <Input className="formItem" placeholder="D1234" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Jewelry Name"
                      name="Jewelry Name"
                      rules={[{ required: true }]}
                      validateTrigger="onChange"
                    >
                      <Input className="formItem" placeholder="Filled" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item label="Jewelry Type">
                      <Select
                        //   defaultValue="Select Color"
                        className="formItem"
                        placeholder="Select Type"
                        onChange={handleChange}
                        value={type}
                        options={[
                          { value: "Ring", label: "Ring" },
                          { value: "Necklace", label: "Necklace" },
                          { value: "Earring", label: "Earring" },
                          { value: "Bracelet", label: "Bracelet" },
                          { value: "Anklet", label: "Anklet" },
                          { value: "Bangle", label: "Bangle" },
                          { value: "Choker", label: "Choker" },
                          { value: "Pendant", label: "Pendant" },
                        ]}
                      />
                    </Form.Item>
                  </Styled.FormItem>
                  {/* <Styled.FormItem>
                    <Form.Item
                      label="Markup Percentage (%)"
                      name="Markup Percentage"
                      rules={[{ required: true }]}
                      validateTrigger="onChange"
                    >
                      <InputNumber className="formItem" placeholder="150" />
                    </Form.Item>
                  </Styled.FormItem> */}
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
                </Form>
              </Styled.AdPageContent_Product>

              {Array.from({ length: diamondSections }).map(
                (
                  _,
                  index // Sử dụng Array.from để render các phần "Add Diamond"
                ) => (
                  <Styled.AdPageContent_Product key={index}>
                    <Styled.AdPageContent_Title>
                      <p>Add Diamond</p>
                    </Styled.AdPageContent_Title>

                    <Form
                      form={form}
                      layout="vertical"
                      className="AdPageContent_Content"
                    >
                      <Styled.FormItem>
                        <Form.Item
                          label="Diamond ID"
                          name={`Diamond ID ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="D1234" />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Diamond Name"
                          name={`Diamond Name ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="Filled" />
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
                        <Form.Item
                          label="Price"
                          name={`Price ${index}`}
                          rules={[{ required: true }]}
                        >
                          <InputNumber
                            className="formItem"
                            placeholder="4,080"
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Shape">
                          <Select
                            //   defaultValue="Select Shape"
                            className="formItem"
                            placeholder="Select Shape"
                            onChange={handleChange}
                            options={[
                              { value: "Round", label: "Round" },
                              { value: "Princess", label: "Princess" },
                              { value: "Cushion", label: "Cushion" },
                              { value: "Oval", label: "Oval" },
                              { value: "Emerald", label: "Emerald" },
                              { value: "Pear", label: "Pear" },
                              { value: "Asscher", label: "Asscher" },
                              { value: "Heart", label: "Heart" },
                              { value: "Radiant", label: "Radiant" },
                              { value: "Marquise", label: "Marquise" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Color">
                          <Select
                            //   defaultValue="Select Color"
                            className="formItem"
                            placeholder="Select Color"
                            onChange={handleChange}
                            options={[
                              { value: "K", label: "K" },
                              { value: "J", label: "J" },
                              { value: "I", label: "I" },
                              { value: "H", label: "H" },
                              { value: "G", label: "G" },
                              { value: "F", label: "F" },
                              { value: "E", label: "E" },
                              { value: "D", label: "D" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Polish"
                          name="Polish"
                          rules={[{ required: true }]}
                        >
                          <Select
                            className="formItem"
                            placeholder="Select Polish"
                            onChange={handleChange}
                            options={[
                              { value: "Excellent", label: "Excellent" },
                              { value: "Very Good", label: "Very Good" },
                              { value: "Good", label: "Good" },
                              { value: "Fair", label: "Fair" },
                              { value: "Poor", label: "Poor" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Cut"
                          name="Cut"
                          rules={[{ required: true }]}
                        >
                          <Select
                            className="formItem"
                            placeholder="Select Cut"
                            onChange={handleChange}
                            options={[
                              { value: "Excellent", label: "Excellent" },
                              { value: "Very Good", label: "Very Good" },
                              { value: "Good", label: "Good" },
                              { value: "Fair", label: "Fair" },
                              { value: "Poor", label: "Poor" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Length/Width Ratio"
                          name={`Length/Width ${index}`}
                          rules={[{ required: true }]}
                        >
                          <InputNumber
                            className="formItem"
                            placeholder="1,01"
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Clarity">
                          <Select
                            //   defaultValue="Select Clarity"
                            className="formItem"
                            placeholder="Select Clarity"
                            onChange={handleChange}
                            options={[
                              { value: "I3", label: "I3" },
                              { value: "J", label: "I1-I2" },
                              { value: "SI1S12", label: "SI1-S12" },
                              { value: "VS1VS2", label: "VS1-VS2" },
                              { value: "VVS1VVS2", label: "VVS1-VVS2" },
                              { value: "Flawless", label: "FL-IF" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Symmetry"
                          name="Symmetry"
                          rules={[{ required: true }]}
                        >
                          <Select
                            className="formItem"
                            placeholder="Select Symmetry"
                            onChange={handleChange}
                            options={[
                              { value: "Excellent", label: "Excellent" },
                              { value: "Very Good", label: "Very Good" },
                              { value: "Good", label: "Good" },
                              { value: "Fair", label: "Fair" },
                              { value: "Poor", label: "Poor" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Carat Weight"
                          name={`Weight ${index}`}
                          rules={[{ required: true }]}
                        >
                          <InputNumber
                            className="formItem"
                            placeholder="1,01"
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Table %"
                          name={`Table % ${index}`}
                          rules={[{ required: true }]}
                        >
                          <InputNumber
                            className="formItem"
                            placeholder="56.0"
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Depth %"
                          name={`Depth % ${index}`}
                          rules={[{ required: true }]}
                        >
                          <InputNumber
                            className="formItem"
                            placeholder="63.8"
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Fluorescence"
                          name="Fluorescence"
                          rules={[{ required: true }]}
                        >
                          <Select
                            className="formItem"
                            placeholder="Select Symmetry"
                            onChange={handleChange}
                            options={[
                              { value: "Strong", label: "Strong" },
                              { value: "Media", label: "Media" },
                              { value: "Faint", label: "Faint" },
                              { value: "None", label: "None" },
                            ]}
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormDescript>
                        <Form.Item
                          label="Description"
                          name={`Description ${index}`}
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

                      <Styled.UploadFile>
                        <Form.Item label="Upload GIA">
                          <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single or bulk upload. Strictly
                              prohibited from uploading company data or other
                              banned files.
                            </p>
                          </Dragger>
                        </Form.Item>
                      </Styled.UploadFile>

                      {/* <Styled.FormItem>
                  <Form.Item label="Currency Type">
                    <Select
                      defaultValue="USD"
                      className="formItem"
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
                  </Form.Item>
                </Styled.FormItem> */}
                    </Form>
                  </Styled.AdPageContent_Product>
                )
              )}

              <Styled.AdPageContent_Product>
                <Styled.AdPageContent_Title>
                  <p>Add Jewelry Setting</p>
                </Styled.AdPageContent_Title>
                <Form
                  form={form}
                  layout="vertical"
                  className="AdPageContent_Content"
                >
                  <Styled.FormItem>
                    <Form.Item
                      label="Jewelry Setting ID"
                      name="Setting ID"
                      rules={[{ required: true }]}
                    >
                      <Input className="formItem" placeholder="D1234" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Jewelry Setting Name"
                      name="Setting Name"
                      rules={[{ required: true }]}
                    >
                      <Input className="formItem" placeholder="Filled" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item label="Jewelry Setting Type">
                      <Select
                        // defaultValue="Ring"
                        className="formItem"
                        placeholder="Select Type"
                        onChange={handleChange}
                        options={[
                          { value: "Ring", label: "Ring" },
                          { value: "Necklace", label: "Necklace" },
                          { value: "Earring", label: "Earring" },
                          { value: "Bracelet", label: "Bracelet" },
                          { value: "Anklet", label: "Anklet" },
                          { value: "Bangle", label: "Bangle" },
                          { value: "Choker", label: "Choker" },
                          { value: "Pendant", label: "Pendant" },
                        ]}
                        value={type}
                        disabled
                      />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Weight (gram)"
                      name="Weight"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="150" />
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
                    <Form.Item
                      label="Product Cost"
                      name="Product Cost"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="5000000" />
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
              </Styled.AdPageContent_Product>
              <Styled.ActionBtn>
                <Form.Item>
                  <Link to="/admin/product/detail/P12345130">
                    {" "}
                    {/* {`/admin/product/detail/${jewelryID} `} */}
                    <SubmitButton form={form}>Create New</SubmitButton>
                  </Link>

                  <Link to="/admin/product/jewelry">
                    <Button
                      /*onClick={}*/ className="CancelBtn"
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Link>
                </Form.Item>
              </Styled.ActionBtn>
              {/* </Form> */}
            </>
          </Styled.AdPageArea>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default AddProduct;
