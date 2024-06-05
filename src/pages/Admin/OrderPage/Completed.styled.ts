import styled from "styled-components";
import { theme } from "../../../themes";


export const OrderAdminArea = styled.section`
    display: inline-flex;
    background-color: #F1F1F1;
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
    background-color: #FFFFFF;
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
    background-color: #F8F9FB;

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
    padding: 0px 50px 0px 50px;
    color: #151542;

    .TextAlignCenter{
        text-align: center;
    }

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
    tr {
    }
    td .anticon:hover {
        cursor: pointer;
    }
    
`;


export const hehe = styled.div`

`;