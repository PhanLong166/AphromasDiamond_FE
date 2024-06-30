import * as Styled from "../ProductPage/Material.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table
} from "antd";
import { materialData, MaterialDataType } from "./ProductData"; // Import data here
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";


interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof MaterialDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: MaterialDataType;
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


const onChange: TableProps<MaterialDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Material = () => {
  const [form] = Form.useForm();
  const [data] = useState<MaterialDataType[]>(materialData);
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: MaterialDataType) => record.key === editingKey;


  const columns = [
    {
      title: "Material ID",
      dataIndex: "materialID",
      editable: true,
      sorter: (a: MaterialDataType, b: MaterialDataType) => a.materialID.localeCompare(b.materialID),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      editable: true,
      sorter: (a: MaterialDataType, b: MaterialDataType) =>
        a.materialName.length - b.materialName.length,
    },
    {
      title: "Selling Price per Gram",
      dataIndex: "sellingPrice",
      editable: true,
      sorter: (a: MaterialDataType, b: MaterialDataType) => a.sellingPrice - b.sellingPrice,
    },
  ];

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: MaterialDataType) => ({
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
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };


  return (
    <>
      <Styled.GlobalStyle />
      <Styled.AdminArea>
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
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} 
                    onChange={onChange}
                  />
                </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.AdminArea>
    </>
  );
};

export default Material;
