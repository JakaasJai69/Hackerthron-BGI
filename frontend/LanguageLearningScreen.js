import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Dummy language modules data
const languageModules = [
  {
    id: '1',
    language: 'Sanskrit',
    description: 'Basic Sanskrit language learning module.',
  },
  {
    id: '2',
    language: 'Santhali',
    description: 'Introduction to Santhali tribal dialect.',
  },
];

export default function LanguageLearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language Learning Modules</Text>
      <FlatList
        data={languageModules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.moduleContainer}>
            <Text style={styles.language}>{item.language}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
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
  moduleContainer: {
    marginBottom: 20,
  },
  language: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
