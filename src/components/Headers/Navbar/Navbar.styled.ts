import styled from "styled-components";
import { theme } from "../../../themes";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${theme.color.third};
    padding: 10px;

    font-family: "Crimson Text", serif;
`;

export const NavbarFlexbox = styled.div`
    width: 1170px;
    display: flex;
    align-items: center;
    gap: 50px;
    color: ${theme.color.primary}
`;

export const Logo = styled.div`
    font-family: "Playfair Display", serif;
    font-weight: 600;
    font-size: 30px;
`;

export const DropdownFrame = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 50px;
`;