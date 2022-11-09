/*
 This is login page
*/

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Login = () => {
    const { user, signin, handleGoogleSignIn } = useContext(AuthContext);
    console.log(user?.displayName)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            });
    }


    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-gray-800">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                    <span className='label-text-alt'> <Link to="/signup" className='link link-hover'>New User? Please signup</Link></span>
                                </label>
                            </div>
                            <div className="label">
                                <p className='text-red-500 label-text-alt'>{error}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Login</button>

                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login With Google</button>
                        {/* <button className="btn btn-primary" onClick={handleGithubSignIn}>Login With Github</button> */}
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Login;