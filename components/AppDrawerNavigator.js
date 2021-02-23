import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MyBarterScreen from '../screens/MyBarters';
import SettingScreen from '../screens/SettingsScreen';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyBarterScreen:{
        screen:MyBarterScreen
    },
    Setting:{
        screen:SettingScreen
    }
   },
   {
       contentComponent:CustomSideBarMenu 
   },
   {
       initialRouteName:'Home'
   }
)