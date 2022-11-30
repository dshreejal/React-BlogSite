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
    return (
        <BlogContext.Provider value={{ fetchAllBlog }} >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState