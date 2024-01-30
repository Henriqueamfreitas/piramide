import styled from "styled-components";

export const StyledMain = styled.main`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;
    gap: .75rem;

    img.currentCardImage {
        width: 70px;
        height: 95px;
    }    
    
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .75rem;
        margin-bottom: 2rem;
    }
    p:nth-child(2){
        height: 123px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    button{
        border: solid .0625rem black;
        background-color: transparent;
        border-radius: .25rem;
        padding: .25rem 1.5rem;
        color: black;
    }

`