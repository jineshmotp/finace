import React from 'react';
import { StyleSheet, KeyboardAvoidingView , View,ScrollView } from 'react-native';


const HeaderView = ({ children }) => (
 
    <View style={styles.container}>  

      <ScrollView showsVerticalScrollIndicator={false} >  
      
         {children}

      </ScrollView>   
      
    </View>
  
)

const styles = StyleSheet.create({

  container: {
    flex:7,
    height: '100%',
    width: '100%',
    justifyContent:'center',    
  

    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom:80
    
    
   }
})

export default HeaderView
