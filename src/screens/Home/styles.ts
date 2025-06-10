import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 64px;
  justify-content: center;
  align-items: center;

  background: #d0d2d8;
`;

export const ContentWrapper = styled.View`
  gap: 8px;
  width: 100%;
  margin-top: 42px;
  padding: 0 24px;

`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #e4e6ec;
  padding-bottom: 12px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background: #fff;
  margin-top: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 32px 24px;
`;

export const ClearButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const ClearButtonText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #828282;
`;