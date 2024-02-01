import React, { useState, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

export function BtnGoToLogin() {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [rotation, setRotation] = useState(new Animated.Value(0));
  const [textScale, setTextScale] = useState(new Animated.Value(1)); // Controla escala do "oi"

  useEffect(() => {
    // Função para iniciar a animação
    const startAnimation = () => {
      animation.setValue(0);
      rotation.setValue(0);
      textScale.setValue(1);

      // Rotação e diminuição do "oi" em paralelo
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

      // Aumento do "tchau" durante a transformação do círculo em retângulo
      const scaleUpText = Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false, // Transformação de forma não suporta useNativeDriver: true
      });

      // Executar animações em sequência
      Animated.sequence([rotateAndScaleDown, scaleUpText]).start();
    };

    startAnimation(); // Inicia a animação automaticamente
  }, []); // Array de dependências vazio significa que isso será executado apenas na montagem

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const width = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  });

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 150],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 10],
  });

  const textOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1], // Fica invisível até 50% da transformação, depois começa a aparecer
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { width, height, borderRadius },
          { transform: [{ rotate: rotationInterpolate }] },
        ]}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
          onPress={() => console.log('TouchableOpacity pressionado')}>
          <Animated.Text style={{ transform: [{ scale: textScale }] }}>
            oi
          </Animated.Text>
          <Animated.Text style={{ opacity: textOpacity, position: 'absolute' }}>
            tchau
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    backgroundColor: 'tomato',
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
  },
});
