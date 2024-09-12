import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";

const Messages = memo(() => {
  return (
    <View className="flex-1 justify-center items-center bg-white h-screen ">
      <View className="flex-col gap-2 mx-3 ">
        <Text className="text-3xl  font-bold text-black">
          Welcome to your inbox!
        </Text>
        <Text className="text-gray-500 w-72 my-3">
          Drop a line,share posts and more with private coversation betwen you
          and others on X.
        </Text>
      </View>
      <TouchableOpacity className="bg-black border rounded-full border-gray-400 px-10 py-3">
        <Text className="text-lg text-white text-center ">
          Write a Message
        </Text>
      </TouchableOpacity>
    </View>
  );
});

export default Messages;

const styles = StyleSheet.create({});
