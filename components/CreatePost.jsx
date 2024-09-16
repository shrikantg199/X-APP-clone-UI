import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CreatePost = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="absolute bottom-3 right-2 bg-blue-600 py-[10px] px-[20px] rounded-full shadow-xl shadow-black"
    >
      <Text className="text-white text-3xl">+</Text>
    </TouchableOpacity>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
