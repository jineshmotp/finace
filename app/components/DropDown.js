import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import DropDownPicker from 'react-native-dropdown-picker';


const DropDown = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    
    <DropDownPicker
      style={styles.input}

      containerStyle={{height: 60}}
      itemStyle={{alignItems: 'flex-start'}}
     
      activeItemStyle={{alignItems: 'flex-start'}}
      activeLabelStyle={{color: COLORS.red}}
      style={{borderColor:COLORS.secondtheme,borderWidth:1, borderRadius:1}}
      labelStyle={{fontSize: 14, color: COLORS.secondtheme}}

      selectionColor={COLORS.firsttheme}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
  

    {description && !errorText ? (
      <Text style={styles.description}>{description}</Text>
    ) : null}
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    
  },
  input: {
    backgroundColor: COLORS.surface,
  },
  description: {
    fontSize: 13,
    color: COLORS.secondtheme,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: COLORS.error,
    paddingTop: 8,
  },
})

export default DropDown
