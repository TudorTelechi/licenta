import {useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';
import {PlacesData} from '../../constants/places';

export default function RouteScreen() {
  const route = useRoute();

  const selectedLocations: Array<number> =
    (route.params as any)?.selectedLocations || [];

  const places = useMemo(() => {
    return selectedLocations.map(placeId =>
      PlacesData.find(place => place.id === placeId),
    );
  }, [selectedLocations]);

  console.log({places});

  return (
    <ScrollView>
      <Container>
        <Header title="Trasee alese" canGoBack screen="Home" />
      </Container>
    </ScrollView>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
