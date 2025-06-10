import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
`;

export const ItemButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ItemDescription = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
`;
