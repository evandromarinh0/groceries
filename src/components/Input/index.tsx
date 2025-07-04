import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps){

  return(
    <Container {...rest} />
  );
}