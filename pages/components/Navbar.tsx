"use client";
import Link from 'next/link';
import React from 'react'
import { Button} from '@chakra-ui/react';
import { Router, useRouter } from "next/router";
type navProps = {
    title : string
    aboutText:string
    contact:string
}
export default function Navbar(props:navProps) {
  const router = useRouter()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
    <a className="navbar-brand"  href="https://www.panaverse.co/"><Button colorScheme='blue' >{props.title}</Button></a>
    <Button colorScheme='blue'  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
    Menu<span className="navbar-toggler-icon" ></span>
    

    
    </Button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><Button variant='ghost' colorScheme='blue'>Home</Button></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About"><Button variant='ghost' colorScheme='blue'>{props.aboutText}</Button></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact"><Button variant='ghost' colorScheme='blue'>{props.contact}</Button></a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Button variant='ghost' colorScheme='blue' >Search</Button>
      </form>
    
    </div>
  </div>
</nav>
  )
}

