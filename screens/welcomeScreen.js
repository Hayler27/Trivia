import React from 'react';
import { View, Text, Button } from 'react-native';
import { cardStyles } from './styles';

export default function WelcomeScreen({ navigation }) {
  const handleStartQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.title}>Bienvenido a la Trivia</Text>
      <Text style={cardStyles.subtitle}>Se te presentarán 10 preguntas de verdadero o falso</Text>
      <Text style={cardStyles.textTwo}>¿Eres capaz de alcanzar un score del 100%?</Text>
      <Button title="Comenzar" onPress={handleStartQuiz} style={cardStyles.button} />
    </View>
  );
}