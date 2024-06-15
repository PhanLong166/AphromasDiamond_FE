import styled from "styled-components";
import { theme } from "../../../themes";

export const Section = styled.div`
  margin: 0 auto;
  background-color: ${theme.color.white};
  max-width: 1400px;
`;

export const Container = styled.div``;

export const Heading = styled.div`
  h2 {
    font-size: 32px;
    text-align: center;
    margin: 50px auto;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-weight: 700;
  }
`;