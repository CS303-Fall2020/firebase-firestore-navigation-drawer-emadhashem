import React from 'react'
import { View  , FlatList , StyleSheet , SafeAreaView} from 'react-native'
import { connect ,} from 'react-redux'
import Doing from './Doing';
const List = ({todos , dispatch , getCur = f => f}) => {
    return (
       <SafeAreaView style = {styles.container}>
            <FlatList style = {styles.list}
            data = {todos}
            renderItem = {({item}) => {
                return <Doing {...item} 
                getCur = {() => getCur(item.id , item.text)}/>
            }}
            keyExtractor={item => item.id}
        />
       </SafeAreaView>
    )
}
const mapStateToProps = ({todos}) => {
    return {
        todos
    }
}
const styles = StyleSheet.create({
    container : {
        width : '90%',
        height : '75%',
        marginTop : 10
    }
    
})
export default connect(mapStateToProps)(List)
