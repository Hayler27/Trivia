import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { cardStyles } from './styles';

export default function ResultScreen({ route, navigation }) {
  const { score, totalQuestions, questionsWithAnswers } = route.params;

  const handlePlayAgain = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={cardStyles.textTwo}>Score: {score} / {totalQuestions}</Text>
      <ScrollView style={{ flex: 1 }}>
        {questionsWithAnswers.map((item, index) => (
          <View key={index} style={cardStyles.textTwo}>
            <View style={cardStyles.textListContainer}>
              <Text style={cardStyles.textList}>{item.question}</Text>
              <Text style={item.isCorrect ? cardStyles.resultListCorrect : cardStyles.resultListIncorrect}>
                {item.isCorrect ? 'Correcto' : 'Incorrecto'}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Button title="Jugar de nuevo" onPress={handlePlayAgain} style={cardStyles.button} />
    </View>
  );
}