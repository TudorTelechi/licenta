import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, RadioButton, Text, TextInput} from 'react-native-paper';
import {firestore, storage} from '../../../config/firebaseConfig'; // Actualizează calea dacă e necesar

const categories = ['mountains', 'temples', 'lakes'];

type FormData = {
  id: string;
  name: string;
  location: string;
  details: string;
  category: 'mountains' | 'temples' | 'lakes';
  image: string;
};

const MyFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      let imageUrl = '';
      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const imageRef = ref(storage, `images/${data.id}`);
        await uploadBytes(imageRef, blob);
        imageUrl = await getDownloadURL(imageRef);
      }

      const documentData = {...data, image: imageUrl};
      await addDoc(collection(firestore, 'locations'), documentData);
      console.log('Document written with ID: ', data.id);

      navigation.goBack();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSpace} />
      <Text style={styles.title}>Formular de Adăugare</Text>

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="ID"
            keyboardType="numeric"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.id}
            style={styles.input}
          />
        )}
        name="id"
        defaultValue=""
      />
      {errors.id && <Text style={styles.error}>ID-ul este obligatoriu.</Text>}

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Name"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.name}
            style={styles.input}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && (
        <Text style={styles.error}>Numele este obligatoriu.</Text>
      )}

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Location"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.location}
            style={styles.input}
          />
        )}
        name="location"
        defaultValue=""
      />
      {errors.location && (
        <Text style={styles.error}>Locația este obligatorie.</Text>
      )}

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Details"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.details}
            style={styles.input}
          />
        )}
        name="details"
        defaultValue=""
      />
      {errors.details && (
        <Text style={styles.error}>Detaliile sunt obligatorii.</Text>
      )}

      <Text style={styles.label}>Category</Text>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <RadioButton.Group onValueChange={onChange} value={value}>
            {categories.map((category, index) => (
              <View key={index} style={styles.radioButton}>
                <RadioButton.Android
                  value={category}
                  status={value === category ? 'checked' : 'unchecked'}
                  uncheckedColor="#000"
                  color="#6200ee"
                />
                <Text>{category}</Text>
              </View>
            ))}
          </RadioButton.Group>
        )}
        name="category"
        defaultValue="mountains"
      />
      {errors.category && (
        <Text style={styles.error}>Categoria este obligatorie.</Text>
      )}

      <Button mode="contained" onPress={pickImage} style={styles.button}>
        Alege Imagine
      </Button>
      {image && <Image source={{uri: image}} style={styles.image} />}

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  topSpace: {
    height: 50, // Adjust this value to move the form further down
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default MyFormPage;
