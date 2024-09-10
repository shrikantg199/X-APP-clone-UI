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
        <View style={{ paddingTop: 10, flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
