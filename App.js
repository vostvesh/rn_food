import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const defaultTheme = DefaultTheme;
defaultTheme.colors.background = '#ffffff';
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer theme={defaultTheme}>
			<Stack.Navigator initialRouteName='Search' >
				<Stack.Screen name='Search' component={SearchScreen} options={{ title: 'Business Search' }} />
				<Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={{ title: 'Results Show' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
