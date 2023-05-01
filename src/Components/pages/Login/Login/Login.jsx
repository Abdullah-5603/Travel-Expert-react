import React from 'react';
import fblogo from '../../../../assets/Images/icons/fb.png';
import googleLogo from '../../../../assets/Images/icons/google.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (

        <div className='mx-auto my-5 p-10 w-5/12 '>
            <div className='p-10 bg-white rounded-md border-2'>
            <p className='text-xl font-bold text-black mb-7'>Login</p>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Username or Email</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Username or Email' />
            </div>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
            </div>
            <div className='flex flex-row justify-between items-center my-5'>
                <div className='flex items-center'>
                    <input type="checkbox" class="h-5 w-5 text-black border border-black rounded-md" />
                    <span class="ml-2 text-black font-semibold">Remember me</span>
                </div>
                <p className='text-btn-color underline'>Forgot Password</p>
            </div>
            <button className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Login</button>
            <p className='text-center'>Don't have an account? <Link to='/login/register'><span className='text-btn-color underline'>Create Account</span></Link></p>
            </div>
            <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center hover:bg-gray-200 cursor-pointer'>
                <img className='h-8 w-8' src={fblogo} alt="" />
                <p className='font-semibold mx-auto'>Continue with Facebook</p>
            </div>
            <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center  hover:bg-gray-200 cursor-pointer'>
                <img className='h-8 w-8' src={googleLogo} alt="" />
                <p className='font-semibold mx-auto'>Continue with Facebook</p>
            </div>
        </div>
    );
};

export default Login;