import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CustomDrawer = (props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          className="h-[150px]"
        >
          <TouchableOpacity onPress={() => router.push("(drawer)/Profile")}>
            <Image
              source={require("../assets/profile.png")}
              className="w-16 h-16 ml-2 mt-2"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("(drawer)/Profile")}
            className="ml-4"
          >
            <Text className="text-white text-lg font-bold">Expo_coder</Text>
          </TouchableOpacity>
          <Text className="font-bold ml-4 text-white text-md">Expo coder</Text>
          <View className="flex flex-row gap-4 mx-4  ">
            <Text className="text-white">Followers</Text>
            <Text className="text-white">Following</Text>
          </View>
        </ImageBackground>
        <View className="'pt-1 px-5 flex-1 bg-white border-t-0.6 border-b-0.6 border-gray-400 justify-center'">
          <DrawerItemList {...props} />
        </View>
        <View className="my-5 mx-8">
          <TouchableOpacity
            className="flex-row mx-4 gap-2"
            onPress={() => setToggle(!toggle)}
          >
            <Text>setting & privacy</Text>
            {toggle ? (
              <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
          {toggle ? <Text className="mx-8">setting</Text> : null}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
