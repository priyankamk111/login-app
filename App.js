import * as React from 'react'
import { View,StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
const Stack = createStackNavigator();
export default function App(){
  
  return(
    <View style={StyleSheet.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFF'
  }
})