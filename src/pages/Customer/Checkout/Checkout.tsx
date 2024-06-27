import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "./PromoCode";
import { Breadcrumb as AntBreadcrumb } from "antd";

interface ContactInfoProps {
  email: string;
  onEdit: (newEmail: string) => void;
}

interface AddressDetailsProps {
  address: string;
  country: string;
}

interface CartItemProps {
  name: string;
  image: string;
  sku: string;
  price: string;
}

interface SummaryProps {
  items: CartItemProps[];
  subtotal: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(email);

  const handEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEdit(currentEmail);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEmail(e.target.value);
  };

  return (
    <Section>
      <TextContact>
        <h2>Contact Information</h2>
        {!isEditing && (
          <Buttons>
            <button style={{ border: "none" }} onClick={handEditClick}>
              EDIT
            </button>
          </Buttons>
        )}
      </TextContact>
      <p>Email address</p>
      {isEditing ? (
        <div>
          <StyledInput
            type="email"
            value={currentEmail}
            onChange={handleEmailChange}
          />
          <SaveButton onClick={handleSaveClick}>SAVE</SaveButton>
        </div>
      ) : (
        <p>{currentEmail}</p>
      )}
    </Section>
  );
};

const AddressDetails: React.FC<AddressDetailsProps> = () => (
  <Section>
    <h2>Shipping & Billing</h2>
    <EditPTag>
      <p>
        Address Delivery
        <span>
          <hr></hr>
        </span>
      </p>
    </EditPTag>
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <StyledInput type="text" id="firstName" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <StyledInput type="text" id="lastName" />
      </InputGroup>
    </InputRow>
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="district">District</StyledLabel>
        <StyledInput type="text" id="phoneNumber" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="address">Address Details</StyledLabel>
        <StyledInput type="text" id="address" />
      </InputGroup>
    </InputRow>

    {/* <label style={{ marginBottom: -15 }} htmlFor="address">Address Details</label> */}
    {/* <StyledInput type="text" id="phoneNumber" /> */}
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <StyledInput type="text" id="phoneNumber" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="city">City</StyledLabel>
        <StyledInput type="text" id="lastName" />
      </InputGroup>
    </InputRow>

    <PaymentMethod />
  </Section>
);

const PaymentMethod: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <PaymentSection>
      <PaymentDropdown
        onChange={handlePaymentChange}
        value={selectedPayment || ""}
      >
        <option value="">
          <h2>Payment Method</h2>
        </option>
        <option value="vnpay">VnPay</option>
        <option value="momo">Momo</option>
      </PaymentDropdown>
      {selectedPayment && (
        <PaymentImage
          src={
            selectedPayment === "vnpay"
              ? "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2Fvnpay.png?alt=media&token=862bf826-5f9f-45d9-807b-a762a7e78506"
              : "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FPayment%20-%20Img%2Fmomo.png?alt=media&token=5bbb0c32-e05b-4a02-8cd8-cee2af079413"
          }
          alt={selectedPayment === "vnpay" ? "VnPay" : "Momo"}
        />
      )}
    </PaymentSection>
  );
};

const CartItem: React.FC<CartItemProps> = ({ name, image, sku, price }) => (
  <CartItemContainer>
    <img src={image} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{sku}</p>
    </div>
    <p>{price}</p>
  </CartItemContainer>
);

const Summary: React.FC<SummaryProps> = ({ items, subtotal }) => (
  <SummarySection>
    <ItemNumber>
      <NumberItem>6 ITEMS</NumberItem>
      <Link to="/cart">
        <p>EDIT CART</p>
      </Link>
    </ItemNumber>
    {items.map((item, index) => (
      <CartItem
        key={index}
        name={item.name}
        image={item.image}
        sku={item.sku}
        price={item.price}
      />
    ))}
    <EditTotal>
      <p>Subtotal: {subtotal}</p>
    </EditTotal>
    <EditTotal>
      <p>Shipping: Free</p>
    </EditTotal>
    <PromoCodeSection />
    <EditTotal1>
      <p>Total: {subtotal}</p>
    </EditTotal1>
  </SummarySection>
);

const Checkout: React.FC = () => {
  const handleEdit = () => {
    console.log("Edit Contact Info");
  };

  return (
    <main>
      <ContainerHeader>
        <Header>Checkout</Header>
      </ContainerHeader>
      <ContainerCrum>
        <CustomBreadcrumb separator="━━━━━━━━━━━━━━━━━━━━━>">
          <AntBreadcrumb.Item>Cart</AntBreadcrumb.Item>
          <AntBreadcrumb.Item>
            <span style={{ color: "black" }}>Checkout</span>
          </AntBreadcrumb.Item>
          <AntBreadcrumb.Item>Payment</AntBreadcrumb.Item>
        </CustomBreadcrumb>
      </ContainerCrum>
      <Wrapper>
        <StyledLink>
          <Link to="/cart">BACK TO CART</Link>
        </StyledLink>
        <Content>
          <Form>
            <ContactInfo email="loclpse171201@fpt.edu.vn" onEdit={handleEdit} />
            <AddressDetails
              address="428 Nguyen Van Ba, Di An, Tp Binh Duong"
              country="VietNam"
            />
          </Form>
          <Summary
            items={[
              {
                name: "Diamond (Loose)",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
                sku: "SKU 18633320",
                price: "$8,000",
              },
              {
                name: "Diamond (Loose)",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
                sku: "SKU 18633320",
                price: "$8,000",
              },
              {
                name: "Diamond (Loose)",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
                sku: "SKU 18633320",
                price: "$8,000",
              },
              {
                name: "Ring Diamond",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.jpg?alt=media&token=17427822-c905-4e96-a881-25ea17ce2fa7",
                sku: "SKU 18633320",
                price: "$8,000",
              },
              {
                name: "Ring Diamond",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
                sku: "SKU 18633320",
                price: "$8,000",
              },
              {
                name: "Diamond (Loose)",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2",
                sku: "SKU 18633320",
                price: "$8,000",
              },
            ]}
            subtotal="$10,000"
          />
        </Content>
        <EditBtn>
          <a href="#" style={{ color: "white" }}>
            Continue
          </a>
        </EditBtn>
      </Wrapper>
    </main>
  );
};

export default Checkout;

const PaymentDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 380px;
  border-radius: 10px;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    border-color: #1677ff;
  }
`;

const ContainerCrum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 0 24px; */
  text-align: center;
  /* font-size: 0.875rem; sm text */
  font-weight: 500; /* medium font weight */
  color: #000000; /* gray-500 */
`;

const CustomBreadcrumb = styled(AntBreadcrumb)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1400px;
  padding: 0 24px;
  text-align: center;
  font-size: 0.875rem; /* sm text */
  font-weight: 500; /* medium font weight */
  color: #6b7280; /* gray-500 */
  margin-bottom: 1rem;

  .ant-breadcrumb-link {
    color: #6b7280; /* primary-700 */
  }

  .ant-breadcrumb-separator {
    margin: 0 8px; /* mx-2 */
    color: #000000; /* gray-200 */
  }

  @media (min-width: 640px) {
    font-size: 18px; /* base text */
  }

  @media (prefers-color-scheme: dark) {
    color: #d1d5db; /* gray-400 in dark mode */

    .ant-breadcrumb-link {
      color: #2563eb; /* primary-500 in dark mode */
    }

    .ant-breadcrumb-separator {
      color: #6b7280; /* gray-500 in dark mode */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  background: #fff;
  width: 1400px;
  color: #818594;
  font: 14px / 150% "Crimson Text", sans-serif;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  padding: 10px 0;
  display: flex;
  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

const ItemNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberItem = styled.div``;

const TextContact = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  margin-top: 57px;
  margin-bottom: 10px;
  width: 1400px;
  font: 250 10px/150% Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 1400px;
  align-items: flex-start;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.section`
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  border: 1px solid #e8e2e2;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 48px 40px;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
    border: 2px solid #e8e2e2;
  }
`;

const SummarySection = styled(Section)`
  flex: 1;
  line-height: 40px;
`;

const Buttons = styled.button`
  font-family: Poppins, sans-serif;
  color: #000;
  border: none;
  background-color: #fff;
  align-self: flex-end;
`;

const SaveButton = styled.button`
  font-family: Poppins, sans-serif;
  color: #000;
  border: none;
  background-color: #fff;
  margin-top: 1.5rem;
  font-size: 15px;
`;

const PaymentImage = styled.img`
  width: 178px;
  object-fit: contain;
  margin-top: 15px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const EditTotal = styled.div`
  display: flex;
  word-spacing: 171px;
`;

const EditTotal1 = styled.div`
  word-spacing: 203px;
`;

const EditBtn = styled.div`
  font-family: Poppins, sans-serif;
  background-color: #102c57;
  color: #fff;
  border-radius: 5px;
  padding: 11px 30px;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 94px;
`;

const EditPTag = styled.p`
  font-weight: bold;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 9px;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid;
  transition: border-color 0.3s, background-color 0.3s;
  &:hover {
    border-color: #1677ff;
  }
  &:focus {
    border-color: #1677ff;
    outline: none;
  }
`;

const PaymentSection = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  padding-top: 18px;
  margin-top: 10px;
  border-bottom: 2px solid #e8e2e2;
  img {
    max-width: 100px;
  }
  div {
    flex: 1;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

// export default Checkout;
