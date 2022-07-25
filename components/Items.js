import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function Items(props) {
  return (
    <View style={styles.itembody}>
      <Text>{props.item.index}</Text>
      <Text>{props.item.name}</Text>
      <TouchableWithoutFeedback
        onPress={() => props.deleteTask(props.item.index)}
      >
        <MaterialIcons
          style={styles.delete}
          name="delete"
          size={18}
          color="#fff"
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  itembody: {
    marginBottom: 10,
    backgroundColor: "#59ABE3",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
});
