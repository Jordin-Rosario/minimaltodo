import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 


const CheckBox = ({
    id,
    text,
    isComplete,
    isToday,
    hour
}) => {
    return isToday ? (        
        <TouchableOpacity className = {isComplete === true ? "w-8 h-5 mr-5 rounded-full bg-[#262626] items-center justify-center ml-3 shadow-md" : "w-8 h-5 mr-5 rounded-full bg-white items-center justify-center ml-3 shadow-md border"}>
            {isComplete && <Entypo name="check" size={12} color="#FAFAFA"/>}
        </TouchableOpacity>
    ): (
        <View className = "w-3 h-3 mr-10 ml-5 border-full bg-[#262626] rounded-full items-center justify-center">

        </View>
    )
}


export default CheckBox;