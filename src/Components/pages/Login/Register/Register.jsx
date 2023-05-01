import React, { useContext, useState } from 'react';
import fblogo from '../../../../assets/Images/icons/fb.png';
import googleLogo from '../../../../assets/Images/icons/google.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const displayName = firstName + ' ' + lastName;

        const regex = /^(?=.*[A-Z]).+$/;

        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        } else if (!regex.test(password)) {
            setError("Password should be at least one capital later")
            return;
        } else if (password.length < 6) {
            setError("Password should be 6 character longer")
            return;
        } else {
            createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.displayName = displayName;
                setUser(user)
              })
              .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                  setError("This account already exists. Please login")
                }
                console.log(errorMessage)
              });
        }
    }
    return (
        <div className='my-5 mx-auto p-10 w-5/12 '>
            <form onSubmit={handleSubmit} className='p-10 bg-white rounded-md border-2'>
                <p className='text-xl font-bold text-black mb-7'>Register</p>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">First Name</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="text" name="firstName" required placeholder='First Name' />
                </div>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Last Name</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="text" name="lastName" required placeholder='Last Name' />
                </div>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Username or Email</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Username or Email' />
                </div>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
                </div>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Confirm Password</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="confirmPassword" required placeholder='password' />
                </div>
                <p className='text-red-700 mt-3'>{error}</p>
                <button className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Create an account</button>
                <p className='text-center'>Already have an account? <Link to='/login'><span className='text-btn-color underline'>Login</span></Link></p>
            </form>
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

export default Register;