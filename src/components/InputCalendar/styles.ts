import styled from "styled-components/native";

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  border: 1px solid
    ${({ hasError }: ContainerProps) => (hasError ? "red" : "#a6a6a6")};
  border-radius: 4px;
  height: 60px;
  padding: 10px 15px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  font-size: 16px;
`;

export const TextLabel = styled.Text``;
