import React, { Context, createContext, useContext, useEffect } from "react";

import api from '../api'

type UserType = {
  id: Number;
  name: String;
  username: String,
  email: String,
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: String;
      lng: String;
    }
  }
  phone: String;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String;
  }
}

type TodoType = {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
}

interface ContextInterface {

  user: Number;
  setUser: (userId: Number) => void;

  isLogged: Boolean;
  setIsLogged: (isLogged: Boolean) => void;

  users: UserType[];
  setUsers: (users: UserType[]) => void;

  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  addTodo: (todo: TodoType) => void;
  handleUsers: () => void;
}

const TodoContext = createContext<ContextInterface | null>(null)

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = React.useState<Number>(-1)
  const [isLogged, setIsLogged] = React.useState<Boolean>(false)
  const [users, setUsers] = React.useState<UserType[]>([])
  const [todos, setTodos] = React.useState<TodoType[]>([])

  const addTodo = (todo: TodoType) => setTodos([...todos, todo]) 
  const handleUsers = () => {
    api.getUser().then(res => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <TodoContext.Provider value={{
      user,
      setUser,
      isLogged,
      setIsLogged,
      users,
      setUsers,
      todos,
      setTodos,
      addTodo,
      handleUsers
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => useContext<ContextInterface>(TodoContext as Context<ContextInterface>)
