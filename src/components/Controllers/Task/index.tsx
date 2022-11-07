import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  TaskStyleProps
} from './styles';


export type TaskProps = TaskStyleProps & {
  id: string;
  task: string;
  equipment: string;
  description: string;
  
}

type Props = {
  data: TaskProps;
};

export function Task({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.task}</Title>
          <MaterialIcons
            name={data.status === "open" ? "hourglass-empty" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.ATTENTION_LIGHT9 : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.TEXT} />
            <Label>
              {data.description}
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.TEXT} />
            <Label>
              402345
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}