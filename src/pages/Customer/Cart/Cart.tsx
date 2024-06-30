// import * as React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Flex, Select } from "antd";
import PromoCodeSection from "../Checkout/PromoCode";

const Cart = () => {
  return (
    <>
      <main>
        <ContainerHeader>
          <Header>Shopping Cart</Header>
        </ContainerHeader>
        <Container>
          <InnerContainer>
            <ContinueShopping>
              <span>
                <i className="fa-solid fa-chevron-up fa-rotate-270"></i>
              </span>
              <Link to={"/all"}>Continue Shopping</Link>
            </ContinueShopping>
            <CountCart>MY CART 4 ITEMS</CountCart>

            
            <MainSection>
              <Column>
                <ItemContainer>
                  <ActionText>
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </ActionText>
                  <ItemDetails>
                    <ItemInfo>
                      <ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.png?alt=media&token=55aa167f-b20b-482c-b18b-56e5b372219e"
                        alt="Diamond (Loose)"
                      />
                    </ItemInfo>
                    <ItemDescription>
                      <ProductDescription>
                        <ItemType>Diamond (Loose)</ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </ProductDescription>
                      <AddOptions>
                        <AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Ring</Button>
                          </Flex>
                        </AddOption>
                        <AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Pendant</Button>
                          </Flex>
                        </AddOption>
                      </AddOptions>
                    </ItemDescription>
                    <ItemPrice>$8,000</ItemPrice>
                  </ItemDetails>
                </ItemContainer>
                <ItemContainer>
                  <ActionText>
                    {" "}
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </ActionText>
                  <ItemDetails>
                    <ItemInfo>
                      <ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FDiamond%2Fdiamond.jpg?alt=media&token=2ec444c6-4d86-4c57-a126-34e12c6231b2"
                        alt="Diamond (Loose)"
                      />
                    </ItemInfo>
                    <ItemDescription>
                      <ProductDescription>
                        <ItemType>Diamond (Loose)</ItemType>
                        Lab Grown Diamond Low Dome Eternity <br />
                        SKU&nbsp;18633320
                      </ProductDescription>
                      <AddOptions>
                        <AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Ring</Button>
                          </Flex>
                        </AddOption>
                        <AddOption>
                          <Flex gap="small" wrap>
                            <Button type="text">+Add a Pendant</Button>
                          </Flex>
                        </AddOption>
                      </AddOptions>
                    </ItemDescription>
                    <ItemPrice>$8,000</ItemPrice>
                  </ItemDetails>
                </ItemContainer>
                <ItemContainer>
                  <ActionText>
                    {" "}
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </ActionText>
                  <ItemDetails>
                    <ItemInfo>
                      <ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.png?alt=media&token=5933d121-78ec-44c7-ab0a-42e2531b532f"
                        alt="Diamond (Loose)"
                      />
                    </ItemInfo>
                    <ItemDescription>
                      <ProductDescription>
                        <ItemType>Diamond (Loose)</ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </ProductDescription>
                      <Select
                        placeholder="Ring Size"
                        style={{ width: 110 }}
                        options={[
                          { value: "1", label: "4" },
                          { value: "2", label: "4.5" },
                          { value: "3", label: "5" },
                          { value: "4", label: "5.5" },
                          { value: "5", label: "6" },
                          { value: "6", label: "6.5" },
                        ]}
                      />
                    </ItemDescription>
                    <RingPrice>$8,000</RingPrice>
                  </ItemDetails>
                </ItemContainer>
                <ItemContainer>
                  <ActionText>
                    
                    <Flex gap="small" wrap>
                      <Button type="text">VIEW</Button>
                      <Button type="text">REMOVE</Button>
                    </Flex>
                  </ActionText>
                  <ItemDetails>
                    <ItemInfo>
                      <ItemImage
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FCheckout%2FRing%2Fring.png?alt=media&token=5933d121-78ec-44c7-ab0a-42e2531b532f"
                        alt="Diamond (Loose)"
                      />
                    </ItemInfo>
                    <ItemDescription>
                      <ProductDescription>
                        <ItemType>Diamond (Loose)</ItemType>
                        1.52 Carat F-VS1 Princess Cut Diamond <br />
                        SKU&nbsp;18633320
                      </ProductDescription>
                      <Select
                        placeholder="Ring Size"
                        style={{ width: 110 }}
                        options={[
                          { value: "1", label: "4" },
                          { value: "2", label: "4.5" },
                          { value: "3", label: "5" },
                          { value: "4", label: "5.5" },
                          { value: "5", label: "6" },
                          { value: "6", label: "6.5" },
                        ]}
                      />
                    </ItemDescription>
                    <RingPrice>$8,000</RingPrice>
                  </ItemDetails>
                </ItemContainer>
              </Column>
              <Sidebar>
                <SummaryContainer>
                  <SummaryDetails>
                    <SummaryRow>
                      <SummaryLabel>Subtotal</SummaryLabel>
                      <SummaryValue>$10,000</SummaryValue>
                    </SummaryRow>
                    <SummaryRow>
                      <SummaryLabel>Shipping</SummaryLabel>
                      <SummaryValue>Free</SummaryValue>
                    </SummaryRow>
                    {/* <PromoCode>
                    <PromoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0f0a858913ade2024229e06f2a2b2de3377d9aca01b958e1d53f25d9c31bad?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Promo code icon" />
                    <PromoText>Promo Code</PromoText>
                  </PromoCode> */}
                    <PromoCodeSection />
                    <SummaryTotal>
                      <TotalLabel>Total</TotalLabel>
                      <TotalValue>$10,000</TotalValue>
                    </SummaryTotal>
                  </SummaryDetails>
                  <Link to="/checkout">
                    <CheckoutButton>CHECKOUT</CheckoutButton>
                  </Link>
                  <OrDivider>OR</OrDivider>
                  <Link to="/thanks-page">
                    <PaymentMethodImage
                      src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
                      alt="Credit card icons"
                    />
                  </Link>
                  <Link to="thanks-page">
                    <PaymentMethodImage
                      src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Customer%2FOrderDetails%2Fimage%2022.png?alt=media&token=1220c865-58a2-48d2-9112-e52cc3c11579"
                      alt="Credit card icons"
                    />
                  </Link>
                </SummaryContainer>
              </Sidebar>
            </MainSection>
            
            <ShippingSection>
              <ShippingIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6933788e6c8896639db19bae2d37194ec1e54bd5cf3292e8cc54f2247afd9959?apiKey=5672b1354002436f9bda9e8bc0a69a3b&"
                alt="Shipping icon"
              />
              <ShippingText>Shipping</ShippingText>
              <ShippingDetails>
                Free Shipping Worldwide <br />
                Overnight Shipping
              </ShippingDetails>
            </ShippingSection>
          </InnerContainer>
        </Container>
      </main>
    </>
  );
};

export default Cart;

const ContainerHeader = styled.div`
  display: flex;
  align-items: canter;
  justify-content: center;
`;

const Header = styled.header`
  align-items: center;
  background: #fff;
  width: 1400px;
  color: #818594;
  font: 14px / 150% "Crimson Text", sans-serif;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  padding: 10px 0;
  display: flex;
  /* margin: 0 35px 0 35px; */
  margin-bottom: 10rem;
  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

const Container = styled.section`
  background-color: #fff;
  display: flex;
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

// const TitlePage = styled.h1`
//  color: #000;
//  letter-spacing: 4.9px;
//  align-self: center;
//  font: 600 35px/150% Poppins, sans-serif;
//  padding-bottom: 6rem;
// `;

const MainSection = styled.main`
  //  margin-top: 50px;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 40px;
    gap: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 72%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContinueShopping = styled.a`
  color: #000;
  letter-spacing: 1.54px;
  text-decoration: underline;
  font: 250 11px/150% Poppins, sans-serif;
  //  padding-bottom: 1.5rem;
`;

const CountCart = styled.div`
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 25px 0px 0px;
`;

const ItemContainer = styled.article`
  background-color: #fff;
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  //  border: 1px solid rgba(0, 0, 0, 1);
  border: 1px solid rgb(232 226 226);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  color: #000;
  //  padding: 16px 39px;
  margin-top: 20px;
  height: 210px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ActionText = styled.p`
  margin-top: 10px;
  margin-right: 10px;
  letter-spacing: 1.95px;
  align-self: flex-end;
  font: 300 13px/150% Poppins, sans-serif;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const ItemInfo = styled.div`
  align-items: center;
  //  margin-bottom: 20px;
`;

const ItemType = styled.h2`
  font: 600 15px/150% Poppins, sans-serif;
  padding-bottom: 10px;
  //  margin-left: 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const ItemImage = styled.img`
  width: 192px;
  height: 153px;
  aspect-ratio: 1.43;
  object-fit: contain;
  align-self: center;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  //  margin-top: 57px;
  //  margin-left: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductDescription = styled.p`
  letter-spacing: 0.15px;
  font: 400 15px/1.5 Poppins, sans-serif;
`;

const AddOptions = styled.div`
  display: flex;
  gap: 20px;
  //  margin-top: 35px;
`;

const AddOption = styled.button`
  font: 300 10px/150% Poppins, sans-serif;
  border-radius: 53px;
  border: 1px dashed rgba(0, 0, 0, 1);
  padding: 0px 15px;

  &:hover {
    color: #fff;
    background-color: #102c57;
  }

  &.active {
    font-weight: 600;
    color: #fff;
    background-color: #102c57;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const RingPrice = styled.div`
  letter-spacing: 0.6px;
  font: 400 15px / 150% Poppins, sans-serif;
  // margin-top: 196px;
  margin-left: 106px;
`;

const ItemPrice = styled.p`
  letter-spacing: 0.6px;
  font: 400 15px/150% Poppins, sans-serif;
  //  margin-top: 196px;
  margin-left: 106px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SummaryContainer = styled.div`
  //  background-color: #fff;
  //  border: 1px solid rgba(0, 0, 0, 1);
  //  box-shadow: rgba(51, 59, 69, 0.15) 0px 0px 40px;
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  border: 1px solid rgb(232 226 226);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 300 14px/150% Poppins, sans-serif;
  width: 100%;
  padding: 30px 0 80px;
  margin-top: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SummaryDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const SummaryRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  white-space: nowrap;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

const SummaryLabel = styled.p`
  font: 400 15px / 150% Poppins, sans-serif;
`;

const SummaryValue = styled.p`
  font: 400 15px / 150% Poppins, sans-serif;
`;

const SummaryTotal = styled.div`
  margin-top: 1rem;
  display: flex;
  font: 400 15px / 150% Poppins, sans-serif;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TotalLabel = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;

const TotalValue = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;

const CheckoutButton = styled.button`
  /* background-color: #000;
 color: #fff;
 border: 1px solid rgba(0, 0, 0, 1);
 stroke-width: 1;
 stroke: #000;
 white-space: nowrap;
 letter-spacing: 1.82px;
 padding: 20px 27px;
 font: 500 13px Poppins, sans-serif; */
  font-size: 15px;
  padding: 20px 27px;
  background-color: #fff9f7;
  color: #151542;
  border: 1px solid #151542;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Gantari", sans-serif;
  font-weight: 600;
  transition: all 0.45s ease;

  margin-top: 30px;
  &:hover {
    color: #fff;
    background-color: #102c57;
    transition: all 0.45s ease;
  }

  &.active {
    font-weight: 600;
    color: #fff;
    background-color: #000;
  }
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: normal;
    padding: 0 20px;
  }
`;

const OrDivider = styled.p`
  font-family: Poppins, sans-serif;
  letter-spacing: 0.4px;
  margin: 20px 0;
  letter-spacing: 2px;
  font-weight: bold;
  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const PaymentMethodImage = styled.img`
  width: 136px;
  object-fit: contain;
  /* border: 1px solid rgba(0, 0, 0, 1); */
  margin-top: 15px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ShippingSection = styled.section`
  display: flex;
  align-items: center;
  gap: 18px;
  font: 500 14px/150% Poppins, sans-serif;
  color: #000;
  white-space: nowrap;
  margin-top: 58px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: normal;
  }
`;

const ShippingIcon = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const ShippingText = styled.h2`
  font-family: Poppins, sans-serif;
`;

const ShippingDetails = styled.p`
  color: #000;
  letter-spacing: 0.14px;
  margin: 12px 0 0 35px;
  font: 300 14px/21px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;
