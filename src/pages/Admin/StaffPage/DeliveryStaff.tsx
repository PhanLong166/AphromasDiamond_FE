import * as Styled from "../StaffPage/DeliveryStaff.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import type { TableColumnsType } from "antd";
import {
  SearchOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  Space,
  Popconfirm,
  InputNumber,
  Input,
  Form,
  Table,
  Button,
  Select,
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
