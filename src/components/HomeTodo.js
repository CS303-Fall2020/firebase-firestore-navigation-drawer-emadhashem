import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator  } from '@react-navigation/drawer';
import WelCome from './welCome';
import {StyleSheet , View , Text , TouchableOpacity , StatusBar, Button} from 'react-native'
import Todo from './todo';
import Detailes from './detailes';
import { connect } from 'react-redux';
import { handleInitData } from '../redux/actions/shared';
import TodoSatck from './todoStack';
import Profile from './profile'
import { auth } from '../services/fireBase';
const Drawer = createDrawerNavigator();
const HomeTodo = ({navigation , user , dispatch , todos}) => {
    
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "todoStack" component = {TodoSatck} />
            <Drawer.Screen name = "profile" component = {Profile} 
                options = {{
                    drawerLabel : () =>  (
                        <View style = {styles.label}>
                            <Button title ="signout" onPress = {() => {
                                auth.signOut()
                                navigation.navigate('login') ; 
                                dispatch(goOut());
                            }}/> 
                            <Text style = {styles.labelTxt}>profile</Text>
                        </View>
                    ),
                    // drawerLabel : 'profile'

                }}
            />
        </Drawer.Navigator>
        
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
    },
    label : {
        flexDirection : "row",
    },
    labelTxt : {
        fontSize : 20,
        marginLeft : 10
    }
})
const mapStateToProps = ({user , todos}) => {
    return {
        user,
        todos
    }
}
export default connect(mapStateToProps)(HomeTodo);
