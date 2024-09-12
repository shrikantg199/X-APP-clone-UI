import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const TabLayout = memo(() => {
  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext(Navigator);
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={28} color={color} />
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
              size={28}
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
            <MaterialCommunityIcons
              name="account-group-outline"
              size={28}
              color={color}
            />
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
            <MaterialIcons name="notifications-none" size={28} color={color} />
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
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
});

export default TabLayout;
