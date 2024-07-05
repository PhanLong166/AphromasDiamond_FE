import * as Styled from "./Collection.styled";
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
import { collectionData, CollectionDataType } from "../MarketingData";
import { productData } from "../../ProductPage/ProductData";
import TextArea from "antd/es/input/TextArea";

// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof CollectionDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: CollectionDataType;
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

const Collection = () => {
  const [form] = Form.useForm();
  const [data] = useState<CollectionDataType[]>(collectionData);
  const [isAdding, setIsAdding] = useState(false);

  const columns: TableColumnsType<CollectionDataType> = [
    {
      title: "Collection ID",
      dataIndex: "collectionID",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.collectionID.localeCompare(b.collectionID),
    },
    {
      title: "Collection Name",
      dataIndex: "collectionName",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.collectionName.length - b.collectionName.length,
    },
    {
      title: "Debut Date",
      dataIndex: "debutDate",
      sorter: (a: CollectionDataType, b: CollectionDataType) =>
        a.debutDate.length - b.debutDate.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "collectionID",
      render: (_, { collectionID }) => {
        let count = 0;
        productData.forEach((collection) => {
          if (collection.collectionID === collectionID) {
            count++;
          }
        });
        return count;
      },
      sorter: (a, b) => a.collectionID.length - b.collectionID.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_: unknown, { collectionID }) => (
        <Space size="middle">
          <Link to={`/admin/marketing/collection/detail/${collectionID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const onChangeTable: TableProps<CollectionDataType>["onChange"] = (
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
                      Add New Collection
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
                        label="Collection ID"
                        name="Collection ID"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Collection Name"
                        name="Collection Name"
                        rules={[{ required: true }]}
                      >
                        <Input className="formItem" placeholder="15" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item
                        label="Debut Date"
                        name="Debut Date"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          onChange={onChangeDate}
                          className="formItem"
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item
                        label="Description"
                        name="Description"
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea
                          placeholder="Description"
                          className="formItem"
                          allowClear
                          // onChange={onChangeAdd}
                        />
                      </Form.Item>
                    </Styled.FormDescript>
                    <Styled.FormItem>
                      <Form.Item
                        label="Product in Collection"
                        name="Product in Collection"
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
                      {/* <Link to="/admin/product/diamond/detail/D0001">   */}
                      <SubmitButton form={form}> 
                        <SaveOutlined />
                        Save
                      </SubmitButton>
                    {/* </Link> */}
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

export default Collection;
