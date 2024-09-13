import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Hashtags from "../../Hashtags.json";
import { Entypo } from "@expo/vector-icons";
const Entertainment = () => {
  const hashtags = Hashtags.entertainment.trending_hashtags;
  return (
    <View className="bg-white h-screen ">
      <FlatList
        data={hashtags}
        keyExtractor={(item) => item.hashtag}
        renderItem={({ item, index }) => (
          <View className=" flex-row justify-between items-center my-2 mx-6">
            <View className="">
              <View className="flex-row gap-1">
                <Text className="font-semibold text-gray-500">{index}.</Text>
                <Text className="font-semibold text-gray-500">
                  {item.category} .
                </Text>
                <Text className="font-semibold text-gray-500">Trending</Text>
              </View>

              <Text className="font-semibold text-black text-lg">
                {item.hashtag}
              </Text>
              <Text className="font-semibold text-gray-500 ">
                {item.tweet_count}
              </Text>
            </View>
            <Entypo name="dots-three-vertical" size={18} color="gray" />
          </View>
        )}
      />
    </View>
  );
};

export default Entertainment;

const styles = StyleSheet.create({});
