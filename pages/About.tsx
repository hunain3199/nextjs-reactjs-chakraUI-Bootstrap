import React from 'react'
import { Container } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react';
import { useRouter } from 'next/router'

import { Box } from '@chakra-ui/react'
const name:string = "Muhammad Hunain";
const courseName:string="Web3 $ MetaVerse Cour$e";
const age:number = 21;
export default function About() {
  const router = useRouter()
  return (
    <Container maxW='2x2' bg='blue.400' centerContent>
  <Box padding='4' bg='blue.200' color='black' maxW='md'>
  <h1>My name is {name}. Currently i am studying {courseName}, I am {age} years old .</h1>
  </Box>
  <Button colorScheme='blue' variant='solid' onClick={() => router.push('/')}>Go Back To Home Page</Button>

</Container>
  
  )
}
