import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import FieldReport from '../screens/home/FieldReport';


import HeaderIcon from '../components/HeaderIcon';


import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import { createStackNavigator } from '@react-navigation/stack';
const FieldStack = createStackNavigator();

const FieldReportStackScreen = ({navigation}) => (


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
  
      <FieldStack.Screen name="FieldReport" component={FieldReport} options={{
        title:'Field Report',
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
      
  </FieldStack.Navigator> 


  );


export default FieldReportStackScreen;



 