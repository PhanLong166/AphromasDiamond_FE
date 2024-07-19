/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Button, ConfigProvider, Table } from 'antd';
// import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { Button, Space, TableColumnsType, Tag, notification } from "antd";
import ReviewForm from "./ReviewForm";
import { useLocation } from "react-router-dom";
import { showAllOrderLineForAdmin } from "@/services/orderLineAPI";
import { getDiamondDetails } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";

interface DiamondDetail {
  DiamondID: number;
  Name: string;
  Description: string;
  Carat: number;
  Price: number;
  UsingImage?: string;
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
    default:
      color = "default";
  }

  return (
    <Tag color={color} key={status}>
      {status.toUpperCase()}
    </Tag>
  );
};
// const formatPrice = (price: number): string => {
//   return `$${price.toFixed(0)}`;
// };

const OrderDetail: React.FC = () => {
  // const [order, setOrder] = useState([]);
  const [diamondDetails, setDiamondDetails] = useState<{ [key: string]: any }>(
    {}
  );

  // const [value, setValue] = useState(3);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDiamondId, setSelectedDiamondId] = useState<number | null>(
    null
  );
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");

  const fetchAllOrderLine = async () => {
    try {
      const res = await showAllOrderLineForAdmin();

      if (Array.isArray(res.data.data)) {
        const filteredOrders = res.data.data.filter(
          (order: { OrderID: number }) =>
            order.OrderID === parseInt(orderId || "", 10)
        );

        if (filteredOrders.length > 0) {
          // setOrder(filteredOrders);
          fetchDiamondDetails(filteredOrders);
        } else {
          console.log("No orders found with OrderID:", orderId);
        }
      } else {
        console.error("Expected an array but received:", res.data);
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
          details[order.DiamondID] = res.data.data;
          if (order.usingImageID && order.usingImageID.length > 0) {
            const imageID = order.usingImageID[0];
            const imageRes = getImage(imageID.UsingImageID);
            details[order.DiamondID].image = imageRes;
          } // Lưu thông tin ảnh vào chi tiết của kim cương
        }
      }
      setDiamondDetails(details);
      console.log("Diamond Details with Images:", details);
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    }
  };

  useEffect(() => {
    if (orderId) {
      fetchAllOrderLine();
    }
  }, [orderId]); // Chạy khi orderId thay đổi
  

  const columns: TableColumnsType<DiamondDetail> = [
    {
      title: "DiamondID",
      dataIndex: "DiamondID",
      key: "DiamondID",
      sorter: (a, b) => a.DiamondID - b.DiamondID,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Descriptions",
      dataIndex: "Description",
      key: "Description",
      // sorter: (a, b) => a.Carat - b.Carat,
      // sortDirections: ["descend", "ascend"],
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      sorter: (a, b) => a.Price - b.Price,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: " Image",
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
          "No  Image"
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              setSelectedDiamondId(record.DiamondID);
              setIsModalVisible(true);
            }}
          >
            Feedback
          </Button>
        </Space>
      ),
    },
  ];

  const handleFeedbackCreate = (values: any) => {
    console.log("Feedback submitted: ", values);
    setIsModalVisible(false);
    notification.success({
      message: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
  };

  return (
    <MainContainer>
      <Container>
        <OrderWrapper>
          <OrderTitle>Order Detail</OrderTitle>
          <OrderDetailsContainer>
            <OrderDetails>
              <CustomerInfo>Hà Thị Huyền Trang</CustomerInfo>
              <CustomerInfo>0354033629</CustomerInfo>
              <CustomerInfo>tranghthuy@fpt.edu.vn</CustomerInfo>
              <CustomerInfo>
                123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam
              </CustomerInfo>
            </OrderDetails>
            <InvoiceDetails>
              <InvoiceInfo>Invoice Date: 14 Dec 2022</InvoiceInfo>
              <InvoiceInfo>Due Date: 14 Dec 2022</InvoiceInfo>
              <InvoiceInfo>
                Status: <StatusTag status={"Completed"} />
              </InvoiceInfo>
            </InvoiceDetails>
          </OrderDetailsContainer>
        </OrderWrapper>
        <ProductsWrapper>
          <OrderID>Order ID #{orderId}</OrderID>
          <Table
            style={{ backgroundColor: "#e8e8e8" }}
            columns={columns}
            dataSource={Object.values(diamondDetails)}
            pagination={false}
            rowKey="id"
          />
          <ReviewForm
            visible={isModalVisible}
            onCreate={handleFeedbackCreate}
            onCancel={() => setIsModalVisible(false)}
            orderId={orderId}
            accountId={null}
            diamondId={selectedDiamondId}
          />
        </ProductsWrapper>

        <OrderInfo>
          <Row>
            <InfoTitle>Payment method</InfoTitle>
            <img
              className="payment-method"
              src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
              alt="Payment method"
            />
          </Row>
          <Column>
            <InfoText>Discount: 10%</InfoText>
            <InfoText>VAT: 10%</InfoText>
            <InfoText>Shipping: Free</InfoText>
            <br />
            <InfoText style={{ color: "red" }}>Total: None</InfoText>
          </Column>
        </OrderInfo>
        <EditButton>Comfirm</EditButton>
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
  align-items: flex-end;

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
