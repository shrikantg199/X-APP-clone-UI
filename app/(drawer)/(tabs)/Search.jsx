import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
const Tab = createMaterialTopTabNavigator();
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import News from "../../../components/Explore/News";
import Trending from "../../../components/Explore/Trending";
import ForYou from "../../../components/Explore/ForYou";
const Explore = memo(() => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#1D9BF0",
          height: 3,
          width: 100,
          marginLeft: 18,
        },
      }}
    >
      <Tab.Screen
        name="News"
        options={{
          title: "News",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 18,
            fontWeight: 600,
          },
        }}
        component={News}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          title: "Trending",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 18,
            fontWeight: 600,
          },
        }}
      />
      <Tab.Screen
        name="ForYou"
        component={ForYou}
        options={{
          title: "For You",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 18,
            fontWeight: 600,
          },
        }}
      />
    </Tab.Navigator>
  );
});

export default Explore;

const styles = StyleSheet.create({});
