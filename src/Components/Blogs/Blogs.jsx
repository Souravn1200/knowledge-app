import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3>I contain {blogs.length} blogs</h3>
            {
                blogs.map(blog => 
                <Blog key={blog.id}
                blog={blog}
                handleAddBookmark={handleAddBookmark}
                handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark : PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
}
export default Blogs;