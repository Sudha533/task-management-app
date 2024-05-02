import React from 'react';
import './App.css';
import { Box, ChakraProvider, Button } from '@chakra-ui/react';
import axios from 'axios';
function App() {
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3050/name",{
      name:"sudha"
    } );
    console.log("RESPONSE", response.data);
  }
  return (
    <ChakraProvider>
      <Box>Hello</Box>
      <Button colorScheme='blue' onClick={handleSubmit}>Test</Button>
    </ChakraProvider>
  );
}

export default App;
