import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
        margin:0;
        padding:0;
        outline: 0;
        box-sizing:border-box;
        outline: none;
    }

    :focus{
        outline:0;
        
    }
 
    body{
        background-color: ${(props) => props.theme['white-200']};
        padding: 32px 160px;
        
        -webkit-font-smoothing: antialiased;
    }

    input, textarea,button, strong,s,p, span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        text-decoration: none;
        line-height: 130%;
        
    }

    button {
        cursor: pointer;
    }
    h1 {
        font-family: 'Baloo 2' , sans-serif;
        font-weight: 800;
        font-size: 1rem;

    } 
    a{
        text-decoration: none;
    }


    input::-webkit-outer-spin-button
    input::-webkit-inner-spin-button{
        -webkit-appearance:none;
        margin:0;
    }

    input[type="number"]{
        -moz-appearance: textfield;
    }
    
`
