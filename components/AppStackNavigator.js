import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert,Image, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-naviagtion-stack';
import HomeScreen from '../screens/HomeScreen';
import ReceiverDetailsScreen from '../screens/UserDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    UserDetails:{
        screen:UserDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    }
 },
 {
     initialRouteName:'HomeScreen'
 }
)