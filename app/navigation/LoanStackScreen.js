import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';

import LoanList from '../screens/home/LoanList';
import LoanEdit from '../screens/home/LoanEdit';


import HeaderIcon from '../components/HeaderIcon';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const LoanStack = createStackNavigator();

const LoanStackScreen = ({navigation}) => (


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

     <LoanStack.Screen name="LoanList" component={LoanList} options={{
        title:'Loan List',
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
  
      <LoanStack.Screen name="LoanEdit" component={LoanEdit}  options={{
      title:'Loan Edit',
      headerLeft: () => (
          <TouchableOpacity    onPress={() => navigation.navigate('LoanList')}>
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


export default LoanStackScreen;



 