import React, { useState } from 'react'
import { View, Text, Button  ,TextInput} from 'react-native'
import {auth} from '../../services/fireBase'
const Forget = () => {
    const [cur , setCur] = useState('');
    const [done , setDone] = useState(false)
    return (
        <View>
            <TextInput placeholder = "email" 
            style ={{width : 200}} onChangeText = {t => setCur(t)}
                value = {cur}
            />
            {
                (done) ? <Text>email sent to {cur}</Text> : null
            }
            <Button title = "send" onPress = {() => {
                auth.sendPasswordResetEmail(cur).catch((e) => alert(e))
                setDone(true);
                setTimeout(() => {
                    setDone(false)
                }, 3000);
                setCur('')

            }}/>
        </View>
    )
}

export default Forget
