import React from 'react';
import { useTheme } from 'styled-components/native';

import { Filter } from '../Filter';
import { Container, Title, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
}

export function Filters({ onFilter }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Title>Filtre pelo status da tarefa</Title>

      <Options>
        <Filter
          title="Abertas"
          backgroundColor={theme.COLORS.ATTENTION_LIGHT9}
          onPress={() => onFilter('open')}
        />

        <Filter
          title="Encerradas"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() => onFilter('closed')}
        />
      </Options>
    </Container>
  );
}