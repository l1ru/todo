import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  padding-left: 1rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 15%;
    height: 100%;
    align-self: flex-end;
    background-color: var(--primary);
    border-radius: 0 0.5rem 0.5rem 0;
    transition: 400ms;
    opacity: 0;
  }

  @keyframes show-text {
    0% {
      opacity: 0;
      color: rgba(255, 255, 255, 0);
    }
    100% {
      color: rgba(255, 255, 255, 1);
    }
  }

  &:hover {
    &::after {
      content: 'Clique para ver as tarefas';
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      width: 30%;
      color: #fff;
      animation: show-text 1200ms;
      opacity: 1;
    }
  }
`;
