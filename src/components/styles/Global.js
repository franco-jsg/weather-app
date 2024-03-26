import { createGlobalStyle } from "styled-components"
import img from '../../assets/summer/pexels-oliver-sjöström-931018.jpg'

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

    }

    body {

        width: 100vw;
        height: 100vh;

        &::before {
        content: '';
        background: url(${img}) center center/cover;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-repeat: none;
        z-index: -1;

        }
    }
`