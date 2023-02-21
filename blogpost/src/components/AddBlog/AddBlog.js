import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppState';

const AddBlog = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [category,setCategory] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);
  const blogs = useContext(AppContext);

  const AddBlog = ()=>{
    blogs.push({
        title:title,
        category:category,
        body:body,
    })
    console.log(blogs)
  }

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body || !category) return setError('All fields are required');

    console.log({ title, body });
    closeModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type='text'
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type='text'
          placeholder='Enter category'
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder='Enter body'
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type='submit' onClick={()=>AddBlog()}>Submit</button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddBlog;