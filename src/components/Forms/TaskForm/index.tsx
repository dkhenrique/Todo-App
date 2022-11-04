import React, { useState } from 'react';
import { Button } from '../../Controllers/Button';

import { Input } from '../../Controllers/Input';
import { TextArea } from '../../Controllers/TextArea';
import { Form, Title } from './styles';


export function TaskForm() {
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);
  }

  return (
    <Form>
      <Title>Nova Tarefa</Title>
      <Input placeholder="Nova tarefa" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />

      <Button title="Salvar" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}