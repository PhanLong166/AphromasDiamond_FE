import styled from "styled-components";
import { theme } from "../../../themes";
import { Dropdown } from "antd";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${theme.color.secondary};
    padding: 10px;

    font-family: "Poppins", san-serif;
`;

export const NavbarFlexbox = styled.div`
    width: 1400px;
    display: flex;
    align-items: center;
    gap: 50px;
    color: ${theme.color.primary}
`;

export const Logo = styled.div`
    font-family: "Playfair", serif;
    font-weight: 700;
    font-size: 36px;
`;

export const DropdownFrame = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 50px;
`;

export const DrowdownComponent = styled(Dropdown)`

`;