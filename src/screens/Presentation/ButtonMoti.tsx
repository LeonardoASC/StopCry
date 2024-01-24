import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FontAwesome6 } from '@expo/vector-icons';

interface ButtonMotiProps {
  onPress?: () => void;
}

export function ButtonMoti({ onPress }: ButtonMotiProps) {
  const scale = useSharedValue(1);
  const [isButton, setIsButton] = useState(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: 70,
      height: 70,
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [
        { scaleX: scale.value },
        { scaleY: scale.value }
      ],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scaleX: 1 / scale.value },
        { scaleY: 1 / scale.value }
      ],
    };
  });

  const handlePress = () => {
    scale.value = withTiming(100, { duration: 1000 });
    setTimeout(() => {
      scale.value = withTiming(1, { duration: 1000 });
    }, 1000);

    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!isButton}>
      <Animated.View style={animatedStyle}>
        <Animated.View style={iconStyle}>
          <FontAwesome6 name="person-walking-arrow-right" size={24} color="black" />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};
