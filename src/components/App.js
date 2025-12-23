
import React from "react";
import './../styles/App.css';
import UserDetails from "./UserDetails";
import UserList from "./UsersList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />}/>
      <Route path="/users/:id" element={<UserDetails />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
