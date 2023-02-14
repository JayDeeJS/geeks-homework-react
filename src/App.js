import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import "./index.css";

function App() {
  const links = [
    {link: '/home', title: 'Главная страница'},
    {link: '/about', title: 'О нас'},
  ]

  return (
    <div className="App">
      <Header links={links}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
