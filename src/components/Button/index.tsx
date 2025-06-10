import { ButtonText, Container } from "./styles";

interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps){

  return(
    <Container>
      <ButtonText>{props.title}</ButtonText>
    </Container>
  );
}