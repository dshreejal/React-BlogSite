import React, { useContext, useState } from 'react'
import UserContext from '../context/users/UserContext'
import { useMutation } from "@tanstack/react-query"
import { NavLink, useNavigate } from 'react-router-dom'
const Login = () => {
    const context = useContext(UserContext);
    const { Login } = context;
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { mutate, isError, isLoading } = useMutation(Login, {
        onSuccess: (successData) => {
            localStorage.setItem('auth-token', successData.authToken)
            navigate('/')
        }
    })
    const handleLogin = () => {
        mutate({ email: email, password: password })
    }

    return (
        <>
            {isLoading && (<div>Loading</div>)}
            {isError && (<div className='flex items-center justify-center  w-full h-10 bg-red-600'>Error Logging In. Please try again</div>)}
            <div className='flex  w-full flex-col h-[80vh]'>
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Log in to your account
                            </h2>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6"  >
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div className='py-2'>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <label className="ml-2 block text-sm text-gray-900">
                                        Dont have an account? <NavLink to='/signup' className='text-indigo-900 underline'>Sign Up</NavLink>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button onClick={handleLogin} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login