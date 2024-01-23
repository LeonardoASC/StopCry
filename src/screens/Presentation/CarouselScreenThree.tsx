import React, { useRef, useState } from 'react';
import { Text, Dimensions, TouchableOpacity, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
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
  navigation: NavigationProp<RootStackParamList, 'Login'>;
  scrollViewRef: React.RefObject<ScrollView>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function CarouselScreenThree({ navigation, scrollViewRef, currentPage, setCurrentPage  }: CarouselScreenThreeProps) {

  const screenWidth = Dimensions.get('window').width;

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
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ padding: 10, marginTop: 20, backgroundColor: 'blue', borderRadius: 5 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Ir para o Login</Text>
      </TouchableOpacity>

      <View className="absolute bottom-4 right-[85%] flex flex-row justify-center items-center">
        <TouchableOpacity onPress={goToPreviousPage}>
          <Text className='text-white'>Back</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
