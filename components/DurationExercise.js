import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const suggested = exercises.find(
    (e) => e.id === exercise.suggestedId
  );

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0')
    );
  };

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

    {/* ⏱️ TIMER DISPLAY */}
    <Text style={styles.displayText}>
    {formatTime(time)}
    </Text>
      

<Button
  title="Start"
  buttonStyle={styles.button}
  titleStyle={styles.buttonText}
  containerStyle={styles.buttonContainer}
  onPress={startTimer}
/>

<Button
  title="Stop"
  buttonStyle={styles.button}
  titleStyle={styles.buttonText}
  containerStyle={styles.buttonContainer}
  onPress={stopTimer}
/>

<Button
  title="Reset"
  buttonStyle={styles.button}
  titleStyle={styles.buttonText}
  containerStyle={styles.buttonContainer}
  onPress={resetTimer}
/>

<Button
  title={`Suggested: ${suggested?.name}`}
  buttonStyle={styles.button}
  titleStyle={styles.buttonText}
  containerStyle={styles.buttonContainer}
  onPress={() => {
    navigation.push(
      suggested.type === 'reps'
        ? 'RepetitionExercise'
        : 'DurationExercise',
      { exercise: suggested, exercises }
    );
  }}
/>

<Button
  title="Home"
  buttonStyle={styles.button}
  titleStyle={styles.buttonText}
  containerStyle={styles.buttonContainer}
  onPress={() => navigation.navigate('Home')}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 20,
  },

  displayText: {
    fontSize: 48,
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 30,
  },

  buttonContainer: {
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#fb8500',
    borderRadius: 25,
    paddingVertical: 12,
  },

  buttonText: {
    fontFamily: 'serif',
    fontSize: 18,
  },
});