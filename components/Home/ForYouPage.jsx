import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../../data.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const ForYouPage = () => {
  const dataItems = data?.tweets;

  return (
    <View className="bg-white h-screen w-screen p-2">
      <FlatList
        data={dataItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-row p-2 border-b border-gray-200">
            {/* Profile Image */}
            <Image
              source={{ uri: item.user.profile_image_url }}
              className="h-10 w-10 rounded-full mr-3"
            />
            {/* User Info and Post */}
            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <Text className="text-black font-normal">{item.user.name}</Text>
                <Text className="text-gray-500 ">{item.user.username}</Text>
                <Text className="text-gray-400">{item.timestamp}</Text>
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
              <View className="flex-row justify-between w-[90%] mx-2 mt-2">
                <AntDesign name="message1" size={18} color="gray" />
                <FontAwesome6 name="arrows-rotate" size={18} color="gray" />
                <AntDesign name="hearto" size={18} color="gray" />
                <Feather name="bookmark" size={18} color="gray" />
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
