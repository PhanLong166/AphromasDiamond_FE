import { theme } from "@/themes";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
  }
`;

export const OrderAdminArea = styled.section`
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

// /* -------------------- CONTENT =============== */

export const OrderContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding-top: 25px;
  padding-bottom: 30px;
`;

export const AdPageContent_Head = styled.div`
  margin: 0px 40px 30px 40px;
  display: flex;
  justify-content: space-between;
`;

export const SearchArea = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  //
  border-radius: 16px;

  .searchInputContainer {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    width: calc(100% - 46px); // Adjust width to fit the layout
  }
  .searchIcon {
    margin: 0px 10px 0px 10px;
    color: ${theme.color.primary};
  }
  .searchInput {
    border: none;
    outline: none;
    flex-grow: 1;
    // font-size: 16px;
    background-color: #f8f9fb;
    padding: 0px;
    border-radius: 10px;
    padding: 4px 8px;
    border: 1px solid rgba(203, 210, 220, 0.5);
    color: ${theme.color.primary};
    background-color: #f8f9fb;
    height: 45px;
  }

  .searchInput:focus {
  }
`;

export const AdminTable = styled.div`
  padding: 0px 40px 0px 40px;

  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    font-size: 16px;
    color: ${theme.color.primary};
  }
  td {
    width: fit-content;
  }
  tr .TextAlign {
    text-align: center;
  }
  tr th {
    font-size: 15px;
    color: #92929d !important;
  }
  tr .TextAlign {
    text-align: center;
  }
  td .anticon {
    cursor: pointer;
  }
  .confirmBtn {
    background-color: #cd486b;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    color: #f8e7ee;
    border: none;
    cursor: pointer;
  }
  .confirmBtn:hover {
    color: #cd486b;
    background-color: #f8e7ee;
  }
`;

// export const OrderContent_Foot = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background-color: #EADBC8;
//     padding: 12px 60px 12px 60px;
//     border-radius: 16px;
//     margin: 39px 40px 0px 40px;
// `;

// export const PageNum = styled.div`
//     display: flex;

//     p {
//         margin: 0px 7px 0px 0px;
//         color: #B19F8A;
//         font-weight: 500;
//     }

//     .nowPage {
//         color:#102C57;
//     }
// `;

// export const MovePage = styled.div`
//     button {
//         width:40px;
//         height: 40px;
//         background-color: ${theme.color.fifth};
//         border-radius: 12px;
//         border: none;
//         box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
//         font-size: 20px;
//         display: inline;
//         align-items: center;
//         text-align: center;
//         margin-right: 5px;
//         font-size: 15px;
//     }
//     button:hover {
//         cursor: pointer;
//     }
//     .backArrow .anticon {
//         color: #92929D;
//     }
//     .nextArrow .anticon {
//         color:#102C57;
//     }
// `;

export const hehe = styled.div``;
