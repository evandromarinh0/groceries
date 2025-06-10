import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
`;

export const FilterText = styled.Text<{ isActive?: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: #828282;
  margin-left: 4px;

  ${props => props.isActive && css`
    color: #1e1e1e;
    `}
`;