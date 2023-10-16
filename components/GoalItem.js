import { Pressable, StyleSheet, Text, View } from "react-native"

const GoalItem = (props) => {

    const deleteSelectedGoal = (id) =>{
     props.onDeleteItem(id)
    }
   
  return (
   <Pressable onPress={()=>deleteSelectedGoal(props.data.item.id)} android_ripple={{color: '#210644'}} styles={({pressed})=> pressed && styles.pressedItem} >
   <View style={styles.listItems} >
        <Text  style={styles.listItem}>{props.data.index + 1}.</Text>
        <Text  style={styles.listItem}>{props.data.item.goal}</Text>
   </View>
   </Pressable>
  
  )
}

export default GoalItem

const styles = StyleSheet.create({
    listItems :{
    flexDirection: 'row',
    gap: 10,
    borderRadius: 10,
    backgroundColor: 'purple',
    marginVertical: 5,
  },

  pressedItem:{
    opacity: 0.5,
  },

  listItem:{
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    color:'white',
  }

})
