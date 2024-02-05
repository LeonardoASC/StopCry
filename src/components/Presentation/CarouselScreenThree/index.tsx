import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Dimensions, Animated, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigationTypes';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { BtnGoToLogin } from '../BtnGoToLogin';
import { Svg, Path } from 'react-native-svg';
import { SvgBgOne } from "../../../../assets/Svg/SvgBgOne"
import { SvgBgTwo } from '../../../../assets/Svg/SvgBgTwo';

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
  border-top-color: #1f1f1e;
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
  border-bottom-color: #1BB040; 
  position: absolute; 
  bottom: 0; 
  right: -300px; 
  /* display: flex; */
  `;
const AnimatedTriangleCornerBottomRight = Animated.createAnimatedComponent(TriangleCornerBottomRight);


const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={['#fff', '#fff']}
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
  const [showView, setShowView] = useState(false);
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
    const timer = setTimeout(() => {
      setShowView(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen>
      <AnimatedTriangleCorner
        style={{ transform: [{ translateX: TriangleTop }] }}>
      </AnimatedTriangleCorner>
      <View style={{ opacity: 0.6}}>
        <SvgBgOne />
      </View>
      <AnimatedTriangleCornerBottomRight
        style={{ transform: [{ translateX: TriangleBottom }] }}>
      </AnimatedTriangleCornerBottomRight>
      <View style={{right: '30%', top: '100%', opacity: 0.2}}>
        <SvgBgTwo />
      </View>
      <Animated.Text style={{
        transform: [{ translateX: slideAnimLeft }],
        position: 'absolute',
        color: 'white',
        top: '20%',
        left: '5%',
        textAlign: 'left',
        width: '60%',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        letterSpacing: 5
      }}>Enjoy 100% free music with customized playlists and shared tunes!</Animated.Text>
      <Animated.Text style={{
        transform: [{ translateX: slideAnimRight }],
        position: 'absolute',
        color: 'white',
        bottom: '20%',
        right: '5%',
        textAlign: 'right',
        width: '60%',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        borderRadius: 10,
        letterSpacing: 5
      }}>Experience minimally intrusive ads that don't block your features!</Animated.Text>
      {showView && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BtnGoToLogin />
        </View>
      )}
    </Screen>
  );
}
