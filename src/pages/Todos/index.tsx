import React from 'react';

import { Container, Content } from './styles';
import { useTodos } from '../../provider/Provider'

import UserHub from '../../components/UserHub'
import { useParams } from 'react-router-dom';

const Todos: React.FC = () => {
  let todos = useTodos()

  let params = useParams()
  console.log(params)

  return (
    <Container>
      <h1>TO-DO</h1>
      <Content>
        <div>
          
        </div>
      </Content>
    </Container>
  );
}

export default Todos;