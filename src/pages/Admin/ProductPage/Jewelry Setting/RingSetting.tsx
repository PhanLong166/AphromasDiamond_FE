import * as Styled from "../Jewelry Setting/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  InboxOutlined,
  SaveOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import type { FormInstance, TableColumnsType, TableProps, UploadProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Button,
  Select,
  Upload,
  message,
  Space,
} from "antd";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../../components/Admin/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";
import TextArea from "antd/es/input/TextArea";
import { ringData, RingDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";



// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof RingDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: RingDataType;
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



const JewelrySetting = () => {
  const [form] = Form.useForm();
  const [data] = useState<RingDataType[]>(ringData);
  // const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [isAdding, setIsAdding] = useState(false);
  // const [editingKey, setEditingKey] = useState<React.Key>("");
  // const isEditing = (record: RingDataType) => record.key === editingKey;
  // const edit = (record: Partial<RingDataType> & { key: React.Key }) => {
  //   form.setFieldsValue({
  //     ringSettingID: "",
  //     ringSettingImg: "",
  //     ringSettingName: "",
  //     price: "",
  //     type: "",
  //     width: "",
  //     material: "",
  //     ...record,
  //   });
  //   setEditingKey(record.key);
  // };
  // const cancel = () => {
  //   setEditingKey("");
  // };

  // const save = async (key: React.Key) => {
  //   try {
  //     const row = (await form.validateFields()) as RingDataType;
  //     const newData = [...ringData];
  //     const index = newData.findIndex((item) => key === item.key);

  //     // row.sellingPrice = calculateSellingPrice(row.buyingPrice);

  //     if (index > -1) {
  //       const item = newData[index];
  //       newData.splice(index, 1, {
  //         ...item,
  //         ...row,
  //       });
  //       setData(newData);
  //       setEditingKey("");
  //     } else {
  //       newData.push(row);
  //       setData(newData);
  //       setEditingKey("");
  //     }
  //   } catch (errInfo) {
  //     console.log("Validate Failed:", errInfo);
  //   }
  // };

  // const handleDelete = (key: React.Key) => {
  //   const newData = data.filter((item) => item.key !== key);
  //   setData(newData);
  // };

  //  Change Currency
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // const handleCurrencyChange = (value: "VND" | "USD") => {
  //   setCurrency(value);
  // };

  // const convertPrice = (
  //   price: number,
  //   exchangeRate: number,
  //   currency: "VND" | "USD"
  // ) => {
  //   if (currency === "VND") {
  //     return price * exchangeRate;
  //   }
  //   return price;
  // };

  // const sellingPrice = (price: number, markupPercentage: number) => {
  //   return price * (1 + markupPercentage / 100);
  // };

  const columns: TableColumnsType<RingDataType> = [
    {
      title: "ID",
      dataIndex: "jewelrySettingID",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingID.localeCompare(b.jewelrySettingID),
    },
    {
      title: "Image",
      key: "jewelrySettingImg",
      className: "TextAlign",
      render: (_: unknown, record: RingDataType) => (
        <img
          src={record.jewelrySettingImg}
          alt={record.jewelrySettingName}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "jewelrySettingName",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    // {
    //   title: `Cost Price (${currency})`,
    //   key: "price",
    //   sorter: (a: RingDataType, b: RingDataType) =>
    //     convertPrice(a.price, a.exchangeRate, currency) -
    //     convertPrice(b.price, b.exchangeRate, currency),
    //   render: (_: unknown, record: RingDataType) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     return `${convertedPrice.toFixed(2)} ${currency}`;
    //   },
    // },
    // {
    //   title: `Selling Price (${currency})`,
    //   key: "sellingPrice",
    //   render: (_: unknown, record: RingDataType) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     const price = sellingPrice(convertedPrice, record.markupPercentage);
    //     return `${price.toFixed(2)} ${currency}`;
    //   },
    // },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "Ring", value: "Ring" },
        { text: "Necklace", value: "Necklace" },
        { text: "Earring", value: "Earring" },
        { text: "Bracelet", value: "Bracelet" },
        { text: "Anklet", value: "Anklet" },
        { text: "Bangle", value: "Bangle" },
        { text: "Choker", value: "Choker" },
        { text: "Pendant", value: "Pendant" },
      ],
      onFilter: (value: boolean | React.Key, record: RingDataType) =>
        record.type.indexOf(value as string) === 0,
    },
    // {
    //   title: "Edit",
    //   dataIndex: "edit",
    //   className: "TextAlign SmallSize",
    //   render: (_: unknown, record: RingDataType) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <span>
    //         <Typography.Link
    //           onClick={() => save(record.key)}
    //           style={{ marginRight: 8 }}
    //         >
    //           Save
    //         </Typography.Link>
    //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
    //           <a>Cancel</a>
    //         </Popconfirm>
    //       </span>
    //     ) : (
    //       <Typography.Link
    //         disabled={editingKey !== ""}
    //         onClick={() => edit(record)}
    //       >
    //         Edit
    //       </Typography.Link>
    //     );
    //   },
    // },
    // {
    //   title: "Delete",
    //   dataIndex: "delete",
    //   className: "TextAlign",
    //   render: (_: unknown, record: RingDataType) =>
    //     data.length >= 1 ? (
    //       <Popconfirm
    //         title="Sure to delete?"
    //         onConfirm={() => handleDelete(record.key)}
    //       >
    //         <a>Delete</a>
    //       </Popconfirm>
    //     ) : null,
    // },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelrySettingID }) => (
        <Space size="middle">
          <Link to={`/admin/product/jewelry-setting/detail/${jewelrySettingID}`}>
            <EyeOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  // const mergedColumns: TableProps["columns"] = columns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }
  //   return {
  //     ...col,
  //     onCell: (record: RingDataType) => ({
  //       record,
  //       inputType: col.dataIndex === "price" ? "number" : "text",
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       editing: isEditing(record),
  //     }),
  //   };
  // });

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

  // const handleSave = () => {
  //   setIsAdding(false);
  // };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };


  const onChangeTable: TableProps<RingDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

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
                    <Styled.FormItem>
                      <Form.Item label="Diamond ID" name="Diamond ID" rules={[{ required: true }]}>
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Diamond Shape">
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
                      <Form.Item label="Ring Setting ID" name="Ring Setting ID" rules={[{ required: true }]}>
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Ring Setting Name" name="Ring Setting Name" rules={[{ required: true }]}>
                        <Input className="formItem" placeholder="Filled" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Markup Percentage (%)" name="Markup Percentage" rules={[{ required: true }]}>
                        <InputNumber className="formItem" placeholder="150" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Cost Price" name="Cost Price" rules={[{ required: true }]}>
                        <InputNumber className="formItem" placeholder="4,080" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Type">
                        <Select
                          value="Ring"
                          className="formItem"
                          // placeholder="Select Type"
                          onChange={handleChange}
                          disabled
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
                      <Form.Item label="Width" name="Width" rules={[{ required: true }]}>
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
                            {
                              value: "14K Yellow Gold",
                              label: "14KYellowGold",
                            },
                            { value: "14K Rose Gold", label: "14KRoseGold" },
                            { value: "18K White Gold", label: "18KWhiteGold" },
                            {
                              value: "18K Yellow Gold",
                              label: "18KYellowGold",
                            },
                            { value: "18K Rose Gold", label: "18KRoseGold" },
                            { value: "Platinum", label: "Platinum" },
                          ]}
                        />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormDescript>
                      <Form.Item label="Description" name="Description" rules={[{ required: true }]}>
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

export default JewelrySetting;
