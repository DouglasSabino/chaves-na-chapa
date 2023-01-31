import appContext from '../context/appContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-cnc.png';
import Axios from 'axios';

function UserRegister() {
 const { userName, setUserName, loginField } = useContext(appContext);
 const history = useNavigate();

 const handleChange = ({target}) => {
    if(target.name === "user-name") setUserName(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://192.168.1.106:3001/user/register', {
      celphone: loginField,
      name: userName
    }).then((resp) => {
      console.log(resp);
      toast.success(resp.data.message)
      history("/home")
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
          placeholder='Por Favor, digite seu nome'
          className='border border-black rounded-2xl m-5 mt-32 text-center shadow-md shadow-black'
          type="text" 
          name="user-name"
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

export default UserRegister;
