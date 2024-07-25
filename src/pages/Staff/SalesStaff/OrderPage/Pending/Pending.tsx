import * as Styled from "./Pending.styled";
import { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Input, notification } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { DataType } from "../OrderData";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import OrderMenu from "@/components/Staff/SalesStaff/OrderMenu/OrderMenu";
import { showAllOrder, updateOrder } from "@/services/orderAPI";
import { OrderStatus } from "@/utils/enum";
import useAuth from "@/hooks/useAuth";

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};



const Pending = () => {
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const { AccountID } = useAuth();

  const onSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      defaultSortOrder: "descend",
      sorter: (a: DataType, b: DataType) => {
        if (typeof a.orderID === 'string' && typeof b.orderID === 'string') {
          return a.orderID.localeCompare(b.orderID);
        } else if (typeof a.orderID === 'number' && typeof b.orderID === 'number') {
          return a.orderID - b.orderID;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      render: (_, { date }) => {
        return <>{date.replace("T", " ").replace(".000Z", " ")}</>
      } 
    },
    {
      title: "Customer",
      dataIndex: "cusName",
      showSorterTooltip: { target: "full-header" },
      sorter: (a: DataType, b: DataType) => a.cusName.length - b.cusName.length,
      sortDirections: ["descend"],
    },
    {
      title: "Total",
      dataIndex: "total",
      defaultSortOrder: "descend",
      sorter: (a: DataType, b: DataType) => a.total - b.total,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = "green";
        if (status === "Pending") {
          color = "volcano";
        } else if (status === "Accepted") {
          color = "yellow";
        } else if (status === "Assigned") {
          color = "orange";
        } else if (status === "Delivering") {
          color = "blue";
        } else if (status === "Delivered") {
          color = "purple";
        } else if (status === "Completed") {
          color = "green";
        } else if (status === "Cancelled") {
          color = "grey";
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, { orderID }) => (
        <Space size="middle">
          <Button 
            className="confirmBtn"
            onClick={() => handleAccept(orderID)}
          >
            Accept
          </Button>
        </Space>
      ),
    },
  ];

  const handleAccept = async (orderID: string) => {
    try {
      const { data } = await updateOrder(Number(orderID), {
        OrderStatus: OrderStatus.ACCEPTED,
        IsActive: true,
        IsPayed: false,
        AccountSaleID: AccountID,
      });
      if(data.statusCode !== 200) throw new Error(data.message);
      api.success({
        message: 'Notification',
        description: 'The order has been send to manager successfully!'
      });
      fetchData();
    } catch (error: any) {
      console.error(error);
      api.error({
        message: 'Error',
        description: error || "An error occured!"
      })
    }
  }

  const fetchData = async () => {
    // Get order list
    const orderList = await showAllOrder();
    const formatOrderList = orderList.data.data
      .filter((order: any) => order.OrderStatus === OrderStatus.PENDING)
      .map((order: any) => ({
        orderID: order.OrderID,
        date: order.OrderDate,
        cusName: order.NameReceived,
        total: order.Price,
        status: order.OrderStatus,
      }))
    setOrder(formatOrderList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {contextHolder}
      <Styled.GlobalStyle />
      <Styled.OrderAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <OrderMenu />

          <Styled.OrderContent>
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
              <Table
                className="table"
                columns={columns}
                dataSource={order}
                pagination={{ pageSize: 6 }} // Add pagination here
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.AdminTable>
          </Styled.OrderContent>
        </Styled.AdminPage>
      </Styled.OrderAdminArea>
    </>
  );
};

export default Pending;
