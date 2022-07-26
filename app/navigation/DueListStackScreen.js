import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import DueList from '../screens/home/DueList';
import DueResponce from '../screens/home/DueResponce';


import HeaderIcon from '../components/HeaderIcon';


import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const FieldStack = createStackNavigator();

const DueListStackScreen = ({navigation}) => (


  <FieldStack.Navigator screenOptions={{
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
  
      <FieldStack.Screen name="DueList" component={DueList} options={{
        title:'Due List',
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

     <FieldStack.Screen name="DueResponce" component={DueResponce} 
     options={{
      title:'Due Responce',
      headerLeft: () => (
          <TouchableOpacity    onPress={() => navigation.navigate('DueList')}>
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
      
  </FieldStack.Navigator> 


  );


export default DueListStackScreen;



 