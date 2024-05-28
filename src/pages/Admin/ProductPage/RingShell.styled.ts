import styled from "styled-components";
import { theme } from "../../../themes";


export const ProductAdminArea = styled.section`
// body {
//     margin: 0px 0px 0px 0px;
// }

    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    // height: 100%; 
    width: 100%;
    padding-bottom: 20px;

`;


// /* =============== ORDER ================= */

export const AdminPage = styled.section`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`;



// /* -------------------- ORDER CONTENT =============== */

export const OrderContent = styled.section`
    width: 100%;
    background-color: ${theme.color.fifth};
    border-radius: 16px;
    padding-bottom: 30px;
`;

export const OrderContent_Head = styled.section`
    margin: 39px 40px 30px 40px;

    h2 {
        margin: 0px 0px 0px 0px;
        padding: 39px 0px 27px;
        font-size: 24px;
        color: ${theme.color.primary};
    }
`;

export const OrderContent_HeadTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: ${theme.color.primary};
        color: ${theme.color.forth};
        width: 210px;
        height: 55px;
        border-radius: 16px;
        font-size: 16px;
    }

    button:hover{
        cursor: pointer;
    }

    button .anticon {
        margin-right: 7px;
    }
`;

export const OrderContent_HeadBenefit = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.color.third};
    padding: 20px 60px 20px 60px;
    border-radius: 16px;

    button {
        height: 55px;
        width: 139px;
        background-color: ${theme.color.fifth};
        border-radius: 16px;
        border: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 16px;
        color: ${theme.color.primary};
        font-weight: 600;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    }

    button:hover {
        cursor: pointer;
    }

    button .anticon {
        font-size: 18px;
    }
`;

export const SearchArea = styled.section`
    width: 70%;
    display: inline-flex;
    align-items: center; 

    .searchInput {
        width: 90%;
        font-size: 20px;
        padding-left: 10px;
        background-color: ${theme.color.fifth};
        height: 55px;
        border:none;
        border-radius: 16px 0px 0px 16px;
        padding-right: 20px;
        color:${theme.color.primary};
    }
    .anticon {
        font-size: 23px;
        color: ${theme.color.primary};
        background-color: ${theme.color.fifth};
        height: 55px;
        border: 1px solid ${theme.color.fifth};
        padding: 0px 20px 0px 20px;
        border-radius: 0px 16px 16px 0px;
    }
    .anticon:hover {
        cursor: pointer;
    }
`;

export const Pending_Table = styled.section`
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
    th {
        color: #783232;
        font-size: 20px;
    }
    tr {
        // border-bottom: 1px solid ${theme.color.primary};
    }
    tr .TextAlign{
        text-align: center;
    }
    tr .TextAlign input{
        width: 80px;
    }
    td img {
        width: 77px;
    }
    td input {
        font-size: 16px;
        background-color: ${theme.color.fifth};
        color: ${theme.color.primary};
        padding: 5px;
        border: 1px solid ${theme.color.fifth};
        border-radius: 5px;
        height: 100%;
    }
    td input:active{
        border: none;
    }
    td .anticon {
        font-size: 23px;
    }
    td .anticon:hover {
        cursor: pointer;
    }
    .deleBtn {
        color: red;
    }
    .custom-select .ant-select-selector {
        background-color: ${theme.color.fifth} !important;
        color: ${theme.color.primary} !important;
    }
    
    .custom-select .ant-select-dropdown {
        background-color: ${theme.color.fifth} !important;
        color: ${theme.color.primary} !important;
    }
    
    .custom-select .ant-select-item-option-selected {
        background-color: ${theme.color.fifth} !important;
        color: ${theme.color.primary} !important;
    }
    
`;

export const OrderContent_Foot = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.color.third};
    padding: 12px 60px 12px 60px;
    border-radius: 16px;
    margin: 39px 40px 0px 40px;
`;

export const PageNum = styled.section`
    display: flex;

    p {
        margin: 0px 7px 0px 0px;
        color: #B19F8A;
        font-weight: 500;
    }

    .nowPage {
        color:${theme.color.primary};
    }
`;

export const MovePage = styled.section`
    button {
        width:40px;
        height: 40px;
        background-color: ${theme.color.fifth};
        border-radius: 12px;
        border: none;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
        font-size: 20px;
        display: inline;
        align-items: center;
        text-align: center;
        margin-right: 5px;
        font-size: 15px;
    }
    button:hover {
        cursor: pointer;
    }
    .backArrow .anticon {
        color: #92929D;
    }
    .nextArrow .anticon {
        color:${theme.color.primary};
    }
`;


export const hehe = styled.section`

`;