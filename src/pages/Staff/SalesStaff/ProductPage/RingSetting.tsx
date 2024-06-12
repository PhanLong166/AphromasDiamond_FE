
import * as Styled from "../ProductPage/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";


interface Item {
  key: React.Key;
  ringSettingID: string;
  ringSettingImg: string;
  ringSettingName: string;
  price: number;
  type: string;
  width: number;
  material: string;
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
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "2",
      ringSettingID: "12345122",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "3",
      ringSettingID: "12345123",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "4",
      ringSettingID: "12345124",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 6.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "5",
      ringSettingID: "12345125",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 3.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "6",
      ringSettingID: "12345126",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 9.08,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "7",
      ringSettingID: "12345127",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 2.04,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "8",
      ringSettingID: "12345128",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 7.03,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "9",
      ringSettingID: "12345129",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 5.07,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
    },
    {
      key: "10",
      ringSettingID: "12345130",
      ringSettingImg:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
      price: 4.2,
      type: "Ring",
      width: 2.8,
      material: "14K White Gold",
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
      title: "Price",
      dataIndex: "price",
      editable: true,
      sorter: (a: Item, b: Item) => a.price - b.price,
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

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
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
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default RingSetting;
