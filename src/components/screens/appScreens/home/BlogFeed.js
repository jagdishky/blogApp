import React, {useEffect} from "react";
import { FlatList, Text, View } from "react-native";
import FeedCard from "./feedCard";
import { spacing } from "../../../styles/spacing";
import { useDispatch } from "react-redux";
import { getBlogPostAction } from "../../../../redux/action";
import { useSelector } from "react-redux";
import { textScale } from "../../../styles/responsiveStyles";

function BlogFeed() {

    const dispatch = useDispatch();
   

    const {loading,getPost} = useSelector(state => state.getPostReducer)
    // console.log('getpost',getPost );
    // console.log('getload',loading);

    const ListEmptyMessage = () => {
        return (
            <View style={{flex:1, alignItems: "center" }}  >
                <Text style= {{fontSize: textScale(20)}}>No post avaialble in this category</Text>
            </View>
        );
    }

    return (
        <View style={{paddingHorizontal: spacing.PADDING_16, }}>
            <FlatList
                data={getPost? getPost.document:[]||[]}
                renderItem={({ item, index }) => {
                    return (
                        <FeedCard
                        item={item}
                        index={index}
                        />
                    );
                }}
                ListEmptyComponent={ListEmptyMessage()}
                keyExtractor={(item) => getPost._id}
            />
        </View>
    );
}


export default BlogFeed;
