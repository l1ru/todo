import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

const User: React.FC<{
  name: String;
  index: Number;
}> = ({name, index}) => {
  let navigate = useNavigate()
  let params = {
    userId: index
  }

  let handleClick = useCallback(() => {
    navigate({
      pathname: "/",
      search: `?user=${index}`
    })
  }, [index])

  return (
    <Container onClick={handleClick}  >
      {name}
    </Container>
  );
}

export default User;