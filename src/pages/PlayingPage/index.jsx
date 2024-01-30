import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import { LargeButton } from "../../components/LargeButton";
import { PlayersCardsSection } from "../../components/PlayersCardsSection";
import { PlayerContext } from "../../providers/PlayerContext";
import { CardsContext } from "../../providers/CardsContext";
import { RulesContext } from "../../providers/RulesContext";

export const PlayingPage = () => {
  const [currentImg, setCurrentImg] = useState('');
  const [cardDrawn, setCardDrawn] = useState([]);
  const { players, setPlayers } = useContext(PlayerContext);
  const { deck, setDeck } = useContext(CardsContext);
  const { ranks, setRanks, lastCard, setLastCard, joker, setJoker } = useContext(RulesContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowNumber, setRowNumber] = useState(0);
  const [cardFunction, setCardFunction] = useState(lastCard);
  const navigate = useNavigate();
  
  const deck_id = deck.deck_id;
  
  const drawCard = async () => {
    if (currentImg !== 'https://www.deckofcardsapi.com/static/img/back.png') {
      return alert('Você já sorteou essa carta');
    }
  
    let sum = 0;
  
    while (sum === 0) {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
        );
  
        const cardDrawnValue = response.data.cards[0].value;
  
        players.forEach(element => {
          element.cards.forEach(card => {
            if (card.value === cardDrawnValue) {
              sum += 1;
            }
          });
        });
  
        if (sum !== 0) {
          setCurrentImg(response.data.cards[0].image);
          setCardDrawn(prevState => [...prevState, { ...response.data.cards[0] }]);
        }
      } catch (error) {
        console.error("Erro ao sortear carta:", error);
      } finally{
        setIsLoading(false)
      }
    }
  };

  if (currentImg === '') {
    setCurrentImg('https://www.deckofcardsapi.com/static/img/back.png');
  }

  const nextCard = () => {
    if (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png') {
      return alert('Você ainda NÃO sorteou a carta');
    } else {
      setCurrentImg('https://www.deckofcardsapi.com/static/img/back.png');
    }
  };


  const ulArray = Array.from({ length: ranks }, (_, index) => index + 1);
  let alternate = ''
  if(lastCard === 'manda'){
    alternate='bebe'
  } else{
    alternate='manda'
  }

  useEffect(() => {
      const calculateRowNumber = () => {
        if (ranks==1) {
            setRowNumber(1)
          } 
          
          // ranks == 2
          else if (ranks==2){
            if(cardDrawn.length<2){
                setRowNumber(1)
                setCardFunction(alternate)
            } else if((cardDrawn.length===2) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>2){
                setRowNumber(2)
                setCardFunction(lastCard)
            }
          } 
          
          // ranks == 3
          else if (ranks==3){
            if(cardDrawn.length<3){
                setRowNumber(1)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===3) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if(cardDrawn.length>3 && cardDrawn.length<5){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if((cardDrawn.length===5) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>5){
                setRowNumber(3)
                setCardFunction(lastCard)
            }
          }
          
          // ranks == 4
          else if (ranks==4){
            if(cardDrawn.length<4){
                setRowNumber(1)
                setCardFunction(alternate)
            } else if((cardDrawn.length===4) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>4 && cardDrawn.length<7){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===7) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if(cardDrawn.length>7 && cardDrawn.length<9){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if((cardDrawn.length===9) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>9){
                setRowNumber(4)
                setCardFunction(lastCard)
            }
          }
          
          // ranks == 5
          else if (ranks==5){
            if(cardDrawn.length<5){
                setRowNumber(1)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===5) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if(cardDrawn.length>5 && cardDrawn.length<9){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if((cardDrawn.length===9) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>9 && cardDrawn.length<12){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===12) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if(cardDrawn.length>12 && cardDrawn.length<14){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if((cardDrawn.length===14) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>14){
                setRowNumber(5)
                setCardFunction(lastCard)
            }
          }             
          
          // ranks == 6
          else if (ranks==6){
            if(cardDrawn.length<6){
                setRowNumber(1)
                setCardFunction(alternate)
            } else if((cardDrawn.length===6) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>6 && cardDrawn.length<11){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===11) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if(cardDrawn.length>11 && cardDrawn.length<15){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if((cardDrawn.length===15) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>15 && cardDrawn.length<18){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===18) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if(cardDrawn.length>18 && cardDrawn<20 ){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if((cardDrawn.length===20) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(6)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>20){
                setRowNumber(6)
                setCardFunction(lastCard)
            }                
          }             
          
          // ranks == 7
          else if (ranks==7){
            if(cardDrawn.length<7){
                setRowNumber(1)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===7) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if(cardDrawn.length>7 && cardDrawn.length<13){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if((cardDrawn.length===13) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>13 && cardDrawn.length<18){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===18) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if(cardDrawn.length>18 && cardDrawn.length<22){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if((cardDrawn.length===22) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>22 && cardDrawn<25 ){
                setRowNumber(5)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===25) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(6)
                setCardFunction(alternate)
            } else if(cardDrawn.length>25 && cardDrawn.length<27){
                setRowNumber(6)
                setCardFunction(alternate)
            } else if((cardDrawn.length===27) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(7)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>27){
                setRowNumber(7)
                setCardFunction(lastCard)
            }                
          }             
          
          // ranks == 8
          else if (ranks==8){
            if(cardDrawn.length<8){
                setRowNumber(1)
                setCardFunction(alternate)
            } else if((cardDrawn.length===8) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>8 && cardDrawn.length<15){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===15) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if(cardDrawn.length>15 && cardDrawn.length<21){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if((cardDrawn.length===21) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>21 && cardDrawn.length<26){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===26) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if(cardDrawn.length>26 && cardDrawn<30 ){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if((cardDrawn.length===30) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(6)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>30 && cardDrawn.length<33){
                setRowNumber(6)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===33) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(7)
                setCardFunction(alternate)
            } else if(cardDrawn.length>33 && cardDrawn.length < 35){
                setRowNumber(7)
                setCardFunction(alternate)
            } else if((cardDrawn.length===35) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(8)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>35){
                setRowNumber(8)
                setCardFunction(lastCard)
            }                
          }             
          
          // ranks == 9
          else if (ranks==9){
            if(cardDrawn.length<9){
                setRowNumber(1)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===9) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(alternate)
            } else if(cardDrawn.length>9 && cardDrawn.length<17){
                setRowNumber(2)
                setCardFunction(alternate)            
            } else if((cardDrawn.length===17) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>17 && cardDrawn.length<24){
                setRowNumber(3)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===24) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if(cardDrawn.length>24 && cardDrawn.length<30){
                setRowNumber(4)
                setCardFunction(alternate)
            } else if((cardDrawn.length===30) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>30 && cardDrawn<35 ){
                setRowNumber(5)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===35) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(6)
                setCardFunction(alternate)
            } else if(cardDrawn.length>35 && cardDrawn.length<39){
                setRowNumber(6)
                setCardFunction(alternate)
            } else if((cardDrawn.length===39) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(7)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>39 && cardDrawn.length < 42){
                setRowNumber(7)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===42) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(8)
                setCardFunction(alternate)
            } else if(cardDrawn.length>42 && cardDrawn.length<44){
                setRowNumber(8)
                setCardFunction(alternate)
            } else if((cardDrawn.length===44) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(9)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>44){
                setRowNumber(9)
                setCardFunction(lastCard)
            }                
          }             
          
          // ranks == 10
          else if (ranks==10){
            if(cardDrawn.length<10){
                setRowNumber(1)
                setCardFunction(alternate)
            } else if((cardDrawn.length===10) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>10 && cardDrawn.length<19){
                setRowNumber(2)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===19) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if(cardDrawn.length>19 && cardDrawn.length<27){
                setRowNumber(3)
                setCardFunction(alternate)
            } else if((cardDrawn.length===27) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>27 && cardDrawn.length<34){
                setRowNumber(4)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===34) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if(cardDrawn.length>34 && cardDrawn<40 ){
                setRowNumber(5)
                setCardFunction(alternate)
            } else if((cardDrawn.length===40) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(6)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>40 && cardDrawn.length<45){
                setRowNumber(6)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===45) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(7)
                setCardFunction(alternate)
            } else if(cardDrawn.length>45 && cardDrawn.length < 49){
                setRowNumber(7)
                setCardFunction(alternate)
            } else if((cardDrawn.length===49) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(8)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>49 && cardDrawn.length<52){
                setRowNumber(8)
                setCardFunction(lastCard)
            } else if((cardDrawn.length===52) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(9)
                setCardFunction(alternate)
            } else if(cardDrawn.length>52 && cardDrawn.length<54){
                setRowNumber(9)
                setCardFunction(alternate)
            } else if((cardDrawn.length===54) && (currentImg === 'https://www.deckofcardsapi.com/static/img/back.png')){
                setRowNumber(10)
                setCardFunction(lastCard)
            } else if(cardDrawn.length>54){
                setRowNumber(10)
                setCardFunction(lastCard)
            }                
          }             
          
    };

    calculateRowNumber();
  }, [ranks, cardDrawn.length, currentImg]);

  return (
    <>
      <Header />
      <StyledMain>
        <h2>Número de fileira: {cardFunction} {rowNumber}</h2>
        {
          isLoading? 
          <p>Loading...</p>:
          <>
          <img src={currentImg} alt="" className="currentCardImage" />
          <section>
            <ul>
              {
                cardDrawn.length > 0 ?
                players.map(player => {
                    let sum = 0
                    player.cards.forEach((card => {
                        const lastCardDrawn = cardDrawn[cardDrawn.length-1]
                        if(lastCardDrawn.value === card.value){
                            sum+=1
                        }
                    }))
                    if(sum>0){
                        return <li key={player.name}>{player.name} {cardFunction} {rowNumber*sum} shots</li>
                    }
                }):
                <p>Nenhuma carta foi sorteada ainda</p>
               }
            </ul>
          </section>
          </>
        }
        <div>
          <button onClick={drawCard}>Sortear</button>
          <button onClick={nextCard}>Próxima Carta</button>
        </div>
        <PlayersCardsSection />
      </StyledMain>
    </>
  );
};