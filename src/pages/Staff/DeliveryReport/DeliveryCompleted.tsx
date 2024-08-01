import * as Styled from "./DeliveryCompletedstyled"
import { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import OrderMenu from "@/components/Staff/Deli/OrderDeli/OrderMenu";
import useAuth from "@/hooks/useAuth";
import { getAccountDetail } from "@/services/accountApi";
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";
import { showAllOrder } from "@/services/orderAPI";
import { OrderStatus } from "@/utils/enum";

interface DataType {
  key: React.Key;
  no: string;
  orderID: string;
  cusName: string;
  phoneNumber: string;
  product: string;
  address: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    // defaultSortOrder: "descend",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sorter: (a: DataType, b: DataType) => a.orderID.localeCompare(b.orderID),
  },
  {
    title: " Receiver",
    dataIndex: "receiver",
    showSorterTooltip: { target: "full-header" },
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
      { text: "Esther", value: "Esther" },
      { text: "Ajmal", value: "Ajmal" },
    ],
    onFilter: (value, record) => record.cusName.indexOf(value as string) === 0,
    sorter: (a, b) => a.cusName.length - b.cusName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
  },
  {
    title: "Address",
    dataIndex: "address",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend"],
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
    }
  }
];

const DeliveryCompleted = () => {
  const { AccountID } = useAuth();
  const [user, setUser] = useState<any>(null);

  const [searchText, setSearchText] = useState("");
  const [orderList, setOrderList] = useState<any[]>([]);

  const fetchData = async () => {
    const user = await getAccountDetail(AccountID ? AccountID : 0);
    console.log(user.data.data);
    setUser(user.data.data);

    const orderRes = await showAllOrder();
    const orderFormatted = orderRes.data.data
      .filter((order: any) => order.OrderStatus === OrderStatus.COMPLETED && order.AccountDeliveryID === AccountID)
      .map((order: any) => ({
        orderID: order.OrderID,
        receiver: order.NameReceived,
        phoneNumber: order.PhoneNumber,
        address: order.Address,
        status: order.OrderStatus,
      }))
    setOrderList(orderFormatted);
  }

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchText((e.target as HTMLInputElement).value);
    }
  };

  return (
    <>
      <Styled.OrderAdminArea>
        <Styled.AdminPage>
          <Styled.HeaderContainer>
            <Styled.TitlePage>
              <h1>Delivery</h1>
              <p>View and manage Delivery</p>
            </Styled.TitlePage>
            <Styled.DeliveryStaff>
              <h1>Hello, {user ? user.Name : null}</h1>
              <Styled.Logout
                to={config.routes.public.login}
                onClick={() => cookieUtils.clear()}
              >
                <PoweroffOutlined /> Logout
              </Styled.Logout>
            </Styled.DeliveryStaff>
          </Styled.HeaderContainer>
          <OrderMenu />
          <Styled.OrderContent>
            <Styled.OrderContent_Head>
              <Styled.SearchArea>
                <SearchOutlined className="searchIcon" />
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search customer..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Styled.SearchArea>
            </Styled.OrderContent_Head>

            <Styled.Pending_Table>
              <Table
                className="table"
                columns={columns}
                dataSource={orderList}
                pagination={{ pageSize: 6 }}
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
              />
            </Styled.Pending_Table>
          </Styled.OrderContent>
        </Styled.AdminPage>
      </Styled.OrderAdminArea>
    </>
  );
};

export default DeliveryCompleted;
