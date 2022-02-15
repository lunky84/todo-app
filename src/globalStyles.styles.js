import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        font-family: 'Montserrat', sans-serif;
    }
    
    body {
        background-color: #f3f3f3;
        margin: 0;
    }

    #root {
        display: flex;
    }

    button {
        padding: 20px;
        border: none;
        border-radius: 4px;
        -webkit-appearance: none;
        margin: 0 10px 0 0;
        cursor: pointer;
        &.button-primary {
            color: white;
            background-color: #007bff;
            &:hover {
                background-color: #0069d9;
            }
        }
        &.button-secondary {
            background-color: #f8f9fa;
            &:hover {
                background-color: #e2e6ea;
            }
        }
    }
`