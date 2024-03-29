import {Ionicons} from '@expo/vector-icons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, FAB, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {
  BoldText,
  HeadingText,
  MediumText,
  RegularText,
} from '../../../components/StyledText';
import {CategoryData} from '../../../constants/categories';
import {PlacesData, PlacesDataType} from '../../../constants/places';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const {navigate}: NavigationProp<TabNavigationType> = useNavigation();

  console.log({activeCategory});
  // Filter places based on the active category and search query
  const filteredPlaces: PlacesDataType[] = PlacesData.filter(
    place => activeCategory == 'all' || place.category === activeCategory,
    // && place.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Function to handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <ScrollView>
        <Container>
          <HeaderViewContainer>
            <HeadingText>Bine ai venit!!!</HeadingText>

            <UserAvatar onPress={() => navigate('ProfileNavigation')}>
              <Ionicons name="person" size={12} color={'#000'} />
            </UserAvatar>
          </HeaderViewContainer>

          <FlatListContainer>
            <MediumText>Alege o categorie de mai jos</MediumText>

            <FlatList
              data={CategoryData}
              scrollEnabled={false}
              renderItem={({item}) => (
                <IconContainer
                  style={{
                    backgroundColor:
                      item.title === activeCategory ? '#000' : '#fff',
                    borderWidth: item.value === activeCategory ? 0 : 1,
                  }}
                  onPress={() => setActiveCategory(item.value)}>
                  <Icon source={item.image} />
                  {item.value === activeCategory ? (
                    <BoldText>{item.title}</BoldText>
                  ) : (
                    <RegularText>{item.title}</RegularText>
                  )}
                </IconContainer>
              )}
              horizontal
              contentContainerStyle={{gap: 12, width: '100%', flexWrap: 'wrap'}}
              showsHorizontalScrollIndicator={false}
            />
          </FlatListContainer>
          {/* Render the filtered places */}
          <View>
            {filteredPlaces.map(place => (
              <ItemContainer>
                <Card mode="outlined">
                  <Card.Cover source={place.image} />
                  <Card.Content>
                    <Text variant="titleLarge">{place.name}</Text>
                    <Text variant="bodyMedium">
                      {CategoryData.find(x => x?.value === place.category)
                        ?.title || ''}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      onPress={() => {
                        navigate('PlaceScreen', {placeId: place.id});
                      }}>
                      Vezi detalii
                    </Button>
                    <Button
                      onPress={() => {
                        navigate('PlaceScreen', {placeId: place.id});
                      }}>
                      Adauga la traseu
                    </Button>
                  </Card.Actions>
                </Card>
              </ItemContainer>
            ))}
          </View>
        </Container>
      </ScrollView>
      <FAB
        icon="cart"
        style={styles.fab}
        color="purple"
        onPress={() => {
          navigate('RouteScreen');
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    color: 'purple',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const HeaderViewContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserAvatar = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #d3d3d3;
  align-items: center;
  justify-content: center;
`;

const FlatListContainer = styled(View)`
  gap: 12px;
  margin-top: 24px;
`;

const ItemContainer = styled(View)`
  gap: 12px;
  margin-top: 24px;
`;

const IconContainer = styled(TouchableOpacity)`
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 100px;
  border-color: #d3d3d3;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

const Bold = styled(BoldText)`
  color: #fff;
`;
