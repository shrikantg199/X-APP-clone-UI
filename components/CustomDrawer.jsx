import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{
            height: 120,
          }}
        >
          <Image
            source={require("../assets/profile.png")}
            style={{
              width: 60,
              height: 60,
              marginBottom: 40,
              marginLeft: 10,
              marginTop: 10,
            }}
          />
        </ImageBackground>
        <View
          style={{
            paddingTop: 1,
            paddingHorizontal: 20,
            flex: 1,
            backgroundColor: "#fff",
            borderBottomColor: "gray",
            borderTopWidth: 0.6,
            borderBottomWidth: 0.6,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
