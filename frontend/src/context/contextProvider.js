import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  // LANCHES 
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [image, setImage] = useState('');
  const [categoria, setCategoria] = useState('');
  // USUARIOS
  const [loginField, setLoginField] = useState('');
  const [userName, setUserName] = useState('');

  const contextValue = {
    nome, 
    setNome,
    valor, 
    setValor,
    image, 
    setImage,
    categoria, 
    setCategoria,
    loginField, 
    setLoginField,
    userName, 
    setUserName
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;