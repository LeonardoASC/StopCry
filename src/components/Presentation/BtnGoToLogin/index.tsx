import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface BtnGoToLoginProps {
  onPress: (event: GestureResponderEvent) => void;
}

export function BtnGoToLogin({ onPress }: BtnGoToLoginProps) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [rotation, setRotation] = useState(new Animated.Value(0));
  const [textScale, setTextScale] = useState(new Animated.Value(1)); 
  const [showView, setShowView] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      animation.setValue(0);
      rotation.setValue(0);
      textScale.setValue(1);

      const rotateAndScaleDown = Animated.parallel([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(textScale, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]);

      const scaleUpText = Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false, 
      });

      Animated.sequence([rotateAndScaleDown, scaleUpText]).start();
    }
    startAnimation();
  }, []); 

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const width = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 200],
  });

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 50],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 10],
  });

  const textOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1], 
  });

  return (
      <Animated.View style={[
        { width, height, borderRadius, backgroundColor: 'white'},
        { transform: [{ rotate: rotationInterpolate }]}
      ]}>
        <TouchableOpacity
          style={{  justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}
          onPress={onPress}>
          <Animated.View style={{ transform: [{ scale: textScale }]}}>
            <FontAwesome name="music" size={30} color="#00ff22" />
          </Animated.View>
          <Animated.Text 
            style={{ 
              opacity: textOpacity,
              position: 'absolute',
              color: '#00ff22',
              fontWeight: 'bold',
              fontSize: 20,
              fontStyle: 'italic',
              letterSpacing: 5,
              textAlign: 'center',
              shadowColor: '#000', 
              shadowOffset: { width: 10, height: 40 }, 
              shadowOpacity: 0.3, 
              shadowRadius: 5, 
              textShadowColor: '#000', 
              textShadowOffset: { width: 2, height: 2 }, 
              textShadowRadius: 1,
              }}>
          Let's Get Started!
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
  );
}



