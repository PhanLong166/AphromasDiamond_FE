import * as Styled from "./BillPromotion.styled";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  InputNumber,
  Table,
} from "antd";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import { showAllVoucher } from "@/services/voucherAPI";
import { DatePickerProps } from "antd/lib";
import MarketingMenu from "@/components/Staff/SalesStaff/MarketingMenu/MarketingMenu";

interface EditableCellProps {
  editing: boolean;
  dataIndex: keyof any;
  title: React.ReactNode;
  inputType: "number" | "text";
  record: any;
  index: number;
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


// DATE PICK
const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const BillPromotion = () => {
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [editingKey] = useState<React.Key>("");
  const isEditing = (record: any) => record.key === editingKey;
  const [vouchers, setVouchers] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await showAllVoucher();
      const { data } = response.data;
      const formattedVoucher = data.map((voucher: any) => ({
        key: voucher.VoucherID,
        voucherID: voucher.VoucherID,
        voucherCode: voucher.VoucherCode,
        percentDiscounts: voucher.PercentDiscounts,
        startDate: voucher.StartDate,
        endDate: voucher.EndDate,
        description: voucher.Description,
      }));
      setVouchers(formattedVoucher);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const columns = [
    {
      title: "Voucher ID",
      dataIndex: "voucherID",
      editable: true,
      sorter: (a: any, b: any) => parseInt(a.voucherID) - parseInt(b.voucherID),
    },
    {
      title: "Voucher Code",
      dataIndex: "voucherCode",
      editable: true,
      sorter: (a: any, b: any) => a.voucherCode.length - b.voucherCode.length,
    },
    {
      title: "% discount",
      dataIndex: "percentDiscounts",
      editable: true,
      sorter: (a: any, b: any) => a.percentDiscounts - b.percentDiscounts,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      // editable: true,
      onChange: { onChangeDate },
      render: (_: any, { startDate }: any) => {
        return <>{startDate.replace("T", " ").replace(".000Z", " ")}</>
      },
      sorter: (a: any, b: any) =>
        a.startDate.length - b.startDate.length,
      
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      // editable: true,
      onChange: { onChangeDate },
      render: (_: any, { endDate }: any) => {
        return <>{endDate.replace("T", " ").replace(".000Z", " ")}</>
      },
      sorter: (a: any, b: any) =>
        a.endDate.length - b.endDate.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
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
        inputType: col.dataIndex === "percentDiscounts" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // SEARCH AREA
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
                    dataSource={vouchers}
                    columns={mergedColumns}
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
      </Styled.ProductAdminArea>
    </>
  );
};

export default BillPromotion;
