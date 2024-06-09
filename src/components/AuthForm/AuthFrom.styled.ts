import { theme } from "@/themes";
import { Row, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

export const AuthForm = styled.div`
    display: flex;
    position: fixed;
    inset: 0;
    overflow-y: auto;
    background-color: ${theme.color.white};
`;

export const FormRow = styled(Row)`
    margin: auto;
    position: relative;
    width: 1066px;
    height: 700px;
    padding: 24px;
    border-radius: 30px;
    background: ${theme.color.white}

    ${({ theme }) => theme.breakpoints.down('lg')} {
        width: auto;
        margin: auto;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
        border-radius: unset;
        box-shadow: unset;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        padding: 12px;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    margin: 0 auto;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;

export const FormTitle = styled(Title)`
    &.ant-typography {
        margin-bottom: 24px;
        color: ${theme.color.primary};
        font-size: 3.6rem;
        font-weight: 700;
        text-align: center; 
    }
`;


