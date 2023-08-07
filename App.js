import { useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

let id = Date.now() + 1;
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);

  const addTask = () => {
    id++;
    const text = `Task number ${id}`;
    setTasks([...tasks, { id, text, checked: false }]);
  };

  const handlecheck = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return {
            id: task.id,
            text: task.text,
            checked: !task.checked,
          };
        }
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add task" onPress={addTask} />
      <ScrollView>
        {tasks.map(({ id, text, checked }) => (
          <TaskItem
            key={id}
            task={text}
            checked={checked}
            onDelete={() => deleteTask(id)}
            handlecheck={() => handlecheck(id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
