import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: string;
  imageUrl: string;
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
  discount: string;
  vat: string;
  shippingFee: string;
  total: string;
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 60px 43px;

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

const sampleOrder: OrderProps = {
  invoiceDate: '14 Dec 2022',
  dueDate: '14 Dec 2022',
  status: 'Pending',
  orderId: '123456',
  name: 'Ha Thi Huyen Trang',
  phone: '0937250913',
  email: 'hthuyentrange@gmail.com',
  address: '123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam',
  products: [
    {
      id: '1',
      name: 'Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond',
      quantity: 1,
      price: '$5,030',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.jpg?alt=media&token=17427822-c905-4e96-a881-25ea17ce2fa7',
    },
    {
      id: '2',
      name: 'Aquamarine Stud Earrings In 14k White Gold (7mm)',
      quantity: 2,
      price: '$4,000',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring1.jpg?alt=media&token=1fd5a503-9856-403a-a250-60ab0f42b372',
    },
  ],
  paymentMethod: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579',
  discount: '$503',
  vat: '$503',
  shippingFee: '$503',
  total: '$9,033',
};

const OrderDetail: React.FC = () => {
  const [order, setOrder] = useState<OrderProps | null>(null);

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
    total,
  } = order;

  const columns: ColumnsType<Product> = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={record.imageUrl} alt={text} style={{ width: '70px', marginRight: '10px' }} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
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
            <InvoiceInfo>Status: {status}</InvoiceInfo>
          </InvoiceDetails>
        </OrderDetailsContainer>
      </OrderWrapper>
      <ProductsWrapper>
        <OrderID>Order ID #{order.orderId}</OrderID>
        <Table style={{backgroundColor: '#e8e8e8'}} columns={columns} dataSource={products} pagination={false} rowKey="id" />
      </ProductsWrapper>
      <OrderInfo>
        <Row>
          <InfoTitle>Payment method</InfoTitle>
          <img className="payment-method" src={paymentMethod} alt="Payment method" />
        </Row>
        <Column>
          <InfoText>Discount: {discount}</InfoText>
          <InfoText>VAT: {vat}</InfoText>
          <InfoText>Shipping Fee: {shippingFee}</InfoText>
          <br/>
          <InfoText style={{color:"red"}}>
              Total: {total}
          </InfoText>
        </Column>
      </OrderInfo>
    </Container>
  );
};

const App: React.FC = () => {
  return <OrderDetail />;
};

export default App;
