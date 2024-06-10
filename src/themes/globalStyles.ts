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
        font-family: "Gantari", sans-serif;
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

    /* Scrollbar */
    ::-webkit-scrollbar {
        border-radius: 0;
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    /* Selection */
    ::selection {
        color: var(--white-color);
        background: var(--primary-color);
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.color.textPrimary};
        -webkit-box-shadow: 0 0 0px 1000px ${theme.color.white} inset;
        transition: all 5000s ease-in-out 0s;
    }
`;

export default GlobalStyles;