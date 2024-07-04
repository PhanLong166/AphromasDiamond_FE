import styled from "styled-components";
import { theme } from "../../../../themes";
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
  height: 100%;
  width: 100%;
`;

export const AdminPage = styled.div`
  margin-left: 270px;
  margin-right: 35px;
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentPage = styled.div``;

export const TitlePage = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 36px;
    color: ${theme.color.primary};
    margin: 30px 0px 0px 0px;
    padding-bottom: 7px;
  }

  p {
    color: #92929d;
    font-size: 13px;
    margin: 0px 0px 0px 0px;
  }
`;

// /* -------------------- ORDER CONTENT =============== */

export const AdPageContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding-top: 25px;
  padding-bottom: 20px;
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
  padding: 0px 50px 0px 50px;

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
  }
  tr th {
    font-size: 13px;
    color: #92929d !important;
  }
  tr .TextAlign {
    text-align: center;
  }
  .SmallSize {
    font-size: 16px;
    overflow-wrap: normal !important;
  }
  td img {
    width: 77px;
  }
  td .anticon {
    font-size: 23px;
  }
  td .anticon:hover {
    cursor: pointer;
  }
  .pendStatus {
    background-color: #f8e7ee;
    border-radius: 100px;
    padding: 5px 10px 5px 10px;
    font-size: 12px;
    color: #cd486b;
    border: none;
  }
  .confirmBtn {
    background-color: #cd486b;
    border-radius: 100px;
    padding: 7px 17px 7px 17px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    /* font-size: 12px; */
    color: #f8e7ee;
    border: none;
    cursor: pointer;
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
    background-color: ${theme.color.primary};
  }

  .CancelBtn {
    border: 1px solid ${theme.color.primary};
    background-color: #ffffff;
  }
`;