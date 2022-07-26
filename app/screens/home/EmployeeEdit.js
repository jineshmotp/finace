import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import FooterButton from '../../components/FooterButton';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { nameValidator } from '../../helpers/nameValidator';



import BackgroundForm from '../../components/BackgroundForm';

import HeaderView from '../../components/HeaderView';
import FooterView from '../../components/FooterView';

import ViewHalf from '../../components/ViewHalf';
import ViewBottom from '../../components/ViewBottom';

const EmployeeEdit = ({ route, navigation }) => {


  const { EmpData } = route.params;

  const [Empname, setEmpname] = useState({ value: '', error: '' });
  const [EmpPhone, setEmpPhone] = useState({ value: '', error: '' });
  const [EmpDesignation, setEmpDesignation] = useState({ value: '', error: '' });


  const onSubmit = () => {


    const nameError = nameValidator(Empname.value);
    const phoneError = nameValidator(EmpPhone.value);
    const desError = nameValidator(EmpDesignation.value);

  
    if (nameError || phoneError || desError ) {
      setEmpname({ ...Empname, error: 'Employee name'+nameError });
      setEmpPhone({ ...EmpPhone, error: 'PhoneNumber'+phoneError });
      setEmpDesignation({ ...EmpDesignation, error: 'Designation'+desError });
    
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'EmployeeList' }],
    })
  }



  useEffect(() => {

   
   
    if(EmpData.Empname != null && EmpData.Empname != '')
    {
      setEmpname({ ...Empname, value: EmpData.Empname  });
      setEmpPhone({ ...EmpPhone, value: EmpData.EmpPhone });
      setEmpDesignation({ ...EmpDesignation, value : EmpData.EmpDesignation });

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

         
      <TextInput
        label="Employee Name"
        returnKeyType="next"
        value={Empname.value}
        onChangeText={(text) => setEmpname({ value: text, error: '' })}
        error={!!Empname.error}
        errorText={Empname.error}
      />

    <TextInput
        label="PhoneNumber"
        returnKeyType="next"
        value={EmpPhone.value}
        onChangeText={(text) => setEmpPhone({ value: text, error: '' })}
        error={!!EmpPhone.error}
        errorText={EmpPhone.error}
      />
      
          
   
      <TextInput
        label="Designation"
        returnKeyType="next"
        value={EmpDesignation.value}
        onChangeText={(text) => setEmpDesignation({ value: text, error: '' })}
        error={!!EmpDesignation.error}
        errorText={EmpDesignation.error}
      />

</HeaderView>

<FooterView>


       { EmpData.Empname != null && EmpData.Empname != '' ?
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

export default EmployeeEdit;