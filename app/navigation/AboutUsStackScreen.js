import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity} from 'react-native';
import AboutUs from '../screens/about/AboutUs';


import HeaderIcon from '../components/HeaderIcon';


import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const AboutStack = createStackNavigator();

const AboutUsStackScreen = ({navigation}) => (


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
  
      <AboutStack.Screen name="AboutUs" component={AboutUs} options={{
        title:'AboutUs',
        headerLeft: () => (
            <TouchableOpacity    onPress={() => navigation.openDrawer()}>
                <HeaderIcon  />
            </TouchableOpacity>
                 
           )
        }} />
      
  </AboutStack.Navigator> 


  );


export default AboutUsStackScreen;



 