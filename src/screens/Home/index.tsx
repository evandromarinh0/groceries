import { FlatList, Image } from "react-native";
import { ClearButton, ClearButtonText, Container, Content, ContentWrapper, EmptyText, FilterWrapper, Separator } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";

import logoImg from '../../assets/logo.png';
import { Item } from "../../components/Item";

export default function HomePage(){
  const list = [
  {
    id: '1',
    status: 'done',
    description: '1 pacote de café'
  },
  {
    id: '1',
    status: 'pending',
    description: '1 pacote de açucar'
  },
  {
    id: '1',
    status: 'pending',
    description: '1 pacote de feijão'
  },
]


  return(
    <Container>
      <Image source={logoImg} height={34} width={134} resizeMode="contain"  />

      <ContentWrapper>
        <Input placeholder="O que precisa comprar?" placeholderTextColor="#74798b" />
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

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 24, paddingBottom: 64 }}
          ItemSeparatorComponent={() => <Separator />}
          ListEmptyComponent={() => <EmptyText>Nenhum item aqui.</EmptyText>}
          data={list}
          renderItem={({item}) => (
            <Item status={item.status} description={item.description} />
          )}
          keyExtractor={(item => item.description)}
        />
      </Content>
    </Container>
  )
}

