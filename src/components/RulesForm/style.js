import styled from "styled-components";

export const StyledForm = styled.form`    
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    color: black;
    select{
        width: 100%;
        color: black;
    }
    label{
        margin-bottom: .35rem;
        margin-top: 1rem;
        color: black;
    }
    button{
        border: solid .0625rem black;
        background-color: transparent;
        border-radius: .25rem;
        padding: .25rem 1.5rem;
        margin-top: .75rem;
        color: black;
    }
`