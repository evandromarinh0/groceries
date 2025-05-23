import { Image } from "react-native";
import { Container } from "./styles";
import logoImg from '../../assets/logo.png';


export default function HomePage(){
  return(
    <Container>
      <Image source={logoImg} height={34} width={134}  />
    </Container>
  )
}

