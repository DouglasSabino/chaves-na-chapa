import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  // LANCHES 
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  // USUARIOS
  const [loginField, setLoginField] = useState('');
  const [userName, setUserName] = useState('');

  const contextValue = {
    nome, 
    setNome,
    valor, 
    setValor,
    imagem, 
    setImagem,
    categoria, 
    setCategoria,
    loginField, 
    setLoginField,
    userName, 
    setUserName,
    ingredientes, 
    setIngredientes
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;