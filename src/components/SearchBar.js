import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchText, onSearchChange, onSearchEnd }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={searchText}
        onChangeText={onSearchChange}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={onSearchEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#ddd",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    // alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "blue",
  },
});
export default SearchBar;
