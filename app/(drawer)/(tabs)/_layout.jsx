import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const TabLayout = memo(() => {
  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext(Navigator);
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Grok"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="slash-forward-box"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Communities"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups-2" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="message" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
});

export default TabLayout;
