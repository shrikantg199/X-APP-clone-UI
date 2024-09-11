import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CustomDrawer from "../../components/CustomDrawer";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
const DrawerLayout = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTitle: () => (
            <Image
              source={require("../../assets/Xlogo.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                gap: 4,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Upgrade</Text>
              <Entypo name="dots-three-vertical" size={18}  />
            </View>
          ),
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
                <AntDesign name="home" size={24} color={color} />
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
                name="account-star"
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
              <FontAwesome name="bookmark" size={24} color={color} />
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
              <FontAwesome5 name="microphone-alt" size={24} color={color} />
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
              <FontAwesome6 name="money-bill-wave" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});