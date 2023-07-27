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
import { validateFields } from "./validation";
import { api } from "../../api";

interface User {
  name: string;
  email: string;
  date_of_birth: string;
  password: string;
}

const CreateAccountPage = () => {
  const navigation = useNavigation<any>();
  const [user, setUser] = useState<User>({} as User);
  const [error, serError] = useState<String[]>([]);

  const handleChange = (key: string, value: any) => {
    serError([]);
    const obj: any = {
      ...user,
      [key]: value,
    };
    setUser(obj);
  };

  const handleSubmit = async () => {
    serError(validateFields(user));

    if (error.length !== 0) {
      return;
    }
    await api.post("/customer", user);
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

        <Title>Criar conta</Title>
      </Header>
      <ScrollView>
        <Content>
          <PrincipalTitle>Falta Pouco</PrincipalTitle>
          <SubTitle>
            Sua conta é necessária para a melhor personalização.
          </SubTitle>
          <Input
            hasError={error.includes("name")}
            autoCapitalize="none"
            label="Digite seu nome"
            placeholder="example"
            keyboardType="default"
            onChangeText={(value) => handleChange("name", value)}
          />
          <Divider />
          <Input
            hasError={error.includes("email")}
            autoCapitalize="none"
            label="Digite seu e-mail"
            placeholder="você@exemplo.com"
            keyboardType="email-address"
            onChangeText={(value) => handleChange("email", value)}
          />
          <Divider />
          <InputCalendar
            hasError={error.includes("date_of_birth")}
            autoCapitalize="none"
            label="Data de aniversario"
            placeholder="você@exemplo.com"
            getValue={(value) => handleChange("date_of_birth", value)}
          />
          <Divider />
          <Input
            hasError={error.includes("password")}
            secureTextEntry
            textContentType="password"
            label="Crie uma senha"
            placeholder="********"
            onChangeText={(value) => handleChange("password", value)}
          />

          <SubmitButton onPress={handleSubmit}>
            <TextButtonSubmit>Entrar</TextButtonSubmit>
          </SubmitButton>
        </Content>
      </ScrollView>
    </Container>
  );
};

export { CreateAccountPage };
