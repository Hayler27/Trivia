import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResultScreen from '../resultScreen';

describe('ResultScreen component', () => {
  const route = {
    params: {
      score: 8,
      totalQuestions: 10,
      questionsWithAnswers: [
        { question: 'Question 1', isCorrect: true },
        { question: 'Question 2', isCorrect: false },
        { question: 'Question 3', isCorrect: true },
      ],
    },
  };

  test('renders correctly', () => {
    const { getByText } = render(<ResultScreen route={route} />);
    const scoreText = getByText('Score: 8 / 10');
    expect(scoreText).toBeTruthy();
  });

  test('play again button navigates to WelcomeScreen', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<ResultScreen route={route} navigation={navigationMock} />);
    const playAgainButton = getByText('Jugar de nuevo');
    fireEvent.press(playAgainButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Welcome');
  });
});