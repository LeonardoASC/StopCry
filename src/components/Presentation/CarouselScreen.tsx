import React, { ReactNode, useRef, useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import LogoStopCry from '../../../assets/stopcry.png';


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
      justifyContent: 'center'
    }}
  >
    {children}
  </LinearGradient>
);

export function CarouselScreen() {
  return (
    <Screen>
      <Image
        className='w-72 h-72 bottom-28'
        source={LogoStopCry}
      />
      <View className='flex-row'>
      <Text className='text-white font-bold text-5xl'>Stop</Text>
      <Text className='font-bold text-5xl'>Cry</Text>
      </View>
    </Screen>
  );
}
