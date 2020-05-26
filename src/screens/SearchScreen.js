import React, { useState } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, errMsg, results] = useResults();

  return (
    <View>
      <Text>Found {results.length} results</Text>
      <Text>{searchText}</Text>
      {errMsg ? <Text> {errMsg}</Text> : null}
      <SearchBar
        searchText={searchText}
        onSearchChange={(newT) => setSearchText(newT)}
        onSearchEnd={searchApi}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
