/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "antd/es/table";
import { Button, Space, TableColumnGroupType, Tag, notification } from "antd";
import ReviewForm from "./ReviewForm";
import { Link, useLocation } from "react-router-dom";
import {
  OrderLineDetail,
  showAllOrderLineForAdmin,
} from "@/services/orderLineAPI";
import { getDiamondDetails } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { orderDetail, showAllOrder } from "@/services/orderAPI";
import useAuth from "@/hooks/useAuth";
import { getProductDetails } from "@/services/productAPI";
// import { ColumnType } from "antd/lib/table";

// interface OrderDetailsDataType {
//   DiamondID: number;
//   ProductID: number;
// }

interface DiamondDetail {
  DiamondID: number;
  Name: string;
  Description: string;
  Price: number;
  UsingImage?: string;
}

interface ProductDetail {
  ProductID: number;
  Name: string;
  Description: string;
  Price: number;
  UsingImage?: string;
  Inscription?: string;
}

const StatusTag = ({ status }: { status: string }) => {
  let color = "green";

  switch (status) {
    case "Pending":
      color = "grey";
      break;
    case "Delivering":
      color = "geekblue";
      break;
    case "Delivered":
      color = "green";
      break;
    case "Canceled":
      color = "volcano";
      break;
    case "Completed":
      color = "#32CD32";
      break;
    default:
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const OrderDetail: React.FC = () => {
  // const [order, setOrder] = useState([]);
  // const [diamondDetails, setDiamondDetails] = useState<{ [key: string]: any }>(
  //   {}
  // );
  const [diamondDetails, setDiamondDetails] = useState<{
    [key: number]: DiamondDetail;
  }>({});
  const [productDetails, setProductDetails] = useState<{
    [key: number]: ProductDetail;
  }>({});
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [order, setOrder] = useState<any>(null);
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const { AccountID } = useAuth();

  const [reviewedDiamonds, setReviewedDiamonds] = useState<Set<number>>(
    new Set()
  );
  const [reviewedProducts, setReviewedProducts] = useState<Set<number>>(
    new Set()
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDiamondID, setSelectedDiamondID] = useState<number | null>(
    null
  );
  const [selectedProductID, setSelectedProductID] = useState<number | null>(
    null
  );
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");
  console.log("OrderID:", orderId);
  const fetchCustomerInfo = async () => {
    try {
      const { data } = await showAllOrder();
      const res = data.data;
      console.log(res);

      // Check if orderId exists in fetched orders
      const order = res.find(
        (order: { OrderID: number }) =>
          order.OrderID === parseInt(orderId || "", 10)
      );

      if (order) {
        console.log("Order found:", order);
        setOrder(order);

        //Price Order
        const res = await orderDetail(order.OrderID);
        const priceRes = res.data.data;
        console.log(res.data.data);
        const paymentMethod = priceRes.PaymentID;
        setPaymentMethod(paymentMethod);
        if (priceRes.VoucherPrice) {
          const shippingFee = Number(res.data.data.Shippingfee);
          setShippingFee(shippingFee);

          const totalVoucherPrice = Number(priceRes.VoucherPrice);

          const totalPrice = priceRes.Price;
          if (priceRes.VoucherID) {
            const discount = parseInt(
              ((totalVoucherPrice / totalPrice) * 10).toFixed(0)
            );
            console.log(discount);
            setDiscount(discount);
          }
        }
        //
      } else {
        console.log("No order found with OrderID:", orderId);
      }
    } catch (error) {
      console.error("Error fetching customer info:", error);
    }
  };

  useEffect(() => {
    fetchCustomerInfo();
  }, []);

  const fetchAllOrderLine = async () => {
    try {
      const res = await showAllOrderLineForAdmin();

      if (res.data.data) {
        const filteredOrders = res.data.data.filter(
          (order: { OrderID: number }) =>
            order.OrderID === parseInt(orderId || "", 10)
        );

        if (filteredOrders.length > 0) {
          fetchDetails(filteredOrders);
        } else {
          console.log("No orders found with OrderID:", orderId);
        }
      }
    } catch (error) {
      console.error("Error fetching order lines:", error);
    }
  };

  const fetchDetails = async (orders: any) => {
    try {
      const diamondDetails: { [key: number]: DiamondDetail } = {};
      const productDetails: { [key: number]: ProductDetail } = {};
      let subTotal = 0;

      console.log(orders);
      for (const order of orders) {
        if (order.DiamondID) {
          const res = await getDiamondDetails(order.DiamondID);
          const diamond = res.data.data;
          console.log(diamond.Price);
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

          diamondDetails[order.DiamondID] = {
            ...diamond,
            UsingImage: diamondImage,
          };
          subTotal += Number(diamond.Price || 0);
        } else if (order.ProductID) {
          const [orderLineRes, productRes] = await Promise.all([
            OrderLineDetail(order.OrderLineID),
            getProductDetails(order.ProductID),
          ]);
          console.log(orderLineRes.data.data);
          const jewelrySettingVariantPrice =
            productRes.data.data.JewelrySetting.jewelrySettingVariant[0].Price;
          // console.log(productRes.data.data.JewelrySetting.jewelrySettingVariant[0].Price);
          const inscription = orderLineRes.data.data.Inscription;
          const totalDimondPrice = productRes.data.data.TotalDiamondPrice;

          const productPrice =
            orderLineRes.data.data.DiscountPrice +
            totalDimondPrice +
            jewelrySettingVariantPrice;

          // console.log(totalDimondPrice)
          // console.log(productPrice);
          const productData = productRes.data.data;
          // console.log(productData);

          // console.log(order.ProductID);

          let productImage = "https://via.placeholder.com/150";
          console.log(productData.UsingImage);
          if (productData.UsingImage && productData.UsingImage.length > 0) {
            const imageIDPromises = productData.UsingImage.map(
              async (image: any) => {
                try {
                  const imageRes = await getImage(image.UsingImageID);
                  console.log(imageRes);
                  return imageRes || image.url;
                } catch (error) {
                  console.log("Error fetching image product:", error);
                  return image.url;
                }
              }
            );
            const imageURLs = await Promise.all(imageIDPromises);
            productImage = imageURLs[0];
          }
          productDetails[order.ProductID] = {
            ...productData,
            UsingImage: productImage,
            Price: productPrice,
            Inscription: inscription,
          };
          subTotal += productPrice || 0;
        }
      }
      console.log("Before setting state:", { productDetails });
      setDiamondDetails(diamondDetails);
      setProductDetails(productDetails);
      setSubTotal(subTotal);
      console.log("State updated", { diamondDetails, productDetails });
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };
  useEffect(() => {
    console.log("Diamond Details:", diamondDetails);
    console.log("Product Details:", productDetails);
  }, [diamondDetails, productDetails]);

  useEffect(() => {
    if (orderId) {
      fetchAllOrderLine();
    }
  }, [orderId]); // Chạy khi orderId thay đổi

  const hasProductID = (data: (DiamondDetail | ProductDetail)[]) =>
    data.some((item) => 'ProductID' in item);

  const columns: TableColumnGroupType<DiamondDetail | ProductDetail>[] = [
    {
      title: "Product",
      children: [
        {
          title: "Image",
          dataIndex: "UsingImage",
          key: "UsingImage",
          // width: "20%",
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
          // width: "10%",
        },
       ...(hasProductID([
        
        ...Object.values(productDetails),
      ]) ? [
        {
          title: "Product Inscription",
          dataIndex: "Inscription",
          key: "Inscription",
        }
      ] : []),
        {
          title: "Price",
          dataIndex: "Price",
          key: "Price",
          render: (price: number) => formatPrice(price),
          sorter: (a: any, b: any) => a.Price - b.Price,
          sortDirections: ["descend", "ascend"],
          // width: "8%",
        },
        {
          title: "Action",
          key: "action",
          render: (_: any, record: DiamondDetail | ProductDetail) => {
            const isReviewedDiamond = reviewedDiamonds.has(
              (record as DiamondDetail).DiamondID
            );
            const isReviewedProduct = reviewedProducts.has(
              (record as ProductDetail).ProductID
            );

            const shouldShowFeedback = order?.OrderStatus === "Completed";
            if ((record as DiamondDetail).DiamondID) {
              // Show feedback button only for diamonds if not reviewed
              return shouldShowFeedback && !isReviewedDiamond ? (
                <Space size="middle">
                  <Button
                    type="link"
                    onClick={() => {
                      setSelectedDiamondID((record as DiamondDetail).DiamondID);
                      setSelectedProductID(null); // Ensure only Diamond ID is set
                      setIsModalVisible(true);
                    }}
                  >
                    Feedback
                  </Button>
                </Space>
              ) : isReviewedDiamond ? (
                <span>Feedback Given</span>
              ) : (
                <></>
              );
            } else if ((record as ProductDetail).ProductID) {
              // Show feedback button only for products if not reviewed
              return shouldShowFeedback && !isReviewedProduct ? (
                <Space size="middle">
                  <Button
                    type="link"
                    onClick={() => {
                      setSelectedDiamondID(null); // Ensure only Product ID is set
                      setSelectedProductID((record as ProductDetail).ProductID);
                      setIsModalVisible(true);
                    }}
                  >
                    Feedback
                  </Button>
                </Space>
              ) : isReviewedProduct ? (
                <span>Feedback Given</span>
              ) : (
                <></>
              );
            }

            return <></>;
          },
        },
      ],
    },
  ];

  const handleFeedbackCreate = (values: any) => {
    console.log("Feedback submitted: ", values);

    const { DiamondID, ProductID } = values;
    console.log(values.DiamondID);

    setIsModalVisible(false);
    if (DiamondID) {
      setReviewedDiamonds((prev) => {
        const updated = new Set(prev);
        updated.add(DiamondID);
        console.log("Updated Diamond IDs:", updated);
        return updated;
      });
    }

    if (ProductID) {
      setReviewedProducts((prev) => {
        const updated = new Set(prev);
        updated.add(ProductID);
        console.log("Updated Product IDs:", updated);
        return updated;
      });
    }

    notification.success({
      message: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
  };
  useEffect(() => {
    localStorage.setItem(
      "reviewedDiamonds",
      JSON.stringify(Array.from(reviewedDiamonds))
    );
    localStorage.setItem(
      "reviewedProducts",
      JSON.stringify(Array.from(reviewedProducts))
    );
  }, [reviewedDiamonds, reviewedProducts]);

  // useEffect(() => {
  //   const savedReviewedDiamonds = localStorage.getItem("reviewedDiamonds");
  //   const savedReviewedProducts = localStorage.getItem("reviewedProducts");
  //   console.log(localStorage.getItem("reviewedDiamonds"));
  //   console.log(localStorage.getItem("reviewedProducts"));

  //   if (savedReviewedDiamonds) {
  //     setReviewedDiamonds(new Set(JSON.parse(savedReviewedDiamonds)));
  //   }

  //   if (savedReviewedProducts) {
  //     setReviewedProducts(new Set(JSON.parse(savedReviewedProducts)));
  //   }
  // }, []);

  return (
    <MainContainer>
      <Container>
        <OrderWrapper>
          <OrderTitle>Order Detail</OrderTitle>

          {order && (
            <OrderDetailsContainer>
              <OrderDetails>
                <CustomerInfo>{order.NameReceived}</CustomerInfo>
                <CustomerInfo>{order.PhoneNumber || "0354033629"}</CustomerInfo>
                <CustomerInfo>
                  {order.Email || "Hqz0M@example.com"}
                </CustomerInfo>
                <CustomerInfo>
                  {order.Address || "123 Main Street"}
                </CustomerInfo>
              </OrderDetails>
              <InvoiceDetails>
                <InvoiceInfo>
                  Invoice Date: {formatDate(order.OrderDate)}
                </InvoiceInfo>
                <InvoiceInfo>
                  Due Date: {formatDate(order.CompleteDate)}
                </InvoiceInfo>
                <InvoiceInfo>
                  Status: <StatusTag status={order.OrderStatus} />
                </InvoiceInfo>
              </InvoiceDetails>
            </OrderDetailsContainer>
          )}
        </OrderWrapper>
        <ProductsWrapper>
          <OrderID>Order ID #{orderId}</OrderID>
          <Table
            style={{ backgroundColor: "#e8e8e8" }}
            columns={columns}
            dataSource={[
              ...Object.values(diamondDetails),
              ...Object.values(productDetails),
            ]}
            pagination={false}
            rowKey="id"
          />
          <ReviewForm
            visible={isModalVisible}
            onCreate={handleFeedbackCreate}
            onCancel={() => setIsModalVisible(false)}
            orderId={orderId}
            accountId={AccountID}
            diamondId={selectedDiamondID}
            productId={selectedProductID}
          />
        </ProductsWrapper>

        <OrderInfo>
          <Row>
            <InfoTitle>Payment method</InfoTitle>
            <img
              style={{ width: "150px", objectFit: "contain", maxWidth: "100%" }}
              className="payment-method"
              src={
                paymentMethod === "COD"
                  ? "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2F122290830_132545211952745_2371548508191512996_n.jpg?alt=media&token=13186094-eb53-4e6c-98a0-1e7fe06b3664"
                  : paymentMethod === "Paypal"
                  ? "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2FPaypal.png?alt=media&token=239e4919-44d4-4018-98ed-abcd2ff4a350"
                  : ""
              }
              alt="Payment method"
            />
          </Row>
          <Column>
            <InfoTextBold>
              Discount: -({discount.toFixed(0) || 0}%):
              <span>{formatPrice((subTotal * discount) / 100) || 0}</span>
            </InfoTextBold>

            <InfoText>
              <div> Shipping:</div>
              <div> {shippingFee > 0 ? formatPrice(shippingFee) : "Free"}</div>
            </InfoText>
            <InfoText>
              <div> Subtotal:</div>
              <div> {formatPrice(subTotal)}</div>
            </InfoText>

            <br />
            <InfoTextBold style={{ color: "red" }}>
              <div> Total:</div>
              <div>
                {" "}
                {formatPrice(
                  subTotal - (subTotal * discount) / 100 + shippingFee
                )}
              </div>
              {paymentMethod === "PayPal" && (
                <div style={{ color: "green" }}>Payment Received</div>
              )}
            </InfoTextBold>
          </Column>
        </OrderInfo>
        <EditButton>
          <Link to={`/history`}>Back </Link>
        </EditButton>
      </Container>
    </MainContainer>
  );
};

export default OrderDetail;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 80px 60px 43px; */
  padding-top: 2rem;
  width: 1400px;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  width: 100%;
  gap: 20px;
  color: #151542;
  border-bottom: 1px solid;
  padding-bottom: 3rem;
`;

const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InvoiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OrderTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CustomerInfo = styled.p`
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const InvoiceInfo = styled.p`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 46px 0;
  border-bottom: 1px solid;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const InfoTitle = styled.h3`
  color: #92929d;
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoText = styled.p`
  color: #151542;
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between; /* Căn chỉnh các phần tử con */
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const InfoTextBold = styled.p`
  color: #151542;
  margin-top: 20px;
  font-size: 18px;
  /* font-weight: bold; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const OrderID = styled.h2`
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EditButton = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border: 1px solid #000;
  background-color: #fff;
  /* color: #000; */
  align-self: center;
  width: 100px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  padding: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #102c57;
    color: #fff;
  }

  @media (max-width: 991px) {
    padding: 6px 20px;
    width: auto;
  }
`;
