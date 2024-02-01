import React, { ReactNode, useEffect, useRef } from 'react';
import { Dimensions, Animated, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigationTypes';
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
  background-color: transparent;
  border-style: solid;
  border-right-width: ${ScreenWidth * 1.02}px;
  border-top-width: ${ScreenHeight * 1.02}px;
  border-right-color: transparent;
  border-top-color: yellow;
  position: absolute; 
  top: 0; 
  left:  -300px; 
`;
const AnimatedTriangleCorner = Animated.createAnimatedComponent(TriangleCorner);

const TriangleCornerBottomRight = styled.View`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: ${ScreenWidth * 1.02}px; 
  border-bottom-width: ${ScreenHeight * 1.02}px; 
  border-left-color: transparent; 
  border-bottom-color: white; 
  position: absolute; 
  bottom: 0; 
  right: -300px; 
  display: flex;
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
  const slideAnimLeft = useRef(new Animated.Value(-ScreenWidth)).current;
  const slideAnimRight = useRef(new Animated.Value(ScreenWidth)).current;

  useEffect(() => {


    Animated.parallel([
      Animated.timing(TriangleTop, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(TriangleBottom, {
        toValue: -300,
        duration: 1000,
        useNativeDriver: true
      }),

      Animated.timing(slideAnimLeft, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(slideAnimRight, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
      }),
    ]).start();
  }, []);

  return (
    <Screen>
      <AnimatedTriangleCorner
        style={{ transform: [{ translateX: TriangleTop }] }}>
      </AnimatedTriangleCorner>
      <AnimatedTriangleCornerBottomRight
        style={{ transform: [{ translateX: TriangleBottom }] }}>
      </AnimatedTriangleCornerBottomRight>
      <Animated.Text style={{
        transform: [{ translateX: slideAnimLeft }],
        position: 'absolute',
        color: 'black',
        top: '40%',
        left: 50,
      }}>Texto 1</Animated.Text>
      <Animated.Text style={{
        transform: [{ translateX: slideAnimRight }],
        position: 'absolute',
        color: 'black',
        bottom: '40%',
        right: 50,
      }}>Texto 2</Animated.Text>
    </Screen>
  );
}
