import React,{Component} from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebasee from 'firebase';
import MyHeader from '../components/MyHeader';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class ExchangeScreen extends Component{
   
constructor(){
    super();
    this.state={
        allRequests : []
    }
    this.requestRef = null
}

getAllRequests = () =>{
    this.requestRef = db.collection("itemRequests")
    .onSnapshot((snapshot)=>{
        var allRequests = snapshot.docs.map(document => document.data());
        this.setState({
            allRequests : allRequests
        })
    })
}

keyExtractor = (item, index) => index.toString()

renderItem = ( {item,i}) => {
    console.log(item.itemName);
    return(
        <ListItem
        key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.item_name}</ListItem.Title>
                 <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                     <TouchableOpacity style={styles.button}
                     onPress={()=>{
                         this.props.navigation.navigate("UserDetails",{"details":item})
                     }}
                     >
                       <Text style={{color:'#ffff'}}>View</Text>
                     </TouchableOpacity>
                     
            </ListItem.Content>
        </ListItem>
        /*<ListItem
        key={i}
        title={item.itemName}
        subtitle={item.description}
        titleStyle={{ color:'black', fontWeight:'bold'}}
        rightElement={
            <TouchableOpacity style={styles.button}>
                onPress={()=>{
                    this.props.navigation.navigate("ReceiverDetails",{"details":item})
                }}
            </TouchableOpacity>
        }
        bottomDivider/>*/
    )
}

    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Donate Items"/>
            <View style={{flex:1}}>
                {
                    this.state.allRequests.length===0?(
                        <View style={styles.subContainer}>
                            <Text style={{fontSize:20}}>
                                List Of All Requested Items
                            </Text>
                        </View>
                    ):(
                        <Flatlist
                            keyExtractor={this.keyExtractor}
                            data={this.state.allRequests}/>
                    )
                }
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff5722',
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:8
        }
    }
})