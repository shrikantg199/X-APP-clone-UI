import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const TabLayout = memo(() => {
  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext(Navigator);
  const navigation = useNavigation();
  return (
    <Tabs screenOptions={{ headerShadowVisible: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Image
              source={require("../../../assets/Xlogo.png")}
              className="h-8 w-8"
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-1 mx-2">
              <Text className="text-[16px] font-medium">Upgrade</Text>
              <Entypo name="dots-three-vertical" size={20} />
            </View>
          ),
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
          tabBarLabel: () => null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <TouchableOpacity
              onPress={() => console.log("hello")}
              className="bg-gray-500/10 rounded-full w-60 px-3 py-[6px]  "
            >
              <TextInput placeholder="Search X" className="text-base" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <View className="mx-3">
              <Feather name="settings" size={24} color="black" />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Grok"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="slash-forward-box"
                size={24}
                color="black"
              />
              <Text className="font-bold text-[16px]">Grok</Text>
            </View>
          ),
          headerTitleAlign: "center",
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              source={require("../../../assets/Xlogo.png")}
              className="h-8 w-8"
            />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <View className="flex-row items-center gap-3 mx-2">
              <Feather name="search" size={24} color="black" />
              <AntDesign name="addusergroup" size={28} color="black" />
            </View>
          ),
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
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          tabBarActiveTintColor: "black",
          headerTitle: () => (
            <Text className="text-lg font-semibold">Notification</Text>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <Feather
              name="settings"
              size={24}
              style={{ marginHorizontal: 10 }}
              color="black"
            />
          ),
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications-none" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerTitle: () => (
            <TouchableOpacity
              onPress={() => console.log("hello")}
              className="bg-gray-500/10 rounded-full w-60 px-3 py-[6px]  "
            >
              <TextInput
                placeholder="Search Direct Messages..."
                className="text-sm"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Feather
              name="settings"
              size={24}
              style={{ marginHorizontal: 10 }}
              color="black"
            />
          ),
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
