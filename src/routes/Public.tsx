import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Presentation } from '../screens/Presentation';
import { Login } from '../screens/Login';

const Stack = createStackNavigator();

export default function Public() {
  return (
    <Stack.Navigator
    initialRouteName="Presentation"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Presentation" component={Presentation} />
       <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
