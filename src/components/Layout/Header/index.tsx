import React from 'react'

import { LogoutButton } from '../../Controllers/LogoutButton';
import { Container, Greating, Title, SubTitle} from './styles';

export function Header() {
  function handleSignOut(){}

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
