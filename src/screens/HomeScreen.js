import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
