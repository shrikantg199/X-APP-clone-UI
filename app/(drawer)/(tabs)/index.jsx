import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYouPage from "./../../../components/Home/ForYouPage";
import FollowingPage from "./../../../components/Home/FollowingPage";
import { useRoute } from "@react-navigation/native";
import CreatePost from "@/components/CreatePost";

const Tab = createMaterialTopTabNavigator();
export default function Index() {
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
        name="Following"
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
