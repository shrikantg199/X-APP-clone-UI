import { Text, View } from "react-native";
import data from "../../../data.json";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYouPage from "./../../../components/Home/ForYouPage";
import FollowingPage from "./../../../components/Home/FollowingPage";

const Tab = createMaterialTopTabNavigator();
export default function Index() {
  const { tweets } = data;
  // console.log(tweets[0].user.username);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#1D9BF0",
          height: 3,
          width: 100,
          marginLeft: 50,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "For You",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 400,
          },
        }}
        component={ForYouPage}
      />
      <Tab.Screen
        name="Settings"
        component={FollowingPage}
        options={{
          title: "Following",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 400,
          },
        }}
      />
    </Tab.Navigator>
  );
}
