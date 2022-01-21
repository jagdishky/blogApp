import React from "react";
import { View, Text, StyleSheet, Image, _Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer"
import { images } from "../../../utils/imageRes";
import { spacing } from "../../styles/spacing";
import { SCREEN_HOME } from "../../../utils/constants";
import RegularText from "../../common/regulatText";
import { textScale } from "../../styles/responsiveStyles";
import { fontNames } from "../../styles/typography";
import colors from "../../../utils/colors";

function DrawerContent(props,) {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.profile}>
                    <Image style={{width: spacing.WIDTH_48, height: spacing.HEIGHT_48}} source={images.IMG_PROFILE} />
                <View style={styles.profileDetails}>
                    <RegularText text="Jagdish Yadav" style={{fontSize: textScale(20), color: "#000",fontWeight: "bold", fontFamily: fontNames.FONT_FAMILY_BOLD}}/>
                    <RegularText text="Jagdishky145@gmail.com" style={{fontSize: textScale(14), marginTop: spacing.MARGIN_2}} />
                </View>
            </View>
            <View style={styles.seprator}></View>

            <DrawerContentScrollView contentContainerStyle={styles.drawerContainer} {...props} >
                <View style={styles.menuList}>

                    <View style={styles.home}>
                        <View style={{paddingHorizontal: spacing.PADDING_24}}>
                            <Image style={{width: spacing.WIDTH_20, height: spacing.HEIGHT_20, }} source={images.IMG_Home}/>
                        </View>
                        <Text style={{fontSize: textScale(22), color: colors.black}} >Home</Text>
                    </View>

                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    profile: {
        // flex: 1,
        flexDirection: "row",
        paddingVertical: 40,
        alignItems: "center",
        marginHorizontal: spacing.MARGIN_20,
    },
    profileDetails: {
        marginLeft: 20,
    },
    seprator: {
        height: spacing.HEIGHT_2,
        backgroundColor: colors.grey500,
    },
    drawerContainer: {
        marginTop: spacing.MARGIN_16,
    },
    menuList: {

    },
    home: {
        flexDirection: "row",
        alignItems: "center",
    },
})

export default DrawerContent;