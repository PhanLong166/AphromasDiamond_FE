import * as Styled from "./DeliveryDeliveingstyled"
import { useState, useEffect } from "react";
import { Button, notification, Space, Table, Tag } from "antd";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import OrderMenu from "@/components/Staff/Deli/OrderDeli/OrderMenu";
import useAuth from "@/hooks/useAuth";
import { getAccountDetail } from "@/services/accountApi";
import config from "@/config";
import cookieUtils from "@/services/cookieUtils";
import { showAllOrder, updateOrder } from "@/services/orderAPI";
import { OrderStatus } from "@/utils/enum";


const DeliveryDelivering = () => {
  const { AccountID } = useAuth();
  const [user, setUser] = useState<any>(null);
  
  const [searchText, setSearchText] = useState("");

  const [orderList, setOrderList] = useState<any[]>([]);
  const [api, contextHolder] = notification.useNotification();
  // const [filteredData, setFilteredData] = useState(initialData);
  // const [initialLoad, setInitialLoad] = useState(true); // Trạng thái theo dõi tải ban đầu

  const fetchData = async () => {
    const user = await getAccountDetail(AccountID ? AccountID : 0);
    console.log(user.data.data);
    setUser(user.data.data);

    const orderRes = await showAllOrder();
    const orderFormatted = orderRes.data.data
      .filter((order: any) => order.OrderStatus === OrderStatus.DELIVERING && order.AccountDeliveryID === AccountID)
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
    
    // if (initialLoad) {
    //     setFilteredData(initialData);
    //     setInitialLoad(false);
    // }
    // if (searchText.trim() === "") { //nếu search k có value sẽ giá trị bảng ban đầu
    //   setFilteredData(initialData);
    //   return;
    // }

    // const filtered = initialData.filter((item) =>
    //   item.cusName.toLowerCase().includes(searchText.toLowerCase())
    // );

    // // Sort filtered results to prioritize matching customers
    // const sortedFilteredData = filtered.sort((a, b) => {
    //   // Compare to move matching items to the beginning
    //   if (a.cusName.toLowerCase().startsWith(searchText.toLowerCase()) && !b.cusName.toLowerCase().startsWith(searchText.toLowerCase())) {
    //     return -1;
    //   }
    //   if (!a.cusName.toLowerCase().startsWith(searchText.toLowerCase()) && b.cusName.toLowerCase().startsWith(searchText.toLowerCase())) {
    //     return 1;
    //   }
    //   return 0;
    // });

    // setFilteredData(sortedFilteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const columns: TableColumnsType<any> = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      // defaultSortOrder: "descend",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sorter: (a: any, b: any) => a.orderID.localeCompare(b.orderID),
    },
    {
      title: " Customer",
      dataIndex: "receiver",
      showSorterTooltip: { target: "full-header" },
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
            {status?.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "orderID",
      render: (_, { orderID }) => {
        const handleStartDelivery = async () => {
          try {
            const { data } = await updateOrder(orderID, {
              OrderStatus: OrderStatus.DELIVERED,
              IsPayed: true,
              IsActive: true,
            });
            if(data.statusCode !== 200) throw new Error(data.message);
            api.success({
              message: 'Notification',
              description: 'Delivery successfully'
            });
            fetchData();
          } catch (error: any) {
            api.error({
              message: 'Error',
              description: error || 'An error occurred'
            })
          }
        }
  
        return (
          <Space size="middle">
            <Button 
              className="confirmBtn"
              onClick={handleStartDelivery}
            >
              Complete Delivery
            </Button>
          </Space>
        )
      },
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
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
      {contextHolder}
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
                <PoweroffOutlined/> Logout
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

export default DeliveryDelivering;
