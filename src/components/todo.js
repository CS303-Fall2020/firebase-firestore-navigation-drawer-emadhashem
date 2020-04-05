import React  , {useEffect, useState} from 'react'
import { View  , Text , Button , StyleSheet , 
    TouchableOpacity, StatusBar , TextInput , Keyboard , TouchableWithoutFeedback , ActivityIndicator} from 'react-native';
import {addTodo , handleAddTodo} from '../redux/actions/todo'
import { connect } from 'react-redux';
import List from './List';

import firebase , { db } from '../services/fireBase'
// import crypto from 'crypto'
import {decode, encode} from 'base-64'
import { loadData, reload, handleInitData } from '../redux/actions/shared';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }





const Todo = ({navigation , load , dispatch , todos , user}) => {
    const [inp  , setInp] = useState('')
    const getCur = (id , text) => {
        navigation.navigate('Detailes' , {id , text});
    } 
    useEffect(() => {
        dispatch(handleInitData(user , todos));
    }, [user.name])
    // console.warn(load)
    if(load) return <ActivityIndicator size="large" color="#0000ff" />
    else 
    return (
        <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss()}>
            <View style = {styles.container}>
                
                <View style = {styles.todoCnt}>
                    <TextInput multiline style = {styles.txtInp} placeholder = "ADD TASK" 
                    onChangeText = {t => {
                        setInp(t)
                    }} value = {inp}/>
                    <View  style = {styles.btnHolder}>
                        <Button title = "add" onPress = {() => {
                            dispatch(handleAddTodo(inp , user , todos))
                            setInp('')
                        }}/>
                        <Button title = "refresh" onPress = {() => {
                            dispatch(reload());
                            dispatch(handleInitData(user , todos));
                        }}/>
                    </View>
                    <List getCur = {getCur}/>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    toggleBtn : {
        height : '70%',
        width : 50,
        backgroundColor : 'white',
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "space-around",
        marginLeft : 5
    },
    bar : {
       height : 50,
       backgroundColor : 'gray',
       justifyContent : "center",
    },
    container : {
        marginTop : StatusBar.marginTop,
        height : '100%'
    },
    line : {
        width : '70%',
        height : 5,
        backgroundColor : 'gray'
    },
    txtInp : {
        borderRadius : 5,
        borderWidth : 2,
        borderColor : 'black',
        width : '80%',
        padding : 10
    },
    todoCnt : {
        marginTop : 20,
        alignItems : "center"
    },
    btnHolder : {
        width : '70%',
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "space-around",
        marginTop : 15
    },
})
const mapStateToProps = ({load , todos , user}) => {
    return {
        load,
        todos,
        user
    }
}
export default connect(mapStateToProps)(Todo)
