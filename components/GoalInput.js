import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const handleOnInputChange = (enteredGoal)=>{
   setEnteredGoalText(enteredGoal)
  }

  const addGoalHandler = ()=>{
    props.onAddGoal(enteredGoalText)
     setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.inputArea} placeholder='Your Goal' value={enteredGoalText} onChangeText={handleOnInputChange} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
    width: '75%',
    borderRadius: 10,
  
  },
})
