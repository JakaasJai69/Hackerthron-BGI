import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// Dummy data for artifacts
const artifacts = [
  {
    id: '1',
    name: 'Ancient Sculpture',
    description: 'A beautiful ancient sculpture from 200 BC.',
    imageUrl: 'https://example.com/sculpture.jpg',
  },
  {
    id: '2',
    name: 'Historic Painting',
    description: 'A painting depicting cultural heritage.',
    imageUrl: 'https://example.com/painting.jpg',
  },
];

export default function MuseumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Museum</Text>
      <FlatList
        data={artifacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.artifactContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  artifactContainer: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
