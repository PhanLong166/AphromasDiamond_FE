import styled from "styled-components";
import { theme } from "../../../themes";

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.white};
`;

export const TopFlexbox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1600px;
    padding: 20px;
`;

export const ContactUs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const TitleCategory = styled.h2`
    color: ${theme.color.primary};
`;

export const DescriptionContact = styled.p`
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
    gap: 50px;
`;

export const NavigationTitle = styled.div`
`;

export const FooterElement = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 300px;
    gap: 20px;
    margin-top: 20px;
`;

export const NavElement = styled.p`
    color: gray;
    font-size: 16px;
`;