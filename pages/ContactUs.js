import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>contact@example.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>123-456-7890</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>123 Main Street, City, State</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
});

export default ContactScreen;