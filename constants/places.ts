import {ImageSourcePropType} from 'react-native';
import {MammothLake, OsakaCastle, TokyoTemple} from '../assets/images';

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
    image: OsakaCastle,
  },
  {
    id: 1,
    location: 'Tokyo Temple',
    details: 'blablabla',
    category: 'temples',
    image: TokyoTemple,
  },
  {
    id: 2,
    location: 'Mammoth Lake',
    details: '',
    category: 'lakes',
    image: MammothLake,
  },
  {
    id: 3,
    location: 'Carpati',
    details: '',
    category: 'mountains',
    image: MammothLake,
  },
];
