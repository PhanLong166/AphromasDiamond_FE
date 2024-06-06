import styled from "styled-components";
import { theme } from "../../../themes";


export const ProductAdminArea = styled.section`
    display: inline-flex;
    background-color: #f1f1f1;
    font-family: "Poppins", sans-serif;
     height: 100%; 
    width: 100%;

`;

export const AdminPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContentPage = styled.div`

`;

export const TitlePage = styled.div `
    h1 {
        font-size: 25px;
        font-weight: 36px;
        color: #151542;
        margin: 30px 0px 0px 0px;
        padding-bottom: 7px;
    }

    p {
        color: #92929D;
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
    padding-bottom: 30px;
`;

export const AdPageContent_Head = styled.div`
    margin: 0px 40px 30px 40px;
    display: flex;
    justify-content: space-between;

    button {
    background-color: ${theme.color.primary};
    color: #ffffff;
    width: 210px;
    height: 55px;
    border-radius: 16px;
    font-size: 16px;
    border: none;
    }

    button:hover {
    cursor: pointer;
    }

    button .anticon {
    margin-right: 7px;
    }
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
        color: #92929D !important;
      }
    tr .TextAlign{
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
`;

export const EndPage = styled.div`
    height: 5px;
    background-color: #f1f1f1;
`;
