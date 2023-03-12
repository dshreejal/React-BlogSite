import BlogContext from "./BlogContext";
import Axios from "axios"
const BlogState = (props) => {
    const host = import.meta.env.VITE_BACKEND_URL

    //Fetch all Blogs
    const fetchAllBlog = async () => {
        const response = await Axios.get(`${host}/api/blog/fetchblogs`);
        const products = response.data;
        return products;
    }
    const fetchMyBlog = async () => {
        const response = await Axios.get(`${host}/api/blog/fetchuserblogs`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
        });
        const products = response.data;
        return products;
    }
    const fetchBlog = async () => {
        const response = await Axios.get(`${host}/api/blog/${sessionStorage.getItem('blog-id')}`);
        const blog = response.data;
        return blog;
    }

    //Add a Blog
    const addBlog = async (formData) => {
        const response = await Axios.post(`${host}/api/blog/addblog`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': localStorage.getItem("auth-token"),
                'X-Requested-With': 'XMLHttpRequest',
                'X-Api-Key': import.meta.env.CLOUDINARY_API_KEY
            }
        });
        const data = await response.data;
        return data;
    }

    //Delete a blog
    const deleteBlog = async (id) => {
        const response = await Axios.delete(`${host}/api/blog/deleteblog/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
        })
        const data = await response.data;
        return data;
    }
    return (
        <BlogContext.Provider value={{ fetchAllBlog, fetchMyBlog, fetchBlog, addBlog, deleteBlog }} >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState