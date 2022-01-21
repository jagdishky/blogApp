import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import colors from "../../../utils/colors";
import { SCREEN_HOME } from "../../../utils/constants";
import { images } from "../../../utils/imageRes";
import { spacing } from "../../styles/spacing";
import { useNavigation } from "@react-navigation/native";


function BlogHeader() {

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>


            <View style={styles.leftContainer} >
                <TouchableOpacity onPress={ () => navigation.goBack()} >
                    <View style={styles.backButton}>
                        <Image style={{ width: spacing.WIDTH_16, height: spacing.HEIGHT_16 }} source={images.IMG_BACK} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.rightContainer}>
                <TouchableOpacity >
                    <Image style={{ width: spacing.WIDTH_16, height: spacing.HEIGHT_20 }} source={images.IMG_BOOKMARK} />
                </TouchableOpacity>
            </View> */}


        </View>
    );
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: spacing.PADDING_16,
            paddingTop: spacing.PADDING_12,
            backgroundColor: colors.transparent,
            // borderWidth: 2,
            position: "absolute"
        },
        leftContainer: {
            // flex: 1,
            // borderWidth: 2
        },
        backButton: {
            width: spacing.WIDTH_24,
            height: spacing.WIDTH_24,
            // borderWidth: 2,
            borderRadius: spacing.RADIUS_50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.grey300,
            paddingRight: spacing.PADDING_2
        },
        // rightContainer: {
        //     flex: 1,
        //     flexDirection: "row",
        //     justifyContent: "flex-end",
        //     alignItems: "center",
        // },
    }
)

export default BlogHeader;