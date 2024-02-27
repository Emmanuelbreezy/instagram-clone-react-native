import { StyleSheet, View} from "react-native";
import Header from "@/components/Header";
import Stories from "@/components/Stories";
import AppLayout from "@/layout/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Header />
        <Stories />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
