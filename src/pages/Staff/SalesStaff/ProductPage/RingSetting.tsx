import * as Styled from "../ProductPage/RingSetting.styled";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SearchOutlined,
} from "@ant-design/icons";
import type { TableProps } from "antd";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Select,
} from "antd";
import { SortOrder } from "antd/es/table/interface";
import { ringData, RingDataType } from "./ProductData"; // Import data here
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import ProductMenu from "@/components/Staff/SalesStaff/ProductMenu/ProductMenu";



// const originData = createInitialData();

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


const onChange: TableProps<RingDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};



const RingSetting = () => {
  const [form] = Form.useForm();
  const [data] = useState<RingDataType[]>(ringData);
  const [currency, setCurrency] = useState<"VND" | "USD">("USD");
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: RingDataType) => record.key === editingKey;

  //  Change Currency
  const handleCurrencyChange = (value: "VND" | "USD") => {
    setCurrency(value);
  };

  const convertPrice = (
    price: number,
    exchangeRate: number,
    currency: "VND" | "USD"
  ) => {
    if (currency === "VND") {
      return price * exchangeRate;
    }
    return price;
  };

  // const sellingPrice = (price: number, markupPercentage: number) => {
  //   return price * (1 + markupPercentage / 100);
  // };

  const columns = [
    {
      title: "ID",
      dataIndex: "jewelrySettingID",
      editable: true,
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
      title: "Name",
      dataIndex: "jewelrySettingName",
      editable: true,
      sorter: (a: RingDataType, b: RingDataType) =>
        a.jewelrySettingName.length - b.jewelrySettingName.length,
    },
    {
      title: `Cost Price (${currency})`,
      key: "price",
      sorter: (a: RingDataType, b: RingDataType) =>
        convertPrice(a.price, a.exchangeRate, currency) -
        convertPrice(b.price, b.exchangeRate, currency),
      render: (_: unknown, record: RingDataType) => {
        const convertedPrice = convertPrice(
          record.price,
          record.exchangeRate,
          currency
        );
        return `${convertedPrice.toFixed(2)} ${currency}`;
      },
    },
    // {
    //   title: `Selling Price (${currency})`,
    //   key: "sellingPrice",
    //   render: (_: unknown, record: RingDataType) => {
    //     const convertedPrice = convertPrice(
    //       record.price,
    //       record.exchangeRate,
    //       currency
    //     );
    //     const price = sellingPrice(convertedPrice, record.markupPercentage);
    //     return `${price.toFixed(2)} ${currency}`;
    //   },
    // },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      editable: true,
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "Ring", value: "Ring" },
        { text: "Necklace", value: "Necklace" },
        { text: "Earring", value: "Earring" },
        { text: "Bracelet", value: "Bracelet" },
        { text: "Anklet", value: "Anklet" },
        { text: "Bangle", value: "Bangle" },
        { text: "Choker", value: "Choker" },
        { text: "Pendant", value: "Pendant" },
      ],
      onFilter: (value: boolean | React.Key, record: RingDataType) =>
        record.type.indexOf(value as string) === 0,
    },
    {
      title: "Width",
      dataIndex: "width",
      editable: true,
      sorter: (a: RingDataType, b: RingDataType) => a.width - b.width,
    },
    {
      title: "Material",
      dataIndex: "material",
      key: "material",
      editable: true,
      defaultSortOrder: "ascend" as SortOrder,
      filters: [
        { text: "14K White Gold", value: "14KWhiteGold" },
        { text: "14K Yellow Gold", value: "14KYellowGold" },
        { text: "14K Rose Gold", value: "14KRoseGold" },
        { text: "18K White Gold", value: "18KWhiteGold" },
        { text: "18K Yellow Gold", value: "18KYellowGold" },
        { text: "18K Rose Gold", value: "18KRoseGold" },
        { text: "Platinum", value: "Platinum" },
      ],
      onFilter: (value: boolean | React.Key, record: RingDataType) =>
        record.material.indexOf(value as string) === 0,
    },
    // {
    //   title: "Edit",
    //   dataIndex: "edit",
    //   className: "TextAlign SmallSize",
    //   render: (_: unknown, record: RingDataType) => {
    //     const editable = isEditing(record);
    //     return editable ? (
    //       <span>
    //         <Typography.Link
    //           onClick={() => save(record.key)}
    //           style={{ marginRight: 8 }}
    //         >
    //           Save
    //         </Typography.Link>
    //         <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
    //           <a>Cancel</a>
    //         </Popconfirm>
    //       </span>
    //     ) : (
    //       <Typography.Link
    //         disabled={editingKey !== ""}
    //         onClick={() => edit(record)}
    //       >
    //         Edit
    //       </Typography.Link>
    //     );
    //   },
    // },
    // {
    //   title: "Delete",
    //   dataIndex: "delete",
    //   className: "TextAlign",
    //   render: (_: unknown, record: RingDataType) =>
    //     data.length >= 1 ? (
    //       <Popconfirm
    //         title="Sure to delete?"
    //         onConfirm={() => handleDelete(record.key)}
    //       >
    //         <a>Delete</a>
    //       </Popconfirm>
    //     ) : null,
    // },
  ];

  const mergedColumns: TableProps["columns"] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RingDataType) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
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

                    <Select
                      defaultValue="USD"
                      style={{ width: 120, height: "45px" }}
                      onChange={handleCurrencyChange}
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "VND", label: "VND" },
                      ]}
                    />
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

export default RingSetting;
