import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <View className = "bg-gray-500 mt-10">
      <TodoList/>
      <StatusBar/>
    </View>
  );
}