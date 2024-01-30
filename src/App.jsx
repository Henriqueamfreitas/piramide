import { RoutesMain } from "./routes/RoutesMain"
import { GlobalReset } from "./styles/reset"
import { PlayerProvider } from "./providers/PlayerContext"
import { CardsProvider } from "./providers/CardsContext"
import { RulesProvider } from "./providers/RulesContext"

function App() {
  return (
    <div className="App">
      <GlobalReset />
      <PlayerProvider>
        <CardsProvider>
          <RulesProvider>
            <RoutesMain />
          </RulesProvider>
        </CardsProvider>
      </PlayerProvider>
    </div>
  )
}

export default App