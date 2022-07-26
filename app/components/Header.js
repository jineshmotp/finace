import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Header = (props) => <Text style={styles.header} {...props} />

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: COLORS.firsttheme,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})

export default Header
