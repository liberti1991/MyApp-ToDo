import { IHighlight } from "./interfaces";
import {
  HighlightContainer,
  HighlightSubTitle,
  HighlightTitle,
} from "./styles";

export function Highlight({ subtitle, title }: IHighlight) {
  return (
    <HighlightContainer>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightSubTitle>{subtitle}</HighlightSubTitle>
    </HighlightContainer>
  );
}
