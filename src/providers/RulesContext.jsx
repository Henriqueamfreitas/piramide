import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RulesContext = createContext({});

export const RulesProvider = ({ children }) => {
   const [ranks, setRanks] = useState("");
   const [lastCard, setLastCard] = useState("");
   const [joker, setJoker] = useState("");
   
   return (
      <RulesContext.Provider value={{ ranks, setRanks, lastCard, setLastCard, joker, setJoker }}>
         {children}
      </RulesContext.Provider>
   );
};



