import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Presentation'>;
};

export function Login({ navigation }: Props) {
    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <Text>Login</Text>
            <Text onPress={() => navigation.navigate('Presentation')}>
                Back to Presentation</Text>
        </SafeAreaView>
    )
}