import { TouchableOpacityProps } from "react-native";

type IButtonStylesProps = "PRIMARY" | "SECONDARY";

export type IButton = TouchableOpacityProps & {
  title: string;
  type?: IButtonStylesProps;
};

export interface ButtonStyles {
  type: IButtonStylesProps;
}
