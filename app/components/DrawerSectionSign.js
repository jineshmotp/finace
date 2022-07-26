import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const DrawerSectionSign = ({ children }) => (

  <Drawer.Section style={styles.bottomDrawerSection}>
  {children}
  </Drawer.Section>


)

const styles = StyleSheet.create({
  bottomDrawerSection: {
      backgroundColor:COLORS.firsttheme,
      marginBottom: 0,
      borderTopWidth: 1
    },
})

export default DrawerSectionSign
