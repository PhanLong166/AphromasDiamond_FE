import * as Styled from "../MarketingPage/Marketing.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
} from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";


interface Item {
  key: React.Key;
  promotionID: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
}
const originData = (): Item[] => {
  const data: Item[] = [
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
  return data.map((item) => ({
    ...item,
    // sellingPrice: calculateSellingPrice(item.buyingPrice)
  }));
};

// const originData = createInitialData();

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof Item;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: Item;
  index: number;
  // children: React.ReactNode;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  inputType,
  // record,
  // index,
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


const onChange: TableProps<Item>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const Marketing = () => {
  const [form] = Form.useForm();
  const [data] = useState<Item[]>(originData);
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: Item) => record.key === editingKey;


  const columns = [
    {
      title: "ID",
      dataIndex: "promotionID",
      editable: true,
      sorter: (a: Item, b: Item) => a.promotionID.localeCompare(b.promotionID),
    },
    {
      title: "% discount",
      dataIndex: "discountPercent",
      editable: true,
      sorter: (a: Item, b: Item) => a.discountPercent - b.discountPercent,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      editable: true,
      sorter: (a: Item, b: Item) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      editable: true,
      sorter: (a: Item, b: Item) => a.endDate.length - b.endDate.length,
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


  return (
    <>
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Marketing Management</h1>
            <p>View and manage Promotion</p>
          </Styled.TitlePage>

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
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
                    onChange={onChange}
                  />
                </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default Marketing;
