import { PlayersCardsCard } from "./PlayersCardsCard"
// import { StyledUl } from "./style"

export const PlayersCardsList = ({array}) => {
    return(
        <ul>
            {
            array.map((element, index) => 
              <PlayersCardsCard object={element} key={index}></PlayersCardsCard>
            )
            }            
        </ul>
    )
}