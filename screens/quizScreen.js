import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { cardStyles } from './styles';
import he from 'he';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export default function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const decodedQuestions = data.results.map(question => ({
          ...question,
          category: he.decode(question.category),
          difficulty: he.decode(question.difficulty).charAt(0).toUpperCase() + question.difficulty.slice(1),
          question: he.decode(question.question),
        }));
        setQuestions(decodedQuestions);
        setQuestionsWithAnswers(decodedQuestions.map(question => ({ ...question, isCorrect: false })));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAnswer = answer => {
    const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setQuestionsWithAnswers(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].isCorrect = isCorrect;
      return updatedQuestions;
    });
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Results', { score, totalQuestions: questions.length, questionsWithAnswers });
    }
  };

  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.title}>{questions.length > 0 && questions[currentQuestionIndex].category}</Text>
      <Text style={cardStyles.subtitle}>{questions.length > 0 && questions[currentQuestionIndex].difficulty}</Text>
      <ScrollView style={cardStyles.questionContainer}>
        <View style={cardStyles.questionBox}>
          <Text style={cardStyles.questionText}>{questions.length > 0 && questions[currentQuestionIndex].question}</Text>
        </View>
      </ScrollView>
      <View style={cardStyles.buttonContainer}>
        <TouchableOpacity
          style={[cardStyles.button, { backgroundColor: 'green', marginRight: 10 }]}
          onPress={() => handleAnswer('True')}>
          <Text style={cardStyles.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[cardStyles.button, { backgroundColor: 'red', marginLeft: 10 }]}
          onPress={() => handleAnswer('False')}>
          <Text style={cardStyles.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}