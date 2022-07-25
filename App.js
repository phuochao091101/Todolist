import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "./components/Header";
import Items from "./components/Items";
import Input from "./components/Input";
import React, { useState } from "react";

export default function App() {
  const [tasks, setTask] = useState([
    { name: "studing", index: 1 },
    { name: "eating", index: 2 },
  ]);

  function deleteTask(val) {
    setTask(tasks.filter((item) => item.index != val));
  }
  function addTask(value) {
    var err = 1;
    tasks.forEach((element) => {
      if (element.name == value) {
        err = 0;
      }
    });
    if (err == 0) {
      Alert.alert("Error", "Task exits", [
        {
          text: "OK",
        },
      ]);
    } else {
      setTask([...tasks, { name: value, index: tasks.length + 1 }]);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={(item) => item.index}
        data={tasks}
        renderItem={({ item }) => (
          <ScrollView>
            <Items deleteTask={deleteTask} item={item}></Items>
          </ScrollView>
        )}
      />
      <Input addTask={addTask} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
});
