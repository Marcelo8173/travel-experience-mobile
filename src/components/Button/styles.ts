import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ theme }: any) => theme.colors.primary.primary_500};
  padding: 16px;
  border-radius: 8px;
  align-self: flex-start;
  margin-left: 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
