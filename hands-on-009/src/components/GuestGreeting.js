import React from 'react';
import LoginButton from './LoginButton';

function GuestGreeting(props) {
    return (
        <div>
            <h2>Please sign up.</h2>
            <LoginButton onClick={props.onClick} />
        </div>
    );
}

export default GuestGreeting;