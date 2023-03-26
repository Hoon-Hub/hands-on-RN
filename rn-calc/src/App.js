/* eslint-disable no-unused-vars */
import React, { useState } from 'react' 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Button, { ButtonTypes } from '../components/Button';

export default function App() {
  const [result, setresult] = useState(0)
  const windowWidth = useWindowDimensions().width
  const width = windowWidth / 4

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}></View>
        <View style={styles.number}>
          <Button title="1" onPress={()=>{}} buttonStyle={{width, height: width}} buttonTypes={'NUMBER'}></Button>
          <Button title="2" onPress={()=>{}} buttonStyle={{width, height: width * 2}}  buttonTypes={'NUMBER'}></Button>
          <Button title="3" onPress={()=>{}} buttonStyle={{width: width * 2, height: width}}  buttonTypes={'NUMBER'}></Button>
        </View>
        <View style={styles.bottom}></View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#ffffff',
    paddingBottom: 30,
    paddingRight: 30
  },
  resultContainer: {
    flex:1,
    backgroundColor: '#000000',
    paddingBottom: 30,
    paddingRight: 30
  },
  buttonContainer: {
    backgroundColor: '#A5B4FC',
  },
  leftPad: {},
  number: {},
  bottom: {},
});

