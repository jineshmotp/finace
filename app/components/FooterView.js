import React from 'react';
import { StyleSheet, KeyboardAvoidingView , View,ScrollView } from 'react-native';

const FooterView = ({ children }) => (
 
    <View style={styles.container}>  

      <ScrollView showsVerticalScrollIndicator={false} >  
      
         {children}

      </ScrollView>   
      
    </View>
  
)

const styles = StyleSheet.create({

  container: {
   
    flex:1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
   }
})

export default FooterView
