import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

const Stack = createNativeStackNavigator();

export default function App() {
  const exercises = [
    { id: '1', name: 'Push Ups', type: 'reps', suggestedId: '2' },
    { id: '2', name: 'Plank', type: 'duration', suggestedId: '6' },
    { id: '3', name: 'Leg Raises', type: 'reps', suggestedId: '5' },
    { id: '4', name: 'Running', type: 'duration', suggestedId: '3' },
    { id: '5', name: 'Jump Rope', type: 'duration', suggestedId: '4' },
    { id: '6', name: 'Sit Ups', type: 'reps', suggestedId: '1' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} exercises={exercises} />}
        </Stack.Screen>

        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
