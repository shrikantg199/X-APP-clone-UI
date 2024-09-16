import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const Media = memo(() => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-gray-300 text-5xl">No Media</Text>
    </View>
  );
});

export default Media;

const styles = StyleSheet.create({});
