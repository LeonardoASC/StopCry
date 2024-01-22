import React, { ReactNode } from 'react';
import { Text, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';

const ScreenWidth = Dimensions.get('window').width;


const Screen = styled.View`
  width: ${ScreenWidth}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1DB954;
`;

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Login'>;
};

export function CarouselScreenThree({ navigation }: Props) {
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
