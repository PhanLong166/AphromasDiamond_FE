import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "./PromoCode";
import { Steps } from "antd";

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
  const [emailError, setEmailError] = useState<string | null>(null);
  const handEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (validateEmail(currentEmail)) {
      setIsEditing(false);
      onEdit(currentEmail);
      setEmailError(null);
    } else {
      setEmailError("Invalid email format or email is empty");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEmail(e.target.value);
    if (emailError) {
      setEmailError(
        validateEmail(e.target.value)
          ? null
          : "Invalid email format or email is empty"
      );
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.trim() !== "";
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
          <SaveButton onClick={handleSaveClick} disabled={!!emailError}>
            SAVE
          </SaveButton>
          {emailError && <ErrorText>{emailError}</ErrorText>}
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
        <StyledLabel htmlFor="city">City</StyledLabel>
        <StyledInput type="text" id="city" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="district">Disctrict</StyledLabel>
        <StyledInput type="text" id="district" />
      </InputGroup>
    </InputRow>
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="address">Address Details</StyledLabel>
        <StyledInput type="text" id="phoneNumber" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <StyledInput type="text" id="phoneNumber" />
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
              ? "https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
              : "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
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

const description = "This is a description";
const Checkout: React.FC = () => {
  const handleEdit = () => {
    console.log("Edit Contact Info");
  };

  return (
    <main>
      <ContainerHeader>
        <Header>Checkout</Header>
      </ContainerHeader>
      <StepEdit>
        <Steps
          className="steps-edit"
          current={1}
          status="wait"
          items={[
            {
              title: "Checkout",
              description,
            },
            {
              title: "Payment",

              description,
            },
            {
              title: "Finish",
              description,
            },
          ]}
        />
      </StepEdit>
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
          <BtnContinue>Continue</BtnContinue>
        </EditBtn>
      </Wrapper>
    </main>
  );
};

export default Checkout;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
`;

const StepEdit = styled.div`
  display: flex;
  justify-content: space-around;
  .steps-edit {
    max-width: 1400px;
  }
`;

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
  margin-bottom: 2rem;
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
  width: 1400px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;
const BtnContinue = styled.button`
  font-size: 15px;
  padding: 10px 27px;
  background-color: #fff;
  border-color: none;
  color: #000;
  border: 1px solid #151542;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Gantari", sans-serif;
  font-weight: 600;
  transition: all 0.45s ease;
  margin-bottom: 1rem;
  &:hover {
    color: #fff;
    background-color: #151542;
    transition: all 0.45s ease;
  }
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
