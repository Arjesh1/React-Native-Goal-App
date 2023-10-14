import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputArea} placeholder='Your Goal'/>
        <Button title='Add Goal' />
      </View>
      <View></View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 60,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,


  },

  inputArea:{
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: '80%'
    

  }
 
});
