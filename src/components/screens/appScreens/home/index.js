import React from "react";
import { View, ScrollView } from "react-native";
import HomeHeader from "../../../common/header/homeHeader";
import BlogCategory from "./BlogCategory";
import BlogFeed from "./BlogFeed";
import Recommendation from "./recommendation";

function HomeScreen ({navigation,route}) {
    return(
        <ScrollView >
            <HomeHeader navigation={navigation} />
            <Recommendation/>
            <BlogCategory/>
            <BlogFeed/>
        </ScrollView>
    );
}
export default HomeScreen;