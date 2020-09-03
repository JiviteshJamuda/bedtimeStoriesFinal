import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import firebase from "firebase";

export default class Login extends React.Component {
  constructor(){
    super();
    this.state={ 
      password:"",
      emailId:"",
    }
  }

  login = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      this.props.navigation.navigate("Home");
    });
  }
    
  render(){
    return(
      <View style={{flex:1, alignItems : "center", justifyContent : "center", backgroundColor : "#c4bdbc"}}> 
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView} behavior="padding">
          <Text style={styles.title}>Bed Time Stories</Text>
          <TextInput style={styles.loginBox}
            placeholder="abc@gmail.com"
            value={this.state.emailId}
            onChangeText={(text)=>{
              this.setState({
                emailId : text
              })
            }}
          />
          <TextInput style={styles.loginBox}
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text)=>{
              this.setState({
                password : text
              })
            }}
          />
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.props.navigation.navigate("Home")
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
  },
  loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
  },
  KeyboardAvoidingView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 8,
  },
  shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10
  },
  buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
  }
})