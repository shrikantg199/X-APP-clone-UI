import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const CreatePost = () => {
  const [toggle, istoggle] = useState(false);
  return (
    <TouchableOpacity activeOpacity={0.8}>
      {toggle && (
        <TouchableOpacity
          onPress={() => istoggle(!toggle)}
          className="absolute bottom-3 right-2 bg-[#1D9BF0] py-[18px] px-[18px] rounded-full shadow-xl shadow-black"
        >
          <MaterialIcons name="post-add" size={20} color="white" />
        </TouchableOpacity>
      )}

      {toggle ? (
        <Animated.View>
          {/* First icon */}
          <Animated.View
            entering={FadeInUp.delay(80).duration(300)}
            exiting={FadeOutDown.delay(80).duration(500)}
          >
            <View className="absolute bottom-20 right-2 bg-white py-[14px] px-[14px] rounded-full border border-gray-100 ">
              <Fontisto name="photograph" size={16} color="#1D9BF0" />
            </View>
          </Animated.View>

          {/* Second icon */}
          <Animated.View
            entering={FadeInUp.delay(160).duration(300)}
            exiting={FadeOutDown.delay(160).duration(500)}
          >
            <View className="absolute bottom-36 right-2 border border-gray-100 bg-white py-[14px] px-[18px] rounded-full ">
              <FontAwesome name="microphone" size={16} color="#1D9BF0" />
            </View>
          </Animated.View>

          {/* Third icon */}
          <Animated.View
            entering={FadeInUp.delay(240).duration(300)}
            exiting={FadeOutDown.delay(240).duration(500)}
          >
            <View className="absolute bottom-52 right-2 border border-gray-100 bg-white py-[14px] px-[14px] rounded-full ">
              <Feather name="video" size={16} color="#1D9BF0" />
            </View>
          </Animated.View>
        </Animated.View>
      ) : (
        <TouchableOpacity
          onPress={() => istoggle(!toggle)}
          className="absolute bottom-3 right-2 bg-[#1D9BF0] py-[10px] px-[20px] rounded-full shadow-xl shadow-black"
        >
          <Text className="text-white text-3xl">+</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
