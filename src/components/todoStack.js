import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
const stack = createStackNavigator();
import Todo from './todo';
import Detailes from './detailes'
import { auth } from '../services/fireBase';
import { connect } from 'react-redux';
import { handleInitData } from '../redux/actions/shared';
import { goOut } from '../redux/actions/todo';
const TodoSatck = ({navigation , user , todos , dispatch}) => {
    
    return (
        <stack.Navigator>
            <stack.Screen name = "todos" component = {Todo} 
                options = {{
                   header : () => (
                    <View style = {styles.bar}>
                        <View style = {styles.barLeft}> 
                            <TouchableOpacity style = {styles.lineCtn} onPress = {() => navigation.toggleDrawer()}>
                                <Text style = {styles.line}></Text>
                                <Text style = {styles.line}></Text>
                                <Text style = {styles.line}></Text>
                            </TouchableOpacity>
                            <Text style = {styles.txtBar}>Todo</Text>
                        </View>
                        <Text style = {[styles.txtBar , {textDecorationLine : "underline"}]} onPress = {() => {
                            auth.signOut();
                            navigation.navigate('login')
                            dispatch(goOut());
                        }}>
                            Signout
                        </Text>
                </View>
                   )
                }}
            />
            <stack.Screen name = "Detailes" component = {Detailes} />
        </stack.Navigator>
    )
}
const styles = StyleSheet.create({
    bar : {
        height : 70,
        backgroundColor : '#1E90FF',
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    barLeft : {
        flexDirection : "row",
        width : '40%',
        justifyContent : "space-between",
        alignItems : "center",
        height : '100%'
    },
    line : {
        height : 5,
        backgroundColor : 'white',
        width : 50,
        borderRadius : 5
    },
    txtBar : {
        fontSize : 30,
        marginRight : 5,
        color : 'white'
    },
    lineCtn: {
        justifyContent : "space-around",
        // backgroundColor : 'red',
        height : '60%',
        marginLeft : 5
    }
})
const mapStateToProps = ({user , todos}) => {
    return {
        user,
        todos
    }
}
export default connect(mapStateToProps)(TodoSatck)
