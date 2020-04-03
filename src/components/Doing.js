import React from 'react'
import {View, Button, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {toggleToto} from '../redux/actions/todo'
const Doing = ({ text , id , con , dispatch , getCur = f => f,}) => {
    const txtSty = () => ({
        textDecorationLine : (con) ? "line-through" : 'none'
    })
    return (
        <View style = {styles.container}>
                <Button title = "detaailes" onPress = {() => {
                    getCur();
                }}/>
                <Text style = {[styles.txt , txtSty()]}>{text}</Text>
                <Button title = "done" onPress = {() => dispatch(toggleToto(id))}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "space-around",
        flexDirection : "row",
        height : 'auto',
        marginTop : 5
    },
    txt : {
        // height : '100%',
        width : '50%',
        // backgroundColor : 'red',
        textAlign : "center",
        // backgroundColor : 'red',
        fontSize : 20
        
    }
    
})
export default connect()(Doing)
