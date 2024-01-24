import React, { ReactNode, useRef, useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonMoti } from './ButtonMoti';


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




interface CarouselScreenProps {
  scrollViewRef: React.RefObject<ScrollView>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function CarouselScreen({ scrollViewRef, currentPage, setCurrentPage }: CarouselScreenProps) {

  const numPages = 3;
  const screenWidth = Dimensions.get('window').width;

  const goToNextPage = () => {

    if (currentPage < numPages - 1) {
      setTimeout(() => {
        const nextPage = currentPage + 1;
        scrollViewRef.current?.scrollTo({ x: nextPage * screenWidth, animated: true });
        setCurrentPage(nextPage);
      }, 700);
    }
  };


  return (
    <Screen>
      <Text className='text-white font-bold'>Bem-Vindo ao App!</Text>
      <View className="absolute bottom-4 left-[75%] flex flex-row justify-center items-center">
        <ButtonMoti onPress={goToNextPage} />
      </View>
    </Screen>
  );
}
