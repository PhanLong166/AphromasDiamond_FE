import styled from "styled-components";
import { theme } from "../../../../themes";
import { Button } from "antd";

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
    align-items: center;

    gap: 20px;
    font-size: 25px;
`;

export const TopMenuButton = styled(Button)`
    --height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    min-width: 112px;
    height: var(--height);
    line-height: var(--height);
    background-color: ${theme.color.primary};
    border-radius: 2px;
    border: 1px solid ${theme.color.primary};

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${theme.color.white};
        border-radius: 2px;
        transform: scaleX(0);
        transition: ${theme.transition.primary};
    }

    & span {
        position: relative;
        color: ${theme.color.white};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        text-transform: uppercase;
        transition: ${theme.transition.primary};
    }

    &.ant-btn.ant-btn-default:hover {
        border-color: ${theme.color.primary};
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover span {
        color: ${theme.color.primary};
    }
`;