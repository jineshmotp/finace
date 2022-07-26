import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const FooterButton = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button,
     
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 1,
    paddingVertical: 5,
    backgroundColor : COLORS.firsttheme 
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 22,
  },
})

export default FooterButton
