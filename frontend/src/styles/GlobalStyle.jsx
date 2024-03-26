import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color-scheme: light dark;
    }
    
    :root {
        --bg-color: #f4f3ff;
        --btn-color: #646cff;
        --dark-color: #242424;
        --helper-color: #99b9ff;
    }   

    body {
        margin: 0;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-size: 2em;
        line-height: 1.1;
        font-weight: bold;
    }

    p,
    li,
    label,
    input,
    textarea {
        font-size: 1rem;
        line-height: 1.56;
        letter-spacing: 0.1rem;
        word-spacing: 0.06rem;
    }

    a {
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        color: var(--btn-color);
        text-decoration: inherit;
    }   

    li {
        list-style: none;
    }
    
    ::-webkit-scrollbar {
        width: 5px; 
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--btn-color);
        border-radius: 6px;

    }
`;
