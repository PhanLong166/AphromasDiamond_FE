import * as Styled from "../ProductPage/Material.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";
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
import ProductMenu from "../../../components/Admin/ProductMenu/ProductMenu";


interface Item {
  key: React.Key;
  materialID: string;
  materialName: string;
  buyingPrice: number;
  sellingPrice: number;
}

const calculateSellingPrice = (buyingPrice: number) => {
  return buyingPrice + 0.0197 * buyingPrice;
};

const createInitialData = (): Item[] => {
  const data: Item[] = [
    { key: "1", materialID: "12345121", materialName: "14K White Gold", buyingPrice: 4.08, sellingPrice: 1 },
    { key: "2", materialID: "12345122", materialName: "14K Yellow Gold", buyingPrice: 5.08, sellingPrice: 1 },
    { key: "3", materialID: "12345123", materialName: "14K Rose Gold", buyingPrice: 7.08, sellingPrice: 1 },
    { key: "4", materialID: "12345124", materialName: "18K White Gold", buyingPrice: 6.08, sellingPrice: 1 },
    { key: "5", materialID: "12345125", materialName: "18K Yellow Gold", buyingPrice: 3.08, sellingPrice: 1 },
    { key: "6", materialID: "12345126", materialName: "18K Rose Gold", buyingPrice: 9.08, sellingPrice: 1 },
    { key: "7", materialID: "12345127", materialName: "Platinum", buyingPrice: 2.04, sellingPrice: 1 },
  ];
  return data.map(item => ({
    ...item,
    sellingPrice: calculateSellingPrice(item.buyingPrice)
  }));
};

const originData = createInitialData();

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


const Material = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      materialID: "",
      materialName: "",
      buyingPrice: "",
      sellingPrice: "",
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
      row.sellingPrice = calculateSellingPrice(row.buyingPrice);

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
      title: "Material ID",
      dataIndex: "materialID",
      editable: true,
      sorter: (a, b) => a.materialID.localeCompare(b.materialID),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      editable: true,
      sorter: (a, b) => a.materialName.length - b.materialName.length,
    },
    {
      title: "Buying Price per Gram",
      dataIndex: "buyingPrice",
      editable: true,
      sorter: (a, b) => a.buyingPrice - b.buyingPrice,
    },
    {
      title: "Selling Price per Gram",
      dataIndex: "sellingPrice",
      editable: true,
      sorter: (a, b) => a.sellingPrice - b.sellingPrice,
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
          <ProductMenu />

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

            <Styled.Pending_Table>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>Material ID</th>
                  <th>Material Name</th>
                  <th>Price per Gram</th>
                  <th className="TextAlign">Edit</th>
                  <th className="TextAlign">Delete</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      name="MaterialName"
                      value="14K White Gold"
                    />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$43.91 USD" />
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
                    <input
                      type="text"
                      name="MaterialName"
                      value="14K Yellow Gold"
                    />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$43.91 USD" />
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
                    <input
                      type="text"
                      name="MaterialName"
                      value="14K Rose Gold"
                    />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$43.91 USD" />
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
                    <input type="text" name="MaterialName" value="Platinum" />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$33.32 USD" />
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
                    <input
                      type="text"
                      name="MaterialName"
                      value="18K White Gold"
                    />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$33.32 USD" />
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
                    <input
                      type="text"
                      name="MaterialName"
                      value="18K White Gold"
                    />
                  </td>
                  <td>
                    <input type="text" name="PriceGram" value="$33.32 USD" />
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
                  columns={mergedColumns}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                    pageSize: 6,
                  }}
                />
              </Form>
            </Styled.Pending_Table>

            
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Material;
