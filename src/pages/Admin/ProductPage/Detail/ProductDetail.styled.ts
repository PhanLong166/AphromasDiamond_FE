import { theme } from "@/themes";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
  }
`;

export const PageAdminArea = styled.section`
  display: inline-flex;
  background-color: #f1f1f1;
  font-family: "Poppins", sans-serif;
  /* height: 100%; */
  width: 100%;
`;

export const AdminPage = styled.div`
  margin-left: 270px;
  margin-right: 35px;
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
`;

export const TitlePage = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 36px;
    color: #151542;
    margin: 30px 0px 0px 0px;
    padding-bottom: 7px;
  }

  p {
    color: #92929d;
    font-size: 13px;
    margin: 0px 0px 0px 0px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  border-radius: 16px;
  padding-bottom: 30px;
`;

// /* -------------------- TOP DETAIL =============== */

export const PageContent_Top = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: ${theme.color.primary};
  border-radius: 16px;
  margin-top: 28px;
  padding: 25px 40px 20px 40px;
`;

export const PageDetail_Title = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${theme.color.primary};
`;

export const PageDetail_Infor = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;

export const MaterialTable = styled.div`

`;

export const OrderInfor = styled.div`
  width: 30%;
  font-size: 14px;
  padding: 10px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// /* -------------------- MID DETAIL =============== */

export const PageContent_Mid = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding: 25px 40px 20px 40px;
`;

export const ProductImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }

  .GIAExport {
    width: 100%;
  }
`;

export const ProductContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .InforLine_Title {
    // width: 100%;
    display: flex;
    justify-content: space-between;

    label {
    width: 700px;
    }

    input {
      width: 100%;
    }
  }
`;

export const SignaInfor = styled.div`
  border-bottom: 1px solid #dde2e8;
  margin-bottom: 20px;
`;

export const InforLine = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
 .InforLine_Title {
    font-weight: 600;
 }
`;

export const InforLine_Descrip = styled.div`
margin-bottom: 20px;
 .InforLine_Title {
    font-weight: 600;
    margin-bottom: 10px;
 }
width: 100%;
`;


// /* -------------------- BOT DETAIL =============== */

export const PageContent_Bot = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding: 25px 40px 20px 40px;
`;

export const OrderDetail_Infor = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const OrderLine_List = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;
`;

export const OrderLine_ListHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: #92929d;
  margin-top: 15px;
  margin-bottom: 10px;

  .productImg {
    width: 10%;
    text-align: center;
    margin-right: 10px;
  }

  .productName {
    width: 60%;
    margin-right: 10px;
  }

  .productQuant {
    width: 15%;
    text-align: center;
    margin-right: 10px;
  }
  .productPrice {
    width: 15%;
    text-align: center;
  }
`;

export const OrderLine = styled.div`
  color: ${theme.color.primary};
`;
export const ProductElement = styled.div`
  display: flex;
  font-size: 13px;
  margin-bottom: 15px;

  img {
    width: 10%;
  }

  .productImg {
    width: 10%;
    align-items: center;
    margin-right: 10px;
  }

  .productName {
    width: 60%;
    align-content: center;
    margin-right: 10px;
  }

  .productQuant {
    width: 15%;
    text-align: center;
    align-content: center;
    margin-right: 10px;
  }
  .productPrice {
    width: 15%;
    text-align: center;
    align-content: center;
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.color.primary};
  padding-right: 5%;
  padding-top: 20px;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  p {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 15px;
  }

  img {
    width: 100px;
  }
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 30%;
`;

export const OtherCosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid #d9d9d9;

  p {
    font-size: 15px;
    font-weight: 600;
  }

  .totalAmount {
    color: #56ba6c;
  }
`;

export const ActionBtn = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;


`;

export const ActionBtn_Left = styled.div`
  button {
    border: 1px solid ${theme.color.primary};
  }

  .MainBtn {
    background-color: ${theme.color.primary};
    color: #ffffff;
  }
`;

export const ActionBtn_Right = styled.div`
  .DeleteBtn {
    background-color: #DE5353;
    color: #ffffff;
  }
`;




// -----------------------------------------------------

export const ImageContainer = styled.div`
  display: flex;
  // align-items: center;
  width: 50%;
`;

export const OuterThumb = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
  width: 40%;
  margin-right: 20px;
  flex-direction: row-reverse;
`;

export const ThumbnailImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const Item = styled.div`
   width: 100px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img:hover {
    border: solid 1px #b1b1b1;
  }
`;

export const OuterMain = styled.div`
  // margin-bottom: 10px;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-grow: 1;
  // width: 58%;
`;

export const MainImage = styled.div`
  display: flex;
  flex-direction: column;
      align-items: center;

  img {
    width: 80%;
    margin-bottom: 10px;
  }

   .GIAExport {
    width: 20%;

  }
`;

export const ProductMetal = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  .wrap {
    display: flex;
    gap: 10px;
  }
  .metal-button {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 5px 10px;
    &.selected {
      border-color: #000;
    }
  }

  button.white {
    background-color: #d9d9d9;
  }

  button.yellow {
    background-color: #d8a25a;
  }

  button.rose {
    background-color: #f4cfc6;
  }

  button.platinum {
    background-color: #696969;
  }

  button.selected,
  button:hover:not(.selected) {
    box-shadow: inset 0 0 0 4px #fff;
  }
  button[disabled] {
    pointer-events: none; 
    opacity: 0.5; 
  }
`;

