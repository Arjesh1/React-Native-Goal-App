import { useState } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [totalGoals, setTotalGoals] = useState([])
 

  const handleOnGoalSubmit = (enteredGoalText)=>{
    setTotalGoals(currentGoals => [...currentGoals, {goal:enteredGoalText, id: Date.now().toString() }])
  }

  const handleOnGoalDelete = (id)=>{
     setTotalGoals(currentGoals =>{
        return currentGoals.filter((goal)=> goal.id !== id)
    }) 
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleOnGoalSubmit}/>
      <View style={styles.goalContainer}>
        <FlatList data={totalGoals} keyExtractor={(item, i)=>{return item.id}} renderItem={itemData => {
          itemData.index
          return <GoalItem data={itemData} onDeleteItem={handleOnGoalDelete}/>
        }}/>
          
        
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
});
