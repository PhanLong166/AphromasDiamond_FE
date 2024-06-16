import * as Styled from "./OrderDetail.styled";
import { useState } from "react";
import { Button, Modal, Select, Tag } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
// import OrderMenu from "../../../components/Admin/OrderMenu/OrderMenu";
import { data } from "./OrderData";
import { Link, useParams } from "react-router-dom";


// const { Option } = Select;

const getStatusTag = (status: string) => {
  let color = "green";
  if (status === "Pending") {
    color = "volcano";
  } else if (status === "Confirmed") {
    color = "yellow";
  } else if (status === "Delivering") {
    color = "geekblue";
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

interface OrderLine {
  lineID: number;
  lineImg: string;
  lineName: string;
  quantity: number;
  price: number;
}

const orderLineData: OrderLine[] = [
  {
    lineID: 123,
    lineImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    lineName:
      "Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond",
    quantity: 1,
    price: 5.03,
  },
  {
    lineID: 123,
    lineImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    lineName: "Aquamarine Stud Earrings In 14k White Gold (7mm)",
    quantity: 2,
    price: 4.0,
  },
];

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeOrder = data.find((order) => order.orderID === id);

  const [orderStatus, setOrderStatus] = useState(activeOrder?.status || '');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle the submission logic here
    setIsModalVisible(false);
    // Update the order status to Delivering (this would typically involve an API call)
    setOrderStatus("Delivering"); 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Calculate the total price of the order lines
  const totalPrice = orderLineData.reduce(
    (acc, line) => acc + line.price * line.quantity,
    0
  );
  const vat = totalPrice * 0.1; // VAT is 10% of the total price
  const shippingFee = 5; // Assuming a fixed shipping fee for demonstration
  const discount = 0; // Assuming no discount for demonstration
  const totalAmount = totalPrice + vat + shippingFee - discount;

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
                        <p className="orderDate">{activeOrder.date}</p>
                      </Styled.OrderDate>
                      <Styled.OrderStatus>
                        <p>Status</p>
                        <div>{getStatusTag(activeOrder.status)}</div>
                      </Styled.OrderStatus>
                    </Styled.OrderInfor>

                    <Styled.CustomerInfor_Container>
                      <Styled.CustomerInfor>
                        <p>Nguyen Van A</p>
                        <p>0837250913</p>
                        <p>nguyenvana@gmail.com</p>
                        <p>123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam</p>
                      </Styled.CustomerInfor>
                    </Styled.CustomerInfor_Container>
                  </Styled.PageDetail_Infor>
                </Styled.PageContent_Top>

                <Styled.PageContent_Bot>
                  <Styled.PageDetail_Title>
                    <p>Order ID - {activeOrder.orderID}</p>
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
                        {orderLineData.map((line) => (
                          <div key={line.lineID}>
                            <Styled.ProductElement>
                              <img
                                src={line.lineImg}
                                alt={line.lineName}
                                /*style={{ width: "60px", height: "50px" }}*/ className="productImg"
                              />
                              <div className="productName">
                                {line.lineName}
                              </div>
                              <div className="productQuant">
                                {line.quantity}
                              </div>
                              <div className="productPrice">${line.price}</div>
                            </Styled.ProductElement>
                          </div>
                        ))}
                      </Styled.OrderLine>
                    </Styled.OrderLine_List>
                    <Styled.OrderTotal>
                      <Styled.Payment>
                        <p>Payment method</p>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FOrder%2FmomoLogo.png?alt=media&token=ba97df7d-0328-4da9-90b6-4eb379143c9d"
                          alt="MOMO"
                        />
                      </Styled.Payment>
                      <Styled.Amount>
                        <Styled.OtherCosts>
                          <p>% discount</p>
                          <p>${discount.toFixed(2)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>VAT</p>
                          <p>${vat.toFixed(2)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>Shipping fee</p>
                          <p>${shippingFee.toFixed(2)}</p>
                        </Styled.OtherCosts>
                        <Styled.Total>
                          <p>Total</p>
                          <p className="totalAmount">
                            ${totalAmount.toFixed(2)}
                          </p>
                        </Styled.Total>
                      </Styled.Amount>
                    </Styled.OrderTotal>
                  </Styled.OrderDetail_Infor>
                </Styled.PageContent_Bot>
                <Styled.ActionBtn>
                  {orderStatus === "Pending" && (
                    <Button className="MainBtn">Confirm</Button>
                  )}
                  {orderStatus === "Confirmed" && (
                    <>
                      <Button className="MainBtn" onClick={showModal}>
                        Transfer
                      </Button>
                      <Modal
                        title="Select Delivery Person"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <Select
                          style={{ width: "100%" }}
                          placeholder="Select a delivery person"
                        >
                          <Select.Option value="John Doe">John Doe</Select.Option>
                          <Select.Option value="Jane Smith">Jane Smith</Select.Option>
                          <Select.Option value="Jim Brown">Jim Brown</Select.Option>
                        </Select>
                      </Modal>
                    </>
                  )}
                  <Link to="/admin/order/pending">
                    <Button style={{ marginLeft: "10px" }}>Back</Button>
                  </Link>
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
