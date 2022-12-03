import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid';
const PersonalBlog = ({ blog }) => {
    const navigate = useNavigate();
    const handleReadMe = () => {
        const value = v4()
        sessionStorage.setItem('blog-id', blog._id)
        navigate(`/readmore/${value}`)
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
                        {blog.description}
                    </p>
                    <div className='flex items-center justify-between'>
                        <button onClick={handleReadMe} type="button" className=" inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                        <div className='flex gap-5'>
                            <FiEdit size={20} className="hover:cursor-pointer hover:scale-110" />
                            <RiDeleteBin5Line size={20} className="hover:cursor-pointer hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalBlog