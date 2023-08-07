import React from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const AuthForm = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/linkedin.png")} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email..."
          placeholderTextColor="#9ca3af"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password..."
          placeholderTextColor="#9ca3af"
          secureTextEntry
        />
        <Button title="Log in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default AuthForm;
