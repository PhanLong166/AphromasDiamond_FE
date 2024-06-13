import * as Styled from "./Manager.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button, Select } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";

interface Item {
  key: React.Key;
  managerID: string;
  managerName: string;
  email: string;
}

const originData: Item[] = [
  {
    key: "1",
    managerID: "12345121",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "2",
    managerID: "12345122",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "3",
    managerID: "12345123",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "4",
    managerID: "12345124",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "5",
    managerID: "12345125",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "6",
    managerID: "12345126",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "7",
    managerID: "12345127",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "8",
    managerID: "12345128",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "9",
    managerID: "12345129",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
  {
    key: "10",
    managerID: "12345130",
    managerName: "Ajmal Abdul Rahiman",
    email: "xinchao@gmail.com",
  },
];

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: Item;
  index: number;

  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
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

const Customer = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");
  const [isAdding, setIsAdding] = useState(false);


  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      managerID: "",
      managerName: "",
      email: "",
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
      title: "Manager ID",
      dataIndex: "managerID",
      editable: true,
      sorter: (a: Item, b: Item) =>
        parseInt(a.managerID) - parseInt(b.managerID),
    },
    {
      title: "Manager Name",
      dataIndex: "managerName",
      defaultSortOrder: "descend" as SortOrder,
      editable: true,
      sorter: (a: Item, b: Item) => a.managerName.length - b.managerName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,
      // sorter: (a: Item, b: Item) => a.email.length - b.email.length,
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
        inputType: col.dataIndex === "buyingPrice" ? "number" : "text",
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
    <Styled.GlobalStyle/>
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Manager Management</h1>
            <p>View and manage Manager</p>
          </Styled.TitlePage>

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
                    Add New Manager
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
      </Styled.AdminArea>
    </>
  );
};
export default Customer;
