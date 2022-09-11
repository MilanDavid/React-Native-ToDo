import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskInput = (text) => {
    setTaskText(text);
  };

  const handleAddTask = () => {
    setTaskList((prevState) => [...prevState, taskText]);
    setTaskText("");
  };

  const handleRemoveTask = (index) => {
    console.log("INDEX: ", index);
    setTaskList((prevState) => prevState.filter((item, ind) => ind != index));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Discribe your task..."
          style={styles.inputField}
          onChangeText={handleTaskInput}
          value={taskText}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <View style={styles.taskContainer}>
        <ScrollView>
          <View>
            {taskList.map((goal, key) => (
              <View style={styles.taskItem}>
                <Text key={key}>
                  [{key + 1}]. {goal}
                </Text>
                <Text onPress={() => handleRemoveTask(key)}>
                  <AntDesign name="close" size={24} color="red" />
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    padding: 10,
    marginRight: 8,
  },
  taskContainer: {
    flex: 5,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
