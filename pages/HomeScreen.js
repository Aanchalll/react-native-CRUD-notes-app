import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const HomeScreen = () => {
  const [notes, setNotes] = useState([{ id: 0, label: 'hello' }])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Screen</Text>
      <Text style={styles.content}>This is a simple Home Screen component.</Text>

      <Text style={styles.heading2}>Tasks:</Text>
      <View style={styles.boxContainer}>
        <Button
          onPress={()=>{setNotes([...notes,{id:notes?.length, label:notes?.length+' task'}])}}
  title="Add Task"
  style={styles.button}
  accessibilityLabel="Learn more about this purple button"
        />
      </View>
<View style={styles.boxContainer}>
      {notes && notes?.length > 0 &&
        notes?.map((row, index) => {
          console.log(row, index)
          const { id } = row;
          return (
            <View style={styles.content} key={id}>
            {/* {Box(row.label)} */}
            <Text style={styles.box}>{row.label}</Text>
            </View>
          )
        })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  boxContainer:{
    backgroundColor:'fff',
    padding: '10px',
    width: '100%',
    display: 'grid',
    justifyContent: 'start',
    gridTemplateColumns: 'auto auto auto'

  },
  box:{
    backgroundColor:'red',
    padding: '30px',
    margin: '10px',
  },
  button: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;


const Box = (content) => {
  return <View style={styles.box}>

    {content}
  </View>;
};