import { IButtonIcon } from "./interfaces";
import { ButtonIconContainer, Icon } from "./styles";

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: IButtonIcon) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
