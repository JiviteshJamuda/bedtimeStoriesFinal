import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from "./sceens/login";
import ReadScreen from "./sceens/readScreen";
import WriteScreen from "./sceens/writeScreen";

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer/>
      
    );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  WriteStories: {screen: WriteScreen},
  ReadBooks: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName);
      if(routeName === "ReadBooks"){
        return(
          <Image  style={styles.readImg}
            source={require("./assets/read.png")}
          />
        )
        
      }
      else if(routeName === "WriteStories"){
        return(
          <Image  style={styles.readImg}
            source={require("./assets/write.png")}
          />
        )
        
      }
    }
  })
}
);

const SwitchNavigator = createSwitchNavigator(
  {
    LoginScreen : {screen : Login},
    Home : {screen : TabNavigator}
  },
  {initialRouteName : "LoginScreen"}
)

const AppContainer =  createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readImg : {
    width : 70,
    height : 35,
  }
});
