import styled from "styled-components";
import { theme } from "../../../themes";

export const SidebarContainer = styled.div`
    width: 280px;
    background-color: ${theme.color.third};
    color: ${theme.color.primary};
    top: 0px;
    left: 0px;
    margin: 0px 0px 0px 0px;
    border-radius: 0px 30px 30px 0px;
    display: fix;
    flex-grow: 1;
    flex-direction: column;
    padding: 20px 0 41px;
    margin-right: 50px;
    position: fixed;
`;

export const Logo = styled.div `
    padding: 5px 0px 20px;
    text-align: center;

    h2 {
        margin: 0px 0px 0px 0px;
    }
`;

export const SBMenu = styled.div `
.active-line {
    width: 3px;
    height: 32px;
    // margin-right: 35px;
    border-radius: 0px 15px 15px 0px;
    background-color: ${theme.color.primary};
    left: 0px;
}

.active {
    background-color: ${theme.color.primary};
    color: ${theme.color.forth};
    border-radius: 16px;
    margin: 0px 19px 0px 16px;
    left: 35px;
    width: 261px;
    p {
        color: ${theme.color.forth};
    }
}

`;

export const SBContent = styled.div `
    display: flex;
    align-items: center;
    
    
`;

export const MenuElement = styled.div `
    display: flex;
    align-items: center;
    padding: 18px 0px 18px 15px;
    margin: 0px 35px 0px 35px;

    &:focus, & p:focus {
        color: ${theme.color.forth};
        border-radius: 16px;
        cursor: pointer;
    }

    p {
        margin-left: 15px;
    }
`;

export const AccOut = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0px 0px 0px;
    white-space: nowrap;
    align-items: flex-end;
    margin-top: 222px;

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
        background-color: ${theme.color.primary};
        color: ${theme.color.third};
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