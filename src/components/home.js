import React from 'react'
import { View, Text, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import HomeTodo from './HomeTodo'
import { db, auth } from '../services/fireBase';
const Drawer = createDrawerNavigator();
const Home = ({navigation}) => {
    return (
            <Drawer.Navigator>
                <Drawer.Screen name = "welCome" component = {HomeTodo}
                    options = {{
                        drawerLabel : () => <Button title = "signout" onPress = {() => {
                            auth.signOut();
                            navigation.navigate('login')
                        }}/>,
                        
        
                    }}
                />
            </Drawer.Navigator>
    )
}

export default Home
