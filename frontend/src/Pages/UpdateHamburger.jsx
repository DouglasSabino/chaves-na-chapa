import { useContext } from 'react';
import appContext from '../context/appContext';
import Axios from 'axios';

function UpdateHamburger() {
  const { 
    nome, 
    setNome,
    valor, 
    setValor,
    image, 
    setImage,
    categoria, 
    setCategoria 
  } = useContext(appContext);

  const handleChange = ({target}) => {
      if(target.name === "nome") setNome(target.value);
      if(target.name === "valor") setValor(target.value);
      if(target.name === "image") setImage(target.files[0]);
      if(target.name === "categoria") setCategoria(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    //  const newFood = {
    //    nome,
    //    valor,
    //    image: formData,
    //    categoria
    //   }

    const settings = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

    Axios.post('http://localhost:3001/foods', formData, settings)
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
            type="number" 
            name="valor" 
            onChange={handleChange}
          /> <br />
          <input
            placeholder='categoria' 
            type="text" 
            name="categoria" 
            onChange={handleChange}
          /> <br />
          <input 
            type="file" 
            name="image" 
            onChange={handleChange}
          /> <br />
          <input type="submit" value="Enviar" />
        </form>
    </div>
  );
}


export default UpdateHamburger;
