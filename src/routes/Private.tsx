import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Presentation } from '../screens/Presentation';
const Tab = createBottomTabNavigator();
const iconSize = 20;

export default function Private() {
  return (
    <Tab.Navigator
        initialRouteName="MyStack"
        screenOptions={{
          tabBarActiveTintColor: '#1a9c00',
          headerShown: false,
          tabBarStyle: {
            height: 65,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            backgroundColor: '#1a1a1a'
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Presentation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={iconSize} color={color} />
            ),
          }}
        />
        
      </Tab.Navigator>
  )
}
