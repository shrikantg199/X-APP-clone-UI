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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Reanimated, {
  FadeIn,
  FadeInDown,
  FadeOutDown,
} from "react-native-reanimated";
const CustomDrawer = (props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [isdark, setIsdark] = useState(false);
  return (
    <View className="flex-1 ">
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => router.push("(drawer)/Profile")}>
          <Image
            source={require("../assets/profile.png")}
            className="w-14 h-14 ml-2 mt-2"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("(drawer)/Profile")}
          className="ml-4"
        >
          <Text className="text-black text-lg font-medium">
            Shrikant Gaikwad
          </Text>
        </TouchableOpacity>
        <Text className=" ml-4 text-gray-500 text-md"> @its_shri_11</Text>
        <View className="flex flex-row gap-4 mx-4  ">
          <Text className="text-black">Followers</Text>
          <Text className="text-black">Following</Text>
        </View>

        <View className=" px-5 flex-1 bg-white justify-center">
          <View
            style={{
              height: 0.8,
              width: "100%",
              marginTop: 14,
              backgroundColor: "gray",
            }}
          />
          <DrawerItemList {...props} />
          <View
            style={{
              height: 0.8,
              width: "100%",
              backgroundColor: "gray",
            }}
          />
        </View>
        <View className="my-5 mx-8">
          <TouchableOpacity
            className="flex-row mx-4 gap-2 items-center"
            onPress={() => setToggle(!toggle)}
          >
            <Text className="text-[16px] font-semibold">
              Settings & Support
            </Text>
            {toggle ? (
              <MaterialIcons name="keyboard-arrow-up" size={28} color="blue" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={28}
                color="black"
              />
            )}
          </TouchableOpacity>
          {toggle ? (
            <Reanimated.View
              entering={FadeInDown.duration(400)}
              exiting={FadeOutDown.duration(600)}
              className="mx-8 gap-2"
            >
              <Reanimated.Text
                entering={FadeInDown.delay(100)}
                className="text-md"
              >
                Setting and Privacy
              </Reanimated.Text>
              <Reanimated.Text
                entering={FadeInDown.delay(300)}
                className="text-md"
              >
                Help Center
              </Reanimated.Text>
            </Reanimated.View>
          ) : null}
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        className="absolute  bottom-8 "
        onPress={() => setIsdark(!isdark)}
      >
        {isdark ? (
          <MaterialIcons
            style={{ marginHorizontal: 20, marginVertical: 20 }}
            name="dark-mode"
            size={35}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="theme-light-dark"
            style={{ marginHorizontal: 20, marginVertical: 20 }}
            size={35}
            color="black"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
