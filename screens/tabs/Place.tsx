import {useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';
import useLocations from '../../hooks/useLocations';

export default function PlaceScreen() {
  const route = useRoute();
  const placeId = (route.params as any)?.placeId;
  console.log({placeId});

  const {locations} = useLocations();

  const place = useMemo(() => {
    return locations.find(place => place.id === placeId);
  }, [locations, placeId]);

  const image = place?.image;
  console.log(image);

  return (
    <ScrollView>
      <Container>
        <Header title="Detalii" canGoBack screen="Home" />
        <Card mode="contained">
          {image && <Card.Cover source={{uri: image as string}} />}
          <Card.Content>
            <Text variant="titleLarge">{place?.name}</Text>
            <Text variant="titleMedium">{place?.location}</Text>
            <Text variant="bodyMedium">{place?.details}</Text>
          </Card.Content>
        </Card>
      </Container>
    </ScrollView>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
