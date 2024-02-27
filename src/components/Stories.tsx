import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataType, userData } from "@/utils/UserData";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Story: {item: DataType};
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Story">;

const Stories = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      {userData.map((item) => {
        return (
          <View key={item.id} style={styles.itemWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Story", { item })}
            >
              <View style={styles.imageContainer}>
                <Image style={styles.storyImage} source={item.story.image} />
              </View>
            </TouchableOpacity>
            <Text style={styles.storyText}>{item.username}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  itemWrapper: {
    marginLeft: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 2,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  storyText: {
    textAlign: "center",
    fontSize: 12,
  },
});

export default Stories;
