import React from 'react'

const Blog = ({ blog }) => {
    return (
        <>
            <div class="rounded-lg shadow-lg bg-white max-w-sm max-h-[500px]">
                <div className='flex items-center justify-center'>
                    <img class="" src={`${import.meta.env.VITE_BACKEND_URL}/images/${blog.img}`} alt="" />
                </div>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{blog.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {blog.description}
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read Mpre</button>
                </div>
            </div>
        </>
    )
}

export default Blog