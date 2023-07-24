import React from "react";
import { Container, TextInput, TextLabel } from "./styles";
import { TextInputProps } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface InputProps extends TextInputProps {
  label: string;
}

const InputCalendar = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <DateTimePicker
        style={{
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          right: 200,
        }}
        value={new Date()}
      />
    </Container>
  );
};

export { InputCalendar };
