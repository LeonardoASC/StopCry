import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, InputStyled, Content, TextCategory, Card, CardTitle } from './styles'
import { Feather, AntDesign } from '@expo/vector-icons';

interface Item {
  text: string;

}

export function HomePrivate() {
  const [search, setSearch] = useState('');

  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    }, {
      id: '4',
      title: 'Third Item',
    },
    {
      id: '5',
      title: 'Third Item',
    },
    {
      id: '6',
      title: 'Third Item',
    },
    {
      id: '7',
      title: 'Third Item',
    },
    {
      id: '8',
      title: 'Third Item',
    },
    {
      id: '9',
      title: 'Third Item',
    },
    {
      id: '10',
      title: 'Third Item',
    },
  ];

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (

    <View style={{
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    }}>
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </View>

  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a', alignItems: 'center' }}>
      <Header>
        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Search</Text>
          <Feather name="camera" size={24} color="white" />
        </View>
        <InputStyled>
          <AntDesign name="search1" size={24} color={'black'} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Artists, Songs, or PodCasts"
            placeholderTextColor="#a3a3a3"
            className="flex-1 ml-2 text-white"
          />
        </InputStyled>
      </Header>

      <Content>
        <TextCategory>Your top Genres</TextCategory>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          />
        </View>
      </Content>

    </SafeAreaView>
  )
}
