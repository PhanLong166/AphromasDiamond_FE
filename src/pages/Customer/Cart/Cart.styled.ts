import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: canter;
  justify-content: center;
`;

export const Header = styled.header`
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
  margin-bottom: 1.5rem;
  @media (max-width: 991px) {
    padding: 0 20px 0 30px;
    margin-top: 40px;
  }
`;

export const Container = styled.section`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

// export const TitlePage = styled.h1`
//  color: #000;
//  letter-spacing: 4.9px;
//  align-self: center;
//  font: 600 35px/150% Poppins, sans-serif;
//  padding-bottom: 6rem;
// `;

export const MainSection = styled.main`
  //  margin-top: 50px;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 40px;
    gap: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 72%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ContinueShopping = styled.a`
  color: #000;
  letter-spacing: 1.54px;
  text-decoration: underline;
  font: 250 11px/150% Poppins, sans-serif;
  //  padding-bottom: 1.5rem;
`;

export const CountCart = styled.div`
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 25px 0px 0px;
`;

export const ItemContainer = styled.article`
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

export const ActionText = styled.p`
  margin-top: 10px;
  margin-right: 10px;
  letter-spacing: 1.95px;
  align-self: flex-end;
  font: 300 13px/150% Poppins, sans-serif;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const ItemInfo = styled.div`
  align-items: center;
  //  margin-bottom: 20px;
`;

export const ItemType = styled.h2`
  font: 600 15px/150% Poppins, sans-serif;
  padding-bottom: 10px;
  //  margin-left: 13px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const ItemImage = styled.img`
  width: 192px;
  height: 153px;
  aspect-ratio: 1.43;
  object-fit: contain;
  align-self: center;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ProductDescription = styled.p`
  letter-spacing: 0.15px;
  font: 400 15px/1.5 Poppins, sans-serif;
`;

export const AddOptions = styled.div`
  display: flex;
  gap: 20px;
  //  margin-top: 35px;
`;

export const AddOption = styled.button`
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

export const RingPrice = styled.div`
  letter-spacing: 0.6px;
  font: 400 15px / 150% Poppins, sans-serif;
  // margin-top: 196px;
  margin-left: 106px;
`;

export const ItemPrice = styled.p`
  letter-spacing: 0.6px;
  font: 400 15px/150% Poppins, sans-serif;
  //  margin-top: 196px;
  margin-left: 106px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const SummaryContainer = styled.div`
 
  box-shadow: rgba(27, 27, 27, 0.17) 0px 2px 5px;
  border: 1px solid rgb(232 226 226);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 300 14px/150% Poppins, sans-serif;
  width: 100%;
  padding: 18px 0 80px;
  margin-top: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const SummaryDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  line-height: 53px;
`;

export const SummaryRow = styled.div`
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

export const SummaryLabel = styled.p`
  font: 400 15px / 150% Poppins, sans-serif;
`;

export const SummaryValue = styled.p`
  font: 400 15px / 150% Poppins, sans-serif;
`;

export const SummaryTotal = styled.div`
  margin-top: 1rem;
  display: flex;
  font: 400 15px / 150% Poppins, sans-serif;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const TotalLabel = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;

export const TotalValue = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;

export const AppliedPromo = styled.div`
margin-bottom: 30px;
display: flex;
justify-content: space-between;
font: 400 15px / 150% Poppins, sans-serif;
`;
export const AppliedPromoValuve = styled.div`
font: 400 15px / 150% Poppins, sans-serif;
`;

export const CheckoutButton = styled.button`
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

export const OrDivider = styled.p`
  font-family: Poppins, sans-serif;
  letter-spacing: 0.4px;
  margin: 20px 0;
  letter-spacing: 2px;
  font-weight: bold;
  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

export const PaymentMethodImage = styled.img`
  width: 136px;
  object-fit: contain;
  /* border: 1px solid rgba(0, 0, 0, 1); */
  margin-top: 15px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ShippingSection = styled.section`
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

export const ShippingIcon = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: contain;
`;

export const ShippingText = styled.h2`
  font-family: Poppins, sans-serif;
`;

export const ShippingDetails = styled.p`
  color: #000;
  letter-spacing: 0.14px;
  margin: 12px 0 0 35px;
  font: 300 14px/21px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;