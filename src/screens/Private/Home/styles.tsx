import styled from "styled-components/native";
import { Dimensions, ViewProps } from 'react-native';

const { width } = Dimensions.get('window');

interface ItemProps extends ViewProps {
  backgroundColor: string;
}

export const Header = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const InputStyled = styled.View`
    margin-top: 5%;
    width: 90%;
    height: 30%;
    background-color: white;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding-left: 3%;
`;

export const Content = styled.View`
    width: 90%;
    height: 80%;
    /* background-color: #ffdbb9; */
`;

export const TextCategory = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`;

export const Item = styled.View<ItemProps>`
  width: ${(width - 30) * 0.5}px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 15%;
  margin-left: 10%;
  
`;

export const AlbumImage = styled.Image`
 width: 100%;
 height: 100%;
`;

export const HalfSection = styled.View`
  width: 50%;
`;

export const ImageWrapper = styled.View`
  width: 50%;
  overflow: hidden;
  justify-content: flex-end;
`;
export const RotatedImageContainer = styled.View`
 width: 70%;
  height: 65%;
  background-color: black;
  border-radius: 5px;
  transform: rotate(20deg);
  position: relative;
  left: 40%;
`;
