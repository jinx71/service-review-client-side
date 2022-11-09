import React, { useEffect } from 'react';
import Login from '../../Shared/Login/Login';

const LoginPage = () => {
    useEffect(() => {
        document.title = `Login : ${document.title}`;
    });
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginPage;