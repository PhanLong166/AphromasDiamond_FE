import styled from "styled-components";
import { theme } from "../../../themes";

export const OrderAdminArea = styled.section`
    display: inline-flex;
    background-color: #f1f1f1;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;
`;

export const AdminPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
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

export const OrderContent_Head = styled.div`
    margin: 0px 40px 30px 40px;
`;

export const SearchArea = styled.div`
    width: 30%;
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

export const Pending_Table = styled.div`
    padding: 0px 50px 0px 50px;
    color: #151542;
    // .TextAlign {
    //     text-align: center;
    // }

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
    
    td .anticon:hover {
        cursor: pointer;
    }
    .pendStatus {
        background-color: #d2eeff;
        border-radius: 100px;
        padding: 5px 10px 5px 10px;
        font-size: 12px;
        color: ${theme.color.primary};
        border: none;
    }
    .confirmBtn {
        background-color: #CD486B;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
        /* font-size: 12px; */
        color: #F8E7EE;
        border: none;
        cursor: pointer;
    }
    .confirmBtn:hover {
        color: #CD486B;
        background-color: #F8E7EE;
    }
`;

// export const OrderContent_Foot = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: ${theme.color.third};
//   padding: 12px 60px 12px 60px;
//   border-radius: 16px;
//   margin: 39px 40px 0px 40px;
// `;

// export const PageNum = styled.div`
//   display: flex;

//   p {
//     margin: 0px 7px 0px 0px;
//     color: #b19f8a;
//     font-weight: 500;
//   }

//   .nowPage {
//     color: ${theme.color.primary};
//   }
// `;

// export const MovePage = styled.div`
//   button {
//     width: 40px;
//     height: 40px;
//     background-color: ${theme.color.fifth};
//     border-radius: 12px;
//     border: none;
//     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
//     font-size: 20px;
//     display: inline;
//     align-items: center;
//     text-align: center;
//     margin-right: 5px;
//     font-size: 15px;
//   }
//   button:hover {
//     cursor: pointer;
//   }
//   .backArrow .anticon {
//     color: #92929d;
//   }
//   .nextArrow .anticon {
//     color: ${theme.color.primary};
//   }
// `;

export const hehe = styled.div``;
