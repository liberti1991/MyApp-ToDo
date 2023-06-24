import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import styled, { css } from "styled-components/native";

export const TaskCardContainer = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${(p) => p.theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 12px;
`;

export const TaskCardIcon = styled(Icon).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  margin-right: 10px;
`;

export const TaskCardTitle = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.MD}px;
    color: ${p.theme.COLORS.GRAY_200};
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
  `}
`;
