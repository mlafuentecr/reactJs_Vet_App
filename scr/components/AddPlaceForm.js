import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const AddPlaceForm = props => {

  return (
    <View style={styles.formAdd}>
      <Text style={styles.title}> Add A Goal 3</Text>
      <TextInput
        style={styles.inputIndex}
        placeholder="An awesome placeholder"
        onChangeText={props.goalInputHandler}
        onFocus={props.goalInputClear}
        value={props.enteredGoal}
        onEndEditing={  props.goalOnpress  } //No encontre 'enter' en react este es mi equivalente
      />

      <Button title="add" style={styles.btnAdd} onPress={  props.goalOnpress } />
    </View>
  );
};


const styles = StyleSheet.create({
  formAdd: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    minWidth: '100%',
    margin: 10,
  },
  inputIndex: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#0000ff',
    padding: 5,
    marginBottom: 5,
    marginRight: 10,
    minWidth: '80%',
  },
  btnAdd: {
    color: 'red',
    backgroundColor: 'red',
    minWidth: '20%',
  },
});

export default AddPlaceForm;
