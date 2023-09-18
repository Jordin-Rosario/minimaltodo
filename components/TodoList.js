import * as React from 'react';
import { todoData } from '../data/todos';
import { FlatList, View, Text } from 'react-native';
import Todo from './Todo';



const TodoList = () => {
    return (
        <FlatList
        data={todoData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Todo {...item}/>} // Pasa todas las propiedades que tiene ese id
        />

    )
};


export default TodoList;