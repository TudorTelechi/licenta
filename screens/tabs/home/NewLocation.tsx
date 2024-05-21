import {addDoc, collection} from '@firebase/firestore';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button, RadioButton, Text, TextInput} from 'react-native-paper';
import {firestore} from '../../../config/firebaseConfig'; // Actualizează calea dacă e necesar

const categories = ['mountains', 'temples', 'lakes'];

type FormData = {
  id: string;
  name: string;
  location: string;
  details: string;
  category: 'mountains' | 'temples' | 'lakes';
};

const MyFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(firestore, 'locations'), data);
      console.log('Document written with ID: ', data.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <View style={styles.container}>
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

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default MyFormPage;
