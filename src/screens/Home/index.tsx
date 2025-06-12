import { Alert, FlatList, Image } from "react-native";
import { ClearButton, ClearButtonText, Container, Content, ContentWrapper, EmptyText, FilterWrapper, Separator } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { Item } from "../../components/Item";
import { useEffect, useState } from "react";
import { itemsStorage, ItemStorage } from "../../storage/itemStorage";

import logoImg from '../../assets/logo.png';



export default function HomePage(){
  const [filter, setFilter] = useState("pending");
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState<ItemStorage[]>()

  function handleFilters(value: string){
    setFilter(value)
  }

  async function getItemsByStatus(){
    await itemsStorage.getByStatus(filter).then(response => setList(response));
  }

  async function handleAddItem() {
    if (!inputText.trim()){
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description: inputText,
      status: "pending"
    }

    await itemsStorage.add(newItem);
    Alert.alert("Adicionado", `Adicionado ${inputText}`)
    filter !== "pending" && setFilter("pending");
    setInputText("");
    getItemsByStatus();
  }

  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.remove(id);
      getItemsByStatus();
    } catch (e) {
      console.log(e);
      Alert.alert("Erro", "Não foi possível remover o item")
    }

  }

  async function onClear(){
    try {
      itemsStorage.clear();
      setList([]);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível remover todos os itens");
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja remover todos?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onClear()},
    ]);
  }

  useEffect(() => {
    getItemsByStatus();
  }, [filter])
  
  return(
    <Container>
      <Image source={logoImg} height={34} width={134} resizeMode="contain"  />

      <ContentWrapper>
        <Input value={inputText} onChangeText={setInputText} placeholder="O que precisa comprar?" placeholderTextColor="#74798b" />
        <Button onPress={handleAddItem} title="Adicionar" />
      </ContentWrapper>

      <Content>
        <FilterWrapper>
          <Filter status="pending" isActive={filter === "pending"} onClick={() => handleFilters("pending")} />
          <Filter status="done" isActive={filter === "done"} onClick={() => handleFilters("done")} />

          <ClearButton onPress={handleClear}>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </FilterWrapper>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 24, paddingBottom: 64 }}
          ItemSeparatorComponent={() => <Separator />}
          ListEmptyComponent={() => <EmptyText>Nenhum item aqui.</EmptyText>}
          data={list}
          renderItem={({item}) => {
            return(
              <Item status={item.status} description={item.description} onRemove={() => handleRemoveItem(item.id)} />
            );
          }}
          keyExtractor={(item => item.id)}
        />
      </Content>
    </Container>
  )
}

