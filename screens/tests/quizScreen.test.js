import React from 'react';
import { render } from '@testing-library/react-native';
import QuizScreen from '../quizScreen';

describe('QuizScreen component', () => {
  test('renders without crashing', () => {
    render(<QuizScreen />);
  });
});