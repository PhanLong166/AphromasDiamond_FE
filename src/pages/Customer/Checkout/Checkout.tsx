import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Steps } from "antd";
import AddressDetails from "../../../components/Customer/Checkout/AddressDetails"; 
import { getProvinces, getDistricts, getWards } from "./api";
import Summary from "@/components/Customer/Checkout/Summary/Summary";
import { createOrder, OrderAPIProps } from "@/services/orderAPI";
import { showAllOrderLineForAdmin, updateOrderLine } from "@/services/orderLineAPI";

interface ContactInfoProps {
  email: string;
  onEdit: (newEmail: string) => void;
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
            <button style={{ border: "none", cursor: "pointer" }} onClick={handEditClick}>
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

const description = "This is a description";
const Checkout: React.FC = () => {
  // const [form] = Form.useForm();
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

  const onFinish = async (values: any) => {
    try {
      const requestBodyOrder: OrderAPIProps = {
        OrderDate: new Date(),
        CompleteDate: new Date(),
        IsPayed: false,
        CustomerID: 1,
        OrderStatus: "Pending",
        IsActive: true,
        PaymentID: `${values.paymentMethod}`
      }
      
      const responeOrder = await createOrder(requestBodyOrder);
      if (responeOrder.data.statusCode !== 200) throw new Error();

      const getOrderID = responeOrder.data.data.OrderID;
      const getOrderLine = await showAllOrderLineForAdmin();
      getOrderLine.data.data.filter((
        orderLineItem: {
          CustomerID: number, 
          OrderID: number | null, 
          DiamondID: number | null,
          ProductID: number | null,
        }
      ) => orderLineItem.CustomerID === 1 && 
           orderLineItem.OrderID === null &&
           (orderLineItem.DiamondID !== null || orderLineItem.ProductID !== null)
          )
      .map(async (item: any) => {
        const linkOrder = await updateOrderLine(item.OrderLineID, {
          ...item,
          OrderID: getOrderID
        });
        if(linkOrder.data.statusCode !== 200) throw new Error();
      });
      
      if(!updateOrderLine) throw new Error(); 
    } catch (error: any) {
      console.error(error);
    }
  }

  const handleProvinceChange = async (provinceId: unknown ) => {
    setSelectedProvince(provinceId as number);
    setSelectedDistrict(null); // Reset lại quận/huyện khi thay đổi tỉnh/thành phố
    try {
        const data = await getDistricts(provinceId as number);
        setDistricts(data);
    } catch (error) {
        console.error("Error fetching districts:", error);
    }
};

  const handleDistrictChange = async (districtId: unknown) => {
    setSelectedDistrict(districtId as number);
    try {
      const data = await getWards(districtId as number);
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
          <Formm>
            <ContactInfo email="customer1@gmail.com" onEdit={handleEdit} /> 
            <AddressDetails
              onFinish={onFinish}
              provinces={provinces}
              districts={districts}
              wards={wards}
              selectedProvince={selectedProvince}
              selectedDistrict={selectedDistrict}
              onProvinceChange={handleProvinceChange}
              onDistrictChange={handleDistrictChange}
            />
          </Formm>
          <StyledSummary 
          
          ></StyledSummary>
        </Content>
      </Wrapper>  
    </main>
  );
};

export default Checkout;

const StyledSummary = styled(Summary)`
  flex: 1;
  line-height: 40px;
`;

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

const TextContact = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
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

const Formm = styled.div`
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
  padding: 35px 40px;
  font-weight: 400;
  font-size: 16px;
`;

const Buttons = styled.button`
  font-family: Poppins, sans-serif;
  color: #000;
  border: none;
  background-color: #fff;
  align-self: flex-end;
  cursor: pointer;
`;

const SaveButton = styled.button`
  font-family: Poppins, sans-serif;
  color: #000;
  border: none;
  background-color: #fff;
  margin-top: 1.5rem;
  font-size: 15px;
  cursor: pointer;
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


