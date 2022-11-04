import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import registerAnimation from '../../assets/animations/register.json'

import { SignInForm } from '../../components/Forms/SignInForm';
import { Lottie } from '../../components/Animations/Lottie';

import { Container, Content, SubTitle } from './styles';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Lottie source={ registerAnimation } />
          <SubTitle>Se organize com Tarefas</SubTitle>
          <SignInForm />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
