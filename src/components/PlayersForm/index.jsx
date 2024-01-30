import { StyledForm } from "./style"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const PlayersForm = ({setPlayers}) => {

    const submit = (e) => {
        e.preventDefault();
        const playerName = e.target.elements.playerName.value;
        addPlayer(playerName, updatedPlayers => {
        });
        e.target.elements.playerName.value = ""; 
    };

      const addPlayer = (name, callback) => {
        const newPlayer = { id: uuidv4(), name, cards: [] };
        setPlayers((prevPlayers) => {
            const updatedPlayers = [newPlayer, ...prevPlayers];
            callback(updatedPlayers);
            return updatedPlayers;
        });
    }; 

    return(
        <>
        <StyledForm onSubmit={submit}>
            <label htmlFor="playerName">Nome do jogador</label>
            <input 
                name="playerName" 
                id="playerName"                        
                type="text"
                placeholder="Nome"
                required
            />
            <button type="submit">Cadastrar</button>

        </StyledForm>
        </>
    )
}