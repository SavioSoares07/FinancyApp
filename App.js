import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoard } from "./src/screens/OnBoard";
import { Login } from "./src/screens/Login";
import { ForgotPassword } from "./src/screens/ForgetPassword";
import { CreateAccount } from "./src/screens/CreateAccount";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoard" component={OnBoard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SingUp" component={CreateAccount} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
