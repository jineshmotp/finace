import React, { useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import HomeBackground from '../../components/HomeBackground';
import FabButton from '../../components/FabButton';

import { MaterialIcons } from '@expo/vector-icons'; 

const EmployeeList = ({ navigation }) => {





  let LoanData = [
    {
        id: 1,
        Empname: "Binoy",
        EmpPhone: "97XXXXXXXX",
        EmpDesignation: "Accountant",       
    },
    {
      id: 2,
      Empname: "Employee 2",
      EmpPhone: "97XXXXXXXX",
      EmpDesignation: "Accountant 1 ",       
  },
  {
    id: 3,
    Empname: "Employee 3",
    EmpPhone: "97XXXXXXXX",
    EmpDesignation: "Accountant 2 ",       
},
   


  ];
  
  const [LoanD, setLoanD] = React.useState(LoanData);

  const goType = (data) => {
    //alert('testing');
    //navigation.navigate('LoanType');
     
    navigation.push('EmployeeEdit',{
      EmpData: data     
    })   





  };




  function renderCategoryList() {
        const renderItem = ({ item }) => (
           <TouchableOpacity 
                onPress={() => goType(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
               
                <View style={{flex:11,flexDirection:'column'}}>

                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h3 }}>{item.Empname}</Text>
                <Text style={{ marginLeft: SIZES.base, color: COLORS.darkgray, ...FONTS.h4 }}>{item.EmpPhone}</Text>
                <Text style={{ marginLeft: SIZES.base, color: COLORS.darkgray, ...FONTS.h4 }}>{item.EmpDesignation}</Text>

               </View>

                <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}  onPress={() => goType(item)} >

                <Image
                        source={icons.edit}
                        style={{
                            width: SIZES.IconSize,
                            height: SIZES.IconSize,
                            tintColor: COLORS.firsttheme,
                            marginLeft: 0
                        }}
                    />
                
                </TouchableOpacity>


            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>

                
                <Animated.View >
                    <FlatList
                        horizontal={false}
                        data={LoanD}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        
                    />
                </Animated.View>

          
            </View>
        )
    }



  return ( 
    
    <HomeBackground>

       <View contentContainerStyle={{ paddingBottom: 0 }}>  
            {renderCategoryList()}
        </View>  
           <TouchableOpacity onPress={() => goType('')} style={styles.fabstyle}> 
               <FabButton label="Add New Employee" onPress={() => goType('')}  />
           </TouchableOpacity>        
    </HomeBackground>
  )
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
  },
    //###################### fab style 

    fabstyle: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
     
    },
})

export default EmployeeList;