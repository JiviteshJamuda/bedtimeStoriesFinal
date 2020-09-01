import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from "../config";

export default class WriteScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "",
            story : "",
            author : "",
        }
    }

    submitStory = ()=>{
        db.collection("Stories").add({
            Title : this.state.title,
            Story : this.state.story,
            Author : this.state.author,
        })
        //ToastAndroid.show("Congratulations ! You have submitted your stroy !", ToastAndroid.SHORT);
        alert("Congratulations ! You have submitted your stroy !")
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={{flex:1}} >
            <View>
                <TextInput style={styles.titleTextInput}
                    placeholder="Title your masterpiece"
                    onChangeText={(text)=>{
                        this.setState({
                            title : text,
                        })
                    }}
                />
                <TextInput style={styles.storyTextInput} 
                    multiline 
                    placeholder = "Write your story here"
                    numberOfLines={15} 
                    onChangeText={(text) => {
                        this.setState({
                            story : text,
                        })
                    }}
                    maxLength={-1}
                />
                <TextInput style={styles.authorTextInput}
                    placeholder="Name of the Author"
                    onChangeText={(text)=>{
                        this.setState({
                            author : text,
                        })
                    }}
                />
                <TouchableOpacity style = {styles.submit} 
                onPress={
                    this.submitStory                   
                }>
                    <Text style = {styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    storyTextInput : {
        borderWidth : 3,
        margin : 30
    },
    titleTextInput : {
        borderWidth : 3,
        marginTop : 30,
        marginLeft : 30,
        width : 500,
        height : 30,
    },
    authorTextInput:{
        borderWidth : 3,
        marginLeft : 935,
        marginBottom : 40,
        width : 400,
        height : 30,
    },
    submit : {
        width : 90,
        height : 40,
        alignSelf : "center",
        borderWidth : 3,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,  
        borderColor : "brown",
        backgroundColor : "green",
    },
    submitText : {
        fontFamily : "bold",
        fontSize : 20,
    }
})