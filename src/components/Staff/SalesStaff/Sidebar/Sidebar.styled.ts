import { theme } from "@/themes";
import styled from "styled-components";


export const SidebarContainer = styled.div`
    // width: auto;
    background-color: #151542;
    color: #FFFFFF;
    top: 0px;
    left: 0px;
    margin: 0px 0px 0px 0px;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 41px;
    // margin-right: 50px;
    position: fixed;
    font-family: "Poppins", sans-serif;
    height: 100%;
`;

export const SidebarTop = styled.div``;

export const Logo = styled.div `
    padding: 12px 0px 28px;
    text-align: center;

    h2 {
        font-size: 23px;
        margin: 0px 0px 0px 0px;
        font-family: "Playfair Display", serif;
        font-style: italic;
    }
`;

export const SBMenu = styled.div `
    .active-line {
        width: 3px;
        height: 32px;
        border-radius: 0px 15px 15px 0px;
        background-color: #FFFFFF;
        position: absolute;
        left: 0px;
    }

    .active {
        background-color: #FFFFFF;
        color: #151542;
        border-radius: 16px;
        width: calc(100% - 18px);
        margin-left: 10px;
        position: relative;
        padding-left: 19px;
        // margin: 0px 19px 0px 16px;
        // left: 35px;
        // width: 261px;
        .activeContent {
            margin-left: 0px;
        }
        p {
            color: ${theme.color.secondary};
            color: #151542;
        }
    }
`;

export const SBContent = styled.div `
    display: flex;
    align-items: center;

    position: relative;
    padding: 0 10px;
    width: 100%;
`;

export const MenuElement = styled.div `
    display: flex;
    align-items: center;
    margin: 0px 70px 0px 30px;

    padding: 13px 0px;
    width: 100%;
    cursor: pointer;

    &:focus, & p:focus, &.active {
        color: #151542;
        // border-radius: 16px;
        // cursor: pointer;
    }

    p {
        margin-left: 15px;
        font-size: 14px;
        color: #FFFFFF;
    }
`;

export const AccOut = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0px 0px 0px;
    white-space: nowrap;
    // align-items: flex-end;
    // margin-top: 222px;

    .anticon {
        color: red;
        font-size: 27px;
    }
    .anticon:hover {
        cursor: pointer;
    }
`;

export const Account = styled.div `
    display: flex;
    align-items: center;
    .anticon {
        color: #FFFFFF;
        margin-right: 7px;
        color: ${theme.color.primary};
    }
`;


export const AccInfor = styled.div `
    display: inline-block;
    text-align: center;

    .accInfor_name {
        font-size: 18px;
        font-weight: 500;
        margin: 0px 0px 0px 0px;
        
    }
    
    .accOut_role {
        background-color: #FFFFFF;
        color: #151542;
        border-radius: 16px;
        margin: 0px 0px 0px 0px;
        font-size: 10px;
        width: max-content;
        padding: 2px 4px 2px 4px;
    }

    p{
        margin: 0px 0px 0px 0px;
    }
`;