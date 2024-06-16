import * as Styled from "../StaffPage/DeliveryStaff.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import type { TableColumnsType, FormInstance } from "antd";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  SaveOutlined
} from "@ant-design/icons";
import {
  Space,
  Popconfirm,
  InputNumber,
  Input,
  Form,
  Table,
  Button,
  Radio,
} from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import StaffMenu from "@/components/Admin/SalesStaffMenu/StaffMenu";

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

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof Item;
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


// SUBMIT FORM
interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


const DeliveryStaff = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

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
      // sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: () => (
        <Space size="middle">
          <EyeOutlined />
        </Space>
      ),
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

  const handleAddNew = () => {
    setIsAdding(true);
  };

  // const handleSave = () => {
  //   // Logic để lưu dữ liệu mới
  //   setIsAdding(false);
  // };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
    <Styled.GlobalStyle/>
      <Styled.AdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <StaffMenu />

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
                    Add New Staff
                  </button>
              </Styled.AddButton>
              </>
              )}
            </Styled.AdPageContent_Head>

            <Styled.AdminTable>
            {isAdding ? (
                  <>
                  <Form
                    className="AdPageContent_Content"
                    form={form}
                    name="register"
                    layout="vertical"
                    autoComplete="off"
                    // onFinish={onFinish}
                    // scrollToFirstError
                  >
                    
                    <Styled.FormItem>
                      <Form.Item name="radio-group" label="Staff Type">
                        <Radio.Group>
                          <Radio value="sales">Sales Staff</Radio>
                          <Radio value="delivery">Delivery Staff</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item name="Staff ID" label="Staff ID" rules={[{ required: true }]}>
                        <Input placeholder="D1234" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                      <Form.Item name="Staff Name" label="Staff Name" rules={[{ required: true }]}>
                        <Input placeholder="trang.staff" />
                      </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    </Styled.FormItem>
                    <Styled.FormItem>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
                    </Styled.FormItem>
                  </Form>

                  <Styled.ActionBtn>
                    <Form.Item>
                      <Space>
                        <SubmitButton form={form}>
                          <SaveOutlined />
                          Save
                          </SubmitButton>
                        <Button
                          onClick={handleCancel}
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Styled.ActionBtn>
                </>
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
                  columns={columns}
                  rowClassName="editable-row"
                  pagination={{
                    // onChange: cancel,
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
export default DeliveryStaff;
