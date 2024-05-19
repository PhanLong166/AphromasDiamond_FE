import { createGlobalStyle } from "styled-components";
import { theme } from ".";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${theme.color.primary};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
        font-size: 1.3rem;
    }

    a {
        font-weight: 500;
        color: var(--primary-color);
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    ul li a{
        text-decoration: none;
    }

`;

export default GlobalStyles;