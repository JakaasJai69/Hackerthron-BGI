import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Dummy quiz data
const quizQuestions = [
  {
    id: 'q1',
    question: 'Which ancient Indian text is known as the "Book of Life"?',
    options: ['Mahabharata', 'Ramayana', 'Bhagavad Gita', 'Vedas'],
    answer: 'Bhagavad Gita',
  },
  {
    id: 'q2',
    question: 'What is the traditional Indian dance form from Tamil Nadu?',
    options: ['Bharatanatyam', 'Kathak', 'Odissi', 'Kuchipudi'],
    answer: 'Bharatanatyam',
  },
];

export default function GamifiedLearningScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz finished! Your score: ${score}/${quizQuestions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cultural Quiz</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option) => (
        <Button
          key={option}
          title={option}
          onPress={() => handleAnswer(option)}
          disabled={showAnswer}
        />
      ))}
      {showAnswer && (
        <Button title="Next" onPress={nextQuestion} />
      )}
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  question: {
    fontSize: 18,
    marginBottom: 12,
  },
  score: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },
});
