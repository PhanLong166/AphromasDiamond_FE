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
} from "antd";
// import { Link } from "react-router-dom";
import { InboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { FormInstance, UploadProps } from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
// import { ringData, materialData } from "./ProductData";

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

const AddProduct = () => {
  const [form] = Form.useForm();
  const [diamondSections, setDiamondSections] = useState(1);
  
  // const [materialPrice, setMaterialPrice] = useState<number>(0);
  // const [width, setWidth] = useState<number>(0);
  // const [auxiliaryCost, setAuxiliaryCost] = useState<number>(0);

  // const calculateSettingPrice = (
  //   materialPrice: number,
  //   width: number,
  //   auxiliaryCost: number
  // ) => {
  //   return materialPrice * width + auxiliaryCost;
  // };

  // const handleChangeMaterial = (value: string) => {
  //   const selectedMaterial = ringData.find((item) => item.material === value);
  //   if (selectedMaterial) {
  //     setMaterialPrice(selectedMaterial.price);
  //     const settingPrice = calculateSettingPrice(
  //       selectedMaterial.price,
  //       width,
  //       auxiliaryCost
  //     );
  //     form.setFieldsValue({ "Setting Price": settingPrice });
  //   }
  // };

  // const handleWidthChange = (value: number) => {
  //   const settingPrice = calculateSettingPrice(materialPrice, value, auxiliaryCost);
  //   form.setFieldsValue({ "Setting Price": settingPrice });
  //   setWidth(value);
  // };

  // const handleAuxiliaryCostChange = (value: number) => {
  //   const settingPrice = calculateSettingPrice(materialPrice, width, value);
  //   form.setFieldsValue({ "Setting Price": settingPrice });
  //   setAuxiliaryCost(value);
  // };
  
  
  
  

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
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
                <h1>Add Diamond Jewelry</h1>
                <p>Add a new product</p>
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
                <Form form={form} layout="vertical" className="AdPageContent_Content">
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
                  <Styled.FormItem>
                    <Form.Item
                      label="Markup Percentage (%)"
                      name="Markup Percentage"
                      rules={[{ required: true }]}
                      validateTrigger="onChange"
                    >
                      <InputNumber className="formItem" placeholder="150" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.UploadFile>
                    <Form.Item label="Upload Images">
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly
                          prohibited from uploading company data or other banned
                          files.
                        </p>
                      </Dragger>
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

                    <Form form={form} layout="vertical" className="AdPageContent_Content">
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
                          name={`Polish ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="Excellent" />
                        </Form.Item>
                      </Styled.FormItem>
                      <Styled.FormItem>
                        <Form.Item
                          label="Cut"
                          name={`Cut ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="Excellent" />
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
                          name={`Symmetry ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="Excellent" />
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
                          name={`Fluorescence ${index}`}
                          rules={[{ required: true }]}
                        >
                          <Input className="formItem" placeholder="Strong" />
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
                <Form form={form} layout="vertical" className="AdPageContent_Content">
                  <Styled.FormItem>
                    <Form.Item
                      label="Product Setting ID"
                      name="Setting ID"
                      rules={[{ required: true }]}
                    >
                      <Input className="formItem" placeholder="D1234" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Product Setting Name"
                      name="Setting Name"
                      rules={[{ required: true }]}
                    >
                      <Input className="formItem" placeholder="Filled" />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item label="Material">
                      <Select
                        className="formItem"
                        placeholder="Select Material"
                        onChange={handleChange}
                        options={[
                          { value: "14K White Gold", label: "14KWhiteGold" },
                          { value: "14K Yellow Gold", label: "14KYellowGold" },
                          { value: "14K Rose Gold", label: "14KRoseGold" },
                          { value: "18K White Gold", label: "18KWhiteGold" },
                          { value: "18K Yellow Gold", label: "18KYellowGold" },
                          { value: "18K Rose Gold", label: "18KRoseGold" },
                          { value: "Platinum", label: "Platinum" },
                        ]}
                      />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Width"
                      name="Width"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="1,01" /*onChange={handleWidthChange}*/ />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Auxiliary Costs"
                      name="Auxiliary Costs"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="10.000.000" /*onChange={handleAuxiliaryCostChange} *//>
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Jewelry Setting Price"
                      name="Setting Price"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="10.000.000" disabled />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item label="Jewelry Setting Type">
                      <Select
                        //   defaultValue="Select Color"
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
                      />
                    </Form.Item>
                  </Styled.FormItem>
                  <Styled.FormItem>
                    <Form.Item
                      label="Processing Fee"
                      name="Processing Fee"
                      rules={[{ required: true }]}
                    >
                      <InputNumber className="formItem" placeholder="10.000.000" />
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
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly
                          prohibited from uploading company data or other banned
                          files.
                        </p>
                      </Dragger>
                    </Form.Item>
                  </Styled.UploadFile>
                </Form>
              </Styled.AdPageContent_Product>
              <Styled.ActionBtn>
                <Form.Item>
                  <Link to="/admin/product">
                    <SubmitButton form={form}>Create New</SubmitButton>
                  </Link>

                  <Link to="/admin/product/jewelry">
                    <Button /*onClick={}*/ className="CancelBtn" style={{ marginLeft: "10px" }}>
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
