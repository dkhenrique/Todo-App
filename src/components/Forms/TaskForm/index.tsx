import React, { useState } from 'react';
import { Button } from '../../Controllers/Button';

import  firestore  from '@react-native-firebase/firestore';

import { Input } from '../../Controllers/Input';
import { TextArea } from '../../Controllers/TextArea';
import { Form, Title } from './styles';
import { Alert } from 'react-native'

export function TaskForm() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('tasks')
    .add({
      task,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => Alert.alert("Tarefa", "Tarefa criada com sucesso!"))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }

  return (
    <Form>
      <Title>Nova Tarefa</Title>
      <Input placeholder="Nova tarefa" onChangeText={setTask} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />

      <Button title="Salvar" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}


