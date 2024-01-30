import styled from "styled-components";

export const StyledMain = styled.main`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;

    section{
        margin-top: 1.5rem;
        min-height: 150px;
        text-align: center;
        ul{
            width: 150px;
            list-style: decimal;
            text-align: flex-start;
        }
        li{
            text-align: left;
        }
    }
    
    div{
        gap: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`