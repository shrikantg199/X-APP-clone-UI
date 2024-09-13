import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import data from "../../data.json";
import { Entypo, Fontisto, Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const { name } = useLocalSearchParams();

  const dataItems = data?.tweets;
  const filteredData = dataItems?.filter((item) => item.user.username === name);
  return (
    <View className="bg-white h-screen">
      {filteredData.map((item, index) => (
        <View key={index}>
          <Image
            source={{ uri: item.user.banner_image_url }}
            className="w-full h-40 object-cover"
            resizeMode="cover"
          />
          <View className="flex-row justify-between items-center  ">
            <Image
              source={{ uri: item.user.profile_image_url }}
              className="w-16 h-16 rounded-full -mt-10  mx-4 "
            />
            <TouchableOpacity className="mt-3 mx-4">
              <Text className="border-none w-28  bg-black text-center py-2 text-white rounded-full">
                Follow
              </Text>
            </TouchableOpacity>
          </View>
          {/* Profile */}
          <View className="mx-6">
            <View className="">
              <Text className="text-3xl font-semibold">{item.user.name}</Text>
              <Text className="text-gray-400 text-base">
                @{item.user.username}
              </Text>
              <Text className="my-3">{item.user.bio}</Text>
              <Text className="">
                <Text className="text-gray-500">Joined Date :</Text>{" "}
                {item.user.joined_date}
              </Text>
            </View>

            <View className="flex-row mt-10 items-center space-x-1">
              <Text className="font-bold text-[18px]  ">
                {item.user.following_count}
              </Text>
              <Text className="mx-1 ">Following</Text>
              <Text className="font-bold text-[18px]">
                {item.user.followers_count}
              </Text>
              <Text className=" ">Followers</Text>
            </View>
          </View>
        </View>
      ))}
      <View className="absolute flex-row justify-between w-full my-10 px-4 items-center">
        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        <View className="flex-row gap-2">
          <Fontisto name="search" size={20} color="black" />
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
