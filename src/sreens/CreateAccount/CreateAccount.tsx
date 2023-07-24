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
  Divider,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, InputCalendar } from "../../components";

const CreateAccountPage = () => {
  const navigation = useNavigation<any>();
  const [show, setShow] = useState(false);

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

        <Title>Criar conta</Title>
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
          <InputCalendar
            autoCapitalize="none"
            label="Data de aniversario"
            placeholder="você@exemplo.com"
          />
          <Divider />
          <Input
            secureTextEntry
            textContentType="password"
            label="Crie uma senha"
            placeholder="********"
          />
          <Divider />
          <Input
            secureTextEntry
            textContentType="password"
            label="Repita sua senha"
            placeholder="********"
          />

          <SubmitButton>
            <TextButtonSubmit>Entrar</TextButtonSubmit>
          </SubmitButton>
        </Content>
      </ScrollView>
    </Container>
  );
};

export { CreateAccountPage };
