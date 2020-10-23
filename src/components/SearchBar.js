import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather style={styles.icon} name='search' />
			<TextInput
				style={styles.input}
				placeholder='Search'
				value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginVertical: 20,
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		fontSize: 18,
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

export default SearchBar;
