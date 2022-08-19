import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    color: var(--primary);
    position: relative;
    text-shadow: 0px 0px 15px rgba(0, 75, 168, 0.4);
    user-select: none;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 85%;
  background-color: var(--gray600);

  border-radius: 1rem;
  display: grid;
  place-items: center;
  > div {
    width: 90%;
    height: 90%;

    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    padding: 0 1rem;
    &::-webkit-scrollbar {
      width: 0.25rem;
      cursor: pointer;
      transition: 500ms;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      transition: 500ms;
      background: var(--gray400);
      &:hover {
        background: var(--secondary);
      }
    }
  }
`;
