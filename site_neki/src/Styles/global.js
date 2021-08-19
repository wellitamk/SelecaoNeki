import { createGlobalStyle } from 'styled-components';
import font1 from 'src/Assets/Fonts/SourceSansPro-Regular.otf'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: content-box;
        margin: 0;
        padding: 0;
        justify-content: center;
        @font-face {
            font-family: 'SourceSans-Pro';
            src: url(${font1}) format('opentype');
        }
        font-family: 'SourceSans-Pro', sans-serif;
    }
    body{
        background: #ebebeb;
    }
`;

