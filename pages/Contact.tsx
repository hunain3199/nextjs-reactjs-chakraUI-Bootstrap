import React from 'react'
import { Button} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import {FaFacebook,FaTwitter} from 'react-icons/fa';
import { useRouter } from 'next/router'

export default function Contact() {
    const router = useRouter()
  return (
    // <div>HelloWorld</div>
    <HStack>
     <ul> 
     <li>
    <Link href={'https://www.facebook.com/hunain.irfan.12'}>
    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
  </Button>
  </Link></li> 
    
    <li><Link href={'https://twitter.com/Muhamma76629853'}><Button colorScheme='twitter' leftIcon={<FaTwitter />}>
      Twitter
    </Button>
    </Link></li>
    <li>
    <Button colorScheme='blue' variant='outline' onClick={() => router.push('/')}>Go Back To Home Page</Button>
    </li>
    </ul>  
    
  </HStack>
  )
}
