import React from 'react';
import { useParams } from 'react-router-dom'

const Produto = () => {

  const params = useParams<any>()

  return (
    <p>Produto é: {params.slug}</p>
  );
}

export default Produto;