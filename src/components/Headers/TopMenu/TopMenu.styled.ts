import styled from "styled-components";
import { theme } from "../../../themes";

export const TopMenuContainer = styled.section`
    background: ${theme.color.third};
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 10px;

    font-family: "Poppins", san-serif;
    font-size: 16px;
    border-bottom: 1px solid gray;
`;

export const TopMenuFlexbox = styled.div`
    width: 1170px;
    display: flex;
    justify-content: space-between;
    color: ${theme.color.primary};
`;

export const Contact = styled.div`
    display: flex;
    gap: 20px;
`;

export const Phone = styled.div`
    display: flex;
    align-items: center;
`;

export const Email = styled.div`
    display: flex;
    align-items: center;
`;

export const Feature = styled.div`
    display: flex;
    gap: 20px;
    font-size: 25px;
`;