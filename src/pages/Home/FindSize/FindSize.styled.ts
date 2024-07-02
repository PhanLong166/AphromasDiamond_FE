import styled from "styled-components";
import { theme } from "../../../themes";

export const Container = styled.div`
  background-color: ${theme.color.white};
  max-width: 1450px;
  margin: 40px auto;
  line-height: 1.6;

  p,
  ul {
    font-size: 16px;
    color: #45413e;
    font-family: "Gantari", sans-serif;
  }

  h3 {
    font-size: 24px;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: #45413e;
    font-family: "Gantari", sans-serif;
  }
  .span {
    text-decoration: underline;
  }

  h1 {
    font-size: 32px;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
  }

  .menu {
    height: 100%;
    border-right: 0;
  }

  .layout {
    padding: 0 30px;
    background: #fff;
    width: 50%;
  }

  .header {
    background: #fff;
    padding: 0;
    text-align: center;
  }

  .h1 {
    background: #fff;
    padding: 0;
  }

  .hr {
    margin: 20px 0;
  }

  .in-this-article {
    padding-left: 16px;
  }
  .indent-paragraph {
    text-indent: 20px;
    margin-bottom: 1em;
  }
  .content {
    padding-left: 20px;
  }
  .detail {
    padding-left: 40px;
  }
  .tip {
    border-left: 7px solid ${theme.color.primary};
    padding: 20px;
    background-color: #f4f2ee;
    font-family: "Gantari", sans-serif;
    font-style: italic;
    color: #45413e;
  }
  #section1,
  #section2,
  #section3,
  #section4,
  #section5,
  #section6 {
    margin: 10px 0;
  }
  .sider {
    border-color: none !important;
  }

  img {
    margin: 10px 0;
  }

  .subtitle {
    font-size: 18px;
    font-style: italic;
    font-weight: 200;
    font-family: "Gantari", sans-serif;
  }

  .anchor .in-this-article {
    font-size: 16px;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
  }

  .anchor .ant-anchor-link {
    font-size: 14px;
    color: #45413e;
    font-family: "Gantari", sans-serif;
  }

  .content {
    font-weight: 500;
  }

  .here {
    display: inline;
    margin-left: 5px;
    text-decoration: none;
    color: blue;
    cursor: pointer;
  }
`;
