import Icon from "react-native-vector-icons/FontAwesome";
import logoImg from "../../assets/logo.png";
import { IHeader } from "./interfaces";
import { HeaderBtn, HeaderContainer, HeaderLogo } from "./styles";

export function Header({ showBtn = false }: IHeader) {
  return (
    <HeaderContainer>
      {showBtn && (
        <HeaderBtn>
          <Icon name="angle-double-left" color="#FFF" size={32} />
        </HeaderBtn>
      )}
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  );
}
