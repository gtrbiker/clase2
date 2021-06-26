import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

export const App = () => {
  const greating= "Bienvenidos a la tienda de Alma Mora"
  return (
    <div>
      <NavBar />
      <ItemListContainer greating={ greating } />
    </div>
  )
}
