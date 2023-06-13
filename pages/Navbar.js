import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Contact')}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;