import * as Styled from "../Jewelry Setting/RingSetting.styled";
import React, { useState } from "react";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { Form, Input, InputNumber, Table, Space } from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";
import { SortOrder } from "antd/es/table/interface";
import { ringData, RingDataType } from "../ProductData"; // Import data here
import { Link } from "react-router-dom";
import { JewelryType } from "./RingSetting.type";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof RingDataType;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: RingDataType;
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

const JewelrySetting = () => {
  const [form] = Form.useForm();
  const [data] = useState<RingDataType[]>(ringData);

  const columns: TableColumnsType<RingDataType> = [
    {
      title: "Jewelry Setting ID",
      dataIndex: "jewelrySettingID",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingID.localeCompare(b.jewelrySettingID),
    },
    {
      title: "Image",
      key: "jewelrySettingImg",
      className: "TextAlign",
      render: (_: unknown, record: RingDataType) => (
        <img
          src={record.jewelrySettingImg}
          alt={record.jewelrySettingName}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Jewelry Setting Name",
      dataIndex: "jewelrySettingName",
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      defaultSortOrder: "ascend" as SortOrder,
      filters: JewelryType,
      onFilter: (value: boolean | React.Key, record: RingDataType) =>
        record.type.indexOf(value as string) === 0,
    },
    {
      title: "Detail",
      key: "detail",
      className: "TextAlign",
      render: (_, { jewelrySettingID }) => (
        <Space size="middle">
          <Link
            to={`/sales-staff/product/jewelry-setting/detail/${jewelrySettingID}`}
          >
            <EyeOutlined />
          </Link>
        </Space>
      ),
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

  const onChangeTable: TableProps<RingDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
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
              <Styled.AdPageContent_HeadLeft>
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
              </Styled.AdPageContent_HeadLeft>
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
                  pagination={{ pageSize: 6 }} // Add pagination here
                  onChange={onChangeTable}
                />
              </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default JewelrySetting;
