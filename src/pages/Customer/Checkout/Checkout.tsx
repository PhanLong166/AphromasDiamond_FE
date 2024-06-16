import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import PromoCodeSection from "./PromoCode";

interface ContactInfoProps {
  email: string;
  onEdit: (newEmail: string) => void;
}

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
  const [ IsEditing, setIsEditing ] =  useState(false);
  const [ currentEmail, setCurrenEmail] = useState(email);
  
  const handEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEdit(currentEmail);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrenEmail(e.target.value);
  };
  return (
  <Section>
   
    <TextContact>
      <h2>Contact Information</h2>
      {!IsEditing && (

      <Buttons onClick={handEditClick}>
        <button style={{ backgroundColor: "white", border: "none", fontSize: 13, paddingTop: 23 }}>EDIT</button>
         </Buttons>
         )} 
       </TextContact>
    <p>Email address</p>
    {IsEditing ? (
      <div>
        <StyledInputt type ="email" value={currentEmail} onChange={handleEmailChange} />
        <SaveButton onClick={handleSaveClick}>SAVE</SaveButton>
      </div>
    ) : (
          <p>{currentEmail}</p>
    
    )}
    {/* <p>{email}</p> */}


  </Section>
  
)};

const AddressDetails: React.FC<AddressDetailsProps> = () => (
  <Section>
    <h2>Shipping & Billing</h2>
    <EditPTag><p>Address Delivery<span><hr></hr></span></p></EditPTag>
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        {/* <Input  placeholder="Basic usage" /> */}
        <StyledInputt type="text" id="firstName" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        {/* <Input  placeholder="Basic usage" /> */}
        <StyledInputt type="text" id="lastName" />
      </InputGroup>
    </InputRow>
    {/* <label style={{marginBottom: -15}} htmlFor="country">Country</label> */}
    {/* <Country>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b114f2edfa3b31c61ea104edda326263461457a90784dc66d09c3575872d199?apiKey=5672b1354002436f9bda9e8bc0a69a3b&"
        alt="Country Flag"
      />
      <span>{country}</span>
    </Country> */}
    <label style={{marginBottom: -15}} htmlFor="address">Address Details</label>
    <StyledInputt type="text" id="phoneNumber" />
     
    {/* <Button><Checkbox onChange={onChange}>Fill auto</Checkbox></Button> */}
    <InputRow>
      <InputGroup>
        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <StyledInputt type="text" id="phoneNumber" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="lastName">City</StyledLabel>
        <StyledInputt type="text" id="lastName" />
      </InputGroup>
    </InputRow>
    <PaymentMethod />
  </Section>
);

const PaymentMethod: React.FC = () => (
  <PaymentSection>
    <h2>Payment Method</h2>
    <ImagesContainer>
      <Link to="/thanks-page">
      <PaymentImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf80dd34693b8ee36689f6cdbf9c8af4d9dd7c2416ceab835ab7d256a0a98cc2?apiKey=5672b1354002436f9bda9e8bc0a69a3b&"
        alt="Credit Card"
      />
      </Link>
      <Link to="/thanks-page">
      <PaymentImage
      
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7dfd775276b304c961268c7106f9586aecbb972a877c1150bdab755dcaa79a2?apiKey=5672b1354002436f9bda9e8bc0a69a3b&"
        alt="PayPal"
      />
      </Link>
    </ImagesContainer>
  </PaymentSection>
);

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
    <ItemNumner>
    <NumberItem>6 ITEMS</NumberItem>
    <Link to="/cart">
    <p style={{ textAlign: "end", fontSize: 13, marginTop: 4, fontFamily: "Arial" }} >EDIT CART</p>
    </Link>
    </ItemNumner>
   
    {items.map((item, index) => (
      <CartItem
        key={index}
        name={item.name}
        image={item.image}
        sku={item.sku}
        price={item.price}

      />
      
    ))}

    <EditTotal><p>Subtotal: {subtotal}</p></EditTotal>
    <EditTotal> <p>Shipping: Free</p> </EditTotal>

    {/* <PromoCoder>
      <PromoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0f0a858913ade2024229e06f2a2b2de3377d9aca01b958e1d53f25d9c31bad?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Promo code icon" />
      <PromoText>
        
     
          <DropdownButton  buttonText="Promo Code " menuItems={menuItems1} />
        
        </PromoText>
    </PromoCoder> */}
    <PromoCodeSection/>
    <EditTotal1><p>Total: {subtotal}</p></EditTotal1>
  </SummarySection>
);

const Checkout: React.FC = () => {
  const handleEdit = () => {
    console.log("Edit Contact Info");

    
  };
  return (
    <Wrapper>
      <Title>CHECKOUT</Title>
      <StyledLink ><Link to="/CART">BACK TO CART</Link></StyledLink>
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
                "https://cdn.builder.io/api/v1/image/assets/TEMP/84a10ded0026738374c5ce3ea45beb7c6a27b1c8b2102a1de3bad81e015677bf?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            {
              name: "Diamond (Loose)",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/96a1be60136e9f026ded141f492c74752cb83069bdf72ad95a9fabb5b8f35a41?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            {
              name: "Diamond (Loose)",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/96a1be60136e9f026ded141f492c74752cb83069bdf72ad95a9fabb5b8f35a41?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            {
              name: "Diamond (Loose)",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/84a10ded0026738374c5ce3ea45beb7c6a27b1c8b2102a1de3bad81e015677bf?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            {
              name: "Diamond (Loose)",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/84a10ded0026738374c5ce3ea45beb7c6a27b1c8b2102a1de3bad81e015677bf?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            {
              name: "Diamond (Loose)",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/84a10ded0026738374c5ce3ea45beb7c6a27b1c8b2102a1de3bad81e015677bf?apiKey=5672b1354002436f9bda9e8bc0a69a3b&",
              sku: "SKU 18633320",
              price: "$8,000",
            },
            
          ]}
          subtotal="$10,000"
        />
       
      </Content>
      
      <Editbtn><a style={{ color: "white" }} href="#" >Continue</a> </Editbtn>
    </Wrapper>

  );
};


export default Checkout;


const ItemNumner = styled.div`
display: flex;
justify-content: space-between;
`;

const  NumberItem = styled.div`
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
  padding: 73px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  color: #000;
  font: 600 45px/150% Poppins, sans-serif;
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  margin-top: 57px;
  margin-bottom: 10px;
  // margin-right: 1276px;
  width: 86%;
  font: 250 10px/150% Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 86%;
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
    border: 1px solid rgb(232 226 226);
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 48px 40px;
  font-weight: 400;
  font-size: 16px;
  /* box-shadow: 0px 4px 18px #999797; */
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  &:hover{
   box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
    border: 3px solid rgb(232 226 226);
  }
`;

const SummarySection = styled(Section)`
  flex: 1;
  line-height:40px;
  
`;


const Buttons = styled.button`
  font-family: Poppins, sans-serif;
  color: #000;
  border: none;
  background-color: #fff;
  align-self: flex-end;
  margin-top: -44px;
  
`;

const SaveButton = styled.div`
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
const Editbtn = styled.div`
font-family: Poppins, sans-serif;
    background-color: #102C57;
    color: #fff;
    border-radius: 5px;
    padding: 11px 30px;
    align-self: flex-end;
    margin-top: 25px;
    margin-right: 94px;

`;

const ImagesContainer = styled.div`
  display: flex; 
  gap: 10px; 
  justify-content: space-between;
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
// const StyledLabell = styled.label`
// margin-bottom: 5px`;


const StyledInputt = styled.input`
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
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  padding-top: 18px;
  margin-top: 10px;
  border-bottom: 2px solid rgb(232 226 226);
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
