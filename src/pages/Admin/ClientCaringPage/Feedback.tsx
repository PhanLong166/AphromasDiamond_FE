import * as Styled from "../ClientCaringPage/Feedback.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  StarFilled,
  StarOutlined,
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
  Dropdown,
  Space,
  Rate
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ClientCaringMenu from "../../../components/Admin/ClientCaringMenu/ClientCaringMenu";



interface Item {
  key: React.Key;
  feedbackID: string;
  productName: string;
  customer: string;
  description: string;
  star: number;
}

const originData: Item[] = [
  {
    key: "1",
    feedbackID: "12345121",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 5,
  },
  {
    key: "2",
    feedbackID: "12345122",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "3",
    feedbackID: "12345123",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "4",
    feedbackID: "12345124",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "5",
    feedbackID: "12345125",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "6",
    feedbackID: "12345126",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "7",
    feedbackID: "12345127",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "8",
    feedbackID: "12345128",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "9",
    feedbackID: "12345129",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
  },
  {
    key: "10",
    feedbackID: "12345130",
    productName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    customer: "Ajmal Abdul Rahiman",
    description: "Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!",
    star: 4,
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



const Feedback = () => {
    
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [editingKey, setEditingKey] = useState<React.Key>("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      feedbackID: "",
      productName: "",
      customer: "",
      description: "",
      star: "",
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
      dataIndex: "feedbackID",
      editable: true,
      sorter: (a, b) => a.feedbackID.localeCompare(b.feedbackID),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      editable: true,
      // sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Customer Name",
      dataIndex: "customer",
      editable: true,
      // sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
    },
    {
      title: "Star",
      dataIndex: "star",
      editable: true,
      sorter: (a, b) => a.star - b.star,
      render: (_, record) => <Rate disabled defaultValue={record.star} />
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
        inputType: col.dataIndex === "price" ? "number" : "text",
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
      <Styled.FeedbackAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ClientCaringMenu />

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
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>Feedback ID</th>
                  <th>Product Name</th>
                  <th>Customer</th>
                  <th>Description</th>
                  <th className="TextAlign">Star</th>
                  <th className="TextAlign">Reply</th>
                  <th className="TextAlign">Delete</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
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
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
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
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
                  </td>
                  <td className="TextAlign">
                    <DeleteOutlined className="deleBtn" />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>
                    <input
                      type="text"
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
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
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
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
                      value="1.00 Carat H-VS2 Emerald Cut Diamond"
                    />
                  </td>
                  <td>
                    <input type="text" value="Ajmal Abdul Rahiman" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value="Thank you for sharing your wonderful feedback! It's truly rewarding to know that you're satisfied with our product. We appreciate your support and hope to see you again soon!"
                    />
                  </td>
                  <td className="TextAlign">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </td>
                  <td className="TextAlign">
                    <button className="confirmBtn">Reply</button>
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
            </Styled.AdminTable>

            
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.FeedbackAdminArea>
    </>
  );
};

export default Feedback;
