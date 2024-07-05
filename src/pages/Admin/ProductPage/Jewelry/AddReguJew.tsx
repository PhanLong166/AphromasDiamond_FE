import React, { useState } from "react";
import * as Styled from "./Jewelry.styled";
// import { useState } from "react";
import {
  Select,
  Input,
  Form,
  Button,
  InputNumber,
  Upload,
  Popover,
  Popconfirm,
  Table,
} from "antd";
// import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import type { FormInstance, UploadProps, GetProp, UploadFile } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import ProductMenu from "@/components/Admin/ProductMenu/ProductMenu";
import {
  MaterialDataType,
  RingDataType,
  RingMaterialDataType,
  materialData,
  ringData,
  ringSizeData,
} from "../ProductData";
import ImgCrop from "antd-img-crop";
import {
  JewelryType,
} from "./Jewelry.type";
import { Option } from "antd/es/mentions";

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
        <Select
          placeholder="Select Material"
          onChange={onChange}
          style={{ width: "100%" }}
        >
          {materialData.map((option) => (
            <Select.Option
              placeholder="Select Diamond"
              key={option.materialID}
              value={option.materialID}
            >
              {option.materialName}
            </Select.Option>
          ))}
        </Select>
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
}> = ({ editable, value, onChange }) => {
  return (
    <td>
      {editable ? (
        <Select placeholder="Select Size" onChange={onChange}>
          {ringSizeData.map((option) => (
            <Select.Option key={option.sizeID} value={option.sizeID}>
              {option.sizeValue}
            </Select.Option>
          ))}
        </Select>
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
  const [selectedSetting, setSelectedSetting] = useState<RingDataType | null>(null);
  const [settingOption, setSettingOption] = useState("new");

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
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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

  // CHANGE DIAMOND & SETTING OPTIONS

  const handleChangeSettingOption = (value: any) => {
    setSettingOption(value);
    if (value === "existing") {
      setSelectedSetting(ringData[0]);
    } else {
      setSelectedSetting(null);
    }
  };

  const handleSettingChange = (settingID: any) => {
    const setting = ringData.find((s) => s.jewelrySettingID === settingID);
    setSelectedSetting(setting || null);
  };

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
                <h1>Add Regular Jewelry</h1>
                <p>Add a new jewelry</p>
              </Styled.AdPage_HeadLeft>
            </Styled.AdPageArea_Title>
            <>
              <Styled.AdPageContent_Product>
                <Styled.AdPageContent_TitleJewelry>
                  <p>Add Jewelry</p>
                </Styled.AdPageContent_TitleJewelry>
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
                        options={JewelryType}
                      />
                    </Form.Item>
                  </Styled.FormItem>
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

              <Styled.AdPageContent_Product>
                <Styled.AdPageContent_Title>
                  <p>Add Jewelry Setting</p>
                  <Styled.FormChoice>
                    <Form.Item
                      label="Select Setting Option"
                      name="settingOption"
                      rules={[{ required: true }]}
                    >
                      <Select
                        placeholder="Select Option"
                        onChange={(value) => handleChangeSettingOption(value)}
                      >
                        <Option value="new">Create New</Option>
                        <Option value="existing">Select Existing</Option>
                      </Select>
                    </Form.Item>
                  </Styled.FormChoice>
                </Styled.AdPageContent_Title>
                <Form
                  form={form}
                  layout="vertical"
                  className="AdPageContent_Content"
                >
                  

                  {settingOption === "new" ? (
                    <>
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
                            options={JewelryType}
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
                          <InputNumber
                            className="formItem"
                            placeholder="5000000"
                          />
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
                    </>
                  ) : (
                    <>
                      <Styled.FormItem>
                        <Form.Item
                          label="Select Existing Setting"
                          name="Setting ID"
                          rules={[{ required: true }]}
                        >
                          <Select
                            placeholder="Select Setting"
                            onChange={handleSettingChange}
                          >
                            {ringData.map((setting) => (
                              <Option
                                key={setting.jewelrySettingID}
                                value={setting.jewelrySettingID}
                              >
                                {setting.jewelrySettingID}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Jewelry Setting Name">
                          <Input
                            className="formItem"
                            value={selectedSetting?.jewelrySettingName}
                            readOnly
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Jewelry Setting Type">
                          <Input
                            className="formItem"
                            value={selectedSetting?.type}
                            readOnly
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Weight (gram)">
                          <Input
                            className="formItem"
                            value={selectedSetting?.weight}
                            readOnly
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Auxiliary Cost">
                          <Input
                            className="formItem"
                            value={selectedSetting?.auxiliaryCost}
                            readOnly
                          />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item label="Charge Rate (%)">
                          <Input
                            className="formItem"
                            value={selectedSetting?.chargeRate}
                            readOnly
                          />
                        </Form.Item>
                      </Styled.FormItem>
                    </>
                  )}
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
