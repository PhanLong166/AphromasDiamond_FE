import { theme } from "@/themes";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const FunnelContainer = styled(Row)`
    width: 1400px;
    border: 1px solid black;
    margin-top: 20px;
    border-radius: 100px;
    overflow: hidden;
`;

export const FunnelStep = styled(Col)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-left: 1px solid ${theme.color.primary};
    padding: 10px;
`;

export const FunnelStepTitle = styled(Title)`
    margin-top: 0.5rem;
    &.ant-typography {
        color: ${theme.color.primary};
    }
`;