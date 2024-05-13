import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Outlet/>  
    </ChakraProvider>
  );
}

export default App;
