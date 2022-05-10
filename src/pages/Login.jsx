import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    return (
        <div>
            <div className='w-full h-screen'>
                <img className='absolute hidden object-cover w-full h-full sm:block' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
                <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
                <div className='fixed z-50 w-full px-4 py-24'>
                    <div className='max-w-[450px] h-[470px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-xl font-bold'>Sign In</h1>

                            <form className='flex flex-col w-full py-4'>
                                <input className='p-3 my-2 bg-gray-700 rouded' type="email" autoComplete='username' placeholder='Email' />
                                <input className='p-3 my-2 bg-gray-700 rouded' autoComplete='current-password' type="password" placeholder='Password' />
                                <button className='py-3 my-6 font-bold bg-red-600 rounded'>
                                    Sign In
                                </button>
                                <div className='flex items-center justify-between text-sm text-gray-600'>
                                    <p><input type="checkbox" /> Remember me</p>
                                    <p> Need help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-center text-gray-600'>
                                        New to Netflix?
                                    </span>{' '}
                                    <Link to='/signup'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login