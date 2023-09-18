import React from "react";
import {Text, View} from 'react-native';


const Todo = ({
        id,
        text,
        isComplete,
        isToday,
        hour
    }) => {
        return(
            <View>
                <Text>{text}</Text>
            </View>
        )
};


export default Todo;