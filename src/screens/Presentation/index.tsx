import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View, Dimensions, TouchableOpacity, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';

import { CarouselScreen } from './CarouselScreen';
import { CarouselScreenTwo } from './CarouselScreenTwo';
import { CarouselScreenThree } from './CarouselScreenThree';


type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
};

export function Presentation({ navigation }: Props) {

    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const screenWidth = Dimensions.get('window').width;
        const currentPageIndex = Math.round(scrollPosition / screenWidth);
        setCurrentPage(currentPageIndex);
    };


    const renderPageIndicators = () => {
        const indicators = [];
        const numPages = 3; // ajuste conforme o número de telas

        for (let i = 0; i < numPages; i++) {
            indicators.push(
                <View
                    key={i}
                    style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: currentPage === i ? 'white' : 'gray',
                        margin: 5,
                    }}
                />
            );
        }

        return indicators;
    };

    const screenWidth = Dimensions.get('window').width;
    const numPages = 3;

    const goToNextPage = () => {
        if (currentPage < numPages - 1) {
            const nextPage = currentPage + 1;
            scrollViewRef.current?.scrollTo({ x: nextPage * screenWidth, animated: true });
            setCurrentPage(nextPage);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            const previousPage = currentPage - 1;
            scrollViewRef.current?.scrollTo({ x: previousPage * screenWidth, animated: true });
            setCurrentPage(previousPage);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
            >
                <CarouselScreen />
                <CarouselScreenTwo />
                <CarouselScreenThree navigation={navigation} />
            </ScrollView>

            <View className="absolute bottom-4 right-[75%] flex flex-row justify-center items-center">
                <TouchableOpacity onPress={goToPreviousPage}
                    className='bg-black w-20 h-20 rounded-full items-center justify-center'
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View className="absolute bottom-4 left-0 right-0 flex flex-row justify-center items-center">
                {renderPageIndicators()}
            </View>
            <View className="absolute bottom-4 left-[75%] flex flex-row justify-center items-center">
                <TouchableOpacity onPress={goToNextPage}
                    className='bg-black w-20 h-20 rounded-full items-center justify-center'
                >
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}