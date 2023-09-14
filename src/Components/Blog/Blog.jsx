import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddBookmark}) => {
    
    const {title,cover,author_img,author, posted_date,reading_time, hashtags} = blog
    
    return (
        <div className='mt-10 mb-4'>
            <img src={cover} alt="" />

            <div className='flex justify-between'>

            <div className='flex mt-4 mb-5'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-5'>
                    {author} <br />
                    {posted_date}
                </div>
            </div>

            <div className='mt-4'>
                <span>{reading_time} min read</span> 
                <span className='ml-2'><button onClick={() => handleAddBookmark(blog)}><FaBookmark></FaBookmark></button></span>
            </div>
        </div>
           
            <h1 className='text-2xl mb-4'>{title}</h1>

            {
                hashtags.map((hash ,idx)=> <a key={idx}>#{hash}</a>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddBookmark : PropTypes.func.isRequired
}
export default Blog;