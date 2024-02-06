import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { HomePrivate } from '../screens/Private/Home';
import { Search } from '../screens/Private/Search';
import { Library } from '../screens/Private/Library';

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
        name="HomePrivate"
        component={HomePrivate}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-music-outline" size={iconSize} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}
