import Reacr, { useState, useEffect } from 'react';
import { FlatList } from 'react-native'; 

import { Filters } from '../../Controllers/Filters';
import { Task, TaskProps } from '../../Controllers/Task';
import { Container, Header, Title, Counter } from './styles'
import { Load } from '../../Animations/Load';

export function Tasks() {
  const [status, setStatus] = useState('open')
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState<TaskProps[]>([])


  return (
    <Container>
      <Filters onFilter={setStatus} />

      <Header>
        <Title>Minhas Tarefas </Title>
        <Counter> {tasks.length} </Counter>
      </Header>

    {
      isLoading ?
        <Load />
      : <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Task data={item} />}
        contentContainerStyle={{ paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        style={{ flex:1 }}
       />
    }
    </Container>
  );


}
