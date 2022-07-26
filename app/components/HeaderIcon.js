import React from 'react';
import { StyleSheet, View , TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const HeaderIcon = ({ children }) => (

  <View style={styles.Section}  >
   <Ionicons name="ios-menu-sharp" style={styles.iconstyle} size={SIZES.IconSize} />
  </View>


)

const styles = StyleSheet.create({
  Section: {      
    marginLeft:20
    },
    iconstyle:
    {
     color: COLORS.white
    }
})

export default HeaderIcon
