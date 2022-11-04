import React from 'react';

import { Container } from './styles'
import { Header } from '../../components/Layout/Header';
import { Tasks } from '../../components/Lists/Tasks';
import { NewTask } from '../../components/Controllers/NewTask';

export function Home() {
  return (
    <Container>
      <Header />
      <Tasks />
      <NewTask />
    </Container>
  )
}