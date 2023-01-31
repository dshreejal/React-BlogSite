import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid';
import { BsFillPersonFill } from "react-icons/bs"
const Blog = ({ blog }) => {
    const navigate = useNavigate();
    const handleReadMe = () => {
        const value = v4()
        sessionStorage.setItem('blog-id', blog._id)
        navigate(`/readmore/${value}`)
    }
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '.....'
        }
        else {
            return str;
        }
    }
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white max-w-sm max-h-[500px]">
                <div className='flex items-center justify-center'>
                    <img className="w-40 mt-5 h-40" src={`${import.meta.env.VITE_BACKEND_URL}/images/${blog.img}`} alt="" />
                </div>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{blog.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {truncateString(blog?.description, 30)}
                    </p>
                    <div className='flex justify-between'>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleReadMe} >Read More</button>
                        <div className='flex items-center justify-center gap-2 text-xs'>
                            <div>
                                <BsFillPersonFill />
                            </div>
                            <p>
                                {blog.user.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog