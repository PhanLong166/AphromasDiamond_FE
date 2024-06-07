import * as Styled from "../StaffPage/SalesStaff.styled";
import {
  SearchOutlined,
  // FilterOutlined,
  // DownOutlined,
  // ArrowLeftOutlined,
  // ArrowRightOutlined,
  // EyeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import {
    // Select,
    Form,
    Input,
    InputNumber,
    Popconfirm,
    Table,
    // Typography,
    // Dropdown,
    // Space
  } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";
import { useState } from "react";
import { Link } from "react-router-dom";



interface Item {
    key: React.Key;
    staffID: string;
    staffName: string;
    email: string;
  }
  
  const originData: Item[] = [
    {
      key: "1",
      staffID: "12345121",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "2",
      staffID: "12345122",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "3",
      staffID: "12345123",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "4",
      staffID: "12345124",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "5",
      staffID: "12345125",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "6",
      staffID: "12345126",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "7",
      staffID: "12345127",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "8",
      staffID: "12345128",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "9",
      staffID: "12345129",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "10",
      staffID: "12345130",
      staffName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
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


const SalesStaff = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState<Item[]>(originData);
    const [editingKey, setEditingKey] = useState<React.Key>("");
  
    const isEditing = (record: Item) => record.key === editingKey;
  
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
  save;
  
    const columns: TableColumnsType<Item> = [
      {
        title: "Staff ID",
        dataIndex: "staffID",
        // editable: true,
        sorter: (a, b) => a.staffID.localeCompare(b.staffID),
      },
      {
        title: "Staff Name",
        dataIndex: "staffName",
        defaultSortOrder: "descend",
        // editable: true,
        sorter: (a, b) => a.staffName.length - b.staffName.length,
      },
      {
        title: "Email",
        dataIndex: "email",
        // editable: true,
        sorter: (a, b) => a.email.length - b.email.length,
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
          inputType: "discountPercent" === "discountPercent" ? "number" : "text",
          dataIndex: 1,
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
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <StaffMenu/>

          <Styled.AdPageContent>
          <Styled.AdPageContent_Head>
                <Styled.SearchArea>
                  <SearchOutlined className="searchIcon" />
                  <input
                    className="searchInput"
                    type="text"
                    size={12}
                    placeholder="Search here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </Styled.SearchArea>
                <Link to="">
                  <button>
                    <PlusCircleOutlined />
                    Add New Sales Staff
                  </button>
                </Link>
              </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>staffID</th>
                  <th>staffName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th className="TextAlign">Deltail</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>#12345123</td>
                  <td>Ajmal Abdul Rahiman</td>
                  <td>hthuyntrang@gmail.com</td>
                  <td>***</td>
                  <td className="TextAlign">
                    <EyeOutlined />
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
      </Styled.AdminArea>
    </>
  );
};

export default SalesStaff;


