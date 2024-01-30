import { StyledForm } from "./style"
import { useState, useContext } from "react";
import { LargeButton } from "../LargeButton";
import { useNavigate } from "react-router-dom";
import { RulesContext } from "../../providers/RulesContext";

export const RulesForm = () => {
    const { ranks, setRanks, lastCard, setLastCard, joker, setJoker } = useContext(RulesContext);

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        navigate('/players');
    };  

    return(
        <>
        <StyledForm onSubmit={submit}>
            <label htmlFor="ranks">Número de fileiras</label>
            <select 
                name="ranks" 
                id="ranks"            
                value={ranks}
                onChange={(e) => setRanks(e.target.value)}
                required>
                <option value="">Selecione quantas fileiras deseja</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <label htmlFor="lastCard">A última carta será para mandar ou beber?</label>
            <select 
                name="lastCard" 
                id="lastCard"
                value={lastCard}
                onChange={(e) => setLastCard(e.target.value)}
                required
                >
                <option value="">Selecione uma das opções abaixo</option>
                <option value="manda">Mandar</option>
                <option value="bebe">Beber</option>
            </select>
            <label htmlFor="joker">Deseja incluir o coringa no baralho?</label>
            <select 
                name="joker" 
                id="joker"
                value={joker}
                onChange={(e) => setJoker(e.target.value)}
                required
                >
                <option value="">Selecione uma das opções abaixo</option>
                <option value="com">Com coringa</option>
                <option value="sem">Sem coringa</option>
            </select>
            <div>
                <LargeButton type="button" text='Voltar' path='/' />
                <button type="submit" >Enviar</button>
            </div>

        </StyledForm>
        </>
    )
}