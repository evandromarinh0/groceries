import { Image } from "react-native";
import { ClearButton, ClearButtonText, Container, Content, ContentWrapper, FilterWrapper } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";

import logoImg from '../../assets/logo.png';

export default function HomePage(){
  return(
    <Container>
      <Image source={logoImg} height={34} width={134} resizeMode="contain"  />

      <ContentWrapper>
        <Input placeholder="O que precisa comprar?" />
        <Button title="Adicionar" />
      </ContentWrapper>

      <Content>
        <FilterWrapper>
          <Filter status="pending" isActive={false} />
          <Filter status="done" isActive={true} />

          <ClearButton>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </FilterWrapper>
      </Content>
    </Container>
  )
}

