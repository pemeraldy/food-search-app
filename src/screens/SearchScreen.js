import React, { useState } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <View>
      <Text>{searchText}</Text>
      <SearchBar
        searchText={searchText}
        onSearchChange={(newT) => setSearchText(newT)}
        onSearchEnd={() => console.log(searchText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
