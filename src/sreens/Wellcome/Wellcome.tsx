import { Container, Image, GradientOverlay, Title, SubTitle } from "./styles";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";

const Wellcome = () => {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Image source={require("../../../assets/pexels-artem-lysenko.png")} />
      <GradientOverlay></GradientOverlay>
      <Title>inspire-se e viva a melhor aventura</Title>
      <SubTitle>
        Prepare sua bagagem, e deixe-nos guiá-lo em uma jornada pensada no seu
        perfil.
      </SubTitle>
      <Button onPress={() => navigation.navigate("Login")} label="Começar" />
    </Container>
  );
};

export { Wellcome };
