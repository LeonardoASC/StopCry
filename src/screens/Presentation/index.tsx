import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View, Dimensions, TouchableOpacity, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

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
    const scrollViewRef = useRef(null);

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            >
                <CarouselScreen  />
                <CarouselScreenTwo />
                <CarouselScreenThree navigation={navigation}/>

            </ScrollView>
            <View className="absolute bottom-4 left-0 right-0 flex flex-row justify-center  ">
                {renderPageIndicators()}
            </View>

        </SafeAreaView>
    )
}