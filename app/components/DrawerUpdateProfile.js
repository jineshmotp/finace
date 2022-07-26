import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const DrawerUpdateProfile = (props) => <Text style={styles.header} {...props} />

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    color: COLORS.link,
    fontWeight: '600',
    paddingVertical: 0,
  },
})

export default DrawerUpdateProfile
