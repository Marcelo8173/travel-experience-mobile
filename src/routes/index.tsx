import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./app.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export { Routes };
