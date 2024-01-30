import { useState, useContext } from "react";
import { PlayerContext } from "../../providers/PlayerContext";
import { PlayersCardsList } from "./PlayersCardsList";
import { StyledSection } from "./style";

export const PlayersCardsSection = ({  }) => {
  const { players, setPlayers } = useContext(PlayerContext);

  return (
      <StyledSection>
         <h2>Jogadores</h2>
         {
          <PlayersCardsList array={players}></PlayersCardsList>
         }
      </StyledSection>
   );
};