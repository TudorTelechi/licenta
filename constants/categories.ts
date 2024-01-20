import {ImageSourcePropType} from 'react-native';
import {GlobeIcon, MountainIcon, ShrineIcon, WaterIcon} from '../assets/images';

type CategoryDataType = {
  id: number;
  title: string;
  image: ImageSourcePropType;
};

export const CategoryData: CategoryDataType[] = [
  {
    id: 1,
    title: 'Toate',
    image: GlobeIcon,
  },
  {
    id: 2,
    title: 'Munti',
    image: MountainIcon,
  },
  {
    id: 3,
    title: 'Castele',
    image: ShrineIcon,
  },
  {
    id: 4,
    title: 'Lacuri',
    image: WaterIcon,
  },
];
