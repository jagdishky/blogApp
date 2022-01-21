import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../components/screens/appScreens/home";
import { SCREEN_BLOG, SCREEN_HOME, STACK_DRAWER } from "../utils/constants";
import DrawerNavigator from "./drawer";
import BlogPage from "../components/screens/appScreens/Blog";

const Stack = createNativeStackNavigator();

function AppNavigator ({navigation, route}) {
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={DrawerNavigator} name={STACK_DRAWER} />
                <Stack.Screen component={BlogPage} name={SCREEN_BLOG} />
            </Stack.Navigator>
    );
}

export default AppNavigator;