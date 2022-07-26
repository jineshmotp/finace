import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated
} from 'react-native';
import { VictoryPie } from 'victory-native';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import HomeBackground from '../../components/HomeBackground';



const DueResponce = ({ route, navigation }) => {


    const { DueData } = route.params;

   
  return (
    <HomeBackground>
      
      
         <View contentContainerStyle={{ paddingBottom: 20 }}>
             <Text>Due Responce</Text>   
             
         </View>
          
     
    </HomeBackground>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default DueResponce;


