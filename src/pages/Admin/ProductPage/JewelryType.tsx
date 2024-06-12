import * as Styled from "../ProductPage/JewelryType.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Button,
  Select,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";

interface Item {
  key: React.Key;
  jewelryTypeID: string;
  jewelryTypeName: string;
}

const originData: Item[] = [
  {
    key: "1",
    jewelryTypeID: "12345121",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "2",
    jewelryTypeID: "12345122",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "3",
    jewelryTypeID: "12345123",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "4",
    jewelryTypeID: "12345124",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "5",
    jewelryTypeID: "12345125",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "6",
    jewelryTypeID: "12345126",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "7",
    jewelryTypeID: "12345127",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "8",
    jewelryTypeID: "12345128",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "9",
    jewelryTypeID: "12345129",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "10",
    jewelryTypeID: "12345130",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
];

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

const JewelryType = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [isAdding, setIsAdding] = useState(false);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      jewelryTypeID: "",
      jewelryTypeName: "",
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
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      editable: true,
      sorter: (a: Item, b: Item) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign",
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
        originData.length >= 1 ? (
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
  mergedColumns;

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

  // Add New
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

          <Styled.AdPageContent>
            <Styled.AdPageContent_Head>
              {!isAdding && (
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
                      Add New Jewelry Type
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

export default JewelryType;
