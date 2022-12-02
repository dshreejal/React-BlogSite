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
    return (
        <BlogContext.Provider value={{ fetchAllBlog, fetchMyBlog, fetchBlog }} >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState