import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import './App.css';

console.log("Inside App.js");
const App = () => (
  <Routes>
    <Route path="/*" element={<Editor />} />
  </Routes>
);

export default App;