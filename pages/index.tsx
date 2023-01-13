"use client";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar'
import { Button} from '@chakra-ui/react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Navbar  title={'Panaverse'} aboutText={'About Us'} contact={'Contact'}/>
      )
}
