import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Presentation'>;
};


export function Login({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-[#121212] p-4">
            <Text className="text-white text-2xl font-bold mb-6">Login to StopCry</Text>
            <TextInput 
                className="text-white bg-[#404040] w-full mb-4 p-3 rounded-lg"
                placeholder="Email"
                placeholderTextColor="#aaa"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                
            />

            <TextInput 
                className="text-white bg-[#404040] w-full mb-4 p-3 rounded-lg"
                placeholder="Password"
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <TouchableOpacity className="w-full mb-2">
                <Text className="text-[#1DB954] text-lg py-2 px-5 rounded-lg text-center">Login</Text>
            </TouchableOpacity>

            <View className="flex-row justify-between w-full">
                <TouchableOpacity onPress={() => { }}>
                    <Text className="text-[#1DB954] mb-4">Ainda não é usuário?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {  }}>
                    <Text className="text-[#1DB954] mb-4">Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Presentation')}>
                <Text className="text-[#1DB954] text-lg py-2 px-5 rounded-full border border-[#1DB954] text-center">Back to Presentation</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}