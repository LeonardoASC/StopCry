import React, { ReactNode, useRef, useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';



const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: ReactNode;
}

const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={['#1DB954', '#000']} 
    style={{
      width: ScreenWidth,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </LinearGradient>
);

export function CarouselScreen() {
  return (
    <Screen>
      <Text className='text-white font-bold'>Bem-Vindo ao App!</Text>
      <View className="absolute bottom-4 left-[75%] flex flex-row justify-center items-center">
      </View>
    </Screen>
  );
}
