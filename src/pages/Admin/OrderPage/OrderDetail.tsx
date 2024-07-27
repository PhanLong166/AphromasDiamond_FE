import * as Styled from "./OrderDetail.styled";
import { useEffect, useState } from "react";
import { Button, Modal, notification, Select, Table, TableColumnsType, Tag } from "antd";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import { orderDetail } from "@/services/orderAPI";
import { showAllDiamond } from "@/services/diamondAPI";
import { OrderLineDetail, showAllOrderLineForAdmin } from "@/services/orderLineAPI";
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
  const [activeOrder, setActiveOrder] = useState<any | null>(null);
  const [editedOrder, setEditedOrder] = useState<any | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const [orderStatus, setOrderStatus] = useState<any | null>(null);
  const [orderLine, setOrderLine] = useState<any | null>(null);
  const [diamonds, setDiamonds] = useState<any[]>([]);



  type NotificationType = "success" | "info" | "warning" | "error";

  const openNotification = (
    type: NotificationType,
    method: string,
    error: string
  ) => {
    api[type]({
      message: type === "success" ? "Notification" : "Error",
      description:
        type === "success" ? `${method} manager successfully` : error,
    });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await orderDetail(Number(id));
        const responseOrderLine = await showAllOrderLineForAdmin();
        const responseProducts = await showAllDiamond();
  
        const orderData = response.data.data;
        const orderLineData = responseOrderLine.data.data;
        const diamondData = responseProducts.data;

        const formattedDiamonds = diamondData
        .map((diamond: any) => ({
        diamondID: diamond.DiamondID,
        diamondName: diamond.Name,
        price: diamond.Price,
        color: diamond.Color,
        shape: diamond.Shape,
        polish: diamond.Polish,
        cut: diamond.Cut,
        lengthOnWidthRatio: diamond.LengthOnWidthRatio,
        clarity: diamond.Clarity,
        symmetry: diamond.Symmetry,
        weightCarat: diamond.WeightCarat,
        percentTable: diamond.PercentTable,
        percentDepth: diamond.PercentDepth,
        fluorescence: diamond.Fluorescence,
        description: diamond.Description,
        exchangeRate: 1,
        chargeRate: diamond.ChargeRate,
        images: diamond.usingImage.map((image: any) => ({
          id: image.UsingImageID,
          name: image.Name,
          url: getImage(image.UsingImageID),
        })),
      }));

        setActiveOrder(orderData);
        setEditedOrder(orderData);
        setOrderStatus(orderData.OrderStatus);
        setOrderLine(orderLineData);
        setDiamonds(formattedDiamonds);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };
    fetchData();
  }, [id]);
  
  useEffect(() => {
    console.log("Active Order:", activeOrder);
  }, [activeOrder]);


  // TRANSFER TO DELIVERY STAFF
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle the submission logic here
    setIsModalVisible(false);
    // Update the order status to Assigned
    setOrderStatus("Assigned");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // DELETE ORDER FROM PENDING STATUS
  const [isModalVisible_Pending, setIsModalVisible_Pending] = useState(false);

  const showModal_Pending = () => {
    setIsModalVisible_Pending(true);
  };

  const handleOk_Pending = () => {
    setOrderStatus("Cancelled");
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

  const handleOk_Accepted = () => {
    // Handle the submission logic here
    setOrderStatus("Pending");
    setIsModalVisible_Accepted(false);
  };

  const handleCancel_Accepted = () => {
    setIsModalVisible_Accepted(false);
  };


  const columns: TableColumnsType<any> = [
    // {
    //   title: "Diamond ID",
    //   dataIndex: "diamondID",
    //   // defaultSortOrder: "descend",
    //   sorter: (a, b) => parseInt(a.diamondID) - parseInt(b.diamondID),
    // },
    {
      title: "Image",
      key: "diamondImg",
      className: "TextAlign",
      render: (_, record) => (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={record.images && record.images[0] ? record.images[0].url : "default-image-url"} 
            alt={record.diamondName}
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      ),
    },
    {
      title: "Diamond Name",
      dataIndex: "diamondName",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.diamondName.length - b.diamondName.length,
      // sortDirections: ["descend"],
    },
    {
      title: `Selling Price`,
      key: "sellingPrice",
    }
  ];

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
                        <p className="orderDate">{activeOrder.OrderDate}</p>
                      </Styled.OrderDate>
                      <Styled.OrderStatus>
                        <p>Status</p>
                        <div>{getStatusTag(activeOrder.OrderStatus)}</div>
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
                    <p>Order ID - {activeOrder.OrderID}</p>
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
                        {/* {activeOrder?.OrderLines.map((lineOrder) => (
                          orderLine.map((line) => (
                            lineOrder.OrderLineID === line.OrderLineID && (
                              diamonds.map((diamond) => (
                                diamonds.diamondID === line.DiamondID && (
                                  <div key={line.OrderLineID}>
                                    <Styled.ProductElement>
                                      <img
                                        src={diamond.images[0]?.url}
                                        alt={diamond.diamondName}
                                        className="productImg"
                                      />
                                      <div className="productName">{diamond.diamondName}</div>
                                      <div className="productQuant">
                                        {line.Quantity}
                                      </div>
                                      <div className="productPrice">${diamond.price}</div>
                                    </Styled.ProductElement>
                                  </div>
                                )
                              ))
                            )
                          ))
                        ))} */}

                <Table
                  className="table"
                  columns={columns}
                  dataSource={diamonds}
                  pagination={{ pageSize: 6 }}
                />

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
                        {/* <Styled.OtherCosts>
                          <p>% discount</p>
                          <p>${discount.toFixed(2)}</p>
                        </Styled.OtherCosts>
                        <Styled.OtherCosts>
                          <p>VAT</p>
                          <p>${vat.toFixed(2)}</p>
                        </Styled.OtherCosts> */}
                        <Styled.OtherCosts>
                          <p>Shipping fee</p>
                          <p>0$</p>
                        </Styled.OtherCosts>
                        <Styled.Total>

                          <p className="totalAmount">
                            {activeOrder.TotalPrice}
                          </p>


                          {/* <p>Total</p>
                          <p className="totalAmount">
                            ${totalAmount.toFixed(2)}
                          </p> */}
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
                    {orderStatus === "Accepted" && (
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
                            <Select.Option value="John Doe">
                              John Doe
                            </Select.Option>
                            <Select.Option value="Jane Smith">
                              Jane Smith
                            </Select.Option>
                            <Select.Option value="Jim Brown">
                              Jim Brown
                            </Select.Option>
                          </Select>
                        </Modal>
                      </>
                    )}
                    <Link to="/admin/order">
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
