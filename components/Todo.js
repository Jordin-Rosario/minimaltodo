import React from "react";
import {Text, View} from 'react-native';
import CheckBox from "./Checkboxx";


const Todo = ({
        id,
        text,
        isComplete,
        isToday,
        hour
    }) => {
        return(
            <View className = 'mb-5 flex-row items-center mt-16'>                        
                <CheckBox
                   id = {id} 
                   text = {text}
                   isComplete = {isComplete}
                   isToday = {isToday}
                   hour = {hour}
                /> 
                <View>                      
                    <Text className = {isComplete ? 'font-medium text-base text-[#73737350] line-through':'font-medium text-base text-[#737373]'}>{text}</Text>
                    <Text className = {isComplete ? 'font-medium text-base text-[#73737350] line-through': 'font-medium text-base text-black'}>{hour}</Text>                
                </View>
            </View>
        )
};


export default Todo;