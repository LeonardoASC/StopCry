import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Container, ScreenContainer, PageIndicatorContainer, IndicatorsContainer, ButtonMotiContainer, PageIndicator, ButtonBackContainer } from "./styles"

import { CarouselScreen } from '../../components/Presentation/CarouselScreen';
import { CarouselScreenTwo } from '../../components/Presentation/CarouselScreenTwo';
import { CarouselScreenThree } from '../../components/Presentation/CarouselScreenThree';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { ButtonMoti } from '../../components/Presentation/ButtonMoti';
import { Text, TouchableOpacity } from 'react-native';


type Props = {
    navigation: NavigationProp<RootStackParamList, 'Login'>;
};



export function Presentation({ navigation }: Props) {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const screens = [
        <CarouselScreen key="screen1" />,
        <CarouselScreenTwo key="screen2" />,
        <CarouselScreenThree
            key="screen3"
            navigation={navigation}
        />
    ];

    const goNextScreen = () => {
        setTimeout(() => {
            setCurrentScreen((prevScreen) => {
                const newScreen = (prevScreen + 1) % screens.length;
                setCurrentPage(newScreen);
                return newScreen;
            });
        }, 1000);
    };
    

    const goBackScreen = () => {
        setCurrentScreen((prevScreen) => {
            const newScreen = prevScreen - 1 < 0 ? screens.length - 1 : prevScreen - 1;
            setCurrentPage(newScreen);
            return newScreen;
        });
    };

    const renderPageIndicators = () => {
        return screens.map((_, index) => (
            <PageIndicator
                key={index}
                active={currentPage === index}
            />
        ));
    };

    return (
        <Container>
            <ScreenContainer>
                {screens[currentScreen]}
            </ScreenContainer>
            <PageIndicatorContainer>
                {currentScreen > 0 && (
                    <ButtonBackContainer>
                        <TouchableOpacity onPress={goBackScreen}>
                            <Text className='text-white'>Back</Text>
                        </TouchableOpacity>
                    </ButtonBackContainer>
                )}
                <IndicatorsContainer>
                    {renderPageIndicators()}
                </IndicatorsContainer>
                {currentScreen < screens.length - 1 && (
                    <ButtonMotiContainer>
                        <ButtonMoti onPress={goNextScreen} />
                    </ButtonMotiContainer>
                )}
            </PageIndicatorContainer>
        </Container>
    );
}

