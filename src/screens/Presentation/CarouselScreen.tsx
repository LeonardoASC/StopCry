import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ScreenWidth = Dimensions.get('window').width;


const Screen = styled.View`
  width: ${ScreenWidth}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1DB954;
`;



export function CarouselScreen() {
  return (
    <Screen>
      
      <Text>Bem-Vindo ao App!</Text>
      
    </Screen>
  );
}
