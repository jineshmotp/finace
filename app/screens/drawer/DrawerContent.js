import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import Background from '../../components/Background';
import DrawerBackground from '../../components/DrawerBackground';
import DrawerImage from '../../components/DrawerImage';
import DrawerUsername from '../../components/DrawerUsername';
import DrawerUpdateProfile from '../../components/DrawerUpdateProfile';

import DrawerSection from '../../components/DrawerSection';
import DrawerSectionSign from '../../components/DrawerSectionSign';


import{ AuthContext } from '../../components/context';

export function DrawerContent(props) {


    const { signOut } = React.useContext(AuthContext);

    return(
        
      <DrawerBackground>
        
       
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
      

               {/**    Drawer backgroud image and user name */}              
              
                <Background>
                        <DrawerImage />                                 
                        <DrawerUsername>Binoy Palappuram</DrawerUsername>     
                        
                       

                       <TouchableOpacity onPress={() => {props.navigation.navigate('EditStackScreen')}}>
                          <DrawerUpdateProfile>Edit Profile</DrawerUpdateProfile>     
                        </TouchableOpacity>     

                       


                </Background>

               
             
                <DrawerSection>


                <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                name="cash-register" 
                                color={COLORS.firsttheme}
                                size={SIZES.IconSize}
                                />
                            )}
                            label="FIELD REPORT"
                            inactiveTintColor = {COLORS.inactivecolor}
                            activeTintColor = {COLORS.activeColor}
                            onPress={() => {props.navigation.navigate('FieldReportStackScreen')}}
                        />


               

                      <DrawerItem 
                            icon={() => (
                                <FontAwesome 
                                name="list-alt"
                                color={COLORS.firsttheme}
                                size={SIZES.IconSize}
                                />
                            )}
                            
                            inactiveTintColor = {COLORS.inactivecolor}
                            activeTintColor = {COLORS.activeColor}
                            label="DUE LIST"
                            onPress={() => {props.navigation.navigate('DueListStackScreen')}}
                        />

                   

                     <DrawerItem 
                            icon={({color, size}) => (
                                <Fontisto name="persons"
                                color={COLORS.firsttheme}
                                size={SIZES.IconSize}
                                />
                            )}
                            label="EMPLOYEE DETAILS"
                            inactiveTintColor = {COLORS.inactivecolor}
                            activeTintColor = {COLORS.activeColor}
                            onPress={() => {props.navigation.navigate('EmployeeStackScreen')}}
                        />                     

                
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo name="new-message"
                                color={COLORS.firsttheme}
                                size={SIZES.IconSize}
                                />
                            )}
                            label="LOANEE DETAILS"
                            inactiveTintColor = {COLORS.inactivecolor}
                            activeTintColor = {COLORS.activeColor}
                            onPress={() => {props.navigation.navigate('LoneeStackScreen')}}
                        />



                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="bookmarks"
                                color={COLORS.firsttheme}
                                size={SIZES.IconSize}
                                />
                            )}
                            label="LOAN TYPE"
                            inactiveTintColor = {COLORS.inactivecolor}
                            activeTintColor = {COLORS.activeColor}
                            onPress={() => {props.navigation.navigate('LoanStackScreen')}}
                        />
 

                         { /*
                          <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5 name="user-edit"
                                color={theme.Icons.colors.primary}
                                size={theme.Icons.size}
                                />
                            )}
                            label="Edit Profile"
                            inactiveTintColor = {theme.IconText.inactivecolor}
                            activeTintColor = {theme.IconText.activeColor}
                            onPress={() => {props.navigation.navigate('EditStackScreen')}}
                        />
                            */ }

                </DrawerSection>



                                       

                </View>
            </DrawerContentScrollView>

            
            <DrawerSectionSign>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Image
                        source={icons.signout}
                        style={{
                            width: SIZES.IconSize,
                            height: SIZES.IconSize,
                            tintColor: COLORS.white,
                            marginLeft: 0
                        }}
                    />
                    )}
                    label="Sign Out"
                    inactiveTintColor = {COLORS.inactivesignout}
                    activeTintColor = {COLORS.activesignout}
                    onPress={() => {signOut()}}
                />
            </DrawerSectionSign>

        </DrawerBackground>
    );
}

const styles = StyleSheet.create({
 
  
   
  });