import React, { useContext, useState } from 'react';
import BlogContext from '../context/blogs/BlogContext';
import { useMutation } from "@tanstack/react-query";

const AddBlog = (props) => {
    const context = useContext(BlogContext);
    const { addBlog } = context;
    const [blog, setBlog] = useState({ title: "", description: "" });
    const [selectedFile, setSelectedFile] = useState();

    const addBlogMutation = useMutation(addBlog, {
    })

    const onChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }
    const handleAddBlog = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', blog.title);
        formData.append('description', blog.description);
        formData.append('img', selectedFile);
        addBlogMutation.mutate(formData);
        setBlog({ title: "", description: "" })
        setSelectedFile(null);
        props.setOpenModal(false);
    }

    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                </div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-[#b2e0db] px-6 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className=" sm:flex sm:items-center flex flex-col gap-5  ">
                                    <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-2xl font-medium leading-6 " id="modal-title">Add a new Blog</h3>
                                    </div>
                                    <form className="space-y-6 sm:w-11/12" action="#">
                                        <div>
                                            <label htmlFor="title" className="block mb-2 text-base font-medium  ">Title</label>
                                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={onChange} value={blog.title} required minLength={3} />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block mb-2 text-base font-medium  ">Description</label>
                                            <textarea type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-64 p-2.5" required onChange={onChange} value={blog.description} minLength={5}>
                                            </textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-base font-medium ">Image</label>
                                            <input type="file" name="img" id="img" onChange={(e) => { setSelectedFile(e.target.files[0]) }} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="bg-[#b2e0db] py-6 px-6 sm:flex sm:flex-row-reverse md:flex-row-reverse  items-center justify-center gap-1">
                                <button onClick={handleAddBlog} type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent px-2 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Add Note</button>
                                <button onClick={() => { props.setOpenModal(false) }} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-base font-medium  shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddBlog