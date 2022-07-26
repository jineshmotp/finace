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

const LoanEdit = ({ route, navigation }) => {


  const { LoanData } = route.params;



  const [Loanname, setLoanname] = useState({ value: '', error: '' });
  const [LoanDes, setLoanDes] = useState({ value: '', error: '' });

  const onSubmit = () => {
    const nameError = nameValidator(Loanname.value);
    const desError = nameValidator(LoanDes.value);

  
    if (nameError || desError ) {
      setLoanname({ ...Loanname, error: 'Loan name'+nameError });
      setLoanDes({ ...LoanDes, error: 'Description'+desError });
    
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'LoanList' }],
    })
  }



  useEffect(() => {

   
   
    if(LoanData.name != null && LoanData.name != '')
    {
      setLoanname({ ...Loanname, value: LoanData.name   });
      setLoanDes({ ...LoanDes, value: LoanData.description  });

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
        label="Loan Name"
        returnKeyType="next"
        value={Loanname.value}
        onChangeText={(text) => setLoanname({ value: text, error: '' })}
        error={!!Loanname.error}
        errorText={Loanname.error}
      />
      
           
   
      <TextArea
         label="Description"
         returnKeyType="next"
         value={LoanDes.value}
         onChangeText={(text) => setLoanDes({ value: text, error: '' })}
         error={!!LoanDes.error}
         errorText={LoanDes.error}
      />

</HeaderView>

<FooterView>


       { LoanData.name != null && LoanData.name != '' ?
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

export default LoanEdit;