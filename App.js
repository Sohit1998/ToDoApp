import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Store from './src/redux/store';
import ParticularCategory from './src/screens/category/ParticularCategory';
import HomePage from './src/screens/homepage/HomePage';
import UserInput from './src/screens/userInput/UserInput';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HOMEPAGE" component={HomePage}></Stack.Screen>
          <Stack.Screen
            name="CATEGORY"
            component={ParticularCategory}></Stack.Screen>
          <Stack.Screen
            name="USERINPUT"
            component={UserInput}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
