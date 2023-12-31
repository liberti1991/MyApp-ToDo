import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ContainerTasks = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(p) => p.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;
