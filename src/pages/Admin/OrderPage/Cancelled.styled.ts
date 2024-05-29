import styled from "styled-components";
import { theme } from "../../../themes";


export const OrderAdminArea = styled.section`
// body {
//     margin: 0px 0px 0px 0px;
// }

    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;
    padding-bottom: 20px;

`;


// /* =============== ORDER ================= */

export const AdminPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`;



// /* -------------------- ORDER CONTENT =============== */

export const OrderContent = styled.div`
    width: 100%;
    background-color: ${theme.color.fifth};
    border-radius: 16px;
    padding-bottom: 30px;
`;

export const OrderContent_Head = styled.div`
    margin: 39px 40px 30px 40px;

    h2 {
        margin: 0px 0px 0px 0px;
        padding: 39px 0px 27px;
        font-size: 24px;
        color: ${theme.color.primary};
    }
`;

export const OrderContent_HeadBenefit = styled.div`
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

export const SearchArea = styled.div`
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

export const Pending_Table = styled.div`
    padding: 0px 50px 0px 50px;
    text-align: center;

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
    .pendStatus {
        background-color: #D9D9D9;
        border-radius: 100px;
        padding: 5px 10px 5px 10px;
        font-size: 12px;
        color: black;
        border: none;
    }
    .confirmBtn {
        background-color: #B7751E;
        border-radius: 100px;
        /* font-size: 12px; */
        color: #F9F2B2;
        border: none;
        padding: 7px 17px 7px 17px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    }
    .confirmBtn:hover {
        cursor: pointer;
    }
`;

export const OrderContent_Foot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.color.third};
    padding: 12px 60px 12px 60px;
    border-radius: 16px;
    margin: 39px 40px 0px 40px;
`;

export const PageNum = styled.div`
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

export const MovePage = styled.div`
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


export const hehe = styled.div`

`;