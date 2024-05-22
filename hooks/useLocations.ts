import {collection, getDocs} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {firestore as db} from '../config/firebaseConfig';
import {PlacesDataType} from '../constants/places';

export default function useLocations() {
  const [locations, setLocations] = useState<Array<PlacesDataType>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'locations'));

        const documents: Array<PlacesDataType> = [];
        querySnapshot.forEach(doc => {
          const data: any = doc.data();
          documents.push({...data});
        });

        console.log(documents);
        setLocations(documents);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return {
    locations,
  };
}
