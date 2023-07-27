import { createStackNavigator } from "@react-navigation/stack";
import { Wellcome, Login, CreateAccountPage, Home } from "../../src/sreens";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Wellcome" component={Wellcome} />
      <Screen name="Login" component={Login} />
      <Screen name="create-account" component={CreateAccountPage} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export { Router };
