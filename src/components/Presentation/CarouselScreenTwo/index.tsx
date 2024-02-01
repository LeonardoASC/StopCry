import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import PersonFuckMusic from '../../../../assets/Lotties/PersonFuckMusic.json'

const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={[
      '#1BB040',
      '#1BB040'
    ]}
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

export function CarouselScreenTwo() {
  const firstPhraseAnim = useRef(new Animated.Value(-ScreenWidth)).current;
  const slideAnim = useRef(new Animated.Value(-ScreenWidth)).current; 
  const [index, setIndex] = useState(0);

  const phrases = [
    "Listen to music while contemplating all the questionable choices you've made in life.",
    "Music: because sometimes it's better to drown your thoughts than face them.",
    "Turning your disappointments into playlists since 2024.",
    "Because life may not be beautiful, but at least music is.",
    "We may not always improve your day, but we can at least change the soundtrack.",
    "Because sometimes you just need a musical backdrop for your existential crisis.",
    "For those moments when even music doesn't know how to fix things.",
    "Escape from reality - because facing it is overrated.",
    "The perfect soundtrack for all your questionable choices.",
    "Not every song can change your life, but it can at least fill the awkward silence.",
    "Improving your bad mood with minor chords since 2024.",
    "Where the songs are more exciting than your real life.",
    "Providing a musical background for your everyday failures.",
    "Because sometimes the only thing you can control is the playlist.",
    "Your refuge for when optimism simply isn't an option."
  ];

  useEffect(() => {
    Animated.sequence([
      Animated.timing(firstPhraseAnim, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(firstPhraseAnim, {
        toValue: 0, 
        duration: 500, 
        useNativeDriver: true
      }),
    ]).start();
  
    slideAnim.setValue(-ScreenWidth);
  
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(slideAnim, {
        toValue: 0, 
        duration: 500, 
        useNativeDriver: true
      }),
      Animated.delay(2000),
      Animated.timing(slideAnim, {
        toValue: ScreenWidth,
        duration: 1000,
        useNativeDriver: true
      }),
    ]).start(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    });
  }, [index, slideAnim]);
  

  return (
    <Screen>
      <View className="w-full h-[40%] flex items-center justify-center ">
        <LottieView
          source={PersonFuckMusic}
          style={{height: '100%', width: 'auto'}}
          autoPlay
          loop
        />

      </View>
      <View className=" w-[100%] h-[40%] rounded-t-full items-center text-center">
      <Animated.Text
        style={{
          transform: [{ translateX: firstPhraseAnim }],
          color: '#fff', 
          fontWeight: 'bold',
          fontSize: 20
        }}
      >
        Music for you, poor fuck! :D
      </Animated.Text>
      <Animated.Text
        style={{
          transform: [{ translateX: slideAnim }],
          color: '#dfdfdf',
          textAlign: 'center', 
          margin: 10,
          width:'50%'
        }}
      >
        {phrases[index]}
      </Animated.Text>
      </View>
    </Screen>
  );
}
