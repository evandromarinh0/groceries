import { ButtonText, Container } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  inputLength: number;
}

export function Button(props: ButtonProps){

  return(
    <Container disabled={props.inputLength < 2} onPress={() => props.onPress()}>
      <ButtonText>{props.title}</ButtonText>
    </Container>
  );
}