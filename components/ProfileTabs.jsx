import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Posts from "./ProfileData/Posts";
import Replies from "./ProfileData/Replies";
import Highlights from "./ProfileData/Highlights";
import Media from "./ProfileData/Media";

const Tab = createMaterialTopTabNavigator();
const ProfileTabs = ({ name }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100,
        },
        headerTitleAlign: "center",
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{ title: "Posts" }}
        initialParams={{ name }}
      />
      <Tab.Screen name="Replies" component={Replies} initialParams={{ name }} />
      <Tab.Screen
        name="Highlights"
        component={Highlights}
        initialParams={{ name }}
      />
      <Tab.Screen name="Media" component={Media} initialParams={{ name }} />
    </Tab.Navigator>
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({});
