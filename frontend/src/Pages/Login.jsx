import appContext from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const { loginField, setLoginField } = useContext(appContext);
  const history = useNavigate();

  const handleChange = ({target}) => {
    if(target.name === "login-field") setLoginField(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/', {
      celphone: loginField
    }).then((resp) => {
      if (!resp.data.message) history('/user/register');
      else history('/home');
    }).catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="login-field"
        onChange={handleChange} 
      />
      <input type="submit"/>
    </form>
  );
}

export default Login;
