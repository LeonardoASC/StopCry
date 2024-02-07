import { View, Text, TextInput, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, InputStyled, Content, TextCategory, Item, Title, HalfSection, ImageWrapper, RotatedImageContainer, AlbumImage } from './styles'
import { Feather, AntDesign } from '@expo/vector-icons';

interface Item {
  id: string;
  color: string;
  title: string;
  album: string;
}

export function HomePrivate() {
  const [search, setSearch] = useState('');

  const TopGenres = [
    {
      id: '1',
      title: 'Pop',
      color: '#15962d',
      album: 'data:image/png;base64,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',
    },
    {
      id: '2',
      title: 'Rock',
      color: '#FF5733',
      album: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
      id: '3',
      title: 'Rap',
      color: '#3357FF',
      album: 'https://i1.sndcdn.com/artworks-VelHq4wvchXH-0-t500x500.jpg',
    },
    {
      id: '4',
      title: 'Funk',
      color: '#F1C40F',
      album: 'https://i.scdn.co/image/ab67616d0000b273af058ced08fd9fb7b002a1b3',
    },
    {
      id: '5',
      title: 'Jazz',
      color: '#8E44AD',
      album: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEcfI3mT5d0gI77zavLsPGyhCwQ2uF1o2Mt8_XU2ToQvuYcd_e3lYNZHowc7lRzGmoMw&usqp=CAU',
    },
  ];

  const topPodCasts = [
    {
      id: '1',
      title: 'The Daily',
      color: '#831800',
      album: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
      id: '2',
      title: 'Radiolab',
      color: '#3357FF',
      album: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    },
    {
      id: '3',
      title: 'Science Vs',
      color: '#057518',
      album: 'https://i1.sndcdn.com/artworks-VelHq4wvchXH-0-t500x500.jpg',
    },
    {
      id: '4',
      title: 'The Joe Rogan',
      color: '#F1C40F',
      album: 'https://i.scdn.co/image/ab67616d0000b273af058ced08fd9fb7b002a1b3',
    },
    {
      id: '5',
      title: 'Reply All',
      color: '#8E44AD',
      album: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEcfI3mT5d0gI77zavLsPGyhCwQ2uF1o2Mt8_XU2ToQvuYcd_e3lYNZHowc7lRzGmoMw&usqp=CAU',
    },
  ]

  const browseAllCategories = [
    {
      id: '1',
      title: 'Books',
      color: '#8B4513',
      album: 'a'
    },
    {
      id: '2',
      title: 'Music',
      color: '#1E90FF',
      album: 'a'
    },
    {
      id: '3',
      title: 'Podcasts',
      color: '#2E8B57',
      album: 'a'
    },
    {
      id: '4',
      title: 'News',
      color: '#FF6347',
      album: 'a'
    },
    {
      id: '5',
      title: 'Movies',
      color: '#DAA520',
      album: 'a'
    },
    {
      id: '6',
      title: 'TV Shows',
      color: '#6A5ACD',
      album: 'a'
    },
    {
      id: '7',
      title: 'Sports',
      color: '#4682B4',
      album: 'a'
    },
    {
      id: '8',
      title: 'Education',
      color: '#20B2AA',
      album: 'a'
    },
    {
      id: '9',
      title: 'Technology',
      color: '#FF4500',
      album: 'a'
    },
    {
      id: '10',
      title: 'Lifestyle',
      color: '#FFC0CB',
      album: 'a'
    }
  ];

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <Item key={item.id} backgroundColor={item.color} style={{marginTop: 0}}>
        <HalfSection>
          <Title>{item.title}</Title>
        </HalfSection>
        <ImageWrapper>
          <RotatedImageContainer>
            <AlbumImage source={{ uri: item.album }} />
          </RotatedImageContainer>
        </ImageWrapper>
      </Item>
    );
  }

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
        <View style={{ width: '100%', height: '20%' }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {TopGenres.map((item) => (
              <Item key={item.id} backgroundColor={item.color}>
                <HalfSection>
                  <Title>{item.title}</Title>
                </HalfSection>
                <ImageWrapper>
                  <RotatedImageContainer>
                    <AlbumImage source={{ uri: item.album }} />
                  </RotatedImageContainer>
                </ImageWrapper>
              </Item>
            ))}
          </ScrollView>
        </View>

        <TextCategory style={{ marginTop: '10%' }}>Popular podcast categories</TextCategory>
        <View style={{ width: '100%', height: '20%' }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {topPodCasts.map((item) => (
              <Item key={item.id} backgroundColor={item.color}>
                <HalfSection>
                  <Title>{item.title}</Title>
                </HalfSection>
                <ImageWrapper>
                  <RotatedImageContainer>
                    <AlbumImage source={{ uri: item.album }} />
                  </RotatedImageContainer>
                </ImageWrapper>
              </Item>
            ))}
          </ScrollView>
        </View>

        <TextCategory style={{ marginTop: '10%' }}>Browser All</TextCategory>
        <FlatList
          data={browseAllCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />


      </Content>

    </SafeAreaView>
  )
}
