import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import CustomDrawer from "../../components/CustomDrawer";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
const DrawerLayout = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: "black",
          drawerInactiveTintColor: "black",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },

            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <TouchableOpacity>
                <Feather name="home" size={24} color={color} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-star-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Premium"
          options={{
            drawerLabel: "Premium",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <FontAwesome6 name="x-twitter" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Bookmarks"
          options={{
            drawerLabel: "Bookmarks",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <Feather name="bookmark" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Lists"
          options={{
            drawerLabel: "Lists",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <Octicons name="checklist" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Space"
          options={{
            drawerLabel: "Spaces",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <Ionicons name="mic-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Monetisation"
          options={{
            drawerLabel: "Monetisation",
            headerShown: false,
            drawerLabelStyle: {
              marginHorizontal: -20,
              alignItems: "center",
              fontSize: 18,
            },
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <FontAwesome name="money" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
