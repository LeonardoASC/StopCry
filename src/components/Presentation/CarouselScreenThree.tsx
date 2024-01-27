import React, { ReactNode } from 'react';
import { Text, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenWidth = Dimensions.get('window').width;

interface ScreenProps {
  children: ReactNode;
}
const Screen = ({ children }: ScreenProps) => (
  <LinearGradient
    colors={['#0b2701', '#1DB954']} 
    style={{
      width: ScreenWidth,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }}
  >
    {children}
  </LinearGradient>
);

interface CarouselScreenThreeProps {
  navigation: NavigationProp<RootStackParamList, 'Login'>;

}

export function CarouselScreenThree({ navigation }: CarouselScreenThreeProps) {
 
  const screenWidth = Dimensions.get('window').width;

  return (
    <Screen >
      <Text>oi</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ padding: 10, marginTop: 20, backgroundColor: 'blue', borderRadius: 5 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Ir para o Login</Text>
      </TouchableOpacity>

      
    </Screen>
  );
}
