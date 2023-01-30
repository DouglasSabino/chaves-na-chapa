import { useContext } from 'react';
import appContext from '../context/appContext';
import Axios from 'axios';

function UpdateHamburger() {
  const { 
    nome, 
    setNome,
    valor, 
    setValor,
    imagem, 
    setImagem,
    categoria, 
    setCategoria,
    ingredientes, 
    setIngredientes
  } = useContext(appContext);

  const handleChange = ({target}) => {
      if(target.name === "nome") setNome(target.value);
      if(target.name === "valor") setValor(target.value);
      if(target.name === "imagem") setImagem(target.files[0]);
      if(target.name === "categoria") setCategoria(target.value);
      if(target.name === "ingredientes") setIngredientes(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imagem', imagem);
    formData.append('nome', nome);
    formData.append('valor', valor);
    formData.append('categoria', categoria);
    formData.append('ingredientes', ingredientes);

    Axios.post('http://localhost:3001/foods', formData)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
  }

  return (
    <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
          <h1>Cadastrar Novo Lanche</h1>
          <input
            placeholder='Nome' 
            type="text" 
            name="nome" 
            onChange={handleChange}
          /> <br />
          <input 
            placeholder='valor'
            type="text" 
            name="valor" 
            onChange={handleChange}
          /> <br />
          <select name="categoria" onChange={handleChange}>
            <option value="default">Selecione uma Categoria</option>
            <option value="hamburguer Artesanal">hamburguer Artesanal</option>
            <option value="hamburguer Tradicional">hamburguer Tradicional</option>
            <option value="lanche">lanche</option>
            <option value="sobremesa">sobremesa</option>
            <option value="açai">açai</option> 
          </select>
          <br />
          <input 
            type="file" 
            name="imagem" 
            onChange={handleChange}
          /> <br />
          <textarea
            placeholder='Por favor digite os ingredientes separados por virgula sem espaços' 
            rows="4" 
            cols="30" 
            onChange={handleChange} 
            name='ingredientes'>
          </textarea> <br />
          <input type="submit" value="Enviar" />
        </form>
    </div>
  );
}


export default UpdateHamburger;
