import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../../data.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const ForYouPage = () => {
  const dataItems = data?.tweets;
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const pastDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };
  return (
    <View className="bg-white  w-screen p-1">
      <FlatList
        data={dataItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-row  border-b border-gray-200 mt-2 ">
            {/* Profile Image */}
            <Image
              source={{ uri: item.user.profile_image_url }}
              className="h-10 w-10 rounded-full mr-2"
            />
            {/* User Info and Post */}
            <View className="flex-1 items-center">
              <View className="justify-between flex-row w-full flex items-center">
                <View className="flex-row items-center gap-2">
                  <Text className="text-black text-[16px] font-bold">
                    {item.user.name}
                  </Text>
                  <Text className="text-gray-500 ">{item.user.username}</Text>
                  <Text className="text-gray-400">
                    {formatTimeAgo(item.timestamp)}
                  </Text>
                </View>
                <Feather name="more-vertical" size={20} color="gray" />
              </View>

              {/* Post Content */}
              <Text className="text-gray-800 mt-2 flex-wrap">
                {item.content}
              </Text>
              {item.media?.length > 0 ? (
                <Image
                  source={{ uri: item.media[0].url }}
                  className="h-64 w-full rounded-3xl  mt-2"
                  resizeMode="cover"
                />
              ) : null}
              {/* reactions */}
              <View className="flex-row justify-between w-full my-3 px-2  mt-2">
                <View className="flex flex-row gap-1 items-center ">
                  <AntDesign name="message1" size={18} color="gray" />
                  <Text className="text-gray-500">{item.replies}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center ">
                  <FontAwesome6 name="arrows-rotate" size={18} color="gray" />
                  <Text className="text-gray-500">{item.retweets}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center ">
                  <FontAwesome name="heart" size={18} color="red" />
                  <Text className="text-gray-500">{item.likes}</Text>
                </View>
                <View>
                  <Feather name="bookmark" size={18} color="gray" />
                </View>

                <AntDesign name="sharealt" size={18} color="gray" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ForYouPage;

const styles = StyleSheet.create({});
