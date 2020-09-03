import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import db from "../config"
import { SearchBar, Icon } from 'react-native-elements';

export default class ReadScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allStories : [],
      dataSource : [],
      search : "",
    }
  }

  componentDidMount = async()=>{
    const query = await db.collection("Stories").get()
    query.docs.map((doc)=>{
      this.setState({
        allStories : [...this.state.allStories, doc.data()],
        lastStory : null,
        search :"",
      })
    });
        //console.log(this.state.allStories[0].Author);
  }

  searchStories= async(text) =>{
    const newData = this.state.allStories.filter((item)=> {
      const itemData = item.Title ? item.Title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render(){
    return( 
      <ScrollView>
        <SearchBar
          placeholder="Type here to search by story name"
          onChangeText={text => this.searchStories(text)}
          onClear={text => this.searchStories('')}
          value={this.state.search}
        />
        {
          this.state.allStories.length === 0 ? 
          (
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:40}}>Fetching the best stories...</Text>
            </View>
          )
          :(
            <FlatList
              data={this.state.search === "" ?  this.state.allStories: this.state.dataSource}
              renderItem={({item})=>(
                <View style={{borderBottomWidth: 2, backgroundColor : "#98FB98"}}>
                  <Text style={{fontWeight : "bold", fontSize : 40}}>{item.Title}</Text>
                  <Text style={{fontSize : 20}}>{item.Story}</Text>
                  <Text style={{fontWeight : "bold", fontSize : 17.5}}>{"Author: " + item.Author}</Text>
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