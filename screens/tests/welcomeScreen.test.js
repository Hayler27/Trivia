import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WelcomeScreen from '../welcomeScreen';

describe('WelcomeScreen component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<WelcomeScreen />);
    const titleElement = getByText('Bienvenido a la Trivia');
    const subtitleElement = getByText('Se te presentarán 10 preguntas de verdadero o falso');
    const buttonTextElement = getByText('Comenzar');
    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(buttonTextElement).toBeTruthy();
  });

  test('button navigates to QuizScreen', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<WelcomeScreen navigation={navigationMock} />);
    const buttonElement = getByText('Comenzar');
    fireEvent.press(buttonElement);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Quiz');
  });
});