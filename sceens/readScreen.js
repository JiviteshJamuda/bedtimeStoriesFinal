import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import db from "../config"

export default class ReadScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allStories : []
        }
    }

    componentDidMount = async()=>{
        const query = await db.collection("Stories").get();
        query.docs.map((doc)=>{
            this.setState({
                allStories : [...this.state.allStories, doc.data()],
            })
        });
        console.log(this.state.allStories[0].Author);
    }

    render(){
        return(
            <View>
                <ScrollView>
                    <FlatList
                        data={this.state.allStories}
                        renderItem={({item})=>(
                            <View style={{borderBottomWidth: 2}}>
                                <Text>{"Title: " + item.Title}</Text>
                                <Text>{item.Story}</Text>
                                <Text>{"Author: " + item.Author}</Text>
                            </View>
                        )}
                        keyExtractor= {(item, index)=> index.toString()}
                        onEndReachedThreshold={0.7}
                    />   
                </ScrollView>              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textView:{
        marginTop : 200,
        marginLeft : 500,
    },
    text:{
        fontSize: 40,
    }
})