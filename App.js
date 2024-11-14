import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Sergei</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF', 
    fontSize: 24,
  },
});
