import * as React from "react";
import styled from "styled-components";

// Define interfaces for component props
interface CustomerInfoProps {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface OrderDateProps {
  label: string;
  date: string;
}

interface ProductProps {
  name: string;
  quantity: number;
  price: string;
}

// Define functional components
const CustomerInfo: React.FC<CustomerInfoProps> = ({ name, phone, email, address }) => (
  <section>
    <h2>Order Detail</h2>
    <p>{name}</p>
    <p>{phone}</p>
    <p>{email}</p>
    <p>{address}</p>
  </section>
);

const OrderDate: React.FC<OrderDateProps> = ({ label, date }) => (
  <p>
    <strong>{label}</strong> {date}
  </p>
);

const Product: React.FC<ProductProps> = ({ name, quantity, price }) => (
  <div>
    <h3>{name}</h3>
    <p>Quantity: {quantity}</p>
    <p>Price: {price}</p>
  </div>
);

const OrderDetails: React.FC = () => (
  <StyledMain>
    <StyledOrderSummary>
      <CustomerInfo 
        name="Ha Thi Huyen Trang"
        phone="0937250913"
        email="hthuyentrange@gmail.com"
        address="123A Hoang Dieu 2, Linh Trung, Thu Duc, Viet Nam"
      />
      <section> 
        <OrderDate label="Invoice Date:" date="14 Dec 2022" />
        <OrderDate label="Due Date:" date="14 Dec 2022" />
        <p><strong>Status:</strong> Pending</p>
      </section>
    </StyledOrderSummary>
    <StyledOrderDetails>
      <Product 
        name="Double Row Diamond Chevron Engagement Ring In 14k (1/3 Ct. Tw.) 1.37 Carat H-VS2 Marquise Cut Diamond"
        quantity={1}
        price="$5,030"
      />
      <Product 
        name="Aquamarine Stud Earrings In 14k White Gold (7mm)"
        quantity={2}
        price="$4,000"
      />
    </StyledOrderDetails>
    <StyledPaymentDetails>
      <h3>Payment method</h3>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f15d5db827a06edb2642c617b295cbe34bad56d50125f851ff4ef998b6b251?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Payment method" />
      <div>
        <p><strong>% discount</strong> $503</p>
        <p><strong>VAT</strong> $503</p>
        <p><strong>Shipping fee</strong> $605</p>
      </div>
      <hr />
      <div>
        <p><strong>Total</strong> $6,838</p>
      </div>
    </StyledPaymentDetails>
    <StyledButton>Click me!</StyledButton>
  </StyledMain>
);

// Styled components
const StyledMain = styled.main`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 60px 43px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StyledOrderSummary = styled.section`
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  margin-top: 184px;
  width: 100%;
  max-width: 1070px;
  gap: 20px;
  color: var(--Color-2, #151542);
  justify-content: space-between;
  padding: 46px 48px 76px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const StyledOrderDetails = styled.section`
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  width: 100%;
  max-width: 1070px;
  padding: 46px 0;
  flex-direction: column;
  margin-top: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledPaymentDetails = styled.section`
  align-self: center;
  display: flex;
  margin-top: 63px;
  width: 100%;
  max-width: 1042px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
  
  img {
    aspect-ratio: 1.1;
    object-fit: auto;
    object-position: center;
    width: 125px;
    margin-top: 22px;
    max-width: 100%;
  }
  
  hr {
    border-color: rgba(217, 217, 217, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #d9d9d9;
    margin-top: 25px;
    height: 1px;
  }

  p {
    display: flex;
    gap: 20px;
    font-size: 18px;
    color: var(--Color-2, #151542);
    font-weight: 400;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

const StyledButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  appearance: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 15px 25px;
`;

export default OrderDetails;
