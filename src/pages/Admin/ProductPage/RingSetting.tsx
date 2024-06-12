import * as Styled from "../ProductPage/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Select } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

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
      onFilter: (value: string, record: Item) =>
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
      filters: [
        { text: "14K White Gold", value: "14KWhiteGold" },
        { text: "14K Yellow Gold", value: "14KYellowGold" },
        { text: "14K Rose Gold", value: "14KRoseGold" },
        { text: "18K White Gold", value: "18KWhiteGold" },
        { text: "18K Yellow Gold", value: "18KYellowGold" },
        { text: "18K Rose Gold", value: "18KRoseGold" },
        { text: "Platinum", value: "Platinum" },
      ],
      onFilter: (value: string, record: Item) =>
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

  return (
    <>
    <Styled.GlobalStyle/>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
            {!isAdding && (
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
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
            {isAdding ? (
                  <Form layout="vertical">
                    <Form.Item label="Jewelry ID">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Jewelry Name">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Price">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Markup Percentage">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Quantity">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Exchange Rate">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Currency Type">
                      <Select
                        defaultValue="USD"
                        onChange={handleCurrencyChange}
                        options={[
                          { value: "USD", label: "USD" },
                          { value: "VND", label: "VND" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item label="Type">
                      <Select
                        defaultValue="ring"
                        onChange={handleChange}
                        options={[
                          { value: "ring", label: "Ring" },
                          { value: "necklace", label: "Necklace" },
                          { value: "earring", label: "Earring" },
                          { value: "bracelet", label: "Bracelet" },
                          { value: "anklet", label: "Anklet" },
                          { value: "bangle", label: "Bangle" },
                          { value: "choker", label: "Choker" },
                          { value: "pendant", label: "Pendant" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" onClick={handleSave}>
                        Save
                      </Button>
                      <Button
                        onClick={handleCancel}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </Button>
                    </Form.Item>
                  </Form>
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
