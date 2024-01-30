import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);

    const navigate = useNavigate();

   return (
      <PlayerContext.Provider value={{ players, setPlayers }}>
         {children}
      </PlayerContext.Provider>
   );
};
