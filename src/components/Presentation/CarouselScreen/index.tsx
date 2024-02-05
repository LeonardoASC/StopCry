import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { Dimensions, View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import LogoStopCry from '../../../../assets/stopcry.png';
import CyberButton from 'react-native-cyberpunk-button';
import Svg, { Path, Defs, Stop } from "react-native-svg"
import { LinearGradient } from 'react-native-svg';
const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: ReactNode;
}

const AnimatedView = styled(Animated.View)`
  background-color: white;
  border-radius: 200px;
`;

const Screen = ({ children }: ScreenProps) => (
  <View
    style={{
      backgroundColor: '#02330e',
      width: ScreenWidth,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </View>
);

export function CarouselScreen() {
  const paddingAnim = useRef(new Animated.Value(1)).current;
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    // Animation for padding
    const animatePadding = () => {
      Animated.sequence([
        Animated.timing(paddingAnim, {
          toValue: 5,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(paddingAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(() => animatePadding());
    };
    animatePadding();

    // Animation for blinking
    const blinking = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );
    blinking.start();

    
    return () => {
      blinking.stop();
    };
  }, [paddingAnim, opacity]);


  return (
    <Screen>
      <View style={{ position: 'absolute', top: 0 }}>
        <Animated.View style={{ opacity }}>
          <Svg
            width={350}
            height={350}
            viewBox="0 0 701 626"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M170.5 0h361L701 626H0L170.5 0z"
              fill="url(#paint0_linear_106_2)"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_106_2"
                x1={350.5}
                y1={0}
                x2={350.5}
                y2={626}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#E8FFE8" />
                <Stop offset={1} stopColor="#02330E" />
              </LinearGradient>
            </Defs>
          </Svg>
        </Animated.View>
      </View>
      <AnimatedView
        style={{ padding: paddingAnim }}
      >
        <Image
          className='w-72 h-72'
          source={LogoStopCry}
        />
      </AnimatedView>
      <View className='flex-row mt-10 shadow'>
        <CyberButton label="StopCry_" mainColor="#" shadowColor="#fff" />
      </View>
    </Screen>
  );
}
