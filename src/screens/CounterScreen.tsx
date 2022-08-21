import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter : {counter}</Text>
      <TouchableOpacity 
            onPress={() => setCounter(counter + 1)}
            style={styles.fabLocationBR}
        >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
            onPress={() => setCounter(counter - 1)}
            style={styles.fabLocationBL}
        >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  fab : {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
