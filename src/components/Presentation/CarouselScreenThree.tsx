import React, { ReactNode, useEffect, useRef } from 'react';
import { Dimensions, Animated, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

interface ScreenProps {
  children: ReactNode;
}

interface CarouselScreenThreeProps {
  navigation: NavigationProp<RootStackParamList, 'Login'>;
}

const TriangleCorner = styled.View`
  width: 0;
  height: 0;
  /* background-color: transparent; */
  border-style: solid;
  border-right-width: ${ScreenWidth * 1.02}px;
  border-top-width: ${ScreenHeight * 1.02}px;
  border-right-color: transparent;
  border-top-color: black;
  position: absolute; 
  top: 0; 
  left:  -300px; 
`;
const AnimatedTriangleCorner = Animated.createAnimatedComponent(TriangleCorner);

const TriangleCornerBottomRight = styled.View`
  width: 0;
  height: 0;
  /* background-color: transparent; */
  border-style: solid;
  border-left-width: ${ScreenWidth * 1.02}px; 
  border-bottom-width: ${ScreenHeight * 1.02}px; 
  border-left-color: transparent; 
  border-bottom-color: white; 
  position: absolute; 
  bottom: 0; 
  right: -300px; 
  `;
const AnimatedTriangleCornerBottomRight = Animated.createAnimatedComponent(TriangleCornerBottomRight);



const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={['#1BB040', '#1BB040']}
    style={{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
    }}
  >
    {children}
  </LinearGradient>
);
export function CarouselScreenThree({ navigation }: CarouselScreenThreeProps) {
  const TriangleTop = useRef(new Animated.Value(0)).current;
  const TriangleBottom = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.parallel([
      Animated.timing(TriangleTop, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(TriangleBottom, {
        toValue: -300, // Volta para o centro
        duration: 1000, // Duração em milissegundos
        useNativeDriver: true
      }),
    ]).start();
  }, []);

  return (
    <Screen>
      <AnimatedTriangleCorner
        style={{ transform: [{ translateX: TriangleTop }] }}>
        <Text style={{right: -300, color:'red'}}></Text>
      </AnimatedTriangleCorner>
      <AnimatedTriangleCornerBottomRight
        style={{ transform: [{ translateX: TriangleBottom }] }}>
        <Text className='text-red-800'>oi</Text>
      </AnimatedTriangleCornerBottomRight>
    </Screen>
  );
}
