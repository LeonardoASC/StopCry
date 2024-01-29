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
      justifyContent: 'space-between'
    }}
  >
    {children}
  </LinearGradient>
);




export function CarouselScreenTwo() {
  return (
    <Screen>
      <View className="w-full h-[40%] flex-row">
        
      </View>
      <View className="bg-black w-full h-[60%] flex-row rounded-t-full items-center justify-center">
        <Text className='text-gray-400'>Music for you poor fuck!</Text>
      </View>
    </Screen>
  );
}
