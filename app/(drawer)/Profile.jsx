import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Entypo, Fontisto, Ionicons } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();
  return (
    <View className="bg-white h-screen">
      <View className="border-b border-gray-400 pb-4">
        <Drawer.Screen options={{ headerShown: false }} />
        <Image
          source={require("../../assets/background.jpg")}
          className="w-full h-40 object-cover"
          resizeMode="cover"
        />
        <View className="flex-row justify-between items-center  ">
          <Image
            source={require("../../assets/profile.png")}
            className="w-16 h-16 rounded-full -mt-12  mx-4 "
          />
          <TouchableOpacity className="mt-3 mx-4">
            <Text className="border-none w-28  bg-black text-white text-lg  text-center  py-1  rounded-full">
              Follow
            </Text>
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <View className="mx-6 space-y-1">
          <View className="mb-3">
            <Text className="text-3xl font-semibold">Shrikant</Text>
            <Text className="text-gray-400 text-base">@shri</Text>
            <Text className="">bio</Text>
            <Text className="">
              <Text className="text-gray-500">Joined Date :</Text>DEc2020
            </Text>
          </View>

          <View className="flex-row mt-10 items-center space-x-1">
            <Text className="font-bold text-[18px]  ">20</Text>
            <Text className="mx-1 ">Following</Text>
            <Text className="font-bold text-[18px]">20</Text>
            <Text className=" ">Followers</Text>
          </View>
        </View>
      </View>

      <View className="absolute flex-row justify-between w-full my-10 px-4 items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>

        <View className="flex-row gap-2">
          <Fontisto name="search" size={20} color="black" />
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
