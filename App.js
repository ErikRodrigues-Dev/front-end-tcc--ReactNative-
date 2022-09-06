import React from 'react';
import { StyleSheet, View } from 'react-native';
import TelaLogin from './src/components/telaLogin';


export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin/>
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
});
