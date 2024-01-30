import { Header } from "../../components/Header";
import { LargeButton } from "../../components/LargeButton";
import { StyledMain } from "./style";
import { Rules } from "../../components/Rules";

export const HomePage = () => {
  return (
    <>
      <Header></Header>
      <StyledMain>
        <h2>Regras</h2>
        <Rules />
        <LargeButton text='Jogar' path='/rules' />
      </StyledMain>
    </>
  );
};
