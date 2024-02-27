import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/screens/auth/Login";
import Signup from "@/screens/auth/Signup";
import { AppColor } from "@/utils/AppColors";
import Dashboard from "@/screens/dashboard/Dashboard";
import StoryView from "@/components/StoryView";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor={AppColor.PRIMARY} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Story" component={StoryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
