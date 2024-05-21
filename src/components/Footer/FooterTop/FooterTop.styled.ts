import styled from "styled-components";
import { theme } from "../../../themes";

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.third};
`;

export const TopFlexbox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1440px;
    padding: 20px;
`;

export const ContactUs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const TitleCategory = styled.h1`
    font-family: "Playfair Display", serif;
    color: ${theme.color.primary};
`;

export const DescriptionContact = styled.p`
    font-family: "Crimson Text", serif;
    color: gray;
    width: 500px;
    font-size: 16px;
`;

export const SNSContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const CategoryContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const NavigationTitle = styled.div`

`;