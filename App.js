import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [totalGoals, setTotalGoals] = useState([])

  const handleOnInputChange = (enteredGoal)=>{
   setEnteredGoalText(enteredGoal)

  }

  const handleOnGoalSubmit = ()=>{
    setTotalGoals(currentGoals => [...currentGoals, enteredGoalText])
    setEnteredGoalText('')

  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputArea} placeholder='Your Goal' onChangeText={handleOnInputChange} />
        <Button title='Add Goal' onPress={handleOnGoalSubmit}/>
      </View>
      <View style={styles.goalContainer}>
        {totalGoals.map((goal, i)=> (
          <>
          <View key={goal} style={styles.listItems} >
            <Text style={styles.listItem}>{i+1}.</Text>
            <Text style={styles.listItem}>{goal}</Text>
            </View>
             </>


        ))}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flex: 1,


  },

  inputArea:{
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: '75%'
  
  },

  goalContainer: {
    flex: 5,
  },

  listItems :{
    flexDirection: 'row',
    gap: 10,
    borderRadius: 10,
    backgroundColor: 'purple',
     marginVertical: 5,

  },

  listItem:{
    fontSize: 25,
    paddingVertical: 5,
    paddingHorizontal: 8,
    color:'white',
  }
 
});
