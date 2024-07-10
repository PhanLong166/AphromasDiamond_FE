import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Button, ConfigProvider, Table } from 'antd';
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { Tag, Form, Flex, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  type: string;
  size?: string;
}

interface OrderProps {
  invoiceDate: string;
  dueDate: string;
  status: string;
  orderId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  products: Product[];
  paymentMethod: string;
  discount: number;
  vat: number;
  shippingFee: number;
  total: number;
}

const sampleOrder: OrderProps = {
  invoiceDate: "14 Dec 2022",
  dueDate: "14 Dec 2022",
  status: "Pending",
  orderId: "123456",
  name: "Ha Thi Huyen Trang",
  phone: "0937250913",
  email: "hthuyentrange@gmail.com",
  address: "123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam",
  products: [
    {
      id: "1",
      name: "Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond",
      quantity: 1,
      price: 5030,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.jpg?alt=media&token=17427822-c905-4e96-a881-25ea17ce2fa7",
      size: "8",
      type: "ring",
    },
    {
      id: "2",
      name: "Aquamarine Stud Ring In 14k White Gold (7mm)",
      quantity: 2,
      price: 4000,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring1.jpg?alt=media&token=1fd5a503-9856-403a-a250-60ab0f42b372",
      size: "8",
      type: "ring",
    },
    {
      id: "3",
      name: "Aquamarine Stud Diamond In 14k White Gold (7mm)",
      quantity: 1,
      price: 4000,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
      type: "diamond",
    },
  ],
  paymentMethod:
    "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579",
  discount: 503,
  vat: 503,
  shippingFee: 0,
  total: 9033,
};

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
const formatPrice = (price: number): string => {
  return `$${price.toFixed(0)}`;
};

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const OrderDetail: React.FC = () => {
  const [order, setOrder] = useState<OrderProps | null>(null);
  const [value, setValue] = useState(3);

  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  useEffect(() => {
    // Simulating fetching data from an API
    setTimeout(() => {
      setOrder(sampleOrder);
    }, 1000);
  }, []);

  if (!order) {
    return <div>Loading...</div>;
  }

  const {
    invoiceDate,
    dueDate,
    status,
    name,
    phone,
    email,
    address,
    products,
    paymentMethod,
    discount,
    vat,
    shippingFee,
  } = order;

  const columns: ColumnsType<Product> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.imageUrl}
            alt={text}
            style={{ width: "70px", marginRight: "10px" }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (text, record) => (record.type === "ring" ? text : ""),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) =>
        formatPrice(Number(record.price) * record.quantity),
    },
  ];

  const calculateTotal = () => {
    const productsTotal = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    return formatPrice(productsTotal - discount + vat);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <MainContainer>
      <Container>
        <OrderWrapper>
          <OrderTitle>Order Detail</OrderTitle>
          <OrderDetailsContainer>
            <OrderDetails>
              <CustomerInfo>{name}</CustomerInfo>
              <CustomerInfo>{phone}</CustomerInfo>
              <CustomerInfo>{email}</CustomerInfo>
              <CustomerInfo>{address}</CustomerInfo>
            </OrderDetails>
            <InvoiceDetails>
              <InvoiceInfo>Invoice Date: {invoiceDate}</InvoiceInfo>
              <InvoiceInfo>Due Date: {dueDate}</InvoiceInfo>
              <InvoiceInfo>
                Status: <StatusTag status={status} />
              </InvoiceInfo>
            </InvoiceDetails>
          </OrderDetailsContainer>
        </OrderWrapper>
        <ProductsWrapper>
          <OrderID>Order ID #{order.orderId}</OrderID>
          <Table
            style={{ backgroundColor: "#e8e8e8" }}
            columns={columns}
            dataSource={products}
            pagination={false}
            rowKey="id"
          />
          <Form>
            {/* checked={componentDisabled} */}
            <Flex
            style={{ margin: "20px 0 20px 0" }}
            gap="middle" vertical>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {/* {value ? <span>{desc[value - 1]}</span> : null} */}
            </Flex>
            <Form.Item>
              <TextArea
                placeholder="Tell us how can ưe improve better!"
                // onChange={(e) => setComponentDisabled(e.target.checked)}
                // disabled
                rows={4}
                style={{ width: "400px", height: "140px" }}
                allowClear
                showCount
                maxLength={300}
              />
            </Form.Item>
          </Form>
        </ProductsWrapper>

        <OrderInfo>
          <Row>
            <InfoTitle>Payment method</InfoTitle>
            <img
              className="payment-method"
              src={paymentMethod}
              alt="Payment method"
            />
          </Row>
          <Column>
            <InfoText>Discount: {formatPrice(discount)}</InfoText>
            <InfoText>VAT: {formatPrice(vat)}</InfoText>
            <InfoText>
              Shipping: {shippingFee ? formatPrice(shippingFee) : "Free"}
            </InfoText>
            <br />
            <InfoText style={{ color: "red" }}>
              Total: {calculateTotal()}
            </InfoText>
          </Column>
        </OrderInfo>
        <EditButton>Comfirm</EditButton>
      </Container>
    </MainContainer>
  );
};

const App: React.FC = () => {
  return <OrderDetail />;
};

export default App;

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
