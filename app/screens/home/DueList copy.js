import React, { useState, useEffect, useRef } from 'react';
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

const DueList = ({ navigation }) => {

       const confirmStatus = "C";
       const pendingStatus = "P";
  
       var selectdata1;
       var selectdata2;

  
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


  let categoriesData = [
    {
        id: 0,
        name: "Pending List",
        icon: icons.pending,
        color: COLORS.purple,
        expenses: [
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

                title: "Tuition Fee",
                description: "Tuition fee",                    
                total: 100.00,
                status: pendingStatus,
                statustext: 'paid'
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


                title: "Arduino",
                description: "Hardward",                    
                total: 30.00,
                status: pendingStatus,
                statustext: 'paid'
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


                title: "Javascript Books",
                description: "Javascript books",                    
                total: 20.00,
                status: pendingStatus,
                statustext: 'paid'
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


                title: "PHP Books",
                description: "PHP books",                    
                total: 20.00,
                status: pendingStatus,
                statustext: 'paid'
            }
        ]
    },
    {
        id: 1,
        name: "Responded List",
        icon: icons.responded,
        color: COLORS.darkolivegreen,
        expenses: [
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


                title: "Vitamins",
                description: "Vitamin",                    
                total: 25.00,
                status: confirmStatus,
                statustext: 'will paid at 10-12-2015'
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

                title: "Protein powder",
                description: "Protein",                     
                total: 50.00,
                status: confirmStatus,
                statustext: 'will paid next month'
            },

        ]
    }
]

const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
const [liststatus, setliststatus] = useState(0);
const [categories, setCategories] = React.useState(categoriesData);
const [viewMode, setViewMode] = React.useState("list");
const [selectedCategory, setSelectedCategory] = React.useState(categoriesData[0]);
const [showMoreToggle, setShowMoreToggle] = React.useState(false);
  
  /************************************************** goto Due Responce page **************************************** */

  const gotolistresponce = (data) => {
   
    
    navigation.push('DueResponce',{
      DueData: data,
      LoanData: LoanData,  
      EmpData: EmpData       
    })   


  };

  /******************************************** select List type ******************************************************************/

  const listselect =(items) =>{

        
    setSelectedCategory(categoriesData[items.id]);
    setliststatus(items.id);
   
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

 /********************************************************* Header display ******************************************************/ 
     
 function renderCategoryHeaderSection() {
  return (
      <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center',backgroundColor:'white' }}>
          {/* Title */}
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
          <View style={{
                  backgroundColor: COLORS.lightGray,
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                  <Image
                      source={icons.calendar}
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.lightBlue
                      }}
                  />
              </View>

              <View style={{ marginLeft: SIZES.padding }}>
                  <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
                  <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18 Clients</Text>
              </View>
          </TouchableOpacity>

          {/* Button */}

         
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>

        

          <TouchableOpacity
                  style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: viewMode == "list" ? COLORS.firsttheme : null,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      marginLeft: SIZES.base
                  }}
                  onPress={() => setViewMode("list")}
              >
                  <Image
                      source={icons.menu}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                      }}
                  />
              </TouchableOpacity>

              { /*

              <TouchableOpacity
                  style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: viewMode == "chart" ? COLORS.firsttheme : null,
                      height: 50,
                      width: 50,
                      borderRadius: 25
                  }}
                  onPress={() => setViewMode("chart")}
              >
                  <Image
                      source={icons.chart}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                      }}
                  />
              </TouchableOpacity>

               */ }

             
          </View>

                 


      </View>
  )
}

/********************************************************************* Due selection list ****************************************/    

function renderDueList() {
  const renderItem = ({ item }) => (

      <View  style={{
          flex: 1,
          flexDirection: 'row',
        
      }}>

    {              

     item.id == liststatus ?
      (

      

      <TouchableOpacity
         
          style={{
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.padding,
              borderRadius: 5,
              backgroundColor: COLORS.primary,
              ...styles.shadow
             
              
            }}
         
      >
          <Image
              source={item.icon}
              style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.white,
              }}
          />
          <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>

      )
      :
      (

       <TouchableOpacity
       onPress={() => listselect(item) }
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
          <Image
              source={item.icon}
              style={{
                  width: 20,
                  height: 20,
                  tintColor: item.color
              }}
          />
          <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>


    

      )

    }

      </View>

  


  )

  return (
      <View style={{ paddingHorizontal: SIZES.padding - 5 }}>

          
          <Animated.View >
              <FlatList
                  data={categories}
                  renderItem={renderItem}
                  keyExtractor={item => `${item.id}`}
                  numColumns={2}
              />
          </Animated.View>

    
      </View>
  )



}


/********************************************************************* Due Detail view ************************************************/

  function renderCategoryList() {
        const renderItem = ({ item }) => (
           <TouchableOpacity 
               
               
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

               { 

               <TouchableOpacity
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomStartRadius: SIZES.radius,
                    borderBottomEndRadius: SIZES.radius,
                    backgroundColor: selectedCategory.color,
                }}

                onPress={() => gotolistresponce(item)}

               
            >
                 { item.status == "P" ?
                   (
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>ADD RESPONCE</Text>
                   )
                   :
                   (
                    <Text style={{ color: COLORS.white, ...FONTS.h5, marginLeft:5 }}>RESPONCE : {item.statustext}</Text>

                   )
                  }
            </TouchableOpacity>

               }



                                  
                    {
                    /* item.status == "P" ?

                    (

                    <TouchableOpacity
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomStartRadius: SIZES.radius,
                            borderBottomEndRadius: SIZES.radius,
                            backgroundColor: selectedCategory.color,
                        }}

                        onPress={gotolistresponce(item)}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>ADD RESPONCE</Text>
                    </TouchableOpacity>
                    )
                    :

                    (

                        <TouchableOpacity
                            style={{
                                height: 50,
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                borderBottomStartRadius: SIZES.radius,
                                borderBottomEndRadius: SIZES.radius,
                                backgroundColor: selectedCategory.color,
                            }}

                            onPress={gotolistresponce(item)}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h5, marginLeft:5 }}>RESPONCE : {item.statustext}</Text>
                        </TouchableOpacity>
                        )


                    */}








               </View>




            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>

                
                <Animated.View >
                    <FlatList
                        horizontal={false}
                        data={selectedCategory.expenses}
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

        {/* Category Header Section */}
        {renderCategoryHeaderSection()}

       <View style={{ paddingBottom: 60 }}>  
            {renderDueList()} 
            {renderCategoryList()}
        </View>  
                
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

export default DueList;