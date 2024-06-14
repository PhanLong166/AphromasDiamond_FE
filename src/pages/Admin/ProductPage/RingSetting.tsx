import * as Styled from "../ProductPage/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusCircleOutlined,
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import type { TableProps, UploadProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
  Select,
  Upload,
  message,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";
import TextArea from "antd/es/input/TextArea";

interface Item {
  key: React.Key;
  ringSettingID: string;
  ringSettingImg: string;
  ringSettingName: string;
  price: number;
  markupPercentage: number;
  type: string;
  width: number;
  material: string;
  exchangeRate: number;
  currencyType: string;
}
const originData = (): Item[] => {
  const data: Item[] = [
    {
      key: "1",
      ringSettingID: "12345121",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "2",
      ringSettingID: "12345122",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "3",
      ringSettingID: "12345123",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "4",
      ringSettingID: "12345124",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 6.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "5",
      ringSettingID: "12345125",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 3.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "6",
      ringSettingID: "12345126",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 9.08,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "7",
      ringSettingID: "12345127",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 2.04,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "8",
      ringSettingID: "12345128",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.03,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "9",
      ringSettingID: "12345129",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.07,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
    {
      key: "10",
      ringSettingID: "12345130",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.2,
      markupPercentage: 100,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
      exchangeRate: 23000,
      currencyType: "USD",
    },
  ];
  return data.map((item) => ({
    ...item,
    // sellingPrice: calculateSellingPrice(item.buyingPrice)
  }));
};

// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof Item;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: Item;
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


// UPLOAD IMAGES

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

const RingSetting = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [isAdding, setIsAdding] = useState(false);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      ringSettingID: "",
      ringSettingImg: "",
      ringSettingName: "",
      price: "",
      type: "",
      width: "",
      material: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      // row.sellingPrice = calculateSellingPrice(row.buyingPrice);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  //  Change Currency
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleCurrencyChange = (value: "VND" | "USD") => {
    setCurrency(value);
  };

  const convertPrice = (
    price: number,
    exchangeRate: number,
    currency: "VND" | "USD"
  ) => {
    if (currency === "VND") {
      return price * exchangeRate;
    }
    return price;
  };

  const sellingPrice = (price: number, markupPercentage: number) => {
    return price * (1 + markupPercentage / 100);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "ringSettingID",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.ringSettingID.localeCompare(b.ringSettingID),
    },
    {
      title: "Image",
      key: "ringSettingImg",
      className: "TextAlign",
      render: (_: unknown, record: Item) => (
        <img
          src={record.ringSettingImg}
          alt={record.ringSettingName}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "ringSettingName",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.ringSettingName.length - b.ringSettingName.length,
    },
    {
      title: `Cost Price (${currency})`,
      key: "price",
      sorter: (a: Item, b: Item) =>
        convertPrice(a.price, a.exchangeRate, currency) -
        convertPrice(b.price, b.exchangeRate, currency),
      render: (_: unknown, record: Item) => {
        const convertedPrice = convertPrice(
          record.price,
          record.exchangeRate,
          currency
        );
        return `${convertedPrice.toFixed(2)} ${currency}`;
      },
    },
    {
      title: "Markup Percentage",
      dataIndex: "markupPercentage",
      key: "markupPercentage",
      render: (_: unknown, record: Item) => `${record.markupPercentage}%`,
    },
    {
      title: `Selling Price (${currency})`,
      key: "sellingPrice",
      render: (_: unknown, record: Item) => {
        const convertedPrice = convertPrice(
          record.price,
          record.exchangeRate,
          currency
        );
        const price = sellingPrice(convertedPrice, record.markupPercentage);
        return `${price.toFixed(2)} ${currency}`;
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      editable: true,
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
      onFilter: (value: boolean | React.Key, record: Item) =>
        record.type.indexOf(value as string) === 0,
    },
    {
      title: "Width",
      dataIndex: "width",
      editable: true,
      sorter: (a: Item, b: Item) => a.width - b.width,
    },
    {
      title: "Material",
      dataIndex: "material",
      key: "material",
      editable: true,
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "14K White Gold", value: "14KWhiteGold" },
        { text: "14K Yellow Gold", value: "14KYellowGold" },
        { text: "14K Rose Gold", value: "14KRoseGold" },
        { text: "18K White Gold", value: "18KWhiteGold" },
        { text: "18K Yellow Gold", value: "18KYellowGold" },
        { text: "18K Rose Gold", value: "18KRoseGold" },
        { text: "Platinum", value: "Platinum" },
      ],
      onFilter: (value: boolean | React.Key, record: Item) =>
        record.material.indexOf(value as string) === 0,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign SmallSize",
      render: (_: unknown, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      className: "TextAlign",
      render: (_: unknown, record: Item) =>
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

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const [searchText, setSearchText] = useState("");

  const onSearch = (value: string) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    // Logic để lưu dữ liệu mới
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
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

                    <Select
                      defaultValue="USD"
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
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
                      <Form.Item label="Diamond ID">
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
                      <Form.Item label="Ring Setting ID">
                        <Input className="formItem" placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item label="Ring Setting Name">
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
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                          </p>
                        </Dragger>
                      </Form.Item>
                    </Styled.UploadFile>
                  </Form>
                  <Styled.ActionBtn>
                    <Button
                      type="primary"
                      onClick={handleSave}
                      className="MainBtn"
                    >
                      <SaveOutlined />
                      Save
                    </Button>
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
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                      onChange: cancel,
                      pageSize: 6,
                    }}
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

export default RingSetting;
