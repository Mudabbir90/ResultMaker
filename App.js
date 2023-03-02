import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import Home from './screens/home'
import CreateR from './screens/createR'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Create" component={CreateR} />
        <Stack.Screen name="Result" component={Result} />

      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // paddingVertical: 50 
  }
});