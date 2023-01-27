import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [image, setImage] = useState('');
  const [categoria, setCategoria] = useState('');

  const contextValue = {
    nome, 
    setNome,
    valor, 
    setValor,
    image, 
    setImage,
    categoria, 
    setCategoria
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;