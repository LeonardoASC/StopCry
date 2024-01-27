import React, { ReactNode, useRef, useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: ReactNode;
}

const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={['#0b2701', '#1DB954']} 
    style={{
      width: ScreenWidth,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }}
  >
    {children}
  </LinearGradient>
);




export function CarouselScreenTwo() {
  return (
    <Screen >
      <Text>oi</Text>
      
      <View className="absolute bottom-4 left-[75%] flex flex-row justify-center items-center">
  
      </View>
    </Screen>
  );
}
