import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Premium = () => {
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
      <Text className="text-gray-300 text-5xl">Premium</Text>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({});
