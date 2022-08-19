import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'

import GlobalStyles from './styles/GlobalStyles'

import { ContextProvider } from './provider/Provider'

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path=':userId' />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
