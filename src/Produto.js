import React from 'react'
import { useLocation, useParams, Route, Routes, NavLink } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {

    const parmas = useParams();
    const Location = useLocation();

    console.log(Location);

  return (
    <div>
        <h1>Produto : {parmas.id}</h1>
        <nav>
          <NavLink to="">Descriçao</NavLink>
          <NavLink to="avaliacao">Avaliacao</NavLink>
          <NavLink to="customizado">Customizado</NavLink>


        </nav>

        <Routes>
          <Route path='/' element={<ProdutoDescricao/>}/>
          <Route path='avaliacao' element={<ProdutoAvaliacao/>}/>
          <Route path='customizado' element={<ProdutoCustomizado/>}/>
        </Routes>
    </div>
  )
}

export default Produto;