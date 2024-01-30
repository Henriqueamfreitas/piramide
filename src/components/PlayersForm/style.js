import styled from "styled-components";

export const StyledForm = styled.form`    
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    select{
        width: 17rem;
    }
    label{
        margin-bottom: 1rem;
        margin-top: 1rem;
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