import React from "react";
import { Text } from "react-native";
import { fontNames } from "../styles/typography";
function RegularText ({text,style,fontFamily}){
    return (
        <Text style={[style,{fontFamily : fontFamily ? fontFamily : fontNames.FONT_FAMILY_REGULAR }]}>{text}</Text>
    );
}

export default RegularText;