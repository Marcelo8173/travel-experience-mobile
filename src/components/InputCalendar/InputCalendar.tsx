import React from "react";
import { Container, TextInput, TextLabel } from "./styles";
import { TextInputProps } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface InputProps extends TextInputProps {
  label: string;
  hasError?: boolean;
  getValue?: (value: string) => void;
}

const InputCalendar = ({
  label,
  getValue,
  hasError = false,
  ...rest
}: InputProps) => {
  return (
    <Container hasError={hasError}>
      <TextLabel>{label}</TextLabel>
      <DateTimePicker
        onChange={(value) => {
          const timestamp = value.nativeEvent.timestamp;
          const date = new Date(timestamp!).toISOString();
          !!getValue && getValue(date);
        }}
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
