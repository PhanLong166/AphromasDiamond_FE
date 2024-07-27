import * as Styled from "./OrderDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, notification, Select, Tag } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { Link, useParams } from "react-router-dom";
import { orderDetail, showAllOrder, updateOrder } from "@/services/orderAPI";
import paypalLogo from '@/assets/logo/payment/paypal.png';
import codLogo from '@/assets/logo/payment/cod.jpg';
import { OrderStatus, PaymentMethodEnum, Role } from "@/utils/enum";
import { showAllAccounts } from "@/services/accountApi";
// const { Option } = Select;

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

// interface OrderLine {
//   lineID: number;
//   lineImg: string;
//   lineName: string;
//   size: string;
//   quantity: number;
//   price: number;
// }

// const orderLineData: OrderLine[] = [
//   {
//     lineID: 123,
//     lineImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     lineName:
//       "Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond",
//     size: "8", //8, 10, 12, 14, 16
//     quantity: 1,
//     price: 5.03,
//   },
//   {
//     lineID: 123,
//     lineImg:
//       "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
//     lineName: "Aquamarine Stud Earrings In 14k White Gold (7mm)",
//     size: "8",
//     quantity: 2,
//     price: 4.0,
//   },
// ];

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  // const activeOrder = orderData.find((order) => order.orderID === id);
  const [activeOrder, setActiveOrder] = useState<any>(null);
  const [orderStatus, setOrderStatus] = useState(activeOrder?.status || '');
  const [accountList, setAccountList] = useState<any[]>([]);
  const [orderList, setOrderList] = useState<any[]>([]);
  const [delivery, setDelivery] = useState<any[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [api, contextHolder] = notification.useNotification();
  

  const fetchData = async () => {
    const { data } = await orderDetail(Number(id));
    setActiveOrder(data.data);

    const accountRes = await showAllAccounts();
    setAccountList(
      accountRes.data.data
        .filter((account: any) => account.Role === Role.DELI_STAFF)
    );
    console.log('Delivery: ', accountList);

    const orderRes = await showAllOrder();
    setOrderList(orderRes.data.data);
    console.log(orderList);

    const deliveryFormat = accountList.map((deliStaff: any) => ({
      AccountDeliveryID: deliStaff.AccountID,
      DeliveryName: deliStaff.Name,
      OrderNumber: orderList.filter((order: any) => order.AccountDeliveryID === deliStaff.AccountID).length
    }));
    setDelivery(deliveryFormat);
    console.log('Format: ',delivery);
  }

  useEffect(() => {
    fetchData();
  }, []);


  // TRANSFER TO DELIVERY STAFF
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    fetchData();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (value: number) => {
    setSelectedStaff(value);
    console.log('Selected staff: ', value);
  }


  // DELETE ORDER FROM PENDING STATUS
  const [isModalVisible_Pending, setIsModalVisible_Pending] = useState(false);


  const showModal_Pending = () => {
    setIsModalVisible_Pending(true);
  };

  const handleOk_Pending = async () => {
    // Handle the submission logic here
    setIsModalVisible_Pending(false);
  };

  const handleCancel_Pending = () => {
    setIsModalVisible_Pending(false);
  };


  // DELETE ORDER FROM ACCEPTED STATUS
  const [isModalVisible_Accepted, setIsModalVisible_Accepted] = useState(false);


  const showModal_Accepted = () => {
    setIsModalVisible_Accepted(true);
  };

  const handleOk_Accepted = async () => {
    // Handle the submission logic here
    try {
      const { data } = await updateOrder(Number(id),{
        OrderStatus: OrderStatus.ASSIGNED,
        IsPayed: false,
        IsActive: true,
        AccountDeliveryID: selectedStaff
      });

      if(data.statusCode !== 200) throw new Error(data.message);
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


  // Calculate the total price of the order lines
  const discount = 0; // Assuming no discount for demonstration

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
                        <p>{activeOrder.NameReceived}</p>
                        <p>{activeOrder.PhoneNumber}</p>
                        <p>{activeOrder.Email}</p>
                        <p>{activeOrder.Address}</p>
                      </Styled.CustomerInfor>
                    </Styled.CustomerInfor_Container>
                  </Styled.PageDetail_Infor>
                </Styled.PageContent_Top>

                <Styled.PageContent_Bot>
                  <Styled.PageDetail_Title>
                    <p>Order ID - #{activeOrder.OrderID}</p>
                  </Styled.PageDetail_Title>

                  <Styled.OrderDetail_Infor>
                    <Styled.OrderLine_List>
                      <Styled.OrderLine_ListHead>
                        <p className="productImg">Image</p>
                        <p className="productName">Name</p>
                        <p className="productQuant">Quantity</p>
                        <p className="productPrice">Price</p>
                      </Styled.OrderLine_ListHead>
                      <Styled.OrderLine>
                        {activeOrder.orderLine.map((line: any) => (
                          <div key={line.OrderLineID}>
                            <Styled.ProductElement>
                              <img
                                src={line.lineImg}
                                alt="Example"
                                /*style={{ width: "60px", height: "50px" }}*/
                                className="productImg"
                              />
                              <div className="productName">{line.diamond.Name}</div>
                              <div className="productQuant">
                                {line.Quantity}
                              </div>
                              <div className="productPrice">${line.Price.toFixed(2)}</div>
                            </Styled.ProductElement>
                          </div>
                        ))}
                      </Styled.OrderLine>
                    </Styled.OrderLine_List>
                    <Styled.OrderTotal>
                      <Styled.Payment>
                        <p>Payment method</p>
                        <img
                          src={activeOrder.PaymentID === PaymentMethodEnum.COD ? codLogo : paypalLogo}
                          alt={activeOrder.PaymentID === PaymentMethodEnum.COD ? 'COD' : 'Paypal'}
                        />
                      </Styled.Payment>
                      <Styled.Amount>
                        {activeOrder.VoucherID ?
                          <Styled.OtherCosts>
                            <p>% discount</p>
                            <p>${discount.toFixed(2)}</p>
                          </Styled.OtherCosts> : <></>
                        }
                        {activeOrder.Shippingfee ?
                          <Styled.OtherCosts>
                            <p>Shipping fee</p>
                            <p>${activeOrder.Shippingfee}</p>
                          </Styled.OtherCosts> : <></>
                        }
                        <Styled.OtherCosts>
                          <p>Subtotal</p>
                          <p>${activeOrder.TotalPrice}</p>
                        </Styled.OtherCosts>

                        <Styled.Total>
                          <p>Total</p>
                          <p className="totalAmount">
                            ${activeOrder.VoucherPrice}
                          </p>
                        </Styled.Total>
                      </Styled.Amount>
                    </Styled.OrderTotal>
                  </Styled.OrderDetail_Infor>
                </Styled.PageContent_Bot>
                <Styled.ActionBtn>
                  <Styled.ActionBtn_Left>
                    {orderStatus === "Pending" && (
                      <Button
                        className="MainBtn"
                        onClick={() => setOrderStatus("Accepted")}
                      >
                        Create Order
                      </Button>
                    )}
                    {activeOrder.OrderStatus === "Accepted" && (
                      <>
                        <Button className="MainBtn" onClick={showModal}>
                          Transfer
                        </Button>
                        <Modal
                          title="Select Delivery Person"
                          visible={isModalVisible}
                          onOk={handleOk_Accepted}
                          onCancel={handleCancel}
                        >
                          <Select
                            style={{ width: "100%" }}
                            placeholder="Select a delivery person"
                            onChange={onChange}
                            allowClear
                            options={delivery.map((item: any) => ({
                              value: item.AccountDeliveryID,
                              label: `${item.DeliveryName} (Orders: ${item.OrderNumber})`
                            }))}
                          />
                        </Modal>
                      </>
                    )}
                    <Link to={`/admin/order/${activeOrder.OrderStatus.toLowerCase()}`}>
                      <Button style={{ marginLeft: "10px" }}>Back</Button>
                    </Link>
                  </Styled.ActionBtn_Left>
                  <Styled.ActionBtn_Right>
                    {orderStatus === "Pending" && (
                      <>
                        <Button className="DeleteBtn" onClick={showModal_Pending}>
                          Reject
                        </Button>
                        <Modal
                          title="Sure to reject?"
                          visible={isModalVisible_Pending}
                          onOk={handleOk_Pending}
                          onCancel={handleCancel_Pending}
                        ></Modal>
                      </>
                    )}
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
              <div>Order not found.</div>
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default OrderDetail;
