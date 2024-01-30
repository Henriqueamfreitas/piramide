import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CardsContext = createContext({});

export const CardsProvider = ({ children }) => {
   const [deck, setDeck] = useState([]);
   
   useEffect(() => {
      const loadDeck = async () => {
         try {
            const { data } = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3")
            setDeck(data);
         } catch (error) {
            console.log(error);
         }
      };
      loadDeck();
   }, []);


   return (
      <CardsContext.Provider value={{ deck, setDeck }}>
         {children}
      </CardsContext.Provider>
   );
};



