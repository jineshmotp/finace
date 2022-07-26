import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const TextArea = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      numberOfLines={6}
      multiline={true}
      selectionColor={COLORS.firsttheme}
      underlineColor="transparent"
      mode="outlined"
      theme={{ colors: { primary: COLORS.firsttheme,underlineColor:'transparent',}}}
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

export default TextArea
