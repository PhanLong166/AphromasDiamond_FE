import * as Styled from "./Marketing.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import {
  Select,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";

interface Item {
  key: React.Key;
  promotionID: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
}

const originData: Item[] = [
  {
    key: "1",
    promotionID: "12345121",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "2",
    promotionID: "12345122",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "3",
    promotionID: "12345123",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "4",
    promotionID: "12345124",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "5",
    promotionID: "12345125",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "6",
    promotionID: "12345126",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "7",
    promotionID: "12345127",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "8",
    promotionID: "12345128",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "9",
    promotionID: "12345129",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "10",
    promotionID: "12345130",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
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
  record,
  index,
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

const Promotion = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      promotionID: "",
      discountPercent: "",
      startDate: "",
      endDate: "",
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

  const columns: TableColumnsType<Item> = [
    {
      title: "ID",
      dataIndex: "promotionID",
      editable: true,
      sorter: (a, b) => a.promotionID.localeCompare(b.promotionID),
    },
    {
      title: "% discount",
      dataIndex: "discountPercent",
      defaultSortOrder: "descend",
      editable: true,
      sorter: (a, b) => a.discountPercent - b.discountPercent,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      editable: true,
      sorter: (a, b) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      editable: true,
      sorter: (a, b) => a.endDate.length - b.endDate.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign SmallSize",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8, fontSize: "16px" }}
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
      render: (_, record) =>
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

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "discountPercent" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const [searchText, setSearchText] = useState("");

  const onSearch = (value) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <>
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.ContentPage>
            <Styled.TitlePage>
              <h1>Marketing Management</h1>
              <p>View and manage Promotion</p>
            </Styled.TitlePage>

            <Styled.AdPageContent>
              <Styled.AdPageContent_Head>
                <Styled.SearchArea>
                  <SearchOutlined className="searchIcon" />
                  <input
                    className="searchInput"
                    type="text"
                    size="large"
                    placeholder="Search here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </Styled.SearchArea>
                <Link to="">
                  <button>
                    <PlusCircleOutlined />
                    Add New Diamond
                  </button>
                </Link>
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
          </Styled.ContentPage>
          <Styled.EndPage></Styled.EndPage>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Promotion;
