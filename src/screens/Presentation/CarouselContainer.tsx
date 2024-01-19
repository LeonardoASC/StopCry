// CarouselContainer.tsx
import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

interface CarouselContainerProps {
  children: ReactNode;
}

export function CarouselContainer({ children }: CarouselContainerProps) {
  return (
    <Container>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </Container>
  );
}
