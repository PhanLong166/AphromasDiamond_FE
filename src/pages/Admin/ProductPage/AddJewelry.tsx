import * as Styled from "./Product.styled";
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
import {
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

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

const AddJewelry = () => {

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
              <h1>Add Jewelry</h1>
              <p>Add a new jewelry</p>
            </Styled.AdPageArea_Title>
            <Styled.AdPageContent_Jewel>
              <Form layout="vertical" className="AdPageContent_Content">
                <Styled.FormItem>
                  <Form.Item label="Product Setting ID">
                    <Input className="formItem" placeholder="D1234" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Product Setting Name">
                    <Input className="formItem" placeholder="Filled" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Markup Percentage (%)">
                    <InputNumber className="formItem" placeholder="150" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Cost Price">
                    <InputNumber className="formItem" placeholder="4,080" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Type">
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
                  <Form.Item label="Width">
                    <InputNumber className="formItem" placeholder="1,01" />
                  </Form.Item>
                </Styled.FormItem>
                <Styled.FormItem>
                  <Form.Item label="Material">
                    <Select
                      //   defaultValue="Select Clarity"
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
                <Styled.FormDescript>
                  <Form.Item label="Description">
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
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                      </p>
                    </Dragger>
                  </Form.Item>
                </Styled.UploadFile>
              </Form>
            </Styled.AdPageContent_Jewel>
            <Styled.ActionBtn>
              <Link to="/admin/product">
                <Button type="primary" /*onClick={}*/ className="MainBtn">
                    <SaveOutlined />
                    Save
                </Button>
              </Link>

              <Link to="/admin/product">
                <Button /*onClick={}*/ style={{ marginLeft: "10px" }}>
                  Cancel
                </Button>
              </Link>
            </Styled.ActionBtn>
          </Styled.AdPageArea>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default AddJewelry;