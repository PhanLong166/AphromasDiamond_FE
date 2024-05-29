import styled from "styled-components";
import { theme } from "../../../themes";



export const TitlePage = styled.div `
    h1 {
        font-weight: 36px;
        color: ${theme.color.primary};
        margin: 47px 0px 0px 0px;
        padding-bottom: 7px;
    }

    p {
        color: #B19F8A;
        font-size: 16px;
        margin: 0px 0px 0px 0px;
    }
`;


// /* -------------------- ORDER CATALOG =============== */


export const OrderCatalog = styled.div `
    height: 100px;
    background-color: ${theme.color.fifth};
    border-radius: 16px;
    display: flex;
    color: ${theme.color.primary};
    padding-left: 40px;
    margin-top: 21px;
`;

export const OrderCatalog_Ele = styled.div `
    margin-right: 50px;

    &:hover {
        cursor: pointer;
    }

    h3 {
        margin: 27px 0px 0px 0px;
        font-size: 24px;
    }

    .adMenu_active-line {
        background-color: ${theme.color.primary};
        border-radius: 0px 0px 16px 16px;
        height: fit-content;
        height: 4px;
    }

    .adMenu_line {
        background-color: ${theme.color.fifth};
        border-radius: 0px 0px 16px 16px;
        height: fit-content;
        height: 4px;
    }
`;
