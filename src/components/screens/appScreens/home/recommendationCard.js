import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { spacing } from "../../../styles/spacing";
import { images } from "../../../../utils/imageRes";
import { textScale } from "../../../styles/responsiveStyles";
import RegularText from "../../../common/regulatText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREEN_BLOG } from "../../../../utils/constants";
import { useNavigation } from "@react-navigation/native";

function RecommendationCard({ index}) {
    // console.log(index)
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() =>  navigation.navigate(SCREEN_BLOG, {pageId: 1, text: "Hey!"})}>
            <View style={[styles.CardContainer,
            index == 0 && { marginLeft: spacing.MARGIN_16 }]}>
                <Image source={images.IMG_CARD} style={styles.card} />
                <View style={styles.textContainer}>
                    <RegularText text="Colour in UI Design: A (Practicle) framework" style={{ color: "white", fontSize: textScale(20), textAlign: "left", marginBottom: spacing.MARGIN_10 }} />
                    <View style={styles.authorDetails}>
                        <Image style={{ width: spacing.WIDTH_24, height: spacing.HEIGHT_24, }} source={images.IMG_PROFILE} />
                        <RegularText text="Jagdish Yadav" style={{ color: "white", marginLeft: spacing.PADDING_8 }} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        // marginRight: spacing.MARGIN_30,
        // marginLeft: spacing.MARGIN_16,
        marginRight: spacing.MARGIN_16,
    },
    card: {
        // width: spacing.WIDTH_184,
        width: spacing.WIDTH_225,
        height: spacing.HEIGHT_350,
        borderRadius: spacing.RADIUS_12,
    },
    textContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        paddingHorizontal: spacing.PADDING_20,
        marginBottom: spacing.MARGIN_16,
        // borderWidth: 2
    },
    authorDetails: {
        flexDirection: "row",
        alignItems: "center",
    },
})
export default RecommendationCard;