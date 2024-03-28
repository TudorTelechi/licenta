import {ImageSourcePropType} from 'react-native';
import {bran, Bucura, Carpati, Corvinilor} from '../assets/images';

export type PlacesDataType = {
  id: number;
  name: string;
  location: string;
  details: string;
  category: 'mountains' | 'temples' | 'lakes';
  image: ImageSourcePropType;
};

export const PlacesData: PlacesDataType[] = [
  {
    id: 0,
    name: 'Castelul Bran',
    location:
      'Str. General Traian Moșoiu nr. 24\nLocalitate Bran\nJudeț Brașov\n',
    details: '',
    category: 'temples',
    image: bran,
  },
  {
    id: 1,
    name: 'Castelul Corvinilor',
    location:
      'Str. Curtea Corvineștilor nr. 1-3\nLocalitate: Hunedoara\nȚara: România\n',
    details:
      'Deschide la 9:00\nÎnchide la 18:00\n\nPret Bilet:15RON\n\nBine aţi venit în cetatea Hunedoarei, devenită castelul celui mai strălucit rege al Ungariei medievale, Matia Corvin. Monumentul are un farmec aparte datorat stilurilor de construcţie diverse, a prezenţei unor inovaţii în plan militar şi civil, precum şi vieţii tumultoase de curte care l-a animat vreme de peste 400 de ani. Castelul Corvinilor impresionează prin prezenţa sa, ce domină oraşul Hunedoara. Pentru cei atraşi de evul mediu, castelul reprezintă un monument singular în România şi printre cele mai atractive din spaţiul european.',
    category: 'temples',
    image: Corvinilor,
  },
  {
    id: 2,
    name: 'Lacul Bucura',
    location: 'Lacul Bucura',
    details: '',
    category: 'lakes',
    image: Bucura,
  },
  {
    id: 3,
    name: 'Carpati',
    location: 'Carpati',
    details: '',
    category: 'mountains',
    image: Carpati,
  },
];
