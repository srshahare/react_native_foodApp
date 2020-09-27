import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")

// import Components
import Food from './Food'
import Cart from './Cart'
import Address from './Address'
import Profile from './Profile'
// unable console yellow
// console.disableYellowBox = true;
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
       module:1,
     };
  }

  render() {
    return (
      <View style={{flex:1}}>
         {
          this.state.module==1? <Food />
          :this.state.module==2? <Cart />
          :this.state.module==3? <Address />
          :<Profile />
         }
         <View style={styles.bottomTab}>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:1})}>
             <Icon name="md-restaurant" size={30} color={this.state.module==1?"#900":"gray"} />
             <Text>Food</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:2})}>
             <Icon name="md-basket" size={30} color={this.state.module==2?"#900":"gray"} />
             <Text>Cart</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:3})}>
             <Icon name="md-map" size={30} color={this.state.module==3?"#900":"gray"} />
             <Text>Address</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:4})}>
             <Icon name="md-contact" size={30} color={this.state.module==4?"#900":"gray"} />
             <Text>Profile</Text>
           </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab:{
    height:60,
    width:width,
    backgroundColor:'orange',
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
  },
  itemTab:{
    width:width/4,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  }
})