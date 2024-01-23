import React, { ReactNode, useRef, useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const ScreenWidth = Dimensions.get('window').width;



const Screen = styled.View`
  width: ${ScreenWidth}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1DB954;
`;


interface CarouselScreenThreeProps {
  scrollViewRef: React.RefObject<ScrollView>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function CarouselScreenTwo({ scrollViewRef, currentPage, setCurrentPage }: CarouselScreenThreeProps) {

  const numPages = 3;
  const screenWidth = Dimensions.get('window').width;

  const goToNextPage = () => {
    if (currentPage < numPages - 1) {
      const nextPage = currentPage + 1;
      scrollViewRef.current?.scrollTo({ x: nextPage * screenWidth, animated: true });
      setCurrentPage(nextPage);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      const previousPage = currentPage - 1;
      scrollViewRef.current?.scrollTo({ x: previousPage * screenWidth, animated: true });
      setCurrentPage(previousPage);
    }
  };
  return (
    <Screen >
      <Text>oi</Text>
      <View className="absolute bottom-4 right-[85%] flex flex-row justify-center items-center">
        <TouchableOpacity onPress={goToPreviousPage}>
          <Text className='text-white'>Back</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-4 left-[75%] flex flex-row justify-center items-center">
        <TouchableOpacity onPress={goToNextPage}
          className='bg-black w-20 h-20 rounded-full items-center justify-center'
        >
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
