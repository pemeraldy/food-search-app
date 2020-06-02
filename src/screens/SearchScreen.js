import React, { useState } from "react";

import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, errMsg, results] = useResults();

  const filterPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  // filterPrice("$");
  // console.log(results);
  return (
    <>
      <Text>Found {results.length} results</Text>
      <Text>{searchText}</Text>
      {errMsg ? <Text> {errMsg}</Text> : null}
      <SearchBar
        searchText={searchText}
        onSearchChange={(newT) => setSearchText(newT)}
        onSearchEnd={() => searchApi(searchText)}
      />
      <ScrollView>
        <ResultList results={filterPrice("$")} title="Cost Effective" />
        <ResultList results={filterPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

export default SearchScreen;
