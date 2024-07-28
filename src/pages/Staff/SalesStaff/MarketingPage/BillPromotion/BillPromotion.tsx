import * as Styled from "./BillPromotion.styled";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { TableProps, TableColumnsType } from "antd";
import {
  Form,
  Input,
  Table,
} from "antd";
import { voucherData, VoucherDataType } from "../MarketingData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import MarketingMenu from "@/components/Staff/SalesStaff/MarketingMenu/MarketingMenu";


const onChange: TableProps<VoucherDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const BillPromotion = () => {
  const [form] = Form.useForm();
  const [data] = useState<VoucherDataType[]>(voucherData);

  const columns: TableColumnsType<VoucherDataType> = [
    {
      title: "Voucher ID",
      dataIndex: "voucherID",
      sorter: (a: VoucherDataType, b: VoucherDataType) => a.voucherID.localeCompare(b.voucherID),
    },
    {
      title: "Voucher Name",
      dataIndex: "voucherCode",
      sorter: (a: VoucherDataType, b: VoucherDataType) => a.voucherCode.length - b.voucherCode.length,
    },
    {
      title: "% discount",
      dataIndex: "discountPercent",
      sorter: (a: VoucherDataType, b: VoucherDataType) => a.discountPercent - b.discountPercent,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a: VoucherDataType, b: VoucherDataType) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (a: VoucherDataType, b: VoucherDataType) => a.endDate.length - b.endDate.length,
    },
  ];


// SEARCH AREA
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
          <MarketingMenu />

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
                    bordered
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{ pageSize: 6 }} // Add pagination here
                    onChange={onChange}
                    showSorterTooltip={{ target: "sorter-icon" }}
                  />
                </Form>
            </Styled.AdminTable>
          </Styled.AdPageContent>
        </Styled.AdminPage>
      </Styled.ProductAdminArea>
    </>
  );
};

export default BillPromotion;
