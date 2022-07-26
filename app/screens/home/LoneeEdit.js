import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView,Animated, Text } from 'react-native';


import FooterButton from '../../components/FooterButton';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import Dropdown from '../../components/DropDown';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { nameValidator } from '../../helpers/nameValidator';

import BackgroundForm from '../../components/BackgroundForm';
import HeaderView from '../../components/HeaderView';
import FooterView from '../../components/FooterView';
import ViewHalf from '../../components/ViewHalf';
import ViewBottom from '../../components/ViewBottom';

const LoneeEdit = ({ route, navigation }) => {


  const { LoneeData } = route.params;
  const { LoanData } = route.params;
  const { EmpData } = route.params;

  const [status, setstatus] = useState(false);

 
  const [loan_id, setloan_id] = useState({ value: '', error: '' });
  const [loan_number, setloan_number] = useState({ value: '', error: '' });
  const [assigned_id, setassigned_id] = useState({ value: '', error: '' });
  
  const [name, setname] = useState({ value: '', error: '' });
  const [address, setaddress] = useState({ value: '', error: '' });
  const [phonenumber, setphonenumber] = useState({ value: '', error: '' });
  const [location, setlocation] = useState({ value: '', error: '' });
  const [landmobile, setlandmobile] = useState({ value: '', error: '' });
 
  const [loan_date, setloan_date] = useState({ value: '', error: '' });
  const [loan_amount, setloan_amount] = useState({ value: '', error: '' });
  const [loan_expiry, setloan_expiry] = useState({ value: '', error: '' });
  const [loan_balance, setloan_balance] = useState({ value: '', error: '' });
  const [principle_due, setprinciple_due] = useState({ value: '', error: '' });
  const [interest_due, setinterest_due] = useState({ value: '', error: '' });
  const [interest_amount, setinterest_amount] = useState({ value: '', error: '' });



  const onSubmit = () => {

   
    
    const loaniderror = nameValidator(loan_id.value);
    const loannumerror = nameValidator(loan_number.value);
    const assignederror = nameValidator(assigned_id.value);
   
   
    const nameerror = nameValidator(name.value);
    const addrerror = nameValidator(address.value);
    const phoneerror = nameValidator(phonenumber.value);
    const locationerror = nameValidator(location.value);
    const landerror = nameValidator(landmobile.value);
    
    const loandateerror = nameValidator(loan_date.value);
    const loanamounterror = nameValidator(loan_amount.value);
    const loanexpiryerror = nameValidator(loan_expiry.value);
    const loanbalanceerror = nameValidator(loan_balance.value);
    const principle_dueerror = nameValidator(principle_due.value);
    const interest_dueerror = nameValidator(interest_due.value);
   
    
    const instamounterr =  nameValidator(interest_amount.value);

    //alert('Loan id value  : '+loan_id.value+' Loan error '+loaniderror);
  
    if (loaniderror || loandateerror || assignederror || interest_dueerror || principle_dueerror ||loanbalanceerror || loanexpiryerror|| loannumerror || nameerror|| addrerror || phoneerror || locationerror || landerror || loanamounterror || instamounterr) {
      
      setstatus(true);
      setloan_id({ ...loan_id, error: 'Lone Type'+loaniderror });
      setassigned_id({ ...assigned_id, error: 'Assigned Employee'+loaniderror });

      setloan_number({ ...loan_number, error: 'Loan Number'+loannumerror });
      setname({ ...name, error: 'Lonee Name'+nameerror });
      setaddress({ ...address, error: 'Address'+addrerror });
      setphonenumber({ ...phonenumber, error: 'Phone Number'+phoneerror });
      setlocation({ ...location, error: 'Location'+locationerror });
      setlandmobile({ ...landmobile, error: 'Landphone '+landerror });

      setloan_date({ ...loan_date, error: 'Loan Date'+loandateerror });     
      setloan_amount({ ...loan_amount, error: 'Loan Amount'+loanamounterror });
      setloan_expiry({ ...loan_expiry, error: 'Loan Expiry Date'+loanexpiryerror });
      setloan_balance({ ...loan_balance, error: 'Loan Balance Amount'+loanbalanceerror });
      setprinciple_due({ ...principle_due, error: 'Loan Due Amount'+principle_dueerror });
      setinterest_due({ ...interest_due, error: 'Interst Due'+interest_dueerror }); 
      setinterest_amount({ ...interest_amount, error: 'Interest Amount'+instamounterr });
      
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'LoneeList' }],
    })
  }

/***************************************** Loan type Data & Employee Assigned **************************************************************************/
    
      const getval =(data , dxval) =>{

        setstatus(false);

        if(data == 0)
        {
          setassigned_id({ ...assigned_id, value: dxval.value  });
        }
        else
        {
          setloan_id({ ...loan_id, value: dxval.value  });
        }

      };

/***************************************** Loan type Data **************************************************************************/
    
const getval_assigned =(dxval) =>{

  setstatus(false);
  setassigned_id({ ...assigned_id, value: dxval.value  });

};



      /**************************************************************************************************************/


  useEffect(() => {

   
   
    if(LoneeData.loan_id != null && LoneeData.loan_id != '')
    {
      
     // alert('value : '+LoanData[0]['value']);
     //alert(LoneeData.loan_id);
      setloan_id({ ...loan_id, value: LoneeData.loan_id  });
      setassigned_id({ ...assigned_id, value:LoneeData.assigned_id });
      setloan_number({ ...loan_number, value: LoneeData.loan_number });
      setname({ ...name, value: LoneeData.name });
      setaddress({ ...address, value: LoneeData.address });
      setphonenumber({ ...phonenumber, value: LoneeData.phonenumber  });
      setlocation({ ...location, value: LoneeData.location });
      setlandmobile({ ...landmobile, value: LoneeData.landmobile });

      setloan_date({ ...loan_date, value: LoneeData.loan_date  });     
      setloan_amount({ ...loan_amount, value:  LoneeData.loan_amount });
      setloan_expiry({ ...loan_expiry, value:  LoneeData.loan_expiry });
      setloan_balance({ ...loan_balance, value:  LoneeData.loan_balance  });
      setprinciple_due({ ...principle_due, value:  LoneeData.principle_due });
      setinterest_due({ ...interest_due, value:  LoneeData.interest_due }); 
      setinterest_amount({ ...interest_amount, value:  LoneeData.interest_amount });

      
     

    }  
   
  
   
  },[]);  

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);




  return (

   

     <BackgroundForm>

  

       <HeaderView>


       { status == true ?
      (
      
      

      <Dropdown
        items={EmpData}
        defaultValue= {LoneeData.assigned_id}
        placeholder="Assigned Employee"
        returnKeyType="next"
        style={{borderColor:COLORS.error,borderWidth:2,borderRadius:1}}
        labelStyle={{fontSize: 14, color: COLORS.error}}
        onChangeItem={(value) => getval(0,value)}   
        error={!!assigned_id.error}
        errorText={assigned_id.error}
      />
      )
      :
      (


<Dropdown
        items={EmpData}
        defaultValue= {LoneeData.assigned_id}
        placeholder="Assigned Employee"
        returnKeyType="next"
        onChangeItem={(value) => getval(0,value)}   
        error={!!assigned_id.error}
        errorText={assigned_id.error}
      />

      )


   }

  
      
      { status == true ?
      (
      
      

      <Dropdown
        items={LoanData}
        defaultValue= {LoneeData.loan_id}
        placeholder="Select Loan Type"
        returnKeyType="next"
        style={{borderColor:COLORS.error,borderWidth:2,borderRadius:1}}
        labelStyle={{fontSize: 14, color: COLORS.error}}
        onChangeItem={(value) => getval(1,value)}   
        error={!!loan_id.error}
        errorText={loan_id.error}
      />
      )
      :
      (


<Dropdown
        items={LoanData}
        defaultValue= {LoneeData.loan_id}
        placeholder="Select Loan Type"
        returnKeyType="next"
        onChangeItem={(value) => getval(1,value)}   
        error={!!loan_id.error}
        errorText={loan_id.error}
      />

      )


   }


           
    

<TextInput
        label="Loan Date"
        returnKeyType="next"
        value={loan_date.value}
        onChangeText={(text) => setloan_date({ value: text, error: '' })}
        error={!!loan_date.error}
        errorText={loan_date.error}
      />


<TextInput
        label="Loan Amount"
        returnKeyType="next"
        value={loan_amount.value}
        onChangeText={(text) => setloan_amount({ value: text, error: '' })}
        error={!!loan_amount.error}
        errorText={loan_amount.error}
        keyboardType="numeric"
      />


<TextInput
        label="Loan Expiridate"
        returnKeyType="next"
        value={loan_expiry.value}
        onChangeText={(text) => setloan_expiry({ value: text, error: '' })}
        error={!!loan_expiry.error}
        errorText={loan_expiry.error}
        
      />



<TextInput
        label="Balance Principle Amount"
        returnKeyType="next"
        value={loan_balance.value}
        onChangeText={(text) => setloan_balance({ value: text, error: '' })}
        error={!!loan_balance.error}
        errorText={loan_balance.error}
        keyboardType="numeric"
      />

      

      <TextInput
        label="Principle Due"
        returnKeyType="next"
        value={principle_due.value}
        onChangeText={(text) => setprinciple_due({ value: text, error: '' })}
        error={!!principle_due.error}
        errorText={principle_due.error}
        keyboardType="numeric"
      />


<TextInput
        label="Interest Due"
        returnKeyType="next"
        value={interest_due.value}
        onChangeText={(text) => setinterest_due({ value: text, error: '' })}
        error={!!interest_due.error}
        errorText={interest_due.error}
        keyboardType="numeric"
      />

<TextInput
        label="Interest Amount"
        returnKeyType="next"
        value={interest_amount.value}
        onChangeText={(text) => setinterest_amount({ value: text, error: '' })}
        error={!!interest_amount.error}
        errorText={interest_amount.error}
        keyboardType="numeric"
      />

<TextInput
        label="Lonee Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setname({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
       
      />

<TextArea
         label="Address"
         returnKeyType="next"
         value={address.value}
         onChangeText={(text) => setaddress({ value: text, error: '' })}
         error={!!address.error}
         errorText={address.error}
      />


<TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phonenumber.value}
        onChangeText={(text) => setphonenumber({ value: text, error: '' })}
        error={!!phonenumber.error}
        errorText={phonenumber.error}
        keyboardType="numeric"   
      />

<TextInput
        label="Location"
        returnKeyType="next"
        value={location.value}
        onChangeText={(text) => setlocation({ value: text, error: '' })}
        error={!!location.error}
        errorText={location.error}
        
      />

<TextInput
        label="Land Mobile"
        returnKeyType="next"
        value={landmobile.value}
        onChangeText={(text) => setlandmobile({ value: text, error: '' })}
        error={!!landmobile.error}
        errorText={landmobile.error}
        keyboardType="numeric"   
      />


     
   
    

</HeaderView>

<FooterView>


       { LoneeData.loan_id != null && LoneeData.loan_id != '' ?
       (
        <ViewBottom >

         <ViewHalf>
            <FooterButton
              mode="contained"
              onPress={onSubmit}
              
            >
              Update
            </FooterButton>
        </ViewHalf>

      

        <ViewHalf>
            <FooterButton
              mode="contained"
              onPress={onSubmit}
             
            >
              Delete
            </FooterButton>
        </ViewHalf>

        </ViewBottom>
       )
       :

       <ViewBottom>

          <ViewHalf>
            <FooterButton
              mode="contained"
              onPress={onSubmit}
              
            >
              Add
            </FooterButton>

          </ViewHalf>
        
        </ViewBottom>

     }

</FooterView>

 
</BackgroundForm>


  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: COLORS.firsttheme,
  },

})

export default LoneeEdit;