import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const ViewBottom = ({ children }) => (

  <View style={styles.Section}>
  {children}
  </View>


)

const styles = StyleSheet.create({
  Section: {
    flexDirection:"row",
    backgroundColor : COLORS.firsttheme 
    },
})

export default ViewBottom;
