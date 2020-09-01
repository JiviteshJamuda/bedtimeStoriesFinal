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
        const query = await db.collection("Stories").get()
        query.docs.map((doc)=>{
            this.setState({
                allStories : [...this.state.allStories, doc.data()],
            })
        });
        //console.log(this.state.allStories[0].Author);
    }

    keyExtractor = (item, index) => index.toString()
    
      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.item}
            subtitle={item.description}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            bottomDivider
          />
        )
      }

    render(){
        return( 
                <ScrollView>
                    {
                        this.state.allStories.length === 0 ? 
                        (
                            <View style={{flex:1}}>
                                <Text style={{fontSize:40}}>Fetching the best stories...</Text>
                            </View>
                        )
                        :(
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
                                bottomDivider
                            />   
                        )
                    }
                    
                </ScrollView>
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