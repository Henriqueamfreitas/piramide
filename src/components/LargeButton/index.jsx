import { StyledButton } from "./style";
import { useNavigate } from "react-router-dom";

export const LargeButton = ({ text, path, type, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <>
      <StyledButton type={type} onClick={handleClick} disabled={disabled}>{text}</StyledButton>
    </>
  );
};
