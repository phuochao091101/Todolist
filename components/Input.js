import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Items(props) {
  const [task, setTask] = useState("");
  const changehandler = (val) => {
    setTask(val);
  };
  return (
    <View style={styles.inputbody}>
      <KeyboardAvoidingView style={styles.itembody}>
        <TextInput
          style={styles.inputField}
          placeholder={"Write a task"}
          onChangeText={changehandler}
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity onPress={() => props.addTask(task)}>
          <View style={styles.button}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  itembody: {
    marginBottom: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
  },
  inputField: {
    borderStyle: "solid",
    borderWidth: 2,
    flex: 3,
    borderColor: "#fff",
    borderRadius: 5,
  },
  inputbody: {
    marginBottom: 20,
    backgroundColor: "#59ABE3",
    borderRadius: 5,
  },
  button: {
    marginLeft: 2,
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: "#044F67",
  },
});
