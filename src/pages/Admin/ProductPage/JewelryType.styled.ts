import styled from "styled-components";
import { theme } from "../../../themes";
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

export const ProductAdminArea = styled.section`
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

export const AdPageContent = styled.div`
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
    color: #151542;
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
    color: #151542;
    background-color: #f8f9fb;
    height: 45px;
  }

  .searchInput:focus {
  }
`;

export const AddButton = styled.div`
  button {
    background-color: ${theme.color.primary};
    color: #ffffff;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    font-size: 12px;
    border: 1px solid ${theme.color.primary};
    padding: 10px 15px 10px 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  button:hover {
    transition: all 0.4s;
    background-color: #ffffff;
    color: ${theme.color.primary};
    border: 1px solid ${theme.color.primary};
  }

  button .anticon {
    margin-right: 7px;
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
    padding: 8px 0px 8px 0px;
    text-align: left;
    font-size: 16px;
    color: ${theme.color.primary};
    border: none;
  }
  tr th {
    font-size: 13px;
    color: #92929d !important;
  }
  tr .TextAlign {
    text-align: center;
  }
  td img {
    width: 77px;
  }
  td input {
    font-size: 16px;
    color: ${theme.color.primary};
    padding: 5px;
    border-radius: 5px;
    height: 100%;
  }
  td input:active {
    border: none;
  }
  

  // --------------------------

  .AdPageContent_Content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    label {
      color: #727272;
      // font-size: 16px;
      font-weight: 500;
    }
  }
`;



// ------------------------- ADD AREA

export const AddContent_Title = styled.div`
width: 100%;
  background-color: #ffffff;
  color: ${theme.color.primary};
  padding: 0px 0px 0px 0px;
  font-weight: 600;
  font-size: 18px;
`;

export const FormItem = styled.div`
  width: 100%;
  height: 57px;
  margin-bottom: 30px;
  

  .formItem {
    width: 100%;
  }
`;

export const FormDescript = styled.div`
  width: 100%;
  textarea {
    height: 149px;
  }
`;

export const UploadFile = styled.div`
width: 48%;
`;


export const ActionBtn = styled.div`
  margin-top: 25px;

  button {
    border: 1px solid ${theme.color.primary};
  }

  .MainBtn {
    background-color: ${theme.color.primary};
    border: 0px;
  }

`;