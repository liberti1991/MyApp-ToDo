import { ButtonIcon } from "../ButtonIcon";
import { IPlayerCard } from "./interfaces";
import { Icon, PlayerCardContainer, PlayerCardText } from "./styles";

export function PlayerCard({ name, onRemove }: IPlayerCard) {
  return (
    <PlayerCardContainer>
      <Icon name="person" />
      <PlayerCardText>{name}</PlayerCardText>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </PlayerCardContainer>
  );
}
