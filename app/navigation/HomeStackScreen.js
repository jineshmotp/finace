import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';


import HeaderIcon from '../components/HeaderIcon';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();

const HomeStackScreen= ({navigation}) => (


  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: COLORS.firsttheme,
      borderBottomColor: COLORS.firsttheme,
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
      fontWeight: 'bold'
      }

  }}
  
  >  
  
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{
        title:'Due List',
        headerLeft: () => (
            <TouchableOpacity    onPress={() => navigation.openDrawer()}>
                <HeaderIcon  />
            </TouchableOpacity>
                 
           )
        }} />
      
  </HomeStack.Navigator> 


  );


export default HomeStackScreen;



 