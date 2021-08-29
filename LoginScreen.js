import * as React from 'react'
import { View,Text,StyleSheet, TextInput } from 'react-native'
export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:22,marginTop:20}}>Welcome Back!</Text>
            <Text style={{fontSize:22,color:'gray',marginTop:20}}>Sign in to continue</Text>
            <TextInput
                style={{marginTop:40,borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:20}}
               placeholder="Username"/>
               <TextInput
                style={{marginTop:40,borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:20}}
               placeholder="Password"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    }
})