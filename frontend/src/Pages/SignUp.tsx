import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
const SignUp = () => {
    const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onInputFirstNameChange = (event : any) =>{
    console.log(event.target.value);
    setFirstName(event.target.value);
  }
  const onInputLastNameChange = (event : any) =>{
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3050/name",{
      firstName, lastName
    });
    console.log("RESPONSE",response.data);
  }
    return(
        
        <Box maxW="800px" m={10} display='flex' gap={4}>
      
          <Input placeholder='First Name' size='sm' onChange={onInputFirstNameChange} />
          <Input placeholder='Last Name' size='sm' onChange={onInputLastNameChange} />
          <Button colorScheme='green' onClick={handleClick} size='sm' px={6}>Add Name</Button>
     
      </Box>


    );
}
export default SignUp;