import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AppLayout from "@/layout/AppLayout";

type RootStackParamList = {
  Story: { item: any };
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Story">;

const StoryView = ({ route }: any) => {
  const navigation = useNavigation<NavigationProp>();
  const item = route.params.item;
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - item.story.time;
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const timeout = setTimeout(() => {
        navigation.goBack();
    }, 4000)
  },[]);

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={item.profile} />
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.time}>{storyTime}hr</Text>
        </View>
        <View style={styles.viewContainer}>
          <Image
            source={item.story.image}
            style={[
              styles.viewImage,
              { height: screenHeight - 100, width: screenWidth },
            ]}
          />
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.bottomInput}
              placeholder="Message"
              placeholderTextColor="white"
            />
            <Image
              style={{ tintColor: "#fff" }}
              source={require("@/assets/send.png")}
            />
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 12,
    paddingLeft: 12,
    position: "relative",
    borderRadius: 30,
    zIndex: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  viewContainer: {
    position: "absolute",
  },
  viewImage: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  bottomContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomInput: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 300,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#fff",
    marginHorizontal: 20,
  },
});

export default StoryView;
