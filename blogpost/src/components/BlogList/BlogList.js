import { useContext } from 'react';
import { AppContext } from '../../context/AppState';
import BlogItem from '../BlogItem/BlogItem';

const BlogList = () => {
  const blogs = useContext(AppContext);
  
  return (
    <ul>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  );
};

export default BlogList;