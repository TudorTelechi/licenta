import {ImageSourcePropType} from 'react-native';
import {bran, Bucura, Carpati, Corvinilor} from '../assets/images';

export type PlacesDataType = {
  id: number;
  location: string;
  details: string;
  category: 'mountains' | 'temples' | 'lakes';
  image: ImageSourcePropType;
};

export const PlacesData: PlacesDataType[] = [
  {
    id: 0,
    location: 'Castelul Bran',
    details: '',
    category: 'temples',
    image: bran,
  },
  {
    id: 1,
    location: 'Castelul Corvinilor',
    details: 'blablabla',
    category: 'temples',
    image: Corvinilor,
  },
  {
    id: 2,
    location: 'Lacul Bucura',
    details: '',
    category: 'lakes',
    image: Bucura,
  },
  {
    id: 3,
    location: 'Carpati',
    details: '',
    category: 'mountains',
    image: Carpati,
  },
];
