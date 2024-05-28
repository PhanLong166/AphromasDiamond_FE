// import * as React from 'react';
import styled from 'styled-components';

const Cart = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <TitlePage>Cart</TitlePage>
          <MainSection>
            <Column>
              <ContinueShopping>Continue Shopping</ContinueShopping>
              <ItemContainer>
                <ActionText>VIEW | REMOVE</ActionText>
                <ItemDetails>
                  <ItemInfo>
                    <ItemType>Diamond (Loose)</ItemType>
                    <ItemImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e18e78db1048a2ef9289b66a8b623840e01a792002a180a5674237669d080a?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Diamond (Loose)" />
                  </ItemInfo>
                  <ItemDescription>
                    <ProductDescription>
                      1.52 Carat F-VS1 Princess Cut Diamond <br />
                      SKU&nbsp;18633320
                    </ProductDescription>
                    <AddOptions>
                      <AddOption>+Add a Ring</AddOption>
                      <AddOption>+Add a Pendant</AddOption>
                    </AddOptions>
                  </ItemDescription>
                  <ItemPrice>$8,000</ItemPrice>
                </ItemDetails>
              </ItemContainer>
              <ItemContainer>
                <ActionText>VIEW | REMOVE</ActionText>
                <ItemDetails>
                  <ItemInfo>
                    <ItemType>Diamond (Loose)</ItemType>
                    <ItemImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/d390c8fca96fc694888a2d3a9cf3c75e05dab916440fcab452b4b3fd6c33b09d?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Diamond (Loose)" />
                  </ItemInfo>
                  <ItemDescription>
                    <ProductDescription>
                      Lab Grown Diamond Low Dome Eternity <br />
                      SKU&nbsp;18633320
                    </ProductDescription>
                    <AddOptions>
                      <AddOption>+Add a Ring</AddOption>
                      <AddOption>+Add a Pendant</AddOption>
                    </AddOptions>
                  </ItemDescription>
                  <ItemPrice>$8,000</ItemPrice>
                </ItemDetails>
              </ItemContainer>
              <ItemContainer>
                <ActionText>VIEW | REMOVE</ActionText>
                <ItemDetails>
                  <ItemInfo>
                    <ItemType>Diamond (Loose)</ItemType>
                    <ItemImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/a527c43f562643fd679d5e3998504cd178bcdecc8dea063d00c126a6644eb790?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Diamond (Loose)" />
                  </ItemInfo>
                  <ItemDescription>
                    <ProductDescription>
                      1.52 Carat F-VS1 Princess Cut Diamond <br />
                      SKU&nbsp;18633320
                    </ProductDescription>
                    <AddOptions>
                      <AddOp>
                        <label>Ring size</label>
                        <select id="ringSize">
                          <option value="4">4</option>
                          <option value="4.5">4.5</option>
                          <option value="5">5</option>
                          <option value="5.5">5.5</option>
                          <option value="6">6</option>
                          <option value="6.5">6.5</option>
                          <option value="7">7</option>
                          <option value="7.5">7.5</option>
                          <option value="8">8</option>
                          <option value="8.5">8.5</option>
                          <option value="9">9</option>
                          <option value="9.5">9.5</option>
                          <option value="10">10</option>
                          <option value="10.5">10.5</option>
                          <option value="11">11</option>
                          <option value="11.5">11.5</option>
                          <option value="12">12</option>
                        </select>
                      </AddOp>
                    </AddOptions>
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
                  <PromoCode>
                    <PromoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0f0a858913ade2024229e06f2a2b2de3377d9aca01b958e1d53f25d9c31bad?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Promo code icon" />
                    <PromoText>Promo Code</PromoText>
                  </PromoCode>
                  <SummaryTotal>
                    <TotalLabel>Total</TotalLabel>
                    <TotalValue>$10,000</TotalValue>
                  </SummaryTotal>
                </SummaryDetails>
                <CheckoutButton>CHECKOUT</CheckoutButton>
                <OrDivider>OR</OrDivider>
                <PaymentMethodImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/4762099b96e0d9911e6dbbff51ed4164d0ebf441a4af10ca789ca321f8ea0dbb?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Credit card icons" />
                <PaymentMethodImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/33c97bbfdfd1027e752ab9f974297feaabc0fea312ba85eead4c91a971711218?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Credit card icons" />
              </SummaryContainer>
            </Sidebar>
          </MainSection>
          <ShippingSection>
            <ShippingIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6933788e6c8896639db19bae2d37194ec1e54bd5cf3292e8cc54f2247afd9959?apiKey=5672b1354002436f9bda9e8bc0a69a3b&" alt="Shipping icon" />
            <ShippingText>Shipping</ShippingText>
            <ShippingDetails>
              Free Shipping Worldwide <br />
              Overnight Shipping
            </ShippingDetails>
          </ShippingSection>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Cart;

const Container = styled.section`
 background-color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 70px 60px;
 @media (max-width: 991px) {
   padding: 0 20px;
 }
`;

const InnerContainer = styled.div`
 width: 100%;
 max-width: 953px;
 display: flex;
 flex-direction: column;
 @media (max-width: 991px) {
   max-width: 100%;
 }
`;

const TitlePage = styled.h1`
 color: #000;
 letter-spacing: 4.9px;
 align-self: center;
 font: 600 35px/150% Poppins, sans-serif;
`;

const MainSection = styled.main`
 margin-top: 50px;
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
`;

const ItemContainer = styled.article`
 background-color: #fff;
 border-radius: 20px;
 box-shadow: 0 4px 4px 7px rgba(0, 0, 0, 0.25);
 border: 1px solid rgba(0, 0, 0, 1);
 display: flex;
 flex-direction: column;
 color: #000;
 padding: 16px 39px;
 margin-top: 20px;
 @media (max-width: 991px) {
   padding: 0 20px;
 }
`;

const ActionText = styled.p`
 letter-spacing: 1.95px;
 align-self: flex-end;
 font: 300 13px/150% Poppins, sans-serif;
`;

const ItemDetails = styled.div`
 display: flex;
 flex-direction: row;
`;

const ItemInfo = styled.div`
 
 align-items: center;
 margin-bottom: 20px;
`;

const ItemType = styled.h2`
 font: 600 15px/150% Poppins, sans-serif;
 margin-left: 13px;
 @media (max-width: 991px) {
   margin-left: 10px;
 }
`;

const ItemImage = styled.img`
 width: 142px;
 aspect-ratio: 1.43;
 object-fit: contain;
 margin-top: 32px;
 align-self: center;
`;

const ItemDescription = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 57px;
 margin-left: 20px;
 @media (max-width: 991px) {
   margin-top: 40px;
 }
`;

const ProductDescription = styled.p`
 letter-spacing: 0.15px;
 font: 400 15px/23px Poppins, sans-serif;
`;

const AddOptions = styled.div`
 display: flex;
 gap: 20px;
 margin-top: 35px;
`;

const AddOption = styled.p`
 font: 300 10px/150% Poppins, sans-serif;
 border-radius: 53px;
 border: 1px dashed rgba(0, 0, 0, 1);
 background-color: #fff;
 padding: 18px 27px;
 @media (max-width: 991px) {
   padding: 0 20px;
 }
`;

const RingPrice = styled.div`
letter-spacing: 0.6px;
    font: 400 10px / 150% Poppins, sans-serif;
    margin-top: 179px;
    margin-left: 106px;
`;

const ItemPrice = styled.p`
 letter-spacing: 0.6px;
 font: 400 10px/150% Poppins, sans-serif;
 margin-top: 179px;
 margin-left: 106px;
 @media (max-width: 991px) {
   margin-top: 40px;
 }
`;
const AddOp = styled.p`
 font: 15px/150% Poppins, sans-serif;
 padding-top: 34px;
`;

const SummaryContainer = styled.div`
 background-color: #fff;
 border: 1px solid rgba(0, 0, 0, 1);
 box-shadow: 0 4px 18px 17px rgba(0, 0, 0, 0.25);
 display: flex;
 flex-direction: column;
 align-items: center;
 font: 300 10px/150% Poppins, sans-serif;
 width: 100%;
 padding: 30px 0 80px;
 margin-top: 31px;
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
 font-family: Poppins, sans-serif;
`;

const SummaryValue = styled.p`
 font-family: Poppins, sans-serif;
`;

const PromoCode = styled.div`
 display: flex;
 align-items: center;
 gap: 4px;
 padding: 18px 0;
 border-top: 1px solid rgba(0, 0, 0, 1);
 border-bottom: 1px solid rgba(0, 0, 0, 1);
 background-color: #fff;
 margin: 56px 0 62px;
 @media (max-width: 991px) {
   margin: 40px 0;
 }
`;

const PromoIcon = styled.img`
 width: 8px;
 aspect-ratio: 0.5;
 object-fit: contain;
`;

const PromoText = styled.p`
 font-family: Poppins, sans-serif;
 flex-grow: 1;
`;

const SummaryTotal = styled.div`
 margin-top: -28px;
 display: flex;
 justify-content: space-between;
 @media (max-width: 991px) {
   margin-top: 40px;
 }
`;

const TotalLabel = styled.p`
 font-family: Poppins, sans-serif;
`;

const TotalValue = styled.p`
 font-family: Poppins, sans-serif;
`;

const CheckoutButton = styled.button`
 background-color: #102c57;
 color: #fff;
 border: 1px solid rgba(0, 0, 0, 1);
 stroke-width: 1;
 stroke: #000;
 white-space: nowrap;
 letter-spacing: 1.82px;
 padding: 22px 27px;
 font: 500 13px Poppins, sans-serif;
 margin-top: 30px;
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
 border: 1px solid rgba(0, 0, 0, 1);
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