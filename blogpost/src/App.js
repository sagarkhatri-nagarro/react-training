import React from 'react';
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Header from './components/Header/Header';
const blogs = [];
const AppContext = React.createContext({ blogs });

function App() {
  return (
    <div>
      <Header />
      <main>
        <BlogList />
	</main>
    </div>
  );
}

export default App;