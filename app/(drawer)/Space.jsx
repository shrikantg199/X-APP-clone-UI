import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Space = memo(() => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity className="mx-4" onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Text className="text-gray-300 text-5xl">Empty</Text>
    </View>
  );
});

export default Space;

const styles = StyleSheet.create({});
