import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({
  resultDetails: { name, image_url, rating, review_count },
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, Reviews: {review_count}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    // paddingLeft: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default ResultDetail;
