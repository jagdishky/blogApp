import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../../../../utils/colors";
import strings from "../../../../languages";
import { textScale } from "../../../styles/responsiveStyles";
import { spacing } from "../../../styles/spacing";
import RecommendationCard from "./recommendationCard";
import { fontNames } from "../../../styles/typography";
import RegularText from "../../../common/regulatText";

const BlogCategory = [
    { Title: "Top", key: 1 },
    { Title: "Popular", key: 2 },
    { Title: "Trending", key: 3 },
    { Title: "Editors Choice", key: 4 },
    { Title: "Bollywood", key: 5 },
    { Title: "Technology", key: 6 },
    { Title: "News", key: 7 },
    { Title: "Gadgets", key: 8 },
]

function Recommendation() {
    return (
        <View   >
            <View style={styles.heading}>
                <RegularText text={strings.your_daily} style={{ fontSize: textScale(25)}} />
                <RegularText text={strings.recommendation} style={{ fontSize: textScale(35), color: colors.black}} fontFamily={fontNames.FONT_FAMILY_BOLD} />
            </View>

            <View>
                <FlatList
                    data={[1, 1, 1, 1]}
                    renderItem={({ item, index }) => {
                        return (
                            <RecommendationCard index={index}/>
                        );
                    }}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginVertical: spacing.MARGIN_24,
        paddingHorizontal: spacing.PADDING_16,
    },
    
})
export default Recommendation;