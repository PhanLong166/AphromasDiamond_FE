import styled from "styled-components";

export const ProductComponent = styled 

export const CartContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 60px 50px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CartContent = styled.section`
  display: flex;
  margin-top: 85px;
  width: 100%;
  max-width: 953px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const CartMain = styled.section`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

 export const SummarySection = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Product = styled.article`
  border-radius: 20px;
  box-shadow: 0 4px 4px 7px rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  background-color: #fff;
  margin-top: 36px;
  padding: 17px 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ProductHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 39px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ProductActions = styled.div`
  letter-spacing: 1.95px;
  align-self: end;
  font: 300 13px 'Poppins', sans-serif;
`;

export const ProductInfo = styled.section`
  display: flex;
  align-items: end;
  gap: 20px;
  justify-content: space-between;
  margin-top: 13px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  line-height: 150%;
`;

export const ProductTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  align-self: start;
  margin-left: 13px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const ProductImage = styled.img`
  aspect-ratio: 1.43;
  object-fit: auto;
  object-position: center;
  width: 142px;
  align-self: center;
  margin-top: 32px;
`;

export const ProductDescription = styled.p`
  letter-spacing: 0.15px;
  font: 400 15px/23px 'Poppins', sans-serif;
`;

export const ProductPrice = styled.p`
  letter-spacing: 0.6px;
  font: 400 10px/150% 'Poppins', sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Summary = styled.section`
  box-shadow: 0 4px 18px 17px rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: #000;
  font-weight: 300;
  line-height: 150%;
  margin: 0 auto;
  padding: 17px 16px 51px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1px;
  gap: 20px;
  margin-top: 20px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const SummaryLabel = styled.p`
  font-family: 'Poppins', sans-serif;
`;

export const SummaryValue = styled.p`
  font-family: 'Poppins', sans-serif;
`;

export const PromoCode = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 0;
  border-top: solid 1px rgba(0, 0, 0, 1);
  border-bottom: solid 1px rgba(0, 0, 0, 1);
`;

export const CheckoutButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border: solid 1px rgba(0, 0, 0, 1);
  background-color: #102c57;
  width: 136px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.4px;
  padding: 16px 36px;
  margin-top: 35px;
`;

export const AlternativePayments = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export interface ProductProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
