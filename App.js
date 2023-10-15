import { useState } from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [totalGoals, setTotalGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

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
      <View style={styles.inputContainer}>
      <Button title='Add new goal.' color='purple' onPress={()=> setModalIsVisible(true)}/>
       <GoalInput visible={modalIsVisible}  onAddGoal={handleOnGoalSubmit}/> 
      </View>
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
    marginTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    
    


  },

  goalContainer: {
    flex: 5,
  },
});
