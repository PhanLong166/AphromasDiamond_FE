import * as Styled from "../ProductPage/JewelryType.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  // FilterOutlined,
  // DownOutlined,
  PlusCircleOutlined,
  // ArrowLeftOutlined,
  // ArrowRightOutlined,
  // EditOutlined,
  // DeleteOutlined,
} from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import {
  // Select,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
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


const JewelryType = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
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

  const columns: TableColumnsType<Item> = [
    {
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      // editable: true,
      sorter: (a, b) => a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      // editable: true,
      sorter: (a, b) => a.jewelryTypeName.length - b.jewelryTypeName.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      className: "TextAlign",
      render: (_: any, record: Item) => {
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
    if (!col.fixed) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: "price" === "price" ? "number" : "text",
        dataIndex: 12,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  mergedColumns;

  const [searchText, setSearchText] = useState("");

  const onSearch = (value: any) => {
    console.log("Search:", value);
    // Thực hiện logic tìm kiếm ở đây
  };

  const handleKeyPress = (e: any) => {
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
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  // size="large"
                  placeholder="Search here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
              <Link to="">
                <button>
                  <PlusCircleOutlined />
                  Add New Jewelry Type
                </button>
              </Link>
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>Jewelry Type ID</th>
                  <th>Jewelry Type Name</th>
                  <th className="TextAlign">Edit</th>
                  <th className="TextAlign">Delete</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Ring" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Necklace" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Earring" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Bracelet" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Anklet" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>
                    <input type="text" name="JewelryType" value="Bangle" />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Save</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
              </table> */}

              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={data}
                  // columns={mergedColumns}
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

export default JewelryType;
