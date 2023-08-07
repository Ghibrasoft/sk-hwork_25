import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TaskItem = ({ task, checked, handlecheck, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Button title="delete" onPress={onDelete} />
        <Button title={checked ? "uncheck" : "check"} onPress={handlecheck} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{task}</Text>
        {checked && <View style={styles.check} />}
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    height: 100,
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "green",
    marginLeft: 10,
  },
});
