import styled from "styled-components/native";



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
    background-color: #ffdbb9;
`;
export const TextCategory = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;

`;

export const Card = styled.View`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: blue;
  /* width: 40%; */
  height: 100%;
  margin-right: 10%;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  color: white;
`;