import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

import { CarouselScreen } from './CarouselScreen';
import { CarouselScreenTwo } from './CarouselScreenTwo';
import { CarouselScreenThree } from './CarouselScreenThree';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
};
export function Presentation({ navigation }: Props) {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef(null);
    const screens = [
        <CarouselScreen key="screen1" scrollViewRef={scrollViewRef}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />,
        <CarouselScreenTwo key="screen2" scrollViewRef={scrollViewRef}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />,
        <CarouselScreenThree 
            key="screen3" 
            navigation={navigation}
            scrollViewRef={scrollViewRef}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
    ];

    const changeScreen = () => {
        setCurrentScreen((prevScreen) => (prevScreen === screens.length - 1 ? 0 : prevScreen + 1));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.screenContainer}>
                {screens[currentScreen]}
            </View>
            <Button title="Change Screen" onPress={changeScreen} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenContainer: {
        flex: 1,
        width: '100%'
    }
});


