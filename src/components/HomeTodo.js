import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator  } from '@react-navigation/stack';
import WelCome from './welCome';
import {StyleSheet , View , Text , TouchableOpacity , StatusBar} from 'react-native'
import Todo from './todo';
import Detailes from './detailes';

const Stack = createStackNavigator();
const HomeTodo = ({navigation}) => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name = "welcome" component = {WelCome}
                    options = {{
                        headerLeft : 
                            () => { return (
                                            <TouchableOpacity style = {styles.toggleBtn} 
                                                 onPress = {() => navigation.toggleDrawer()}>
                                                <Text style = {styles.line}></Text>
                                                <Text style = {styles.line}></Text>
                                                <Text style = {styles.line}></Text>
                                                
                                            </TouchableOpacity>
                                        )
                            }
                       
                    }}
                />
                <Stack.Screen name = "todo" component = {Todo}
                    options = {{
                        headerLeft : 
                            () => { return (
                                            <TouchableOpacity style = {styles.toggleBtn} 
                                                 onPress = {() => navigation.toggleDrawer()}>
                                                <Text style = {styles.line}></Text>
                                                <Text style = {styles.line}></Text>
                                                <Text style = {styles.line}></Text>
                                                
                                            </TouchableOpacity>
                                        )
                            }
                       
                    }}
                />
                <Stack.Screen name = "det" component = {Detailes}/>
            </Stack.Navigator>
        // </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    toggleBtn : {
        height : '70%',
        width : 50,
        backgroundColor : 'black',
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "space-around",
        marginLeft : 5
    },
    container : {
        marginTop : StatusBar.marginTop
    },
    line : {
        width : '70%',
        height : 5,
        backgroundColor : 'white'
    }
})
export default HomeTodo
