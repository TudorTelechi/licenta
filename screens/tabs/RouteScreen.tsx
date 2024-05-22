import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';
import {PlacesData} from '../../constants/places';

export default function RouteScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const selectedLocations: Array<number> =
    (route.params as any)?.selectedLocations || [];

  return (
    <ScrollView>
      <Container>
        <Header title="Locatii alese" canGoBack screen="Home" />
        <SelectedLocationsContainer>
          {selectedLocations.length > 0 ? (
            selectedLocations.map(placeId => {
              const place = PlacesData.find(place => place.id === placeId);
              if (!place) return null;
              return (
                <ItemContainer key={place.id}>
                  <Card mode="outlined">
                    <Card.Cover source={{uri: place.image as string}} />
                    <Card.Content>
                      <Text variant="titleLarge">{place.name}</Text>
                    </Card.Content>
                    <Card.Actions>
                      <Button
                        onPress={() => {
                          // Logică pentru ștergere din traseu
                        }}
                        style={{
                          backgroundColor: 'red',
                        }}>
                        <Text style={{color: 'white'}}>Șterge din traseu</Text>
                      </Button>
                    </Card.Actions>
                  </Card>
                </ItemContainer>
              );
            })
          ) : (
            // Mesajul și butonul atunci când nu sunt locații selectate
            <NoLocationsContainer>
              <NoLocationsText>Nu ai selectat nicio locație.</NoLocationsText>
            </NoLocationsContainer>
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

const ItemContainer = styled.View`
  margin-bottom: 20px;
`;

const NoLocationsContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const NoLocationsText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;
