import React from 'react';
import Login from '../Login/Login';
import Signup from './Signup/Signup';

const LoginSignup = () => {
    return (
        <div className='container mx-auto w-3/4'>
            <div className="mt-20">
                <div className="divider text-5xl">*****</div>
                <div className='text-center text-5xl uppercase '>Join Now</div>
                <p className='text-center p-5 text-lg w-1/2 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio dolorem obcaecati perferendis, illo consequuntur omnis! Accusantium ipsam adipisci ipsum sapiente consectetur vitae qui.</p>
                <div className="divider text-5xl">*****</div>
            </div>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow  card border rounded-box place-items-center"><Login></Login></div>
                <div class="divider divider-horizontal">OR</div>
                <div class="grid flex-grow  card border rounded-box place-items-center"><Signup></Signup></div>
            </div>
        </div>
    );
};

export default LoginSignup;