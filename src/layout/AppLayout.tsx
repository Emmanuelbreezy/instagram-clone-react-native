import { FC } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
type AppProps = {
  children: React.ReactNode;
};

const AppLayout: FC<AppProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AppLayout;
