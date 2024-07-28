import * as Styled from "./OrderDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, notification, Select, Table, TableColumnsType, Tag } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import { orderDetail, updateOrder } from "@/services/orderAPI";
import paypalLogo from '@/assets/logo/payment/paypal.png';
import { OrderStatus, PaymentMethodEnum, Role } from "@/utils/enum";
import { showAllAccounts } from "@/services/accountApi";
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getDiamondDetails } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";

const getStatusTag = (status: string) => {
  let color = "green";
  if (status === "Pending") {
    color = "red";
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
    color = "default";
  }
  return (
    <Tag color={color} key={status}>
      {status.toUpperCase()}
    </Tag>
  );
};

const formatPrice = (price: number | bigint) => {
  return `$ ${new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price)}`;
};

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeOrder, setActiveOrder] = useState<any>(null);
  const [orderStatus, setOrderStatus] = useState('');
  const [accountList, setAccountList] = useState<any[]>([]);
  const [orderList] = useState<any[]>([]);
  const [delivery, setDelivery] = useState<any[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [api, contextHolder] = notification.useNotification();

  const [diamondDetails, setDiamondDetails] = useState<{ [key: string]: any }>(
    {}
  );

  const fetchData = async () => {
    try {
      const { data } = await orderDetail(Number(id));
      setActiveOrder(data.data);
      setOrderStatus(data.data.OrderStatus);

      const accountRes = await showAllAccounts();
      setAccountList(
        accountRes.data.data.filter((account: any) => account.Role === Role.DELI_STAFF)
      );
      const deliveryFormat = accountList.map((deliStaff: any) => ({
        AccountDeliveryID: deliStaff.AccountID,
        DeliveryName: deliStaff.Name,
        OrderNumber: orderList.filter((order: any) => order.AccountDeliveryID === deliStaff.AccountID).length
      }));
      setDelivery(deliveryFormat);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAllOrderLine = async () => {
    try {
      const res = await showAllOrderLineForAdmin();

      if (res.data.data) {
        const filteredOrders = res.data.data.filter(
          (order: { OrderID: number }) =>
            order.OrderID === parseInt(id || "", 10)
        );

        if (filteredOrders.length > 0) {
          fetchDiamondDetails(filteredOrders);
        } else {
          console.log("No orders found with OrderID:", id);
        }
      }
    } catch (error) {
      console.error("Error fetching order lines:", error);
    }
  };

  const fetchDiamondDetails = async (orders: any) => {
    try {
      const details: { [key: string]: any } = {};
      for (const order of orders) {
        if (order.DiamondID) {
          const res = await getDiamondDetails(order.DiamondID);
          const diamond = res.data.data;

          let diamondImage = "https://via.placeholder.com/150";

          if (diamond.usingImage && diamond.usingImage.length > 0) {
            const imageIDPromises = diamond.usingImage.map(
              async (image: any) => {
                try {
                  const imageRes = await getImage(image.UsingImageID);
                  return imageRes || image.url;
                } catch (error) {
                  console.error("Error fetching image:", error);
                  return image.url;
                }
              }
            );
            const imageURLs = await Promise.all(imageIDPromises);
            diamondImage = imageURLs[0];
          }

          details[order.DiamondID] = {
            ...diamond,
            UsingImage: diamondImage,
          };
        }
      }
      setDiamondDetails(details);
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
      fetchAllOrderLine();
    }
  }, [id]);

  const totalDiamondPrice = Object.values(diamondDetails).reduce(
    (sum, diamond: any) => sum + parseFloat(diamond.Price),
    0
  );

  const shippingCost = Object.keys(diamondDetails).length === 1 ? 15 : 0;
  const totalCost = totalDiamondPrice + shippingCost;

  const columns: TableColumnsType<any> = [
     {
      title: "DiamondID",
      dataIndex: "DiamondID",
      key: "DiamondID",
      sorter: (a, b) => a.DiamondID - b.DiamondID,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Product",
      dataIndex: "UsingImage",
      key: "UsingImage",
      render: (usingImage: string | undefined) =>
        usingImage ? (
          <img
            src={usingImage}
            alt="Using Image"
            style={{ width: "100px", height: "auto" }}
          />
        ) : (
          "No Image"
        ),
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (price: number) => formatPrice(price),
      sorter: (a: any, b: any) => a.Price - b.Price,
      sortDirections: ["descend", "ascend"],
    }
  ];


  // TRANSFER TO DELIVERY STAFF
  const [isModalVisible_Assigned, setIsModalVisible_Assigned] = useState(false);

  const showModal = () => {
    fetchData();
    setIsModalVisible_Assigned(true);
  };

  const handleOk_Assigned = async () => {
    // Handle the submission logic here
    try {
      const { data } = await updateOrder(Number(id), {
        OrderStatus: OrderStatus.ASSIGNED,
        IsPayed: false,
        IsActive: true,
        AccountDeliveryID: selectedStaff
      });

      if (data.statusCode !== 200) throw new Error(data.message);
      api.success({
        message: 'Notification',
        description: 'Assign task successfully!'
      });
      setIsModalVisible_Assigned(false);
    } catch (error: any) {
      api.error({
        message: 'Error',
        description: error || 'An error occurred!'
      });
    }
  };

  const handleCancel_Assigned = () => {
    setIsModalVisible_Assigned(false);
  };

  const onChange = (value: number) => {
    setSelectedStaff(value);
    console.log('Selected staff: ', value);
  }

    // DELETE ORDER FROM ACCEPTED STATUS
    const [isModalVisible_Accepted, setIsModalVisible_Accepted] = useState(false);

    const showModal_Accepted = () => {
      setIsModalVisible_Accepted(true);
    };
  
    const handleOk_Accepted = async () => {
      // Handle the submission logic here
      try {
        const { data } = await updateOrder(Number(id), {
          OrderStatus: OrderStatus.PENDING,
          IsPayed: false,
          IsActive: true,
          AccountDeliveryID: selectedStaff
        });
  
        if (data.statusCode !== 200) throw new Error(data.message);
        api.success({
          message: 'Notification',
          description: 'Assign task successfully!'
        });
        setIsModalVisible_Accepted(false);
      } catch (error: any) {
        api.error({
          message: 'Error',
          description: error || 'An error occurred!'
        });
      }
    };
  
    const handleCancel_Accepted = () => {
      setIsModalVisible_Accepted(false);
    };


  return (
    <>
      {contextHolder}
      <Styled.GlobalStyle />
      <Styled.PageAdminArea>
        <Sidebar />
        <Styled.AdminPage>
          <Styled.TitlePage>
            <h1>Order Management</h1>
            <p>View and manage Orders</p>
          </Styled.TitlePage>

          <Styled.PageContent>
            {activeOrder ? (
              <>
                <Styled.PageContent_Top>
                  <Styled.PageDetail_Title>
                    <p>Order Detail</p>
                  </Styled.PageDetail_Title>
                  <Styled.PageDetail_Infor>
                    <Styled.OrderInfor>
                      <Styled.OrderDate>
                        <p>Invoice Date:</p>
                        <p className="orderDate">
                          {activeOrder.OrderDate.replace("T", " ").replace(".000Z", " ")}
                        </p>
                      </Styled.OrderDate>
                      <Styled.OrderStatus>
                        <p>Status:</p>
                        <div>{getStatusTag(activeOrder.OrderStatus)}</div>
                      </Styled.OrderStatus>
                      {activeOrder.OrderStatus !== OrderStatus.ACCEPTED && activeOrder.OrderStatus !== OrderStatus.PENDING ?
                        <Styled.OrderDate>
                          <p>Delivery staff:</p>
                          <p className="orderDate">
                            {accountList.find((account: any) => account.AccountID === activeOrder.AccountDeliveryID)?.Name}
                          </p>
                        </Styled.OrderDate> : <></>
                      }
                    </Styled.OrderInfor>

                    <Styled.CustomerInfor_Container>
                      <Styled.CustomerInfor>
                        <p>{activeOrder.NameReceived || "Nguyen Phu Cuong"}</p>
                        <p>{activeOrder.PhoneNumber || "0354033629"}</p>
                        <p>{activeOrder.Email || "Hqz0M@example.com"}</p>
                        <p>{activeOrder.Address || "123 Main Street"}</p>
                      </Styled.CustomerInfor>
                    </Styled.CustomerInfor_Container>
                  </Styled.PageDetail_Infor>
                </Styled.PageContent_Top>

                <Styled.PageContent_Bot>
                  <Styled.PageDetail_Title>
                    <p>Order Line</p>
                  </Styled.PageDetail_Title>
                  <Styled.OrderDetail_Infor>

                  <Styled.OrderLine>
                      <Table
                        columns={columns}
                        dataSource={Object.values(diamondDetails)}
                        pagination={false}
                        rowKey="DiamondID"
                      />
                    <Styled.OrderTotal>
                      <Styled.Payment>
                        <p>Payment Method</p>
                        {activeOrder.PaymentID === PaymentMethodEnum.PAYPAL && (
                          <img src={paypalLogo} 
                          alt="Paypal" style={{ width: "100px", height: "auto" }} />
                        )}
                        {activeOrder.PaymentID === PaymentMethodEnum.COD && (
                          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2F122290830_132545211952745_2371548508191512996_n.jpg?alt=media&token=13186094-eb53-4e6c-98a0-1e7fe06b3664"
                          alt="COD" style={{ width: "100px", height: "auto" }} />
                        )}
                      </Styled.Payment>
                      <Styled.Amount>
                      <Styled.OtherCosts>
                          <p>Total Order Price</p>
                          <p>{formatPrice(totalDiamondPrice)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>Shipping fee</p>
                          <p>{formatPrice(shippingCost)}</p>
                        </Styled.OtherCosts>
                        <Styled.Total>
                          <p>Total</p>
                          <p className="totalAmount">
                            {formatPrice(totalCost)}
                          </p>
                        </Styled.Total>
                      </Styled.Amount>
                      </Styled.OrderTotal>
                  </Styled.OrderLine>
                  </Styled.OrderDetail_Infor>

                </Styled.PageContent_Bot>

                <Styled.ActionBtn>
                  <Styled.ActionBtn_Left>
                    {activeOrder.OrderStatus === "Accepted" && (
                      <>
                        <Button className="MainBtn" onClick={showModal}>
                          Transfer
                        </Button>
                        <Modal
                          title="Select Delivery Person"
                          visible={isModalVisible_Assigned}
                          onOk={handleOk_Assigned}
                          onCancel={handleCancel_Assigned}
                        >
                          <Select
                            style={{ width: "100%" }}
                            placeholder="Select a delivery person"
                            onChange={onChange}
                            allowClear
                            options={delivery.map((item: any) => ({
                              value: item.AccountDeliveryID,
                              label: item.DeliveryName
                            }))}
                          />
                        </Modal>
                      </>
                    )}
                    <Link to="/admin/order">
                      <Button style={{ marginLeft: "10px" }}>Back</Button>
                    </Link>
                  </Styled.ActionBtn_Left>
                  <Styled.ActionBtn_Right>
                    {orderStatus === "Accepted" && (
                      <>
                        <Button className="DeleteBtn" onClick={showModal_Accepted}>
                          Return to Sales Staff
                        </Button>
                        <Modal
                          title="Sure to return?"
                          visible={isModalVisible_Accepted}
                          onOk={handleOk_Accepted}
                          onCancel={handleCancel_Accepted}
                        ></Modal>
                      </>
                    )}
                  </Styled.ActionBtn_Right>
                </Styled.ActionBtn>
              </>
            ) : (
              <div>
                Order not found
              </div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default OrderDetail;
