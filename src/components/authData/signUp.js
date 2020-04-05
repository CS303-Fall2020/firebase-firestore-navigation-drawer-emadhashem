import React, { useState } from 'react'
import { View, Text  , TextInput , Button} from 'react-native'
import { connect } from 'react-redux'
import { auth } from '../../services/fireBase'
import { setUser } from '../../redux/actions/shared'

const SignUp = ({dispatch , navigation}) => {
    const[cur , setCur] = useState({email : '' , pass : '' , pass1 : ''})
    return (
        <View>
            <TextInput placeholder = "email" 
            
            style ={{width : 200 , padding : 20}} onChangeText = {t => setCur({...cur , email : t})}
            value = {cur.email}
            />

            <TextInput passwordRules = "s" placeholder = "pass" 
            secureTextEntry = {true}
            style ={{width : 200 , padding : 20}} onChangeText = {t => setCur({...cur , pass : t})}
            value = {cur.pass}
            />
            <TextInput passwordRules = "s" placeholder = "conifirm pass" 
            secureTextEntry = {true}
            style ={{width : 200, padding : 20}} onChangeText = {t => setCur({...cur , pass1 : t})}
            value = {cur.pass1}
            />

            <Button title = "signup" onPress = {() => {
               if(cur.pass === cur.pass1) {
                    auth.createUserWithEmailAndPassword(cur.email , cur.pass + "")
                    .then(() => {
                        dispatch(setUser({name : cur.email , pass : cur.pass + ""}));
                        navigation.navigate('hometodo')
                        setCur({email : '' , pass : '' , pass1 : ''})
                    })
                    .catch(e => alert(e))
               }else alert('pasword error')
                
            }}/>
        </View>
    )
}

export default connect()(SignUp)
