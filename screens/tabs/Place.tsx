import {useRoute} from '@react-navigation/native';
import {useMemo} from 'react';
import {Text} from 'react-native-paper';
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
    <Container>
      <Header
        title="Detalii"
        description={place?.location}
        canGoBack
        screen="Home"
      />
      <Text>{place?.id}</Text>
      <Text>{place?.details}</Text>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
