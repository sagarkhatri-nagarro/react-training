import { useContext } from 'react';
import { AppContext } from '../../context/AppState';

const BlogItem = ({ blog: { title, id,category, body } }) => {
    const { deleteBlog } = useContext(AppContext);
    return (
      <li>
        <span style={{textDecoration:'underline',color:'blue', float:'right'}}>{category}</span>
        <h2>{title}</h2>
        
        <p>{body}</p>
        <div>
          <i className='fas fa-edit'></i>
          <i className='fas fa-trash'  onClick={() => deleteBlog(id)}></i>
        </div>
      </li>
    );
  };
  
  export default BlogItem;