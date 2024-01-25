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

}

export function CarouselScreenThree({ navigation }: CarouselScreenThreeProps) {
 
  const screenWidth = Dimensions.get('window').width;

  return (
    <Screen >
      <Text>oi</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ padding: 10, marginTop: 20, backgroundColor: 'blue', borderRadius: 5 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Ir para o Login</Text>
      </TouchableOpacity>

      
    </Screen>
  );
}
