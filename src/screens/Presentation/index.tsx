import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { BallStyled } from './styles';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';


type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
};
export function Presentation({ navigation }: Props) {
    return (
        <SafeAreaView className='flex-1 items-end justify-end'>
            <BallStyled onPress={() => navigation.navigate('Login')}>
                <Text className='text-white'>Go</Text>
            </BallStyled>
        </SafeAreaView>
    )
}