import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "../../../components/Customer/Checkout/PromoCode";
import { Steps } from "antd";
import AddressDetails from "../../../components/Customer/Checkout/AddressDetails"; 
import { getProvinces, getDistricts, getWards } from "./api";

interface ContactInfoProps {
  email: string;
  onEdit: (newEmail: string) => void;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [provinces, setProvinces] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [districts, setDistricts] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [wards, setWards] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  React.useEffect(() => {
    const fetchProvincesData = async () => {
      try {
        const data = await getProvinces();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvincesData();
  }, []);

  const handleProvinceChange = async (provinceId: number) => {
    setSelectedProvince(provinceId);
    setSelectedDistrict(null); // Reset lại quận/huyện khi thay đổi tỉnh/thành phố
    try {
      const data = await getDistricts(provinceId);
      setDistricts(data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictChange = async (districtId: number) => {
    setSelectedDistrict(districtId);
    try {
      const data = await getWards(districtId);
      setWards(data);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

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
              address=""
              provinces={provinces}
              districts={districts}
              wards={wards}
              selectedProvince={selectedProvince}
              selectedDistrict={selectedDistrict}
              onProvinceChange={handleProvinceChange}
              onDistrictChange={handleDistrictChange}
            />
            {/* <PaymentMethod /> */}
            
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
    max-width: 1000px;
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

const EditTotal = styled.div`
  display: flex;
  word-spacing: 171px;
`;

const EditTotal1 = styled.div`
  word-spacing: 203px;
  font-weight: 600;
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

