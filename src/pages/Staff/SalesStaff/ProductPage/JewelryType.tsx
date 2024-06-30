import * as Styled from "../ProductPage/JewelryType.styled";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
} from "antd";
import { jewTypeData, JewTypeDataType } from "./ProductData"; // Import data here
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";


interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof JewTypeDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: JewTypeDataType;
  index: number;
  // children: React.ReactNode;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
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

const onChange: TableProps<JewTypeDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};



const JewelryType = () => {
  const [form] = Form.useForm();
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: JewTypeDataType) => record.key === editingKey;
  
  const columns = [
    {
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      editable: true,
      sorter: (a: JewTypeDataType, b: JewTypeDataType) =>
        a.jewelryTypeID.localeCompare(b.jewelryTypeID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      editable: true,
      sorter: (a: JewTypeDataType, b: JewTypeDataType) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    }
  ];

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: JewTypeDataType) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  mergedColumns;

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
      <Styled.GlobalStyle />
      <Styled.ProductAdminArea>
        <Sidebar />

        <Styled.AdminPage>
          <ProductMenu />

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
                    dataSource={jewTypeData}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} 
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

export default JewelryType;
