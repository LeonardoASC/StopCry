import styled from "styled-components/native";

interface PageIndicatorProps {
    active: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative; 
`;

export const ScreenContainer = styled.View`
    flex: 1;
    width: 100%;
    position: relative; 
`;

export const PageIndicatorContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: absolute; 
    bottom: 10px; 
    left: 0;
    right: 0;
    z-index: 1;
`;

export const IndicatorsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonMotiContainer = styled.View`
    position: absolute;
    right: 5%;
    bottom: 5%;  
`;
export const ButtonBackContainer = styled.View`
    position: absolute;
    left: 5%;
    bottom: 5%;  
`;

export const PageIndicator = styled.View<PageIndicatorProps>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.active ? '#ff0000' : '#ccc'};
    margin: 5px;
`;
