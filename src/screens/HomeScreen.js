import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go Components Screen" />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go List Screen" />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go Image Screen" />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go Counter Screen" />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title="Go Color Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
