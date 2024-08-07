import { theme } from "../../themes";
import styled from "styled-components";

export const Banner = styled.section`
 background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  max-width: 1400px;
  margin: 20px auto;
`;

export const LeftSection = styled.div`
  max-width: 1600px;
  margin: 100px 60px;
  width: 50%;

  h2 {
    font-size: 50px;
    margin-bottom: 10px;
    text-align: left;
    font-family: "Great Vibes";
    font-weight: 500;
    color: ${theme.color.primary};
  }

  .subheading {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: left;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }

  .consult-button {
    padding: 15px 20px;
    background-color: #efe2d4;
    color: ${theme.color.primary};
    border: 1px solid;
    cursor: pointer;
    font-size: 14px;

    font-family: "Gantari", sans-serif;
    margin-top: 10px;
    font-weight: 500;
  }
  .button_slide {
    letter-spacing: 1px;
    cursor: pointer;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
  }
  .slide_right:hover {
    box-shadow: inset 400px 0 0 0 ${theme.color.primary};
    color: #efe2d4;
  }
`;
