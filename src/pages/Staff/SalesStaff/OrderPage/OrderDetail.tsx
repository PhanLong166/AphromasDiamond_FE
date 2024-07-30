import * as Styled from "./OrderDetail.styled";
import { useEffect, useState } from "react";
import { Button, Empty, Modal, Tag } from "antd";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
// import { data } from "./OrderData";
import { Link, useParams } from "react-router-dom";
import Sidebar from "@/components/Staff/SalesStaff/Sidebar/Sidebar";
import { orderDetail } from "@/services/orderAPI";
import paypal from '@/assets/logo/payment/paypal.png';
import cod from '@/assets/logo/payment/cod.jpg';
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getDiamondDetails } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { PaymentMethodEnum } from "@/utils/enum";

// const { Option } = Select;

const getStatusTag = (status: string) => {
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
};

const formatPrice = (price: number | bigint) => {
  return `$ ${new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price)}`;
};

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  // const activeOrder = data.find((order) => order.orderID === id);
  const [activeOrder, setActiveOrder] = useState<any>(null);

  const [orderStatus, setOrderStatus] = useState(activeOrder?.status || "");
  const [diamondDetails, setDiamondDetails] = useState<{ [key: string]: any }>({});

  const fetchData = async () => {
    const orderResponse = await orderDetail(Number(id));
    setActiveOrder(orderResponse.data.data);
    console.log(activeOrder);
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
                  const imageRes = getImage(image.UsingImageID);
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

  // DELETE ORDER FROM PENDING STATUS
  const [isModalVisible_Pending, setIsModalVisible_Pending] = useState(false);

  const showModal_Pending = () => {
    setIsModalVisible_Pending(true);
  };

  const handleOk_Pending = () => {
    // Handle the submission logic here
    setOrderStatus("Cancelled");
    setIsModalVisible_Pending(false);
  };

  const handleCancel_Pending = () => {
    setIsModalVisible_Pending(false);
  };

  return (
    <>
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
                          {activeOrder.OrderDate.replace("T", " ").replace(".000Z", "")}
                        </p>
                      </Styled.OrderDate>
                      <Styled.OrderStatus>
                        <p>Status</p>
                        <div>{getStatusTag(activeOrder.OrderStatus)}</div>
                      </Styled.OrderStatus>
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
                          <div key={line.lineID}>
                            <Styled.ProductElement>
                              <img
                                src={diamondDetails[Number(id)]?.UsingImage}
                                alt="Image placeholder"
                                /*style={{ width: "60px", height: "50px" }}*/ className="productImg"
                              />
                              <div className="productName">{line.diamond.Name}</div>
                              <div className="productQuant">
                                {line.Quantity}
                              </div>
                              <div className="productPrice">
                                {formatPrice(line.Price)}
                              </div>
                            </Styled.ProductElement>
                          </div>
                        ))}
                      </Styled.OrderLine>
                    </Styled.OrderLine_List>
                    <Styled.OrderTotal>
                      <Styled.Payment>
                        <p>Payment method</p>
                        {activeOrder.PaymentID === PaymentMethodEnum.PAYPAL && (
                          <img src={paypal} 
                          alt="Paypal" style={{ width: "100px", height: "auto" }} />
                        )}
                        {activeOrder.PaymentID === PaymentMethodEnum.COD && (
                          <img src={cod}
                          alt="COD" style={{ width: "100px", height: "auto" }} />
                        )}
                      </Styled.Payment>
                      <Styled.Amount>
                        <Styled.OtherCosts>
                          <p>% discount</p>
                          <p>- {formatPrice(activeOrder.Price - activeOrder.VoucherPrice)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>Shipping fee</p>
                          <p>{formatPrice(activeOrder.Shippingfee)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>Subtotal</p>
                          <p>{formatPrice(activeOrder.Price)}</p>
                        </Styled.OtherCosts>
                        <Styled.Total>
                          <p>Total</p>
                          <p className="totalAmount">
                            {formatPrice(activeOrder.VoucherPrice)}
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

                    <Link to="/sales-staff/order">
                      <Button style={{ marginLeft: "10px" }}>Back</Button>
                    </Link>
                  </Styled.ActionBtn_Left>
                  <Styled.ActionBtn_Right>
                    {orderStatus === "Pending" && (
                      <>
                        <Button
                          className="DeleteBtn"
                          onClick={showModal_Pending}
                        >
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
                  </Styled.ActionBtn_Right>
                </Styled.ActionBtn>
              </>
            ) : (
              <Empty />
            )}
          </Styled.PageContent>
        </Styled.AdminPage>
      </Styled.PageAdminArea>
    </>
  );
};

export default OrderDetail;
