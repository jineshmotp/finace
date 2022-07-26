import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FooterButton from '../../components/FooterButton';
import TextInput from '../../components/TextInput';

import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import { nameValidator } from '../../helpers/nameValidator';


import BackgroundForm from '../../components/BackgroundForm';

import HeaderView from '../../components/HeaderView';
import FooterView from '../../components/FooterView';

import ViewHalf from '../../components/ViewHalf';
import ViewBottom from '../../components/ViewBottom';


const EditProfile = ({ navigation }) => {

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <BackgroundForm>

      <HeaderView>
         
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

</HeaderView>

    <FooterView>

        <ViewBottom>

          <ViewHalf>
            <FooterButton
              mode="contained"
              onPress={onSignUpPressed}
              
            >
              Update
            </FooterButton>

          </ViewHalf>

          </ViewBottom>

      

      

      </FooterView>
    
    </BackgroundForm>
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

export default EditProfile;