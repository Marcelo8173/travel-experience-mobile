import React from "react";
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

const Login = () => {
  const navigation = useNavigation<any>();

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
          />
          <Divider />
          <Input
            secureTextEntry
            textContentType="password"
            label="Informe uma senha"
            placeholder="********"
          />

          <SubmitButton>
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
