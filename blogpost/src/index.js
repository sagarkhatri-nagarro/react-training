import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import rootReducer from './store/reducer';
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createRoot } from 'react-dom/client';
// const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(document.getElementById("root"));
root.render(
	// <Provider store={store}>
		<App />
	// </Provider>
);
