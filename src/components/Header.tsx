import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("@/assets/logo.png")} />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity >
          <Ionicons name="heart-outline" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="send" size={32} />
          <View style={styles.badgeContainer}><Text style={styles.badgeText}>5</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent:"space-between",
    height: 50,
  },
  image: {
    width: 110,
    height: 40,
  },
  rightContainer:{
    flexDirection: "row",
    gap: 15,
  },
  iconButton:{
    position: "relative",
  },
  badgeContainer:{
    backgroundColor:"red",
    position: "absolute",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 10,
    top: -5,
    right: 0,
  },
  badgeText:{
    fontSize:12,
    fontWeight: "600",
    color: "white",
  }
});

export default Header;
