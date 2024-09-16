import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import Animated, { FadeIn, ZoomIn } from "react-native-reanimated";

const Grok = memo(() => {
  return (
    <View className="flex-1 justify-center items-center bg-white h-screen ">
      <View className="flex-col gap-2  ">
        <Text className="text-3xl text-center font-medium text-black">
          Introducing Grok 2
        </Text>
        <Text className="text-gray-500 text-lg  my-3 text-center">
          Our newest AI assistant , powered by X.
        </Text>
      </View>
      <TouchableOpacity className="bg-black border rounded-full border-gray-400 px-10 py-3">
        <Animated.Text
          entering={ZoomIn}
          className="text-lg text-white text-center "
        >
          Subscribe Now
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
});

export default Grok;

const styles = StyleSheet.create({});
