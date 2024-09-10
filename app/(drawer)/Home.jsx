import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

const Home = () => {
  const router = useRouter();
  return (
    <View style={{ marginTop: 200 }}>
      <Drawer.Screen options={{ headerShown: true }} />
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
