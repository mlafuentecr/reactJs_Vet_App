import React, { useState } from 'react';
import {  StyleSheet, View,  Modal, Button } from 'react-native';

import AddPlaceForm from './scr/components/AddPlaceForm';
import PlaceList from './scr/components/PlaceList';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [listOfGoals, setListGoals]   = useState({});
  const [isToggleVar, setisToggleVar] = useState(false);
  const [keyEditing, setkeyEditing]   = useState(false);
  const [isAddMode, setIsAddMood]   = useState(false);





  function goalOnpress() {

     console.log(enteredGoal.length+'goalOnpress ');
    let cleanText = enteredGoal.toString();
    cleanText = cleanText.replace(/^\s+|\s+$/g, '');
    cleanText === '' ? '' : goalAdd();
  }

  function endEditing(){
    console.log(' termine de editar ');
    setisToggleVar(false);
    goalInputClear();
  }

    function goalInputHandlerx(val) {
      console.log('input editing');
      //Remove Modal
      setIsAddMood(true);

    setEnteredGoal(val);
     if(isToggleVar===true){ listOfGoals[keyEditing] = { value: val };}
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

    setIsAddMood(false);
    setisToggleVar(false);
    goalInputClear();
  }

  function goalInputClear() {
   setEnteredGoal('');
  }

  const removeListItemx = key => {
    console.log('borrandoa');
 //Funciona ver 1
    // 1. Take a copy of myAppointments
    const listOfGoalsCopy = { ...listOfGoals };
    // //2. update state
    delete listOfGoalsCopy[key];
    //3 set to state
    setListGoals(listOfGoalsCopy);
  }








  return (
      <View style={styles.container}>




<View style={styles.addList}>

      <Modal
      animationType="slide"
      visible={isAddMode}
      onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>

      <AddPlaceForm
        goalInputHandler={goalInputHandlerx}
        goalInputClear={goalInputClear}
        goalOnpress={goalOnpress}
        enteredGoal={enteredGoal}
      />
  </Modal>


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





      <Button title='add goal'
      onPress={() => {setIsAddMood(true);}}>
      </Button>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop: 50,
  },
    addList: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop: 50,
  },
});
