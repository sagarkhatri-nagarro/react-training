import { useContext, useState } from 'react';
import AddBlog from '../AddBlog/AddBlog';
import logo from "../../logo.png";
import { AppContext } from '../../context/AppState';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const blogs = useContext(AppContext);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (<>
    <header>
      <img className="" src={logo} width="200" height="80" />
      <button onClick={() => setOpenModal(!openModal)}>Create New Blog</button>
      {openModal && <AddBlog closeModal={closeModal} />}
    </header>
    <main>
        <center><h1> New Blogs: <b>{blogs.length}</b></h1></center>
    </main>
    </>
  );
};

export default Header;