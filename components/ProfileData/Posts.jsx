import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import data from "../../data.json";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
const Posts = memo(({ route }) => {
  const { name } = route.params;
  console.log(name);
  const dataItems = data?.tweets;
  const filteredData = dataItems?.filter((item) => item.user.username === name);
  return (
    <View className="bg-white ">
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex flex-row border-b border-gray-200  mt-2">
              {/* Profile Image */}

              <Image
                source={{ uri: item.user.profile_image_url }}
                className="h-10 w-10 rounded-full mr-2"
              />

              {/*  Posts */}
              <View className="flex-1">
                {/* Post Content */}
                <Text className="text-gray-800 flex-wrap leading-6 mx-2">
                  {item.content}
                </Text>

                {item.media[0]?.type === "image" ? (
                  <View
                    className="mx-1"
                    activeOpacity={0.9}
                    onPress={() => openImageModal(item.media[0].url)}
                  >
                    <Image
                      source={{ uri: item.media[0].url }}
                      className="h-[280px] w-[310px] rounded-3xl object-cover mt-2"
                    />
                  </View>
                ) : null}

                {/* Reactions */}
                <View className="flex-row justify-between w-full my-3 px-2 mt-2">
                  <View className="flex flex-row gap-1 items-center">
                    <AntDesign name="message1" size={18} color="gray" />
                    <Text className="text-gray-500">{item.replies}</Text>
                  </View>
                  <View className="flex flex-row gap-1 items-center">
                    <FontAwesome6 name="arrows-rotate" size={18} color="gray" />
                    <Text className="text-gray-500">{item.retweets}</Text>
                  </View>
                  <View className="flex flex-row gap-1 items-center">
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
              {/* <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
              >
                <View className="flex-1 bg-black/20 justify-center items-center px-2">
                  <TouchableOpacity
                    onPress={closeModal}
                    className="absolute top-10 right-5 z-10"
                  >
                    <AntDesign name="close" size={30} color="white" />
                  </TouchableOpacity>

                  <Image
                    source={{ uri: selectedImage }}
                    className="w-[100%] h-[40%] object-cover"
                  />
                </View>
              </Modal> */}
            </View>
          )}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
});

export default Posts;

const styles = StyleSheet.create({});
