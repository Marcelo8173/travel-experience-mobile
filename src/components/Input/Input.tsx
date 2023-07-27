import React from "react";
import { Container, TextInput, TextLabel } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    label: string;
    hasError?: boolean;
}

const Input = ({ label, hasError = false ,...rest }: InputProps) => {
  return (
    <Container hasError={hasError}>
      <TextLabel>{label}</TextLabel>
      <TextInput {...rest} placeholderTextColor="#666360" />
    </Container>
  );
};

export { Input };
