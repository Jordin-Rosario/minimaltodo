import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <View className = "bg-red-200">
      <Text>Open up App.js to start working on your app!</Text>      
      <TodoList/>
      <StatusBar/>
    </View>
  );
}