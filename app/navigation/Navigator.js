import React, { useEffect, useState } from 'react';
import { View, Platform, ToastAndroid,Linking, ActivityIndicator, Alert } from 'react-native';

import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../screens/drawer/DrawerContent';
const Drawer = createDrawerNavigator();

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';


// Import pages

import LoginManager from './LoginManager';


import DueListStackScreen from './DueListStackScreen';
import FieldReportStackScreen from './FieldReportStackScreen';
import AboutUsStackScreen from './AboutUsStackScreen';
import EditStackScreen from './EditStackScreen';
import EmployeeStackScreen from './EmployeeStackScreen';
import LoanStackScreen from './LoanStackScreen';
import LoneeStackScreen from './LoneeStackScreen';




const Navigator = () => {

// login state variable 
  

const initialLoginState = {
  isLoading: true,
  userToken: null,
};


  // reducer cases

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,       
        };
         
      case 'LOGOUT': 
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          };      
    }
  };

 
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // authcontext functions
  
  const authContext = React.useMemo(() => ({

    // signin function 

    signIn: async() => {  
      
        let userToken = 'SRKSCB';       
      
        try {
          await AsyncStorage.setItem('userToken', userToken);         
          
        } catch(e) {
          console.log(e);
        }       

             
       dispatch({ type: 'LOGIN', token: userToken });
        
              
                 
     },
     signOut: async() => {   

     
      try {
        
       

        // remove async storage values or clear memmory    
         
         AsyncStorage.getAllKeys()
         .then(keys => AsyncStorage.multiRemove(keys))
         .then(() => console.log('success'));
 
           dispatch({ type: 'LOGOUT' });     
           
           
          } catch (error) {
            console.log('error signing out: ', error);
        }

   

    },

    // signup function
   
    signUp: (datalogin) => {  
      
      let userToken = null;
       dispatch({ type: 'REGISTER', token: userToken });

    },

   
  }), []);


  useEffect(() => {

   // load previous user status

   let userToken = null;
     
   
       try {
         userToken = AsyncStorage.getItem('userToken');
      
       } catch(e) {
         console.log(e);
       }

    
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });

    

  },[]);
   
 

  if(loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size="large" />
      </View>
    );
  }


  return (
    <PaperProvider >
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { loginState.userToken !== null ? (
       
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        
        
         <Drawer.Screen name="FieldReportStackScreen" component={FieldReportStackScreen} />
             <Drawer.Screen name="DueListStackScreen" component={DueListStackScreen} />

             
             <Drawer.Screen name="AboutUsStackScreen" component={AboutUsStackScreen} />
             <Drawer.Screen name="EditStackScreen" component={EditStackScreen} />

             <Drawer.Screen name="EmployeeStackScreen" component={EmployeeStackScreen} />
             <Drawer.Screen name="LoanStackScreen" component={LoanStackScreen} />
             <Drawer.Screen name="LoneeStackScreen" component={LoneeStackScreen} />
        
        </Drawer.Navigator>
      )
    :
      <LoginManager/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default Navigator;