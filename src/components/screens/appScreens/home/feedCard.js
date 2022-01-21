import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SCREEN_BLOG } from "../../../../utils/constants";
import { images } from "../../../../utils/imageRes";
import RegularText from "../../../common/regulatText";
import { textScale } from "../../../styles/responsiveStyles";
import { spacing } from "../../../styles/spacing";


function FeedCard({item,index}) {

    const navigation = useNavigation();


    return (
        <TouchableOpacity style={styles.mainConatiner} onPress={() =>  navigation.navigate(SCREEN_BLOG, {post:item})} >
                <Image style={{ width: spacing.WIDTH_50, height: spacing.HEIGHT_64, borderRadius: spacing.RADIUS_8 }} source={{uri: "http://192.168.29.12:8000/" + item.cover}} />
                <View style={styles.textConatiner}>
                    <RegularText style={{ fontSize: textScale(15), color: "#000", fontWeight: "bold" }} text={item.title} />
                    <View style={styles.authorContainer}>
                        <Image style={{ width: spacing.WIDTH_16, height: spacing.HEIGHT_16 }} source={images.IMG_PROFILE} />
                        <RegularText style={{ marginLeft: spacing.MARGIN_6 }} text={item.author.fullName} />
                    </View>
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainConatiner: {
        backgroundColor: "#fff",
        paddingHorizontal: spacing.PADDING_8,
        marginBottom: spacing.MARGIN_16,
        paddingVertical: spacing.PADDING_8,
        borderRadius: spacing.RADIUS_12,
        flexDirection: "row",
        alignItems: "center"
    },
    textConatiner: {
        paddingLeft: spacing.PADDING_20,
        paddingRight: spacing.PADDING_32
    },
    authorContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: spacing.MARGIN_4,
    },
});

export default FeedCard;
