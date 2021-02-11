import React, { useState } from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    if (isLoggedIn)
        return <UserGreeting onClick={handleClick} />
    else
        return <GuestGreeting onClick={handleClick} />
}

export default Greeting;