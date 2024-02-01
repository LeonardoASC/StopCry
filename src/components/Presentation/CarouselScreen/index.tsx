import React, { ReactNode, useRef, useEffect } from 'react';
import { Text, Dimensions, View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import LogoStopCry from '../../../../assets/stopcry.png';
import CyberButton from 'react-native-cyberpunk-button';

const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: ReactNode;
}
const AnimatedView = styled(Animated.View)`
  background-color: white;
  border-radius: 200px;
`;

const Screen = ({ children }: ScreenProps) => (
  
  <LinearGradient
    colors={['#1BB040', '#1BB040']}
    style={{
      width: ScreenWidth,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </LinearGradient>
);

export function CarouselScreen() {
  const paddingAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
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
  }, [paddingAnim]);

  return (
    <Screen>
      <AnimatedView
        style={{ padding: paddingAnim }}
      >
        <Image
          className='w-72 h-72'
          source={LogoStopCry}
        />
      </AnimatedView>
      <View className='flex-row mt-10 shadow'>
        {/* <Text className='text-white font-bold text-5xl'>Stop</Text>
        <Text className='font-bold text-5xl text-green-950 '>Cry</Text> */}
        <CyberButton label="StopCry_" mainColor="#" shadowColor="#fff" />
      </View>
    </Screen>
  );
}
