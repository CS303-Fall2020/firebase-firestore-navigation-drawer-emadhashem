import React , {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View , Text, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator  } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Constants from 'expo-constants'; 
import logger from './src/redux/middlewares/index'
import rootReducer from './src/redux/reducers/index'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'
import Home from './src/components/home'
import Login from './src/components/authData/login'
import SignUp from './src/components/authData/signUp'
import Forget from './src/components/authData/forgetPass'
import { auth } from './src/services/fireBase';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
const store = createStore(rootReducer , applyMiddleware(thunk , logger));
function App() {  
    return (
        <Provider store = {store}>
            <View style = {styles.container}>
              <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name = "login" component = {Login}/>
                        <Stack.Screen name = "sign" component = {SignUp}/>
                        <Stack.Screen name = "forget" component = {Forget}/>
                        <Stack.Screen name = "home" component = {Home}
                          options = {{
                            headerLeft : () => <Button title = "signout" onPress = {() => {
                              auth.signOut();
                          }}/>,
                          title : ''
                            
                          }}
                        />
                    </Stack.Navigator>
              </NavigationContainer>
          </View>
        </Provider>
        
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop : Constants.statusBarHeight,
    flex : 1
  },
});
export default App