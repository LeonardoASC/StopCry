import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

import CarouselScreen from './CarouselScreen';
import CarouselScreenTwo from './CarouselScreenTwo';
import CarouselScreenThree from './CarouselScreenThree';

export function Presentation() {
    const [currentScreen, setCurrentScreen] = useState(0);

    const screens = [
        <CarouselScreen key="screen1" />,
        <CarouselScreenTwo key="screen2" />,
        <CarouselScreenThree key="screen3" />
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

export default Presentation;
