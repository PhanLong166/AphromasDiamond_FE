import styled from "styled-components";
// import { theme } from "../../../themes";


export const FeedbackArea = styled.section`
    display: inline-flex;
    background-color: #F1F1F1;
    font-family: "Poppins", sans-serif;
    width: 100%;

    .custom-dropdown .ant-dropdown-menu {
        background-color: red; /* Màu nền */
        border: 1px solid #ccc; /* Viền */
      }

`;

export const SaleStaffPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
`;



// /* -------------------- CONTENT =============== */

export const FeedbackContent = styled.div`
    width: 100%;
    background-color: #FFFFFF;
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
    background-color: #F8F9FB;

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
    background-color: #F8F9FB;
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
        padding: 8px;
        text-align: left;
        font-size: 16px;
        color: #151542;
    }
    th {
        color: #783232;
        font-size: 20px;
    }
    tr .TextAlign{
        text-align: center;
    }
    td .anticon:hover {
        cursor: pointer;
    }
    .to-column {
        background-color: #B7751E;
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
      }
    
      .view-link {
        color: #F9F2B2;
        font-weight: 400;
      }

      .to-column:hover {
        background-color: #ffffff;
      }

      .view-link:hover {
        color: #B7751E;
      }

      .statuses-column .status-tag {
        background-color: #F9F2B2;
        color: #B7751E;
        padding: 8px 15px;
        border-radius: 10px;
        margin-right: 4px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
        border: 1px solid;
      }
    
     
    
`;
