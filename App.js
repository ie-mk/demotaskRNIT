import React from 'react';
import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/MainScreen';
import ProfileScreen from './src/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen,
//   },
//   Profile: {
//     screen: ProfileScreen,
//   },
// },
// {
//   initialRouteName: 'Main',
// }
// );


const Stack = createStackNavigator();

function App() {
  return (
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={MainScreen} />
       <Stack.Screen name="Profile" component={ProfileScreen} />

     </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;
