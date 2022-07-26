import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';

import LoneeList from '../screens/home/LoneeList';
import LoneeEdit from '../screens/home/LoneeEdit';


import HeaderIcon from '../components/HeaderIcon';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const LoanStack = createStackNavigator();

const LoneeStackScreen = ({navigation}) => (


  <LoanStack.Navigator screenOptions={{
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

     <LoanStack.Screen name="LoneeList" component={LoneeList} options={{
        title:'Lonee List',
        headerLeft: () => (
            <TouchableOpacity    onPress={() => navigation.openDrawer()}>
                <Image
                          source={icons.menu}
                          style={{
                              width: SIZES.IconSize,
                              height: SIZES.IconSize,
                              tintColor: COLORS.white,
                              marginLeft: 20
                          }}
                      />
            </TouchableOpacity>
                 
           )
        }} />
  
      <LoanStack.Screen name="LoneeEdit" component={LoneeEdit} options={{
      title:'Lonee Edit',
      headerLeft: () => (
          <TouchableOpacity    onPress={() => navigation.navigate('LoneeList')}>
               <Image
                          source={icons.back_arrow}
                          style={{
                              width: SIZES.IconSize,
                              height: SIZES.IconSize,
                              tintColor: COLORS.white,
                              marginLeft: 20
                          }}
                      />
          </TouchableOpacity>
               
         )
      }} />
      
  </LoanStack.Navigator> 


  );


export default LoneeStackScreen;



 