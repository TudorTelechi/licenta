import {useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';
import {PlacesData} from '../../constants/places';
export default function PlaceScreen() {
  const route = useRoute();
  const placeId = (route.params as any)?.placeId;

  const place = useMemo(() => {
    return PlacesData.find(place => place.id === placeId);
  }, [placeId]);

  console.log(place);

  return (
    <ScrollView>
      <Container>
        <Header title="Detalii" canGoBack screen="Home" />
        <Card mode="contained">
          {place && <Card.Cover source={place?.image} />}
          <Card.Content>
            <Text variant="titleLarge">{place?.name}</Text>
            <Text variant="titleMedium">{place?.location}</Text>
            <Text variant="bodyMedium">{place?.details}</Text>
          </Card.Content>
        </Card>
        <Button
          onPress={() => {
            console.log(place);
          }}
          style={{backgroundColor: 'purple'}}
          labelStyle={{color: 'white'}}>
          Adaugă la Traseu
        </Button>
      </Container>
    </ScrollView>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
