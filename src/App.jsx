import { useState } from 'react'
import Navbar from './components/Navbar';
import { useUser } from "@clerk/clerk-react";
import './App.css'


import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Maincontent from './components/Maincontent'
import Main from './components/Main';
import Anicursor from './components/Anicursor';
import Form from './components/Form';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Anicursor/>
      {/* <Maincontent /> */}

      {/* <div className='p-4'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn  >
          <UserButton />
        </SignedIn>
      </div> */}
      {/* <Navbar />
       <Main /> */}
      <Form/>
      






    </>
  )
}

export default App
