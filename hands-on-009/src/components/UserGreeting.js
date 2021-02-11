import React from 'react';
import LogoutButton from './LogoutButton';

function UserGreeting(props) {
    return (
        <div>
            <h2>Welcome Back</h2>
            <LogoutButton onClick={props.onClick} />
        </div>
    );
}

export default UserGreeting;