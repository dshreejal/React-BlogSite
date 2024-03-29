import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid';
import BlogContext from '../context/blogs/BlogContext';
import { useMutation } from "@tanstack/react-query"
import { useContext } from 'react';
const PersonalBlog = ({ blog }) => {
    const context = useContext(BlogContext);
    const { deleteBlog } = context;
    const navigate = useNavigate();

    const deleteBlogMutation = useMutation(deleteBlog, {
    })

    const handleReadMe = () => {
        const value = v4()
        sessionStorage.setItem('blog-id', blog._id)
        navigate(`/readmore/${value}`)
    }

    const handleDelete = () => {
        deleteBlogMutation.mutate(blog._id)
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
                    <img className="w-40 mt-5 h-40" src={blog?.img} alt="" />
                </div>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{blog.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {truncateString(blog?.description, 30)}
                    </p>
                    <div className='flex items-center justify-between'>
                        <button onClick={handleReadMe} type="button" className=" inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                        <div className='flex gap-5'>
                            <button><FiEdit size={20} className="hover:cursor-pointer hover:scale-110" /></button>
                            <button onClick={handleDelete}><RiDeleteBin5Line size={20} className="hover:cursor-pointer hover:scale-110" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalBlog