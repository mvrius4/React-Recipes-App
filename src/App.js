import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category'
import SearchInput from './components/SearchInput';
import BackHome from './components/BackHome';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BackHome />
      <SearchInput />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
