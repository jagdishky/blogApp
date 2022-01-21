import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import RenderHTML from "react-native-render-html";
import colors from "../../../../utils/colors";
import { images } from "../../../../utils/imageRes";
import BlogHeader from "../../../common/header/blogHeader";
import RegularText from "../../../common/regulatText";
import { textScale } from "../../../styles/responsiveStyles";
import { spacing } from "../../../styles/spacing";
import { useWindowDimensions } from 'react-native';
import { BlogText } from "./blogText";
import { Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import {StackNavigator} from "react-navigation"

function BlogPage({ route }) {

    const { post } = route.params;
    // console.log(post);
    // alert(JSON.stringify(route))
    const { height } = useWindowDimensions()

    return (
        <ScrollView style={{ flexGrow: 1, backgroundColor: colors.white }} >
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: "100%", height: height / 2.5, }} source={{ uri: "http://192.168.29.12:8000/" + post.cover }} />
                    <LinearGradient colors={[colors.transparent, colors.transparentBlack, colors.transparentBlackHard]} style={styles.textContainer}>
                            <RegularText text={post.title} style={{ color: "white", fontSize: textScale(26), textAlign: "left", marginBottom: spacing.MARGIN_10 }} />
                            <View style={styles.authorContainer}>
                                <Image source={images.IMG_PROFILE} />
                                <RegularText text={post.author.fullName} style={{ color: "white", marginLeft: spacing.PADDING_8 }} />
                        </View>
                    </LinearGradient>
                </View>
                <BlogHeader />
            </View>

            <View style={styles.bottomContainer}>
                    <RenderHTML contentWidth={"100%"} source={{ html: post.htmlContent }} />
                </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        // paddingBottom: spacing.PADDING_44,
    },
    imageContainer: {},
    textContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        paddingHorizontal: spacing.PADDING_20,
        marginBottom: spacing.MARGIN_16,
    },
    blogTextContainer: {
        // marginTop: spacing.MARGIN_40
    },
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.MARGIN_40
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopRightRadius: spacing.RADIUS_30,
        borderTopLeftRadius: spacing.RADIUS_30,
        marginTop: -spacing.MARGIN_40,
        paddingTop: spacing.PADDING_12,
        paddingHorizontal: spacing.PADDING_20,
    },
    linearGradient: {
        flex: 1,
        width: "100%", height: spacing.FULL_HEIGHT / 2.5
    },
});



export default BlogPage;