import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('auth-token');
        navigate("/");
    }
    return (
        <div className='bg-[#399388] flex items-center justify-between px-4 md:px-12 h-[50px]'>
            <div>
                <NavLink to='/'>
                    <div className='font-bold text-3xl'>Blog Site</div>
                </NavLink>
            </div>
            <div>
                {localStorage.getItem('auth-token') ?
                    <NavLink to='/myblogs' className="px-2">
                        <div className='font-medium text-lg'>My Blogs</div>
                    </NavLink>
                    : <div></div>}
            </div>
            <div>
                {localStorage.getItem('auth-token') ?
                    <button onClick={handleLogOut} className='flex items-center justify-center gap-1 px-1 font-medium text-lg'>
                        <div>Sign Out</div>
                        <VscSignOut size={20} />
                    </button>
                    :
                    <NavLink to='/login' className='flex items-center justify-center gap-1 px-1 font-medium text-lg'>
                        <div>Log In</div>
                        <VscSignIn size={20} />
                    </NavLink>}
            </div>
        </div>
    )
}

export default Navbar