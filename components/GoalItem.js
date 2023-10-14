import { StyleSheet, Text, View } from "react-native"

const GoalItem = (props) => {
    
  return (
   <View  style={styles.listItems} >
        <Text  style={styles.listItem}>{props.data.index + 1}.</Text>
        <Text  style={styles.listItem}>{props.data.item.goal}</Text>
   </View>
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

  listItem:{
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    color:'white',
  }

})
