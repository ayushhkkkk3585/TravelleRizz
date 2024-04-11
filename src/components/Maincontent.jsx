import React from 'react'
import { useUser } from "@clerk/clerk-react";
import Navbar from './Navbar';


export default function Home() {
    const { isSignedIn, user, isLoaded } = useUser();



    if (isSignedIn) {
        return <div>hii</div>;
    }

    return <div>not sign in </div>;
}

