import { theme } from "@/themes";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const LogoTypo = styled(Text)`
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 2.8rem;
    color: ${theme.color.primary};
`;