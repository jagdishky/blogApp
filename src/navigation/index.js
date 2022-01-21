import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AppNavigator from "./appNavigator";
import { STACK_APP } from "../utils/constants";

const Stack = createNativeStackNavigator();

function Navigator () {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={AppNavigator} name={STACK_APP}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;