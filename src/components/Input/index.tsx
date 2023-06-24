<<<<<<< HEAD
=======
import { TextInput, TextInputProps } from "react-native";
>>>>>>> 051abec2fef49eeb4cdc7ea0e4c61ff32d7ae43e
import { useTheme } from "styled-components/native";
import { IInput } from "./interfaces";
import { InputContainer } from "./styles";

<<<<<<< HEAD
export function Input({ inputRef, ...rest }: IInput) {
=======
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
>>>>>>> 051abec2fef49eeb4cdc7ea0e4c61ff32d7ae43e
  const { COLORS } = useTheme();

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
