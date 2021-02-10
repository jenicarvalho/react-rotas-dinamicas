import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
 
const Home  = () => {
 
  return (
    <div>
      <Link to="/produto/tenis-puma">Meu puma</Link>
      <Link to="/produto/tenis-adidas">Meu adidas</Link>
      <Link to="/produto/tenis-converse">Meu converse</Link>
    </div>
  );
}

export default Home;