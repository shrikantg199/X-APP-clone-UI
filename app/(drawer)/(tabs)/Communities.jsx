import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../../components/communities/Home";
import Explore from "../../../components/communities/Explore";
import CreatePost from "../../../components/CreatePost";

const Tab = createMaterialTopTabNavigator();

const Communities = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
          fontWeight: 600,
        },
        tabBarIndicatorStyle: { height: 3, backgroundColor: "#1D9BF0" },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default Communities;

const styles = StyleSheet.create({});
