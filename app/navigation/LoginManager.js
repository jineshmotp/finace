import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../screens/login/SigninScreen';
import SignupScreen from '../screens/login/SignupScreen';
import ForgotScreen from '../screens/login/ForgotScreen';

const NavigatorStack = createStackNavigator();

const LoginManager = () => {

    return (
           
      <NavigatorStack.Navigator>    

          <NavigatorStack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />   
          <NavigatorStack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />     
          <NavigatorStack.Screen name="ForgotScreen" component={ForgotScreen} options={{ headerShown: false }} />       
          
                  
      </NavigatorStack.Navigator>      
       
    ); 
}


export default LoginManager;