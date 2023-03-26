/* eslint-disable no-unused-vars */
import React, { useState } from 'react' 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from '../components/Button';

export default function App() {
  const [result, setresult] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{result}</Text>
      <View style={{paddingVertical: 10}}></View>
      <Button title="+" onPress={()=>setresult(result+1)} buttonStyle={styles.button} buttonTypes={ButtonTypes.OPERATOR}  />
      <Button title="-" onPress={()=>setresult(result-1)} buttonStyle={styles.button} buttonTypes={ButtonTypes.OPERATOR}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
  },
  button: {
    width:100,
    height: 100
  }
});

