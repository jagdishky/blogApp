import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBlogCategoryAction, getBlogPostAction } from "../../../../redux/action";
import getPostCategory from "../../../../redux/reducer/getPostCategoryReducer";
import colors from "../../../../utils/colors";
import RegularText from "../../../common/regulatText";
// import strings from "../../../../languages";
import { textScale } from "../../../styles/responsiveStyles";
import { spacing } from "../../../styles/spacing";
import { fontNames } from "../../../styles/typography";

function  BlogCategory(item, index) {

    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState()

    const { loading, getCategory } = useSelector(state => state.getPostCategory)

    useEffect(() => {
        getPostCategory();
        return () => { };
    }, [])

    function getPostCategory() {
        dispatch(getBlogCategoryAction())
    }

    onPressCategory = (item) => {
        // alert(JSON.stringify(item))
        setSelectedCategory(item)
        let data = {
            category : item._id
        }
        dispatch(getBlogPostAction(data));
    }

    return (
        <View style={{ marginVertical: spacing.MARGIN_24 }}>
            <FlatList
                data={getCategory ? getCategory.results : []}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => { onPressCategory(item) }}
                        style={{ paddingVertical: spacing.PADDING_12, paddingHorizontal: spacing.PADDING_24, }} >
                        <RegularText text={item.name} style={[styles.blogCategoryList, selectedCategory && selectedCategory._id == item._id && { color: colors.black }]}
                            fontFamily={selectedCategory && selectedCategory._id == item._id ? fontNames.FONT_FAMILY_BOLD : fontNames.FONT_FAMILY_REGULAR}
                        />
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            // style={{backgroundColor: "red"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    blogCategoryList: {
        fontSize: textScale(20),
        // paddingHorizontal: spacing.PADDING_24,
    }
});

export default BlogCategory;