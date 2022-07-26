import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';

import EmployeeList from '../screens/home/EmployeeList';
import EmployeeEdit from '../screens/home/EmployeeEdit';


import HeaderIcon from '../components/HeaderIcon';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const LoanStack = createStackNavigator();

const EmployeeStackScreen = ({navigation}) => (


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

     <LoanStack.Screen name="EmployeeList" component={EmployeeList} options={{
        title:'Employee List',
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
  
      <LoanStack.Screen name="EmployeeEdit" component={EmployeeEdit} options={{
      title:'Employee Edit',
      headerLeft: () => (
          <TouchableOpacity    onPress={() => navigation.navigate('EmployeeList')}>
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


export default EmployeeStackScreen;



 