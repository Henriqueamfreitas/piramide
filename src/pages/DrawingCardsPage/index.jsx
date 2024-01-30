import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import { LargeButton } from "../../components/LargeButton";
import { useState, useContext } from "react";
import { PlayerContext } from "../../providers/PlayerContext";
import { CardsContext } from "../../providers/CardsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PlayersCardsSection } from "../../components/PlayersCardsSection";

export const DrawingCardsPage = () => {
  const { players, setPlayers } = useContext(PlayerContext);
  const { deck, setDeck } = useContext(CardsContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const deck_id = deck.deck_id;

  const drawCard = async () => {
    if(currentImg !== 'https://www.deckofcardsapi.com/static/img/back.png'){
        return alert('Você já sorteou uma carta para esse jogador')
    }
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
      );
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex].cards.push(response.data.cards[0]);
      
      setPlayers(updatedPlayers);
      setCurrentImg(response.data.cards[0].image);
    } catch (error) {
        console.error("Erro ao sortear carta:", error);
    } finally{
      setIsLoading(false)
    }
  };

  let totalCards = 0
  players.forEach(element => {
    totalCards += element.cards.length
  });


  const getParagraphContent = () => {
    const intervals = players.length;
    if (totalCards < intervals) {
      return 'Preto ou vermelho?';
    } else if((totalCards === intervals) && (currentImg !=='https://www.deckofcardsapi.com/static/img/back.png')){
      return 'Preto ou vermelho?';
    } else if (totalCards < intervals * 2) {
      return 'Maior ou menor?';
    } else if((totalCards === intervals * 2) && (currentImg !=='https://www.deckofcardsapi.com/static/img/back.png')){
      return 'Maior ou menor?';
    } else if (totalCards < intervals * 3) {
      return 'Dentro ou fora?';
    } else if((totalCards === intervals * 3) && (currentImg !=='https://www.deckofcardsapi.com/static/img/back.png')){
      return 'Dentro ou fora?';
    } else if (totalCards < intervals * 4) {
      return 'Naipe?';
    } else if((totalCards === intervals * 4) && (currentImg !=='https://www.deckofcardsapi.com/static/img/back.png')){
      return 'Naipe?';
    } else if (totalCards < intervals * 5) {
      return 'Par ou ímpar?';
    } else if((totalCards === intervals * 5) && (currentImg !=='https://www.deckofcardsapi.com/static/img/back.png')){
      return 'Par ou ímpar?';
    } else {
      return 'Outro valor';
    }
  };

  const nextPlayer = () => {
    if(currentImg === 'https://www.deckofcardsapi.com/static/img/back.png'){
        return alert('Você ainda NÃO sorteou uma carta para esse jogador')
    }
    if(totalCards === 5*players.length){
        navigate('/playing')
    } else {
        setCurrentImg('https://www.deckofcardsapi.com/static/img/back.png')
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
      }
    };
    localStorage.setItem('@piramide:players', JSON.stringify(players));


  const currentPlayerName = players[currentPlayerIndex].name;
  const currentP = getParagraphContent

  if(currentImg === ''){
    setCurrentImg('https://www.deckofcardsapi.com/static/img/back.png')
  } 


  return (
    <>
      <Header />
      <StyledMain>
        <h2>{currentPlayerName}</h2>
        <p>{currentP()}</p>
        {
          isLoading? 
          <p>Loading...</p>:
          <img src={currentImg} alt="" className="currentCardImage" />
        }
        <div>
          <button onClick={drawCard}>Sortear</button>
          <button onClick={nextPlayer}>Próximo</button>
        </div>
        <PlayersCardsSection />
      </StyledMain>
    </>
  );
};
