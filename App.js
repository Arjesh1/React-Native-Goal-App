import { useState } from 'react';
import {StyleSheet, View, FlatList, Button, Pressable, Text} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [totalGoals, setTotalGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const handleOnGoalSubmit = (enteredGoalText)=>{
    setTotalGoals(currentGoals => [...currentGoals, {goal:enteredGoalText, id: Date.now().toString() }])
    setModalIsVisible(false)
  }

  const handleOnGoalDelete = (id)=>{
       setTotalGoals(currentGoals =>{
        return currentGoals.filter((goal)=> goal.id !== id)
    }) 
  }

  const handleOnCloseModal =()=>{
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Pressable onPress={()=> setModalIsVisible(true)}>
          <Text style={styles.addButton}>Add new goal</Text>
        </Pressable>
       <GoalInput visible={modalIsVisible}  onAddGoal={handleOnGoalSubmit} onCancel={handleOnCloseModal}/> 
      </View>
      <View style={styles.goalContainer}>
        <FlatList data={totalGoals} keyExtractor={(item, i)=>{return item.id}} renderItem={itemData => {
          itemData.index
          return <GoalItem data={itemData} onDeleteItem={handleOnGoalDelete}/>
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    marginTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  inputContainer: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },

   addButton:{
    backgroundColor: 'purple',
    color:'white',
    paddingHorizontal: 4,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
  },

  goalContainer: {
    marginTop: 10,
    flex: 5,
  },
});
