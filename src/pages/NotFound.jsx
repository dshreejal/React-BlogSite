import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    const returnHome = () => {
        navigate("/")
    }
    return (
        <main className="min-h-[90vh]  flex flex-col justify-center items-center bg-[#b2e0db]">
            <h1 className="text-9xl font-extrabold text-[#399388] tracking-widest">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5" onClick={returnHome}>
                <div
                    className="relative inline-block text-sm font-medium text-white group  focus:outline-none focus:ring"
                >
                    <span className="relative block px-8 py-3 bg-blue-600">
                        <router-link to="/">Go Home</router-link>
                    </span>
                </div>
            </button>
        </main>
    )
}

export default NotFound