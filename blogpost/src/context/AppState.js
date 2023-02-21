import { createContext, useReducer } from 'react';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_BLOG': {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    case 'ADD_BLOG': {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }
    default: {
      return state;
    }
  }
};

const initialState =  [
    {
      id: 1,
      title: 'How to Make Technology More Affordable',
      category:'technology',
      body: 'This is post one, do to it as you please',
    },
    {
      id: 2,
      title: 'Everything You Need to Know About Technology Costs in 2023',
      category:'Art',
      body: 'This is post two, do to it as you please',
    },
    {
      id: 3,
      title: 'The X Best Alternatives to Technology',
      category:'technology',
      body: 'This is post three, do to it as you please',
    },
    {
      id: 4,
      title: 'Does Technology Really Live up to the Hype?',
      category:'food',
      body: 'This is post four, do to it as you please',
    },
  ];

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deleteBlog = (id) => {
    dispatch({
      type: 'DELETE_BLOG',
      payload: id,
    });
  };

  const addBlog = (post) => {
    dispatch({
      type: 'ADD_BLOG',
      payload: post,
    });
  };

  return (
    <AppContext.Provider
      value={{
        posts: state.posts,     
        deleteBlog,
        addBlog,        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};