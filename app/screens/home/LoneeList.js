import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    ScrollView,
    Image,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import HomeBackground from '../../components/HomeBackground';
import FabButton from '../../components/FabButton';

import Viewcolumn from '../../components/Viewcolumn';
import ViewRow from '../../components/ViewRow';
import ViewLeft from '../../components/ViewLeft';
import ViewRight from '../../components/ViewRight';

import ViewLeft2 from '../../components/ViewLeft2';
import ViewRight2 from '../../components/ViewRight2';

import ViewSubRow from '../../components/ViewSubRow';
import ViewSubLeft from '../../components/ViewSubLeft';
import ViewSubRight from '../../components/ViewSubRight';

import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const LoneeList = ({ navigation }) => {

  
  let LoanData = [
    {
        value: 1,
        label: "Unsecured personal loans",
            
    },
    {
      value: 2,
      label: "Secured personal loans",
        
    },
    {
      value: 3,
      label: "Payday loans",
      
    },
    {
      value: 4,
      label: "Home equity loans",
         
    },
    {
      value: 5,
      label: "Home equity loans 2",
       
    },
    {
      value: 6,
      label: "Home equity loans 3",
      
    }
  ];
  

  let EmpData = [
    {
        value: 1,
        label: "Binoy",
            
    },
    {
      value: 3,
      label: "Employee 2",
        
    },
    {
      value: 2,
      label: "Employee 3",
      
    }
  ];


  let LoneeData = [
    {
        id: 1,
        loan_id:1,
        assigned_id:1,
        loan_number:'1004587',
        name: 'Alain Colmerauer,',
        address : 'Prolog Address 1 test 1 check 1',
        phonenumber:'7907956900',
        location:'Palappuram',
        landmobile:'04662243725',
        loan_date:'12-08-2021',
        loan_amount:'50000',
        loan_expiry:'12-05-2021',
        loan_balance: '15000',
        principle_due:'4500',
        interest_due:'10',
        interest_amount:'1500',
        
    
    },
    {
      id: 2,
      loan_id:3,
      assigned_id:2,
      loan_number:'1001425',
      name: 'Rasmus Lerdorf,',
      address : 'PHP Address 2 test 2 check 2',
      phonenumber:'7907956900',
      location:'Palappuram',
      landmobile:'04662243725', 
      loan_date:'12-08-2021',
      loan_amount:'50000',
      principle_due:'4500',
      interest_due:'10',
      interest_amount:'1500',
      loan_expiry:'12-05-2021',
      loan_balance: '15000',

     
    },
    {
      id: 3,
        loan_id:1,
        assigned_id:2,
        loan_number:'1006589',
        name: 'John McCarthy',
        address : 'Lisp  Address 3 test 3 check 3',
        phonenumber:'7907956900',
        location:'Palappuram',
        landmobile:'04662243725',          
        loan_date:'12-08-2021',
        loan_amount:'50000',
        loan_expiry:'12-05-2021',
        loan_balance: '15000',
        principle_due:'4500',
        interest_due:'10',
        interest_amount:'1500',
    },
    {
         id: 4,
        loan_id:4,
        assigned_id:1,
        loan_number:'1006523',
        name: 'Guido van Rossum',
        address : 'Python Address 4 check 4 test 4',
        phonenumber:'7907956900',
        location:'Palappuram',
        landmobile:'04662243725',          
        loan_date:'12-08-2021',
        loan_amount:'50000',
        loan_expiry:'12-05-2021',
        loan_balance: '15000',
        principle_due:'4500',
        interest_due:'10',
        interest_amount:'1500',
    },

    {
      id: 5,
        loan_id:2,
        assigned_id:3,
        loan_number:'1004521',
        name: 'Bjarne Stroustrup',
        address : 'CPP Address 5 test 5 check 5',
        phonenumber:'7907956900',
        location:'Palappuram',
        landmobile:'04662243725',          
        loan_date:'12-08-2021',
        loan_amount:'50000',
        loan_expiry:'12-05-2021',
        loan_balance: '15000',
        principle_due:'4500',
        interest_due:'10',
        interest_amount:'1500',
    },

    {
      id: 6,
        loan_id:3,
        assigned_id:1,
        loan_number:'1002582',
        name: 'Dennis Ritchie',
        address : 'C customer 6 test 6 check 6',
        phonenumber:'7907956900',
        location:'Palappuram',
        landmobile:'04662243725',          
        loan_date:'12-08-2021',
        loan_amount:'50000',
        loan_expiry:'12-05-2021',
        loan_balance: '15000',
        principle_due:'4500',
        interest_due:'10',
        interest_amount:'1500',
    },




  ];
  
  

  const goType = (data) => {
    //alert('testing');
    //navigation.navigate('LoanType');
     
    navigation.push('LoneeEdit',{
      LoneeData: data,
      LoanData: LoanData,  
      EmpData: EmpData       
    })   


  };


/******************************************************************************************************************** */
 
const ReturnData = (data, val) => {
  var k = val;
  var index;
  var temval;

  if(data == 0)
  {
   
    index = EmpData.findIndex(obj => obj.value==k);
    temval = EmpData[index].label.toUpperCase();

  }
  else
  {
    index = LoanData.findIndex(obj => obj.value==k);
    temval = LoanData[index].label.toUpperCase();    
  }
 
  return temval;

}

/*********************************************************************************************************************/

  function renderCategoryList() {
        const renderItem = ({ item }) => (
           <TouchableOpacity 
                onPress={() => goType(item)}
               
            >

              <View  style={{
                    
                    flex: 1,
                    margin: 5,
                    marginBottom:0,
                    paddingVertical: SIZES.radius1,
                    paddingHorizontal: SIZES.padding3,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                  }} >


         <ViewRow colors={COLORS.white} >
                  <ViewLeft2>

                        <Viewcolumn colors={COLORS.primary} >

                            <ViewSubRow>   
                                  <ViewSubLeft>
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6,fontWeight:"bold" }}>{ReturnData(1,item.loan_id)}</Text>       
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h4,fontWeight:"bold" }}>LOAN NUMBER : {item.loan_number}</Text>                          
                                  </ViewSubLeft>                             


                            </ViewSubRow>

                        </Viewcolumn>

                    
                  </ViewLeft2>


                  <ViewRight>

                       <Viewcolumn colors={COLORS.lightgreen} >

                          <ViewSubRow>   
                                  <ViewSubLeft>
                                     <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6,fontWeight:"bold" }}>ASSIGNED TO</Text>       
                                     <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6,fontWeight:"bold" }}>{ReturnData(0,item.assigned_id)}</Text>                          
                                  </ViewSubLeft>                             


                          </ViewSubRow>

                      </Viewcolumn>

                    
                  </ViewRight>

               </ViewRow>

                           
                <ViewRow colors={COLORS.white}>

              

                   

                      <ViewLeft>
                    
                                               
                      
                  <View style={{ paddingHorizontal: SIZES.padding }}>
                  
                
                  <Text style={{ ...FONTS.h4, }}>{item.name}</Text>
                  <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.h6 }}>{item.address}</Text>
                
                 
                  <Text style={{ ...FONTS.h5,fontWeight:'bold' }}>Location</Text>
                  <View style={{ flexDirection: 'row' }}>
                      <Image
                          source={icons.pin}
                          style={{
                              width: 20,
                              height: 20,
                              tintColor: COLORS.darkgray,
                              marginRight: 0
                          }}
                      />
                      <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.h5 }}>{item.location}</Text>
                  </View>

                  <Text style={{ ...FONTS.h5, fontWeight:'bold' }}>Phone Number</Text>
                  <View style={{ flexDirection: 'row' }}>
                      <Image
                          source={icons.phone}
                          style={{
                              width: 20,
                              height: 20,
                              tintColor: COLORS.darkgray,
                              marginRight: 0
                          }}
                      />
                      <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.h5 }}>{item.phonenumber}</Text>
                  </View>
             
             
              </View>

                        
                      </ViewLeft>



                      <ViewRight>

                       


                           <Viewcolumn colors={COLORS.lightBlue} >

                                                                                     
                                   <ViewSubRow>  

                                        <ViewSubLeft>
                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>INTEREST AMOUNT</Text>                            
                                        </ViewSubLeft>

                                  </ViewSubRow> 


                                  <ViewSubRow>  

                                      <ViewSubLeft>
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.interest_amount}</Text>                         
                                      </ViewSubLeft>

                                    


                                  </ViewSubRow> 

                              </Viewcolumn>  


                       

                                                
                           
                            <Viewcolumn colors={COLORS.darkgray}>

                              <ViewSubRow>                                                            
                              
                                  <ViewSubLeft>
                                  <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>PRINCIPLE DUE</Text>                              
                                  </ViewSubLeft>

                                  <ViewSubRight >
                                  <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>INTEREST DUE</Text> 
                                  </ViewSubRight>
                                                            
                                </ViewSubRow>

                             
                             
                                <ViewSubRow>

                                      <ViewSubLeft>
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.principle_due}</Text> 
                                      </ViewSubLeft>

                                      <ViewSubRight >
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.interest_due}</Text> 
                                     </ViewSubRight >
                                                                                           
                                </ViewSubRow>


                            </Viewcolumn>  


                            
                              
                                                                                                                                 
                            <Viewcolumn colors={COLORS.lightBlue} >

                                <ViewSubRow>                                                            

                                    <ViewSubLeft>
                                      <Text style={{ color: COLORS.white, ...FONTS.h6 }}>LOAN AMOUNT</Text>                                
                                    </ViewSubLeft>

                                    <ViewSubRight >
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>LOAN DATE</Text>
                                    </ViewSubRight>
                                                            
                                </ViewSubRow>


                                <ViewSubRow>                                                            

                                    <ViewSubLeft>
                                      <Text style={{ color: COLORS.white, ...FONTS.h6 }}>{item.loan_amount}</Text>                                
                                    </ViewSubLeft>

                                    <ViewSubRight >
                                      <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.loan_date}</Text>
                                    </ViewSubRight>

                                </ViewSubRow>


                                </Viewcolumn >
                            
                           
                                                     
                           
                           
                            <Viewcolumn colors={COLORS.darkgray} >

                                 <ViewSubRow>                                                            
                              
                                  <ViewSubLeft>
                                    <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>LOAN BALANCE</Text>                                
                                  </ViewSubLeft>

                                  <ViewSubRight >
                                    <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>EXPIRY DATE</Text>
                                  </ViewSubRight>
                                                            
                                </ViewSubRow>

                             
                             
                                <ViewSubRow>

                                      <ViewSubLeft>
                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.loan_balance}</Text>
                                      </ViewSubLeft>

                                      <ViewSubRight >
                                       <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h6 }}>{item.loan_expiry}</Text>
                                     </ViewSubRight >
                                                                                           
                                </ViewSubRow>


                            </Viewcolumn >   

                       
                         

                </ViewRight>                   

               </ViewRow >

               </View>




            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>

                
                <Animated.View >
                    <FlatList
                        horizontal={false}
                        data={LoneeData}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        
                    />
                </Animated.View>

          
            </View>
        )
    }


  
/*********************************************************************************************************************/


        useEffect(() => {

           /*
          var k = 48;
          var index = EmpData.findIndex(obj => obj.value==k);
          alert(EmpData[index].label);
          */
                 
         
        },[]);  
      
        useEffect(() => {
          return () => {
            console.log("cleaned up");
          };
        }, []);
        

/********************************************************************************************************************/


  return ( 
    
    <HomeBackground>

       <View style={{ paddingBottom: 60 }}>  
            {renderCategoryList()}
        </View>  
           <TouchableOpacity onPress={() => goType('')} style={styles.fabstyle}> 
               <FabButton label="Add New Lonee" onPress={() => goType('')}  />
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

export default LoneeList;