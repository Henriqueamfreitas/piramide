import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PlayersPage } from "../pages/PlayersPage"
import { DrawingCardsPage } from "../pages/DrawingCardsPage"
import { PlayingPage } from "../pages/PlayingPage"
import { RulesPage } from "../pages/RulesPage"


export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/rules" element={<RulesPage />} />
         <Route path="/players" element={<PlayersPage />} />
         <Route path="/drawingCards" element={<DrawingCardsPage />} />
         <Route path="/playing" element={<PlayingPage />} />
      </Routes>
   );
};