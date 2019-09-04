import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import AddPlaceForm from './scr/components/AddPlaceForm';
import PlaceList from './scr/components/PlaceList';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [listOfGoals, setListGoals] = useState({});
  //let isToggleVar = false;
  const [isToggleVar, setisToggleVar] = useState(false);
  const [keyEditing, setkeyEditing] = useState(false);

  function goalInputHandlerx(val) {
    setEnteredGoal(val);
     if(isToggleVar===true){ listOfGoals[keyEditing] = { value: val };}
  }

  function goalOnpress() {
    let cleanText = enteredGoal.toString();
    cleanText = cleanText.replace(/^\s+|\s+$/g, '');
    cleanText === '' ? alert('vacio') : goalAdd();
   
  }

  function endEditing(){
    setisToggleVar(false);
    goalInputClear();
  }

  function handlerLongClick(key) {
    if (isToggleVar) {
      setisToggleVar(false);
      setkeyEditing(null);
    } else {
      setisToggleVar(true);
      setkeyEditing(key);
      listOfGoals[key] = { value: enteredGoal };
    }
  }

  function goalAdd(key) {
    if (!isToggleVar) {
      key = Math.random().toString();
    } else {
      key = keyEditing;
    }

    listOfGoals[key] = { value: enteredGoal };
    setisToggleVar(false);
     goalInputClear();
  }

  function goalInputClear() {
   setEnteredGoal('');
  }

  function removeListItemx(key) {
    // 1. Take a copy of myAppointments
    const listOfGoalsCopy = { ...listOfGoals };

    // //2. update state
    delete listOfGoalsCopy[key];

    //3 set to state
    setListGoals(listOfGoalsCopy);
  }

  return (
    <View style={styles.container}>
      <AddPlaceForm
        goalInputHandler={goalInputHandlerx}
        goalInputClear={goalInputClear}
        goalOnpress={goalOnpress}
        enteredGoal={enteredGoal}
      />

      <PlaceList
        listOfGoals={listOfGoals}
        removelistItem={removeListItemx}
        handlerLongClick={handlerLongClick}
        goalInputHandler={goalInputHandlerx}
        isToggleVar={isToggleVar}
        keyEditing={keyEditing}
        endEditing={endEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
});
