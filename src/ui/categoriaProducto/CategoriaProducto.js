import React from 'react';
import './CategoriaProducto.css';


import Productos from './Productos';
import Categoria from '../../images/Categoria';

const CategoriaProducto = () => {
  
  return (
    <section className='categorias contenedor'>
      <h2 className='text-center'>Categoría de Productos</h2>
      <Productos product={Categoria} />
    </section>
  )
}

export default CategoriaProducto;