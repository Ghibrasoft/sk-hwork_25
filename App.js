import { StyleSheet, View } from "react-native";
import AuthForm from "./AuthForm";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f2f5",
  },
});
