import styled from "styled-components";
import { theme } from "@/themes";
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
  width: 90%;
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

  display: flex;
  align-items: center;
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
  padding: 0px 50px 0px 50px;
  color: ${theme.color.primary};

  td {
    padding: 8px;
    text-align: left;
    font-size: 16px;
    color: ${theme.color.primary};
  }
  th {
    color: #783232;
    font-size: 20px;
  }
  tr th {
    font-size: 13px;
    color: #92929d !important;
  }
  td .anticon:hover {
    cursor: pointer;
  }
  tr .TextAlign {
    text-align: center;
  }
`;

export const hehe = styled.div``;
