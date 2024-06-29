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

export const TitlePage = styled.div `
    h1 {
        font-size: 22px;
        font-weight: 36px;
        color: #151542;
        margin: 30px 0px 0px 0px;
        padding-bottom: 7px;
    }

    p {
        color: #92929D;
        font-size: 13px;
        margin: 0px 0px 0px 0px;
    }
`;

export const PageContent = styled.div`
  width: 100%;
  border-radius: 16px;
  margin-top: 28px;
  padding-bottom: 30px;
`;

// /* -------------------- TOP DETAIL =============== */

export const PageContent_Top = styled.div`
  width: 100%;
  background-color: #ffffff;
  color: ${theme.color.primary};
  border-radius: 16px;
  padding: 25px 40px 20px 40px;
  height: 230px;
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

export const OrderInfor = styled.div`
  width: 30%;
  font-size: 14px;
  padding: 10px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const OrderDate = styled.div`
  display: flex;
  justify-content: space-between;

  .orderDate {
    font-weight: 600;
  }
`;
export const OrderStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomerInfor_Container = styled.div`
  width: 60%;
  //   font-size: 14px;
  display: flex;
  justify-content: flex-end;
`;
export const CustomerInfor = styled.div`
  //   width: 60%;

  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: end;
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
  border-top: 1px solid #D9D9D9;

  p{
    font-size: 15px;
    font-weight: 600;
  }

  .totalAmount {
    color: #56BA6C;
  }
`;

export const ActionBtn = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const ActionBtn_Left = styled.div`
  margin-top: 25px;

  button {
    border: 1px solid ${theme.color.primary};
  }

  .MainBtn {
    background-color: ${theme.color.primary};
    color: #ffffff;
    border: 0px;
  }

`;

export const ActionBtn_Right = styled.div`
  .DeleteBtn {
    background-color: #DE5353;
    color: #ffffff;
  }
`;