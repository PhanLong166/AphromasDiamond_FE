import * as Styled from './Customer.styled';
import { SearchOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Form, Input, InputNumber, Popconfirm, Table } from 'antd';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { useState } from 'react';


interface Item {
    key: React.Key;
    customerID: string;
    customerName: string;
    email: string;
  }
  
  const originData: Item[] = [
    {
      key: "1",
      customerID: "12345121",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "2",
      customerID: "12345122",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "3",
      customerID: "12345123",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "4",
      customerID: "12345124",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "5",
      customerID: "12345125",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "6",
      customerID: "12345126",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "7",
      customerID: "12345127",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "8",
      customerID: "12345128",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "9",
      customerID: "12345129",
      customerName: "Ajmal Abdul Rahiman",
      email: "xinchao@gmail.com",
    },
    {
      key: "10",
      customerID: "12345130",
      customerName: "Ajmal Abdul Rahiman",
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


const Customer = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState<Item[]>(originData);
    const [editingKey, setEditingKey] = useState<React.Key>("");
  
    const isEditing = (record: Item) => record.key === editingKey;
  
    const edit = (record: Partial<Item> & { key: React.Key }) => {
      form.setFieldsValue({
        customerID: "",
        customerName: "",
        email: "",
        ...record,
      });
      setEditingKey(record.key);
    };
    edit
  
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
    save;
  
    const handleDelete = (key: React.Key) => {
      const newData = data.filter((item) => item.key !== key);
      setData(newData);
    };
  
    const columns: TableColumnsType<Item> = [
      {
        title: "Customer ID",
        dataIndex: "customerID",
        // editable: true,
        sorter: (a: any, b: any) => a.customerName.localeCompare(b.customerName),
      },
      {
        title: "Customer Name",
        dataIndex: "customerName",
        defaultSortOrder: "descend",
        // editable: true,
        sorter: (a: any, b: any) => a.customerName.length - b.customerName.length,
      },
      {
        title: "Email",
        dataIndex: "email",
        // editable: true,
        sorter: (a: any, b: any) => a.email.length - b.email.length,
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
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Customer Management</h1>
            <p>View and manage Customer</p>
          </Styled.TitlePage>

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
              </Styled.AdPageContent_Head>

            <Styled.AdminTable>
              {/* <table>
                <tr>
                  <th>No</th>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
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
      </Styled.ProductAdminArea>
    </>
  );
};
export default Customer;
