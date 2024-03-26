import {ImageSourcePropType} from 'react-native';
import {GlobeIcon, MountainIcon, ShrineIcon, WaterIcon} from '../assets/images';

type CategoryDataType = {
  id: number;
  value: string;
  title: string;
  image: ImageSourcePropType;
};

export const CategoryData: CategoryDataType[] = [
  {
    id: 1,
    value: 'all',
    title: 'Toate',
    image: GlobeIcon,
  },
  {
    id: 2,
    value: 'mountains',
    title: 'Munti',
    image: MountainIcon,
  },
  {
    id: 3,
    value: 'temples',
    title: 'Castele',
    image: ShrineIcon,
  },
  {
    id: 4,
    value: 'lakes',
    title: 'Lacuri',
    image: WaterIcon,
  },
];
