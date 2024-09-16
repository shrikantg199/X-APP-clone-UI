import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllNotifications from "../../../components/Notifiaction/AllNotifications";
import VerifiedNotifications from "../../../components/Notifiaction/VerifiedNotifications";
import Mention from "../../../components/Notifiaction/Mention";
import CreatePost from "../../../components/CreatePost";

const Tab = createMaterialTopTabNavigator();

const Notification = memo(() => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
          fontWeight: 600,
        },
        tabBarIndicatorStyle: { height: 3, backgroundColor: "#1D9BF0" },
        component: { CreatePost },
      }}
    >
      <Tab.Screen name="All" component={AllNotifications} />
      <Tab.Screen name="Verified" component={VerifiedNotifications} />
      <Tab.Screen name="Mention" component={Mention} />
    </Tab.Navigator>
  );
});

export default Notification;

const styles = StyleSheet.create({});
