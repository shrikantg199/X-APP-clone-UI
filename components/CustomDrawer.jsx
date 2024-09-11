import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const [toggle, setToggle] = useState(false);
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
        <View style={{ marginVertical: 20, marginHorizontal: 2 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", marginHorizontal: 15, gap: 9 }}
            onPress={() => setToggle(!toggle)}
          >
            <Text>setting & privacy</Text>
            {toggle ? (
              <MaterialIcons  name="keyboard-arrow-up" size={24} color="black" />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
          {toggle ? (
            <Text style={{ marginHorizontal: 30 }}>setting</Text>
          ) : null}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
