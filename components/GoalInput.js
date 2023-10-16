import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, Modal, Image, Pressable } from "react-native"

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
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContent}>
      <Image source={require('../assets/images/goal.png')} style={styles.images}/>
        <TextInput style={styles.inputArea} placeholder='Your Goal' value={enteredGoalText} onChangeText={handleOnInputChange} />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Pressable onPress={addGoalHandler}>
              <Text style={styles.addButton}>Add Goal</Text>
            </Pressable>
         
          </View>
          <View style={styles.button}>
             <Pressable onPress={props.onCancel}>
              <Text style={styles.closeButton}>Cancel</Text>
            </Pressable>
          </View>
         
         
        </View>
        
      </View>
      </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContent: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 90,
    gap: 5,
    flex: 1,
  },

  images:{
    width: 300,
    height: 300,
    margin: 20,
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

  closeButton:{
    backgroundColor: 'red',
    color:'white',
    paddingHorizontal: 4,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
  },

  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
   
    
  },
   
  button:{
    width: 100,
    marginHorizontal: 8
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
