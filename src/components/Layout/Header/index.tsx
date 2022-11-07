import React from 'react'

import { LogoutButton } from '../../Controllers/LogoutButton';
import { Container, Greating, Title, SubTitle} from './styles';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function Header() {
  function handleSignOut(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  return (
    <Container>
      <Greating>
        <Title>TodoList</Title>
        <SubTitle>Sua lista de Tarefas </SubTitle>
      </Greating>
      
      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}
