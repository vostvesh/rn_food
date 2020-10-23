import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

const ResultDetail = ({ result }) => {
  const { name, image_url, rating, review_count } = result;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>{rating} Stars, {review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  }
});

export default ResultDetail;
