import * as Styled from "./ProductPromotion.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type {
  TableProps,
  FormInstance,
  TableColumnsType,
  DatePickerProps,
} from "antd";
import {
  Form,
  Input,
  InputNumber,
  // Popconfirm,
  Table,
  // Typography,
  Button,
  Space,
  DatePicker,
  Select,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import MarketingMenu from "@/components/Admin/MarketingMenu/MarketingMenu";
import { Link } from "react-router-dom";
import { promotionData, PromotionDataType } from "../MarketingData";
import { productData } from "../../ProductPage/ProductData";

// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof PromotionDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: PromotionDataType;
  index: number;
  // children: React.ReactNode;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  // record,
  // index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
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

// DATE PICK
const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

// MULTI JEWELRY PICK
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const ProductPromotion = () => {
  const [form] = Form.useForm();
  const [data] = useState<PromotionDataType[]>(promotionData);
  const [isAdding, setIsAdding] = useState(false);

  const columns: TableColumnsType<PromotionDataType> = [
    {
      title: "Promotion ID",
      dataIndex: "promotionID",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.promotionID.localeCompare(b.promotionID),
    },
    {
      title: "Promotion Name",
      dataIndex: "promotionName",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.promotionName.length - b.promotionName.length,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (a: PromotionDataType, b: PromotionDataType) =>
        a.endDate.length - b.endDate.length,
    },
    {
      title: "Amount",
      dataIndex: "promotionID",
      render: (_, { promotionID }) => {
        let count = 0;
        productData.forEach((promotion) => {
          if (promotion.promotionID === promotionID) {
            count++;
          }
        });
        return count;
      },
      sorter: (a, b) => a.promotionID.length - b.promotionID.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_: unknown, { promotionID }) => (
        <Space size="middle">
          <Link to={`/admin/product/jewelry-setting/detail/${promotionID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const onChangeTable: TableProps<PromotionDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // SEARCH AREA
  const [searchText, setSearchText] = useState("");

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

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <MarketingMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {(!isAdding && (
                <>
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
                  <Styled.AddButton>
                    <button onClick={handleAddNew}>
                      <PlusCircleOutlined />
                      Add New Product Promotion
                    </button>
                  </Styled.AddButton>
                </>
              )) || (
                <>
                  <Styled.AddContent_Title>
                    <p>Add Collection</p>
                  </Styled.AddContent_Title>
                </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {isAdding ? (
                <>
                  <Form
                    className="AdPageContent_Content"
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                  >
                    <Styled.FormItem>
                      <Form.Item
                        label="Promotion ID"
                        name="Promotion ID"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Promotion Name"
                        name="Promotion Name"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="Rose" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="% discount"
                        name="Discount"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="15" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Start Date"
                        name="Start Date"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          onChange={onChangeDate}
                          className="formItem"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="End Date"
                        name="End Date"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          onChange={onChangeDate}
                          className="formItem"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea className="formItem" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Product in Promotion"
                        name="Product"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="formItem"
                          mode="multiple"
                          allowClear
                          placeholder="Select Product"
                          options={productData.map((product) => ({
                            value: product.jewelryID,
                            label:
                              product.jewelryID + ": " + product.jewelryName,
                          }))}
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                  </Form>

                  <Styled.ActionBtn>
                    <Form.Item>
                      <Space>
                        <SubmitButton form={form}>
                          <SaveOutlined />
                          Save
                        </SubmitButton>
                        <Button
                          onClick={handleCancel}
                          className="CancelBtn"
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Styled.ActionBtn>
                </>
              ) : (
                <Form form={form} component={false}>
                  <Table
                    components={{
                      body: {
                        cell: EditableCell,
                      },
                    }}
                    bordered
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
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

export default ProductPromotion;
