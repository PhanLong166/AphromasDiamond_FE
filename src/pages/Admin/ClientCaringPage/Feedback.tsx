import * as Styled from "../ClientCaringPage/Feedback.styled";
import React, { useState } from "react";
import {
  SearchOutlined,
} from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Rate,
  Space,
  Button
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



const Feedback = () => {
    
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns: TableColumnsType<Item> = [
    {
      title: "ID",
      dataIndex: "feedbackID",
      // editable: true,
      sorter: (a, b) => a.feedbackID.localeCompare(b.feedbackID),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      // editable: true,
      // sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Customer Name",
      dataIndex: "customer",
      // editable: true,
      // sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      // editable: true,
    },
    {
      title: "Star",
      dataIndex: "star",
      // editable: true,
      sorter: (a, b) => a.star - b.star,
      render: (_, record) => <Rate disabled defaultValue={record.star} />
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button className="confirmBtn">View</Button>
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
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                  columns={columns}
                  rowClassName="editable-row"
                  pagination={{
                    // onChange: cancel,
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
