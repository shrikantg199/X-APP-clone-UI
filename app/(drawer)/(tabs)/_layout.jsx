import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome } from "@expo/vector-icons";

const TabLayout = memo(() => {
  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext(Navigator);
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="Explore" options={{ headerShown: false }} />
    </Tabs>
  );
});

export default TabLayout;
