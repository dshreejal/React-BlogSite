import React, { useContext, useState } from 'react'
import UserContext from '../context/users/UserContext'
import { useMutation } from "@tanstack/react-query"
import { NavLink, useNavigate } from 'react-router-dom'
const SignUp = () => {
    const context = useContext(UserContext);
    const { Register } = context;
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { mutate, isError, isLoading, isSuccess } = useMutation(Register)
    const handleRegister = () => {
        mutate({ fname: fname, lname: lname, email: email, password: password })
        setFname("")
        setLname("")
        setEmail("")
        setPassword("")
    }
    return (
        <>
            {isLoading && (<div>Loading</div>)}
            {isError && (<div className='flex items-center justify-center  w-full h-10 bg-red-600'>Error Creating. Please try again</div>)}
            {isSuccess && (<div className='flex items-center justify-center  w-full h-10 bg-green-600'>Account created successfully. <NavLink to='/login' className='text-indigo-900 underline px-2'>  Log In</NavLink> to continue </div>)}
            <div className='flex  w-full flex-col h-[80vh]'>
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Create a new account
                            </h2>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6"  >
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div className='py-2'>
                                    <label htmlFor="fname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        id="fname"
                                        name="fname"
                                        type="text"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="First Name"
                                        value={fname} onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="lname" className="sr-only">
                                        Last Name
                                    </label>
                                    <input
                                        id="lname"
                                        name="lname"
                                        type="lname"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Last Name"
                                        value={lname} onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
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
                                <div className='py-2'>
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
                                        Already have an account? <NavLink to='/login' className='text-indigo-900 underline'>Log In</NavLink>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button onClick={handleRegister} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp