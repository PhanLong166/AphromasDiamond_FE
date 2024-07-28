import styled from "styled-components";
import Link from "@/components/Link";
import { theme } from "@/themes";


export const OrderAdminArea = styled.table`
    display: inline-flex;
    /* background-color: #F1F1F1; */
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;
    

    .custom-dropdown .ant-dropdown-menu {
        background-color: red; /* Màu nền */
        border: 1px solid #ccc; /* Viền */
        /* overflow-x: auto; */
    /* border-collapse: collapse; */
    ;
      }
      /* @media (max-width: 991px) {
        grid-template-rows: 3fr;
    } */

`;
export const TitlePage = styled.div`
    h1 {
        font-size: 22px;
        font-weight: 36px;
        color: #151542;
        margin: 30px 0px 0px 0px;
        padding-bottom: 7px;
        /* @media (max-width: 991px){
            display: flex;
    justify-content: center;
        } */
        
    }

    p {
        color: #92929D;
        font-size: 13px;
        margin: 0px 0px 0px 0px;
         /* @media (max-width: 991px){
            display: flex;
    justify-content: center;
        } */
    }
   
`;

export const DeliveryStaff = styled.div`
    text-align: right;

    h1 {
        font-size: 22px;
        font-weight: 600;
        color: #151542;
        margin: 30px 0px 0px 0px;
        padding-bottom: 7px;
        text-align: right;
        /* @media (max-width: 991px){
            display: flex;
            justify-content: center;
        } */
        
    }

    p {
        color: #92929D;
        font-size: 13px;
        margin: 0px 0px 0px 0px;
         /* @media (max-width: 991px){
            display: flex;
            justify-content: center;
        } */
    }
`;

export const Logout = styled(Link)`
    
    font-size: 16px;
    font-weight: 300;
    color: ${theme.color.error};

    ::after {
    border-color: ${theme.color.error};
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;



export const AdminPage = styled.div`
    margin-left: 70px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
    @media (max-width: 991px) {
        margin-left: 0;
    }
`;



// /* -------------------- CONTENT =============== */

export const OrderContent = styled.div`
    width: 100%;
    /* background-color: #e0dfdf; */
    border-radius: 16px;
    /* margin-top: 28px; */
    padding-top: 3rem;
    padding-bottom: 5px;
`;

export const OrderContent_Head = styled.div`
    margin: 0px 10px 30px 10px;
`;

export const SearchArea = styled.div`
    // width: 301px; gia tri cu
    width: 100%;
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
    margin-top: 1rem;
    padding: 4px 8px;
    width: calc(100% - 46px); // Adjust width to fit the layout
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

export const Pending_Table = styled.div`
    /* padding: 0px 10px 0px 10px; */
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
    .confirmBtn {
        background-color: #151542;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
        color: #F8E7EE;
        border: none;
        cursor: pointer;
    }
    .confirmBtn:hover {
        color: #CD486B;
        background-color: #F8E7EE;
    }
`;


export const hehe = styled.div`

`;