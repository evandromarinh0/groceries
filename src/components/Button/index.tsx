import { ButtonText, Container } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button(props: ButtonProps){

  return(
    <Container onPress={() => props.onPress()}>
      <ButtonText>{props.title}</ButtonText>
    </Container>
  );
}