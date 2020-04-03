import React, { useEffect } from 'react'
import { View , Text, Button , StyleSheet , StatusBar , TouchableOpacity} from 'react-native'
import {handleInitData} from '../redux/actions/shared'
import { connect } from 'react-redux'
const WelCome = ({navigation , dispatch , user , todos}) => {
    useEffect(() => {
        dispatch(handleInitData(user , todos));
    }, [])
    return (
        <View>
            <Button title = "go to todo" onPress = {() => navigation.navigate('todo')}/>
        </View>
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
        marginTop : StatusBar.marginTop
    },
    line : {
        width : '70%',
        height : 5,
        backgroundColor : 'gray'
    }
})
const mapStateToProps = ({user , todos}) => {
    return {
        user,
        todos
    }
}
export default connect(mapStateToProps)(WelCome)
