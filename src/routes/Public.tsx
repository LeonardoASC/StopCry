import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Presentation } from '../screens/Presentation';
import { Login } from '../screens/Login';
import { BtnGoToLogin } from '../components/Presentation/BtnGoToLogin';

const Stack = createStackNavigator();

export default function Public() {
  return (
    <Stack.Navigator
    initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="BtnGoToLogin" component={BtnGoToLogin} />
      <Stack.Screen name="Presentation" component={Presentation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
