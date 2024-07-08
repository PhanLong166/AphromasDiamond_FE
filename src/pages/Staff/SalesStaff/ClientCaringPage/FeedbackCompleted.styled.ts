import styled from "styled-components";
// import { theme } from "../../../themes";
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

export const FeedbackArea = styled.section`
  display: inline-flex;
  background-color: #f1f1f1;
  font-family: "Poppins", sans-serif;
  width: 100%;

  .custom-dropdown .ant-dropdown-menu {
    background-color: red; /* Màu nền */
    border: 1px solid #ccc; /* Viền */
  }
`;

export const SaleStaffPage = styled.div`
  margin-left: 270px;
  margin-right: 35px;
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
`;

// /* -------------------- CONTENT =============== */

export const FeedbackContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding-top: 25px;
  padding-bottom: 30px;
`;

export const FeedbackContent_Head = styled.div`
  margin: 0px 40px 30px 40px;
`;

export const SearchArea = styled.div`
  width: 301px;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(203, 210, 220, 0.5);
  border-radius: 16px;
  color: #151542;
  background-color: #f8f9fb;

  .searchInputContainer {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    width: calc(100% - 46px);
  }
  .searchIcon {
    margin: 0px 10px 0px 10px;
  }
  .searchInput {
    border: none;
    outline: none;
    flex-grow: 1;
    // font-size: 16px;
    background-color: #f8f9fb;
    padding: 0px;
  }
  .filterIcon {
    font-size: 20px;
    margin-left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: center;
  }
`;

export const Confirm_Table = styled.div`
  padding: 0px 50px 0px 50px;
  color: #151542;

  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: 8px 0px 8px 0px;
    text-align: left;
    font-size: 16px;
    color: #151542;
  }
  tr th {
    font-size: 13px;
    color: #92929d !important;
  }
  tr .TextAlign {
    text-align: center;
  }
  td .anticon:hover {
    cursor: pointer;
  }
  .to-column {
    background-color: #f1f1f1;
    padding: 5px 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    border: 1px solid #151542;
    cursor: pointer;
  }

  .view-link {
    color: #151542;
    font-weight: 400;
  }

  .to-column:hover {
    background-color: #ffffff;

    .view-link:hover {
      color: #151542;
    }
  }
`;
