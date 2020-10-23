import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null;
  }

  const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
							<ResultDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5,
	},
	container: {
		marginBottom: 10,
	},
});

export default ResultsList;
