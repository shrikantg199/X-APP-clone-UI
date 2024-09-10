import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CustomDrawer from "../../components/CustomDrawer";
import { AntDesign, Entypo } from "@expo/vector-icons";
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
              <Entypo name="dots-three-vertical" size={18} color="black" />
            </View>
          ),
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            drawerItemStyle: { backgroundColor: "transparent" },
            drawerIcon: ({ color }) => (
              <TouchableOpacity>
                <AntDesign name="home" size={24} color={color} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          onPress={() => navigation.navigate("/Profile")}
          options={{
            drawerLabel: "Explore",
            headerShown: false,
            drawerItemStyle: { backgroundColor: "transparent" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
