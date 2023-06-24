import { IButton } from "./interfaces";
import { ButtonContainer, ButtonTitle } from "./styles";

export function Button({ title, type = "PRIMARY", ...rest }: IButton) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
