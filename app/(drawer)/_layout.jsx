import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CustomDrawer from "../../components/CustomDrawer";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
const DrawerLayout = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require("../../assets/Xlogo.png")}
              className="h-8 w-8"
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../assets/profile.png")}
                className="h-8 w-8 ml-3"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row items-center gap-1">
              <Text className="text-lg font-medium">Upgrade</Text>
              <Entypo name="dots-three-vertical" size={18} />
            </View>
          ),
          drawerActiveTintColor: "black",
          drawerInactiveTintColor: "black",
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
          onPress={() => navigation.navigate("/Profile")}
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
          onPress={() => navigation.navigate("/Profile")}
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
          onPress={() => navigation.navigate("/Profile")}
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
          onPress={() => navigation.navigate("/Profile")}
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
          onPress={() => navigation.navigate("/Profile")}
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
          onPress={() => navigation.navigate("/Profile")}
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
