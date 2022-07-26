import React from 'react';
import { StyleSheet, View } from 'react-native';


const ViewRow = ({ colors, children }) => (

  <View style={[styles.Section,{ backgroundColor : colors} ]}>
  {children}
  </View>

)

const styles = StyleSheet.create({
  Section: {
    flex:1, 
    flexDirection:'row',
    alignItems: 'center',
         
    },
})

export default ViewRow
