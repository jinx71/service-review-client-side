import React, { useEffect } from 'react';
import Signup from '../../Shared/Signup/Signup';

const SignupPage = () => {
    useEffect(() => {
        document.title = `Signup : ${document.title}`;
    });
    return (
        <div>
            <Signup></Signup>

        </div>
    );
};

export default SignupPage;