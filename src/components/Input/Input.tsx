import React from "react";
import { Container, TextInput, TextLabel } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    label: string;
}

const Input = ({ label ,...rest }: InputProps) => {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <TextInput {...rest} placeholderTextColor="#666360" />
    </Container>
  );
};

export { Input };
