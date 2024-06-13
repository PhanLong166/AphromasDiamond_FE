import styled from "styled-components";
import { theme } from "../../../../themes";

export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.primary};
    border-bottom: 2px solid ${theme.color.white};
    
`;

export const BottomFlexbox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1440px;
    padding: 10px;
`;

export const LogoName = styled.p`
    font-family: "Great Vibes", cursive;
    font-style: normal;
    font-size: 48px;

    color: ${theme.color.white};
`;
export const PolicyArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PolicyElements = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: ${theme.color.white};
`;

export const CopyrightFooter = styled.div`
    background-color: ${theme.color.primary};
    text-align: center;
    font-size: 16px;
    padding: 10px;
    color: ${theme.color.white};
`;
