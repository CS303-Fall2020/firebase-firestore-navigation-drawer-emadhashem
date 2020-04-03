import React, { useState } from 'react'
import { View, Text , TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import {auth} from '../../services/fireBase'
import { setUser } from '../../redux/actions/shared'
const Login = ({navigation , dispatch}) => {
    const[cur , setCur] = useState({email : '' , pass : ''})
    return (
        <View>
            <TextInput placeholder = "email" 
            style ={{width : 200}} onChangeText = {t => setCur({...cur , email : t})}/>

            <TextInput passwordRules = "s" placeholder = "pass" 
            style ={{width : 200}} onChangeText = {t => setCur({...cur , pass : t})}/>
            <Button title = "login" onPress = {() => {

                auth.signInWithEmailAndPassword(cur.email , cur.pass + "")
                .then(() => {
                    dispatch(setUser({name : cur.email , pass : cur.pass}));
                    navigation.navigate('home')
                })
                .catch(e => alert(e))
                
            }}/>
            <Button title = "signup" onPress = {() => {
                navigation.navigate('sign')
            }}
            />
            <Button title = "forgetpass" onPress = {() => navigation.navigate('forget')}/>
        </View>
    )
}

export default connect()(Login)
