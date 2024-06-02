import styled from "styled-components";
import { theme } from "../../../themes";



export const TitlePage = styled.div `
    h1 {
        font-size: 22px;
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


// /* -------------------- ORDER CATALOG =============== */


export const OrderCatalog = styled.div `
    height: 64px;
    background-color: #FFFFFF;
    border-radius: 16px;
    display: flex;
    color: #151542;
    padding-left: 40px;
    margin-top: 21px;
    width: 100%;
`;

export const OrderCatalog_Ele = styled.div `
    margin-right: 50px;

    &.active h3{
        color: #151542;
    }

    &:hover {
        cursor: pointer;
    }

    h3 {
        margin: 18px 0px 0px 0px;
        font-size: 17px;
        color: #92929D;
    }

    .adMenu_active-line {
        background-color: #151542;
        border-radius: 0px 0px 16px 16px;
        height: fit-content;
        height: 4px;
    }

    .adMenu_line {
        background-color: #FFFFFF;
        border-radius: 0px 0px 16px 16px;
        height: fit-content;
        height: 4px;
    }
`;
