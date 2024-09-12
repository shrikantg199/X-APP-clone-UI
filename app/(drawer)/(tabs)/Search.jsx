import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import News from "../../../components/Explore/News";
import Trending from "../../../components/Explore/Trending";
import ForYou from "../../../components/Explore/ForYou";
import Sports from "../../../components/Explore/Sports";
import Entertainment from "../../../components/Explore/Entertainment";

const Tab = createMaterialTopTabNavigator();

const Explore = memo(() => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100,
        },
      })}
    >
      <Tab.Screen
        name="ForYou"
        component={ForYou}
        options={{
          title: "For You",
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          title: "Trending",
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          title: "News",
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          title: "Sports",
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Entertainment"
        component={Entertainment}
        options={{
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 500,
            width: 250,
          },
        }}
      />
    </Tab.Navigator>
  );
});

export default Explore;

const styles = StyleSheet.create({
  tabBarIndicator: {
    backgroundColor: "#1D9BF0",
    height: 3,
  },
  tabBarLabel: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: 500,
  },
});
