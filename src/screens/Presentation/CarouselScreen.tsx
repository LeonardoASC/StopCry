import React, { ReactNode } from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ScreenWidth = Dimensions.get('window').width;

interface CarouselScreenProps {
  title: string;
  backgroundColor: string; 
}

interface CarouselScreenProps {
  title: string;
  backgroundColor: string;
  children?: ReactNode;
}

const Screen = styled.View<Pick<CarouselScreenProps, 'backgroundColor'>>`
  width: ${ScreenWidth}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || 'white'};
`;



export function CarouselScreen({ title, backgroundColor, children }: CarouselScreenProps) {
  return (
    <Screen backgroundColor={backgroundColor}>
      <Text>{title}</Text>
      {children}
    </Screen>
  );
}
