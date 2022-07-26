import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const FabButton = ({ style, ...props }) => (
  <FAB
    style={styles.fab}
    labelStyle={styles.text}
    small
  
    {...props}
    icon="plus"
  >



    </FAB>
)

const styles = StyleSheet.create({
  
  fab: 
  {
   backgroundColor: COLORS.firsttheme 
  },
})

export default FabButton
