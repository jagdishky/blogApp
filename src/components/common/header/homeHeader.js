import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../../utils/imageRes";
import { textScale } from "../../styles/responsiveStyles";
import { spacing } from "../../styles/spacing";

function HomeHeader({navigation}) {

   const openMenu = () => {
    // navigation.openDrawer();
   }
    
    return (
        <View style={styles.mainContainer}>


                <View style={styles.leftContainer} >
                    <TouchableOpacity onPress={()=> openMenu()}>
                        <Image source={images.IMG_PROFILE} />
                    </TouchableOpacity>
                    {/* <Text style={{fontSize: textScale(25)}}>BLOG APP</Text> */}
                </View>

                <View style={styles.rightContainer}>
                        <TouchableOpacity >
                            <Image source={images.IMG_SEARCHICON} />
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={{marginLeft: spacing.MARGIN_20}}>
                            <Image source={images.IMG_PROFILE} />
                        </TouchableOpacity> */}
                </View>


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
        },
        leftContainer: {
            // flex: 1,
            // borderWidth: 2
        },
        rightContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
        },
    }
)

export default HomeHeader;