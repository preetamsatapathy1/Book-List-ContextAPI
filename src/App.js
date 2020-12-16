import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <BookList />
        <BookForm />
      </div>
    </Provider>
    
  );
}

export default App;
