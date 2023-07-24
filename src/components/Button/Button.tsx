import React from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { RectButtonProperties } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProperties {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};

export { Button };
