import { Box, Heading, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (e:any) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const onEmailChange = (e:any) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const onUsernameChange = (e:any) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    }
    const onPasswordChange = (e:any) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const onSubmit = () => {
        axios.post("http://localhost:3050/auth/sign-up", {
            name,
            email,
            username, 
            password})
            .then((response)=>{
                console.log("RESPONSE:", response);
            });
    };
        
    
    return(
        
        <Box>
            <Heading as='h2' size='xl'  textAlign='center' >Create an account</Heading>
            <Box maxW='75%' display='flex' flexDirection='column' alignItems='center' m='0 auto' gap={3}>
                <Box display='flex' flexDirection='column' gap={2} w='100%' m='0 auto' >
                    <Text>Name: </Text>
                    <Input type='text' onChange = {onNameChange}/>
                </Box>
                <Box display='flex' flexDirection='column' gap={2} w='100%'>
                    <Text>Email: </Text>
                    <Input type='email' onChange={onEmailChange}/>
                </Box>
                <Box display='flex' flexDirection='column' gap={2} w='100%'>
                    <Text>Username: </Text>
                    <Input type='text' onChange={onUsernameChange}/>
                </Box>
                <Box display='flex' flexDirection='column' gap={2} w='100%'>
                    <Text>Password: </Text>
                    <Input type="password" onChange={onPasswordChange}/>
                </Box>
                <Button w='100%' onClick={onSubmit}>Submit</Button>
            </Box>
        </Box>


    );
}
export default SignUp;