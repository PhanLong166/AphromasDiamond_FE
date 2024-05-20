import styled from "styled-components";
import { theme } from "../../../themes";

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.primary};
    width: 1440px;
`;

export const BottomFlexbox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LogoName = styled.h1`
    font-family: "Great Vibes", cursive;
    font-style: normal;
`;
