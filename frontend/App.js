import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuseumScreen from './MuseumScreen';
import ChatbotScreen from './ChatbotScreen';
import GamifiedLearningScreen from './GamifiedLearningScreen';
import LanguageLearningScreen from './LanguageLearningScreen';
import CulturalMapScreen from './CulturalMapScreen';

const Tab = createBottomTabNavigator();
``
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Museum">
        <Tab.Screen name="Museum" component={MuseumScreen} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} />
        <Tab.Screen name="Learning" component={GamifiedLearningScreen} />
        <Tab.Screen name="Language" component={LanguageLearningScreen} />
        <Tab.Screen name="Map" component={CulturalMapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
