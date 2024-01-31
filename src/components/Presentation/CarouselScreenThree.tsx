import React, { ReactNode, useEffect, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
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
  background-color: transparent;
  border-style: solid;
  border-right-width: ${ScreenWidth * 1.02}px;
  border-top-width: ${ScreenHeight * 1.02}px;
  border-right-color: transparent;
  border-top-color: black;
  position: absolute; 
  top: 0; 
  left:  -400px; 
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
  right: 400px; 
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
    
      Animated.timing(TriangleTop, {
        toValue: 400,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(TriangleBottom, {
        toValue: -400,
        duration: 2000,
        useNativeDriver: true,
      }).start();
  }, []);

  return (
    <Screen>
      <AnimatedTriangleCorner
        style={{
          transform: [
            { translateX: TriangleTop },
          ],
        }}
      />
      <AnimatedTriangleCornerBottomRight 
        style={{
          transform: [
            { translateX: TriangleBottom },
          ],
        }}
      />
    </Screen>
  );
}
