import React from 'react';

function Header() {
  return (
    <header>
      <h1 >Noname</h1>

      <div className="logo">
        <img src='./public/casa.png' alt="Logo" />

      </div>
      <div className='options'>
        <a href="">Projects</a>
        <a href="">On sale</a>
        <a href="">For rent</a>
        <a href="">Clients</a>
      </div>

    </header>
  );
}

export default Header; 