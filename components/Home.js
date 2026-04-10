import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function Home({ navigation, exercises }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              navigation.push(
                item.type === 'reps'
                  ? 'RepetitionExercise'
                  : 'DurationExercise',
                { exercise: item, exercises }
              );
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    padding: 20,
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

  buttonContainer: {
    marginVertical: 8,
  },
});