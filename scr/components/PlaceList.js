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
        />
      );
    }
  }

  function deleteItem(key) {
    console.log('should delete');
    if(!props.isToggleVare){
      props.removelistItem(key);
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
<View key={key} style={styles.listItem}  >

    <TouchableOpacity activeOpacity={0.6} onLongPress={() => editableVar(key)} style={styles.listItemText} >
        <TextInput

          editable={checkEditable(key)}
          onChangeText={props.goalInputHandler}
          value={props.listOfGoals[key].value}
          onEndEditing={props.endEditing}



        />
    </TouchableOpacity>

    <Text  style={styles.iconWrap} onPress={()=> deleteItem(key) }> { icon(key) } </Text>
     </View>
  ));
  {
    /* tambien esta flatlist pero esta complejo */
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
iconWrap: {
  alignItems: 'center',
     justifyContent: 'center',
      width: '15%',
},
  listItemText: {
    width: '90%',
  },
});

export default PlaceList;
