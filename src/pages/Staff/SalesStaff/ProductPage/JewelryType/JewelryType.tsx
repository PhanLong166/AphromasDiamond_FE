import * as Styled from "./JewelryType.styled";
import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  InputNumber,
  Table,
} from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { showAllJewelryType } from "@/services/jewelryTypeAPI";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof any;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
  children: React.ReactNode;
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
          name={dataIndex.toString()}
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

const JewelryType = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [types, setTypes] = useState<any[]>([]);
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: any) => record.key === editingKey;


  const fetchData = async () => {
    try {
      const response = await showAllJewelryType();
      const { data } = response.data;
      const formattedTypes = data.map((type: any) => ({
        key: type.JewelryTypeID,
        jewelryTypeID: type.JewelryTypeID,
        jewelryTypeName: type.Name,
      }));
      setTypes(formattedTypes);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const columns = [
    {
      title: "Jewelry Type ID",
      dataIndex: "jewelryTypeID",
      sorter: (a: any, b: any) =>
        parseInt(a.materialJewelryID) - parseInt(b.materialJewelryID),
    },
    {
      title: "Jewelry Type Name",
      dataIndex: "jewelryTypeName",
      editable: true,
      sorter: (a: any, b: any) =>
        a.jewelryTypeName.length - b.jewelryTypeName.length,
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

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
                    dataSource={types}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
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

export default JewelryType;
