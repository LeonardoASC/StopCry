import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import Public from "./Public";
import Private from "./Private";

export function Routes() {

  let whoRoutes = 1;
  return (
    <NavigationContainer>
      {whoRoutes === 0 ? <Public /> : <Private />}
    </NavigationContainer>
  )
}