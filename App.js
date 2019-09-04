import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import AddPlaceForm from './scr/components/AddPlaceForm';
import PlaceList from './scr/components/PlaceList';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [listOfGoals, setListGoals] = useState({});
  const [isToggleVar, setisToggleVar] = useState(false);
  const [keyEditing, setkeyEditing] = useState(false);

  function goalInputHandlerx(val) {
    setEnteredGoal(val);
     if(isToggleVar===true){ listOfGoals[keyEditing] = { value: val };}
  }

  function goalOnpress() {

     console.log(enteredGoal.length+'goalOnpress ');
    let cleanText = enteredGoal.toString();
    cleanText = cleanText.replace(/^\s+|\s+$/g, '');
    cleanText === '' ? alert('vacio') : goalAdd();
  }

  function endEditing(){
    console.log(' termine de editar ');
    setisToggleVar(false);
    goalInputClear();
  }

  function handlerLongClick(key) {
    if (isToggleVar) {
      setisToggleVar(false);
      setkeyEditing(null);
    } else {
       console.log(enteredGoal.length+'Editando ');
      setisToggleVar(true);
      setkeyEditing(key);

      if(enteredGoal != 0 ){
        goalAdd(key);
      }else{
        console.log('vacio');
      }

    }
  }

  function goalAdd(key) {
    console.log('tratando de add'+enteredGoal);

    if (!isToggleVar) {
      key = Math.random().toString();
    } else {
      key = keyEditing;
    }

    if(enteredGoal != 0 ){
        listOfGoals[key] = { value: enteredGoal };
      }else{
        console.log('vacio');
      }

    setisToggleVar(false);
    goalInputClear();
  }

  function goalInputClear() {
   setEnteredGoal('');
  }

  function removeListItemx(key) {
    console.log('borrando');
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
