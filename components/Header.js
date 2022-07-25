import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.headerbody}>
      <Text style={styles.header}>TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#1F4788",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 10,
  },
  headerbody: {},
});
