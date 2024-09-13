import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import data from "../../data.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";
import { useNavigation, useRouter } from "expo-router";
const ForYouPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dataItems = data?.tweets;
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const pastDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  const router = useRouter();
  return (
    <View className="bg-white  w-screen p-1">
      <FlatList
        data={dataItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-row  border-b border-gray-200 mt-2 ">
            {/* Profile Image */}
            <TouchableOpacity
              onPress={() => router.push(`profile/${item.user.username}`)}
            >
              <Image
                source={{ uri: item.user.profile_image_url }}
                className="h-10 w-10 rounded-full mr-2"
              />
            </TouchableOpacity>
            {/* User Info and Post */}
            <View className="flex-1 ">
              <View className="justify-between flex-row w-full flex items-center">
                <View className="flex-row items-center gap-2">
                  <Text className="text-black text-[16px] font-bold ">
                    {item.user.name}
                  </Text>
                  <Text className="text-gray-500 ">@{item.user.username}</Text>
                  <Text className="text-gray-400">
                    - {formatTimeAgo(item.timestamp)}
                  </Text>
                </View>
                <Feather name="more-vertical" size={20} color="gray" />
              </View>

              {/* Post Content */}
              <Text className="text-gray-800 mt-2 flex-wrap leading-6">
                {item.content}
              </Text>

              {item.media[0].type === "image" ? (
                <TouchableOpacity
                  onPress={() => openImageModal(item.media[0].url)}
                >
                  <Image
                    source={{ uri: item.media[0].url }}
                    className="h-[350px] w-full rounded-3xl object-cover mt-2"
                  />
                </TouchableOpacity>
              ) : null}
              {/* reactions */}
              <View className="flex-row justify-between w-full my-3 px-2  mt-2">
                <View className="flex flex-row gap-1 items-center ">
                  <AntDesign name="message1" size={18} color="gray" />
                  <Text className="text-gray-500">{item.replies}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center ">
                  <FontAwesome6 name="arrows-rotate" size={18} color="gray" />
                  <Text className="text-gray-500">{item.retweets}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center ">
                  <FontAwesome name="heart" size={18} color="red" />
                  <Text className="text-gray-500">{item.likes}</Text>
                </View>
                <View>
                  <Feather name="bookmark" size={18} color="gray" />
                </View>

                <AntDesign name="sharealt" size={18} color="gray" />
              </View>
            </View>
            {/* Modal for Image Preview */}
            <Modal
              visible={modalVisible}
              transparent={true}
              animationType="fade"
            >
              <View className="flex-1 bg-black/20 bg-opacity-90 justify-center items-center px-2">
                <TouchableOpacity
                  onPress={closeModal}
                  className="absolute top-10 right-5 z-10"
                >
                  <AntDesign name="close" size={30} color="white" />
                </TouchableOpacity>
                <Image
                  source={{ uri: selectedImage }}
                  className="w-[100%]  h-[40%] object-cover"
                />
              </View>
            </Modal>
          </View>
        )}
      />
    </View>
  );
};

export default ForYouPage;

const styles = StyleSheet.create({});
