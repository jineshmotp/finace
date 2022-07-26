import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import EditProfile from '../screens/home/EditProfile';


import HeaderIcon from '../components/HeaderIcon';


import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const AboutStack = createStackNavigator();

const EditStackScreen = ({navigation}) => (


  <AboutStack.Navigator screenOptions={{
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
  
      <AboutStack.Screen name="EditProfile" component={EditProfile} options={{
        title:'Edit Profile',
        headerLeft: () => (
            <TouchableOpacity    onPress={() => navigation.goBack()}>
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
      
  </AboutStack.Navigator> 


  );


export default EditStackScreen;



 