import { StyledCard } from "./style";

export const PlayersCardsCard = ({ object }) => {
  const cards = object.cards;

  return (
    <StyledCard key={object.id}>
      <h3>{object.name}</h3>
      <ul>
        {cards.map((element, index) => (
          <img src={element.image} key={index} alt="" />
        ))}
      </ul>
    </StyledCard>
  );
};