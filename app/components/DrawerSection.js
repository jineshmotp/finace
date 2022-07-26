import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const DrawerSection = ({ children }) => (

  <Drawer.Section style={styles.drawerSection}>
  {children}
  </Drawer.Section>


)

const styles = StyleSheet.create({
  drawerSection: {
      marginTop: 15,
      backgroundColor:'white'
    },
})

export default DrawerSection
