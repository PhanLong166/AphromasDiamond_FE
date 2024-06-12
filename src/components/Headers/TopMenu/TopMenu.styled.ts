import styled from "styled-components";
import { theme } from "../../../themes";

export const TopMenuContainer = styled.section`
    background: ${theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    font-family: "Poppins", san-serif;
    font-size: 16px;
`;

export const TopMenuFlexbox = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    color: ${theme.color.primary};
`;

export const Contact = styled.div`
    display: flex;
    gap: 20px;
    font-size: 12px;
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