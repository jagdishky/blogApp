import React from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import HomeScreen from "../components/screens/appScreens/home";
import { SCREEN_HOME } from "../utils/constants";
import DrawerContent from "../components/screens/drawerScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator(){
    return(
            <Drawer.Navigator screenOptions={{headerShown: false, gestureEnabled: false }}   drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen component={HomeScreen} name={SCREEN_HOME} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator;