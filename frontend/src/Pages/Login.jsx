import appContext from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo-cnc.png';
import Axios from 'axios';

function Login() {
  const { loginField, setLoginField } = useContext(appContext);
  const history = useNavigate();

  const handleChange = ({target}) => {
    if(target.name === "login-field") setLoginField(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://192.168.1.106:3001/', {
      celphone: loginField
    }).then((resp) => {
      if (!resp.data.message) history('/user/register');
      else history('/home');
      toast.success(`Olá ${resp.data.message.name}, estavamos com saudade 😊`);
      console.log(resp)
    }).catch((err) => toast.error(err.response.data.message));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full h-screen font-roboto flex flex-col bg-[#EFA73C]'>
        <img
          className='w-80 ml-auto mr-auto mt-20' 
          src={logo} 
          alt="logo chaves na chapa" 
        />
        <input
          placeholder='Digite seu numero de telefone (sem DDD)'
          className='border border-black rounded-2xl m-5 mt-32 text-center shadow-md shadow-black'
          type="number" 
          name="login-field"
          onChange={handleChange} 
        />
        <input
          className='bg-[#28282A] active:shadow-none w-20 text-white rounded-md shadow-md shadow-black ml-auto mr-auto mt-10' 
          type="submit"
          value="Entrar"
        />
      </div>
    </form>
  );
}

export default Login;
