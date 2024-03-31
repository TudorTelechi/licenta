import {useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';
import {PlacesData, PlacesDataType} from '../../constants/places';

export default function RouteScreen() {
  const route = useRoute();

  const selectedLocations: Array<number> =
    (route.params as any)?.selectedLocations || [];

  const places = useMemo(() => {
    return selectedLocations
      .map(placeId => PlacesData.find(place => place.id === placeId))
      .filter(place => place !== undefined) as PlacesDataType[];
  }, [selectedLocations]);

  return (
    <ScrollView>
      <Container>
        <Header title="Trasee alese" canGoBack screen="Home" />
        <SelectedLocationsContainer>
          {places.length > 0 ? (
            places.map(place => (
              <SelectedLocationItem key={place.id}>
                <LocationName>{place.name}</LocationName>

                {/* Afișează alte informații despre locație aici */}
              </SelectedLocationItem>
            ))
          ) : (
            <NoLocationsText>
              Nu ai selectat încă nicio locație.
            </NoLocationsText>
          )}
        </SelectedLocationsContainer>
      </Container>
    </ScrollView>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const SelectedLocationsContainer = styled.View`
  margin-top: 20px;
`;

const SelectedLocationItem = styled.View`
  margin-bottom: 20px;
`;

const LocationName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const LocationDescription = styled.Text`
  margin-top: 8px;
  font-size: 16px;
`;

const NoLocationsText = styled.Text`
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;
