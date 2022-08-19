import React from 'react';

import { Container, Content } from './styles';
import { useTodos } from '../../provider/Provider'

import UserHub from '../../components/UserHub'
import { useParams, useSearchParams } from 'react-router-dom';

const Home: React.FC = () => {
  let todos = useTodos()

  let [params] = useSearchParams()
  let userId = params.get("user");

  return (
    <Container>
      <h1>TO-DO</h1>
      <Content>
        <div>
          {todos.users.map((user, index) => {
            return (
              <UserHub name={user.name} key={index} index={user.id} /> 
            )            
          })}
        </div>
      </Content>
    </Container>
  );
}

export default Home;