import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [count, setCount] = useState(0);

  const suggested = exercises.find(
    (e) => e.id === exercise.suggestedId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <Text style={styles.displayText}>
        {count}
      </Text>

      {/* ADD REP BUTTON */}
      <Button
        title="Add Rep"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        containerStyle={styles.buttonContainer}
        onPress={() => setCount(prev => prev + 1)}
      />

      {/* RESET */}
      <Button
        title="Reset"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        containerStyle={styles.buttonContainer}
        onPress={() => setCount(0)}
      />

      {/* Suggested */}
      <Button
        title={`Suggested: ${suggested?.name}`}
        buttonStyle={styles.button}
        onPress={() => {
          navigation.push(
            suggested.type === 'reps'
              ? 'RepetitionExercise'
              : 'DurationExercise',
            { exercise: suggested, exercises }
          );
        }}
      />

      {/* Home */}
      <Button
        title="Home"
        buttonStyle={styles.button}
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
    fontSize: 40,
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#fb8500',
    borderRadius: 25,
    marginVertical: 8,
  },
});