import React , {useState}from 'react'
import { View, TextInput  , Button, StyleSheet} from 'react-native'
import {removeTodo , updateTodo , handleUpdateTodo , handleRemoveTodo} from '../redux/actions/todo'
import { connect } from 'react-redux'
const Detailes = ({dispatch , route , todos , user}) => {
    let {id , text} = route.params
    console.warn(id , text)
    const [inp  , setInp] = useState('')
    return (
       <View style = {styles.container}>
           <TextInput placeholder = "update task"
            style = {styles.txtInp} 
                onChangeText = {t => {
                    setInp(t)
                }} value = {inp}
           />
           <View style = {styles.btnHolder}>
                <Button title = "remove" onPress = {() => {
                    // dispatch(removeTodo(id))
                    dispatch(handleRemoveTodo(user , todos , id))
                }}/>
                <Button title = "update" onPress = {() => {
                    
                    dispatch(handleUpdateTodo(user , todos , id , inp))
                    setInp('')
                }}/>
            </View>
       </View>
    )
}
const styles = StyleSheet.create({
    txtInp : {
        borderRadius : 5,
        borderWidth : 2,
        borderColor : 'black',
        width : '80%',
        padding : 10,
        marginBottom : 15
    },
    container : {
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
const mapStateToProps = ({todos , user}) => {
    return {
        todos,
        user
    }
}
export default connect(mapStateToProps)(Detailes)
