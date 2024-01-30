import { Header } from "../../components/Header"
import { StyledMain } from "../PlayersPage/style"
import { LargeButton } from "../../components/LargeButton"
import { PlayersForm } from "../../components/PlayersForm"
import { useState, useContext } from "react";
import { PlayerContext } from "../../providers/PlayerContext";

export const PlayersPage = () => {
    const { players, setPlayers } = useContext(PlayerContext);
    // const [players, setPlayers] = useState([]);


    const isButtonDisabled = players.length < 2
    
    return(
        <>
        <Header />
        <StyledMain>
            <h2>Adicionando Jogadores</h2>
            <PlayersForm setPlayers={setPlayers} />
            <section>
                <h3>Jogadores</h3>
                {players.length>0 ? (
                    <ul>
                        {players.map((player) => (
                            <li key={player.id}>{player.name}</li>
                        ))}
                    </ul>) : <p>Ainda não nenhum jogador cadastrado</p>
                }
            </section>
            <div>
                <LargeButton type="button" text='Voltar' path='/rules' />
                <LargeButton type="button" text='Jogar' path='/drawingCards' disabled={isButtonDisabled}/>
            </div>
        </StyledMain>
        </>
    )
}