import { Header } from "../../components/Header";
import { StyledMain } from "./style.js";
import { LargeButton } from "../../components/LargeButton";
import { RulesForm } from "../../components/RulesForm/index.jsx"
import { useState } from "react";

export const RulesPage = () => {
    return(
        <>
        <Header />
        <StyledMain>
            <h2>Regras</h2>
            <RulesForm />
        </StyledMain>
        </>
    )
}