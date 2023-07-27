import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  PrincipalTitle,
  SubTitle,
  SubmitButton,
  TextButtonSubmit,
  CreateAccount,
  CreateAccountText,
  Divider,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components";
import { api } from "../../api";
import { validateFields } from "./validation";

interface CredentialsProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<any>();
  const [credentials, setCredentials] = useState<CredentialsProps>({} as CredentialsProps);
  const [error, serError] = useState<String[]>([]);

  const handleChange = (key: string, value: any) => {
    serError([]);
    const obj: any = {
      ...credentials,
      [key]: value,
    };
    setCredentials(obj);
  };

  const handleSubmit = async () => {
    serError(validateFields(credentials));

    if (error.length !== 0) {
      return;
    }
    await api.post("/login", credentials);
  };

  return (
    <Container>
      <Header>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="#1F2233" />
        </TouchableOpacity>

        <Title>Sua conta</Title>
      </Header>
      <ScrollView>
        <Content>
          <PrincipalTitle>Falta Pouco</PrincipalTitle>
          <SubTitle>
            Sua conta é necessária para a melhor personalização.
          </SubTitle>
          <Input
            autoCapitalize="none"
            label="Digite seu e-mail"
            placeholder="você@exemplo.com"
            keyboardType="email-address"
            onChange={(value) => handleChange("email", value)}
            hasError={error.includes("email")}
          />
          <Divider />
          <Input
            secureTextEntry
            textContentType="password"
            label="Informe uma senha"
            placeholder="********"
            onChange={(value) => handleChange("password", value)}
            hasError={error.includes("email")}
          />

          <SubmitButton onPress={handleSubmit}>
            <TextButtonSubmit>Entrar</TextButtonSubmit>
          </SubmitButton>

          <CreateAccount onPress={() => navigation.navigate("create-account")}>
            <CreateAccountText>Criar conta</CreateAccountText>
          </CreateAccount>
        </Content>
      </ScrollView>
    </Container>
  );
};

export { Login };
