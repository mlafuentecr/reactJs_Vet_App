import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaceList = props => {
  useEffect(() => {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );
  }, []);

  function keyboardDidHide() {
    console.log('ocultano');
    Keyboard.removeAllListeners('keyboardDidHide');
  }

  function editableVar(key) {
    props.handlerLongClick(key);
    props.key = key;
  }

  function icon(key) {
    if (props.isToggleVar === true && props.keyEditing === key) {
      return (
        <Ionicons
          name="md-create"
          size={22}
          color="red"
          style={styles.closeIcon}
          editable={true}
        />
      );
    } else {
      return (
        <Ionicons
          name="md-close-circle"
          size={22}
          color="gray"
          style={styles.closeIcon}
          onPress={() => props.removelistItem(key)}
        />
      );
    }
  }

  function checkEditable(key) {
    if (props.isToggleVar === true && props.keyEditing === key) {
      return true;
    } else {
      return false;
    }
  }

  const placesOutput = Object.keys(props.listOfGoals).map(key => (
    <TouchableOpacity onLongPress={() => editableVar(key)}>
      <View style={styles.listItem} key={key}>
        <TextInput
          style={styles.listItemText}
          editable={checkEditable(key)}
          onChangeText={props.goalInputHandler}
          value={props.listOfGoals[key].value}
          onEndEditing={props.endEditing}
        />

        <Text> {icon(key)} </Text>
      </View>
    </TouchableOpacity>
  ));
  {
    /* tambien esta flatlist pero esta complejo*/
  }

  return <ScrollView>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    minHeight: 50,
  },
  closeIcon: {},
  listItemText: {
    width: '90%',
  },
});

export default PlaceList;
